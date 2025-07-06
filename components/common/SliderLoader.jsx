import { LinearGradient } from 'expo-linear-gradient';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder-v2';

const SliderLoader = () => {
  return (
    <SkeletonPlaceholder
      backgroundColor="#e0e0e0"
      highlightColor="#f5f5f5"
      borderRadius={15}
      animationDuration={3500} // 👈 slows the shimmer
      LinearGradientComponent={LinearGradient}
    >
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        {[1, 2, 3].map((_, index) => (
          <SkeletonPlaceholder.Item
            key={index}
            width={300}
            height={150}
            borderRadius={15}
            marginRight={15}
          />
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SliderLoader;
