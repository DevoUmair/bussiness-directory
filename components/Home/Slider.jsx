import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { db } from '../../config/FirebaseConfig';
import SliderLoader from '../common/SliderLoader';

const Slider = ({ reloadKey }) => {
  const [sliderList, setSliderList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSliderList();
  }, [reloadKey]);

  const getSliderList = async () => {
    setSliderList([])
    setLoading(true);
    try {
      const sliderCollection = collection(db, 'Slider');
      const q = query(sliderCollection);
      const querySnapshot = await getDocs(q);

      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setSliderList(data);
    } catch (error) {
      console.error('Error fetching slider data:', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const renderImageItem = ({ item }) => (
    <Image source={{ uri: item?.imageUrl }} style={styles.image} />
  );

  return (
    <View>
      <Text style={styles.title}>#Special For You</Text>
      <FlatList
        data={loading ? [1, 2, 3] : sliderList}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
        keyExtractor={(item, index) => item?.id || index.toString()}
        renderItem={loading ? () => <SliderLoader /> : renderImageItem}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
  },
});
