import { Colors } from '@/constants/Colors';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import BusinessListCardLoader from '../../components/common/BusinessListCardLoader';
import { db } from '../../config/FirebaseConfig';

export default function BussinesscategoryList() {
  const [bussinessList , setBussinessList] = useState([])
  const [loading , setLoading] = useState(true)
  const navigation = useNavigation()
  const {category} = useLocalSearchParams()

  useEffect(() => {
    navigation.setOptions({
      headerShown:true,
      headerTitle:category
    })
    getBusinessList()
  },[])

  const getBusinessList = async () => {
    setLoading(true)
    setBussinessList([])

    try {
      const collectionRef =collection(db , 'BussinessList')
      const q = query(collectionRef , where('category' , '==' , category));
      const querySnapshot = await getDocs(q)
      querySnapshot?.forEach((doc) => {
        setBussinessList((prev) => [...prev , {id:doc?.id , ...doc.data()}])
      })
    } catch (error) {
      console.log(error);
    }finally{
      setTimeout(() => {
        setLoading(false)
      },1000)
    }
    
  }

  const renderImageItem = ({item , index}) => (
    <BusinessListCard bussiness={item} key={index} />
  )

  
  return (
    <View>
        {loading ? (
          <FlatList
            data={[1,2,3,4,5,6,7,8,9,10]}
            style={{marginTop:10 , marginHorizontal:10}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => <BusinessListCardLoader />}
          />
        ) : bussinessList.length > 0 ? (
          <FlatList
            data={bussinessList}
            refreshing={loading}
            onRefresh={getBusinessList}
            style={{marginTop:10 , marginHorizontal:10}}
            keyExtractor={(item, index) => item?.id || index.toString()}
            renderItem={renderImageItem}
          />
        ) : (
          <Text style={{ textAlign:'center' , fontFamily:'outfit-bold' , color:Colors.GRAY , fontSize:20, marginTop:40}}>
            No Bussiness Found
          </Text>
        )}
      </View>
  )
}