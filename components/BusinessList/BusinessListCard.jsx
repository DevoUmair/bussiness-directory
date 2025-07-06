import { Colors } from '@/constants/Colors';
import { Image, Text, View } from 'react-native';

export default function BusinessListCard({bussiness}) {
    
  return (
    <View style={{padding:10 , borderRadius:10 , marginBottom:10 , backgroundColor:'#fff' , display:'flex' , flexDirection:'row' , gap:8 , alignItems:'center'}} >
      <Image source={{uri:bussiness?.imageUrl}} style={{width:120 , height:120 , borderRadius:10}} />
      <View style={{gap:5  , flex:1}} >
        <Text style={{fontFamily:'outfit-bold' , fontSize:20}} >{bussiness?.name}</Text>
        <Text style={{fontFamily:'outfit-regular' , color:Colors.GRAY , fontSize:15}} >{bussiness?.address}</Text>
        <View style={{display:'flex' , flexDirection:'row' , gap:5 }} >
            <Image style={{width:15 , height:15}}  source={require('../../assets/images/star.png')} />
            <Text>4.5</Text>
        </View>
      </View>  
    </View>
  )
}