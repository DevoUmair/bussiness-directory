import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';
import BusinessCardWithRatingLoader from '../../components/common/BusinessCardWithRatingLoader';
import BusinessListCard from '../../components/Explore/BusinessListCard';
import Category from '../../components/Home/Category';
import { db } from '../../config/FirebaseConfig';

const explore = () => {
  const [search , setSearch] = useState("")
  const [loading , setLoading] = useState(true)
  const [bussinessList , setBussinessList] = useState([])
  const handleSearch = (e) => {
    setSearch(e);
  }

  const getBussinessByCategory = async (cat) => {
    setBussinessList([]);
    setLoading(true);
    try {
      const collectionRef = collection(db, 'BussinessList');
      const q = query(collectionRef, where('category', '==', cat?.name));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setBussinessList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
     setTimeout(() => {
       setLoading(false);
     },500)
    }
  };

  const handleSearchSubmit = () => {
    console.log('Search submitted!');
    console.log("search : " , search);
  };

  const onCategorySelect = (cat) => {
    getBussinessByCategory(cat);
  }

  
  const renderImageItem = ({index, item }) => (
    <BusinessListCard key={index} business={item} />
  );

  return (
    <SafeAreaView  >
      <View >
        <Text style={{fontFamily:'outfit-bold' , paddingHorizontal:20 ,  fontSize:25}} >Explore More</Text>
        
        {/* Search Bar */}
        <View style={{display:'flex' , marginHorizontal:20 , flexDirection:'row' , gap:10, alignItems:'center' , backgroundColor:'#fff' , padding:10, marginTop:10 , borderRadius:8}}>
          <Ionicons name='search' size={24}color={Colors.PRIMARY} />
          <TextInput value={search} onSubmitEditing={handleSearchSubmit} onChangeText={(e) => handleSearch(e)} style={{color:'#000' , flex:1 , fontFamily:'outfit-regula' }} placeholder='Search...' placeholderTextColor='#888'/>
        </View>

        {/* Category */}
        <Category isExplore={true} reloadKey={0} onCategorySelect={onCategorySelect} />

        {/* Bussiness List */}
        <View style={{padding:20}} >
            <FlatList 
              data={loading ? [1,2,3,4,5,6,7,8] :bussinessList}
              keyExtractor={(item, index) => item?.id || index.toString()}
              renderItem={loading ? () => <BusinessCardWithRatingLoader key={index} /> : renderImageItem}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default explore