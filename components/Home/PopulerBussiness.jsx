import { Colors } from '@/constants/Colors';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../config/FirebaseConfig';
import PopularBussinessCardLoader from '../common/PopularBussinessCardLoader';
import PopularBussinessCard from './PopularBussinessCard';

export default function PopulerBussiness({reloadKey}) {
  const [bussinessList , setBussinessList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBussiessList()
  },[reloadKey])  

  const getBussiessList = async () => {
    setLoading(true)
    setBussinessList([])
    try {
      const bussinessCollection = collection(db, 'BussinessList');
      const q = query(bussinessCollection);
      const querySnapshot = await getDocs(q);

      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setBussinessList(data);
    } catch (error) {
      console.error('Error fetching slider data:', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }  

  const renderImageItem = ({ item , index }) => (
    <PopularBussinessCard bussiness={item} key={index} index={index} length={bussinessList?.length} />
  );


  return (
    <View>
        <View style={{paddingLeft:20 , paddingRight:20, paddingTop:20, marginBottom:5,  marginTop:10,display:'flex' , flexDirection:'row' , justifyContent:'space-between', alignItems:'center' }} >
                <Text style={{fontSize:20 , fontFamily:'outfit-bold'}} >Popupar Business</Text>
                <Text style={{fontSize:15 , fontFamily:'outfit-medium' , color:Colors.PRIMARY}} >View All</Text>
        </View>   
        <FlatList
            data={loading ? [1, 2, 3 , 4 , 5] : bussinessList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft:20 ,marginRight:20, marginTop:10}}
            keyExtractor={(item, index) => item?.id || index.toString()}
            renderItem={loading ? ({item , index}) => <PopularBussinessCardLoader index={index} length={5}  /> : renderImageItem}
        />
    </View>
  )
}