import { Colors } from '@/constants/Colors';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' }); // Change strategy as needed

  const handleOAuthSignIn = async () => {
    try {
      const {createdSessionId , signIn , signUp , setActive} = await startOAuthFlow();

      if(createdSessionId){
        setActive({session : createdSessionId})
      }else{
        
      }
    } catch (err) {
      console.error('OAuth sign-in error:', err);
    }
  }

  return (
    <View>
      <View
        style={{
            alignItems:'center',
            marginTop:100,
        }}
      >
        <Image 
            source={require('../assets/images/login.png')} 
            style={{
                width:220,
                height:400,
                borderRadius:20,
                borderWidth:2,
                borderColor:'#000'
            }}
        />
      </View>  
      <View style={styles.subContainer} >
        <Text style={{fontSize:30, fontFamily:'outfit-bold', textAlign:'center'}} >
            Your Ultimate
            <Text style={{color:Colors.PRIMARY}} > Community Bussiness Directory </Text>
            App
        </Text>
        <Text style={{fontSize:15,fontFamily:'outfit-medium', textAlign:'center' , color:Colors.GRAY , marginVertical:15}} >
            Find Your Facourite bussiness near you and post your own bussiness to your community
        </Text>
        <TouchableOpacity style={styles.btn} onPress={handleOAuthSignIn} >
            <Text style={{color:'#fff' , textAlign:'center' , fontFamily:'outfit-bold'}} >Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer:{  
        backgroundColor:'#fff',
        padding:20,
        marginTop:-20
    },
    btn:{
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        padding:16,
        marginTop:16
    }
})

export default LoginScreen