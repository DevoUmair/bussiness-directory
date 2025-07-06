import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../config/FirebaseConfig';
import EachCategoryLoader from '../common/EachCategoryLoader';
import EachCategory from './EachCategory';

const Category = ({reloadKey}) => {
  const [categoryList , setCategoryList] = useState([])
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    getCategory()
  },[reloadKey])

  const getCategory = async () => {
    setLoading(true)
    setCategoryList([])
    try {
      const catCollection = collection(db, 'Category');
      const q = query(catCollection);
      const querySnapshot = await getDocs(q);

      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setCategoryList(data);
    } catch (error) {
      console.error('Error fetching slider data:', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }  

 const handleCategory = (cat) => {
  
    router.push('/businessList/' + cat?.name)
  }

  const renderImageItem = ({ item }) => (
     <EachCategory category={item} key={item?.id} onCategoryPress={() => handleCategory(item)} />
  );

  return (
    <View>
      <View style={{paddingLeft:20 , paddingRight:20, paddingTop:20, marginBottom:5,  marginTop:10,display:'flex' , flexDirection:'row' , justifyContent:'space-between', alignItems:'center' }} >
        <Text style={{fontSize:20 , fontFamily:'outfit-bold'}} >Category</Text>
        <Text style={{fontSize:15 , fontFamily:'outfit-medium' , color:Colors.PRIMARY}} >View All</Text>
      </View>

      <FlatList
        data={loading ? [1, 2, 3 , 4 , 5, 6, 7, 8, ,9, 10] : categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft:20 , marginTop:10}}
        keyExtractor={(item, index) => item?.id || index.toString()}
        renderItem={loading ? () => <EachCategoryLoader /> : renderImageItem}
      />
    </View>
  )
}

export default Category