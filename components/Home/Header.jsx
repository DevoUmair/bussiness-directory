import { Colors } from '@/constants/Colors';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const Header = () => {
  const [search , setSearch] = useState("")
  const {user} = useUser();

  const handleSearch = (e) => {
    setSearch(e);
  }

  const handleSearchSubmit = () => {
  console.log('Search submitted!');
  console.log("search : " , search);
};

  return (
    <View
        style={{
            paddingTop:60,
            padding:20,
            backgroundColor:Colors.PRIMARY,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
        }}
    >
      {/* User */}
      <View style={{display:'flex' , flexDirection:'row' , alignItems:'center' , gap:10}} >
        <Image 
            source={{uri:user?.imageUrl}} 
            style={{
                width:45,
                height:45,
                borderRadius:99,
            }}
        />
        <View>
            <Text style={{color:'#fff'}} >Welocme</Text>
            <Text style={{fontSize:19, fontFamily:'outfit-medium' , color:'#fff'}} >{user?.fullName}</Text>
        </View>
      </View>

      {/* SearchBar */}
      <View
        style={{display:'flex' , flexDirection:'row' , gap:10, alignItems:'center' , backgroundColor:'#fff' , padding:10, marginVertical:10, marginTop:20 , borderRadius:8}}
      >
         <Ionicons name='search' size={24}color={Colors.PRIMARY} />
         <TextInput value={search} onSubmitEditing={handleSearchSubmit} onChangeText={(e) => handleSearch(e)} style={{color:'#000' , flex:1 , fontFamily:'outfit-regula' }} placeholder='Search...' placeholderTextColor='#888'/>
      </View>
    </View>
  )
}

export default Header