import { Colors } from '@/constants/Colors';
import { Text, View } from 'react-native';

export default function About({ business }) {
  return (
    <View style={{ backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 22, fontFamily: 'outfit-bold' }}>About</Text>
      <Text style={{ color: Colors.GRAY, fontFamily: 'outfit-regular', lineHeight: 20 }}>
        {business?.about ? business.about : 'No description available.'}
      </Text>
    </View>
  );
}