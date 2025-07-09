import { Colors } from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';

export default function BusinessListCard({business}) {
  const [ratings , setRatings] = useState(0)  


  useEffect(() => {
  if (Array.isArray(business?.reviews) && business.reviews.length > 0) {
    const total = business.reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
    const avg = total / business.reviews.length;
    setRatings(avg);
    console.log('Average rating:', Math.round(avg));
  } else {
    setRatings(0);
    console.log('No reviews');
  }
}, [business?.reviews]);

  return (
    <View style={{marginBottom:10 , backgroundColor:'#fff' , borderRadius:10}} >
      <Image source={{uri:business?.imageUrl}} style={{width:'100%' , height:170  , borderTopLeftRadius:10 , borderTopRightRadius:10}} />
      <View style={{padding:15, display:'flex' , flexDirection:'row' , alignItems:'flex-start' , justifyContent:'space-between'}} >
            <View>
                <Text style={{fontSize:20 , fontFamily:'outfit-bold'}} >{business?.name}</Text>
                <Text style={{color:Colors.GRAY}}>{business?.address}</Text>
            </View>
            <Rating
                imageSize={15}
                startingValue={ratings}
                style={{alignItems:'flex-start'}}
            />
      </View>
    </View>
  ) 
}