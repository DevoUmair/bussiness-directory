import { Colors } from '@/constants/Colors';
import { Image, Text, View } from 'react-native';


export default function PopularBussinessCard({bussiness , index , length}) {
  return (
    <View style={{ marginRight: index !== length - 1 ? 12 : 0 , padding:10,backgroundColor:'#fff' , borderRadius:10}} >
       <Image 
            source={{uri:bussiness?.imageUrl}}
            style={{
                width:200,
                height:130,
                borderRadius:10,
            }}
        />
         <View style={{gap:5 , marginTop:7}} >
                <Text style={{fontFamily:'outfit-bold' ,fontSize:17}} >{bussiness?.name}</Text>
                <Text style={{fontFamily:'outfit-regular', color:Colors.GRAY, fontSize:13}} >{bussiness?.address}</Text>
                <View style={{display:'flex' , justifyContent:'space-between' , flexDirection:'row'}} >
                    <View style={{display:'flex' , flexDirection:'row' , gap:5 }} >
                        <Image style={{width:15 , height:15}}  source={require('../../assets/images/star.png')} />
                        <Text>4.5</Text>
                    </View>
                    <Text style={{fontFamily:'outfit-bold' , backgroundColor:Colors.PRIMARY , color:'#fff' , paddingHorizontal:7 , paddingVertical:4, fontSize:12 , borderRadius:10}} >{bussiness?.category}</Text>
                </View>
            </View>
      
    </View>
  )
}