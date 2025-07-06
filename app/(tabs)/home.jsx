import { useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import Category from '../../components/Home/Category';
import Header from '../../components/Home/Header';
import PopulerBussiness from '../../components/Home/PopulerBussiness';
import Slider from '../../components/Home/Slider';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const onRefresh = async () => {
    setRefreshing(true);
    setReloadKey(prev => prev + 1);
    setRefreshing(false);
  };

  // Dummy data for FlatList (replace with your business list)
  const data = [{}]; // At least one item to render ListHeaderComponent

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={null} // No row items, just header
      ListHeaderComponent={
        <>
          <Header />
          <Slider reloadKey={reloadKey} />
          <Category reloadKey={reloadKey} />
          <PopulerBussiness reloadKey={reloadKey} />
          <View style={{height:20}} ></View>
        </>
      }
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default Home;