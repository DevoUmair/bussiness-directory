import { FlatList, Image, Linking, Text, TouchableOpacity, View } from 'react-native';

export default function ActionButton({business}) {
  const actionButtons = [
    {
        id:1,
        name:'Call',
        icon : require('../../assets/images/call.png'),
        url : 'tel:' + business?.contact
    },
    {
        id:2,
        name:'Location',
        icon : require('../../assets/images/pin.png'),
        url:'https://www.google.com/maps/search/?api=1&query=' + business?.address
    },
    {
        id:3,
        name:'Web',
        icon : require('../../assets/images/web.png'),
        url : business?.website
    },
    {
        id:4,
        name:'Share',
        icon : require('../../assets/images/share.png'),
        url : business?.website
    },
  ]

  const onPressHanlde = (item) => {
    if(item?.name == 'Share'){
        return;
    }
    Linking.openURL(item.url)
  }
    
  return (
    <View style={{backgroundColor:'#fff' , padding:20}} >
       <FlatList 
            data={actionButtons}
            numColumns={4}
            columnWrapperStyle={{justifyContent:'space-between'}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item , index}) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => onPressHanlde(item)}
                >
                    <Image style={{width:50 , height:50}} source={item.icon} />
                    <Text style={{fontFamily:'outfit-medium' , textAlign:'center' , marginTop:3}} >{item?.name}</Text>
                </TouchableOpacity>
            )}  
       />
    </View>
  )
}