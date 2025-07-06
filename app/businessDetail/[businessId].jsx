import { Colors } from '@/constants/Colors';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import About from '../../components/BusinessDetail/About';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import Intro from '../../components/BusinessDetail/Intro';
import { db } from '../../config/FirebaseConfig';

export default function businessDetail() {
  const {businessId} = useLocalSearchParams()
  const [bussinessDetails , setBussinessDetail] = useState({})
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    getBusinessDetail()
  },[businessId])

  const getBusinessDetail = async () => {
    setLoading(true)
    setBussinessDetail({})
    console.log("called");
    const docRef = doc(db , 'BussinessList' , businessId)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        setBussinessDetail(docSnap.data())
        setLoading(false)
    }else{
        console.log("not found");
        setLoading(false)
    }
  }

  return (
    loading ? (
        <ActivityIndicator
        style={{ marginTop: '70%' }}
        size={'large'}
        color={Colors.PRIMARY}
        />
    ) : (
        <FlatList
        data={[]} // or your list data if you have any
        ListHeaderComponent={
            <>
            <Intro business={bussinessDetails} />
            <ActionButton business={bussinessDetails} />
            <About business={bussinessDetails} />
            </>
        }
        renderItem={null}
        />
    )
  );

}