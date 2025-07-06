import { LinearGradient } from 'expo-linear-gradient';
import { View } from "react-native";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder-v2';

const PopularBussinessCardLoader = ({ index, length }) => {
  return (
    <View style={{ marginRight: index !== length - 1 ? 12 : 0 , padding:10,backgroundColor:'#fff' , borderRadius:10}} >
      <SkeletonPlaceholder
        backgroundColor="#e0e0e0"
        highlightColor="#f5f5f5"
        animationDuration={1500}
        borderRadius={10}
        LinearGradientComponent={LinearGradient}
      >
        <SkeletonPlaceholder.Item
          
          borderRadius={10}
          backgroundColor="#fff"
        >
          {/* Image */}
          <SkeletonPlaceholder.Item
            width={200}
            height={130}
            borderRadius={10}
          />

          {/* Text and Info Section */}
          <SkeletonPlaceholder.Item marginTop={7} gap={6}>
            {/* Title */}
            <SkeletonPlaceholder.Item width={140} height={15} borderRadius={5} />

            {/* Subtitle */}
            <SkeletonPlaceholder.Item width={100} height={12} borderRadius={5} />

            {/* Bottom row: star + category */}
            <SkeletonPlaceholder.Item flexDirection="row" justifyContent="space-between" marginTop={5}>
              {/* Star + rating */}
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" gap={5}>
                <SkeletonPlaceholder.Item width={15} height={15} borderRadius={99} />
                <SkeletonPlaceholder.Item width={20} height={10} borderRadius={3} />
              </SkeletonPlaceholder.Item>

              {/* Category badge */}
              <SkeletonPlaceholder.Item width={60} height={20} borderRadius={10} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
    
  );
};

export default PopularBussinessCardLoader;
