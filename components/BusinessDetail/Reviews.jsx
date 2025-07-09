import { Colors } from "@/constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Rating } from "react-native-ratings";
import Toast from "react-native-toast-message";
import { db } from "../../config/FirebaseConfig";

export default function Reviews({ business }) {
  const [rating, setRating] = useState(4);
  const [userInput , setUserInput] = useState("")
  const {user} = useUser()


  const onSubmit = async () => {
    try {
        console.log(business?.id);
        
        const docRef = doc(db, 'BussinessList', business.id);

        await updateDoc(docRef, {
        reviews: arrayUnion({
            rating: rating,
            comment: userInput,
            userName: user?.fullName || "Anonymous",
            userImg: user?.imageUrl || null,
        }),
        });

        Toast.show({
            type: 'success',
            text1: 'Review submitted!',
            text2: 'Thanks for your feedback 👏',
        });

        setUserInput("");
        setRating(4);
        
    } catch (error) {
        console.error("Review submission failed:", error);
        Toast.show({
        type: 'error',
        text1: 'Submission failed',
        text2: 'Please try again later.',
        });
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ flexGrow: 1, padding: 20 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true} // ✅ Ensures scroll to focused input
      keyboardOpeningTime={0}      // ✅ Helps with iOS timing issues
      extraScrollHeight={80}       // ✅ Pushes input above keyboard
      keyboardShouldPersistTaps="handled"
    >
      <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>Reviews</Text>

      <View>
        <Rating
            showRating={false}
            imageSize={20}
            onFinishRating={(rat) => setRating(rat)}
            style={{ paddingVertical: 10 }}
        />

        <TextInput
            placeholder="Write your comment"
            placeholderTextColor='#888'
            numberOfLines={4}
            value={userInput}
            multiline={true}
            onChangeText={(val) => setUserInput(val)}
            style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                borderColor: Colors.GRAY,
                textAlignVertical: "top",
                marginTop: 10,
            }}
        />

        <TouchableOpacity disabled={!userInput} onPress={onSubmit} style={{padding:10 , paddingVertical:15, justifyContent:'center' , backgroundColor: !userInput ? Colors.GRAY : Colors.PRIMARY, borderRadius:10 , marginTop:8}} >
                <Text style={{fontFamily:'outfit-bold' , color:'#fff' , textAlign:'center'}} >Submit</Text>
        </TouchableOpacity>

        <View>
            {
                business?.reviews?.map((item , index) => (
                    <View style={{display:'flex' , flexDirection:'row' , gap:5 , alignItems:'center' , marginTop:8 , borderWidth:1, borderColor:Colors.GRAY , padding:10 , borderRadius:10}} key={index} >
                        <Image source={{uri:item?.userImg}} style={{width:50 , height:50 , borderRadius:99}} />
                        <View style={{display:'flex' }} >
                            <View style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:10 }} >
                                <Text style={{fontSize:18 , fontFamily:'outfit-medium'}} >{item?.userName}</Text>
                                <Rating
                                    imageSize={15}
                                    ratingCount={item?.rating}
                                    style={{alignItems:'flex-start'}}
                                />
                            </View>
                            <Text>{item?.comment}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
