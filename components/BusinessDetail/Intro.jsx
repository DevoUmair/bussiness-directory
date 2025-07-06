import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Intro({business}) {
 const router = useRouter()
  
  return (
    <View>
       <View style={{position:'absolute' , zIndex:10 , display:'flex' , flexDirection:'row' , justifyContent:'space-between' , alignItems:'center' , width:'100%' , padding:20 , marginTop:40}} >
            <TouchableOpacity style={{width:43 , height:43 , display:'flex' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#fff' , borderRadius:99}} onPress={() => router.back()} >
                <Ionicons name="arrow-back-outline" size={28} color={Colors.PRIMARY} />
            </TouchableOpacity>
            <View style={{width:43 , height:43 , display:'flex' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#fff' , borderRadius:99}}>
                <Ionicons name="heart-outline" size={28} color={Colors.PRIMARY} />
            </View>
       </View>
       <Image
         source={{uri:business?.imageUrl}}
         style={{
            width:'100%',
            height:340
         }}
       />
       <View style={{padding:20 , marginTop:-20 , backgroundColor:'#fff' , borderTopLeftRadius:25 , borderTopRightRadius:25}} >
             <Text style={{fontSize:26 , fontFamily:'outfit-bold'}} >{business?.name}</Text>
             <Text style={{fontSize:18 , fontFamily:'outfit-regular'}} >{business?.address}</Text>
       </View>
    </View>
  )
}