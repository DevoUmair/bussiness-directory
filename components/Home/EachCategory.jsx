import { Colors } from '@/constants/Colors';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const EachCategory = ({category , onCategoryPress}) => {
 
  return (
    <TouchableOpacity onPress={onCategoryPress} style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , marginRight:15}} >
        <View style={{padding:15 , backgroundColor:Colors.ICON_BG , borderRadius:99 }} >
            <Image source={{uri:category?.icon}} style={{width:40 , height:40}} /> 
        </View>
        <Text style={{fontSize:12 , fontFamily:'outfit-medium' , textAlign:'center'}} >{category?.name}</Text>
    </TouchableOpacity>
  )
}

export default EachCategory