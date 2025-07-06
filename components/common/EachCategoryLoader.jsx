import { LinearGradient } from 'expo-linear-gradient';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder-v2';

const EachCategoryLoader = () => {
  return (
    <SkeletonPlaceholder
      backgroundColor="#e0e0e0"
      highlightColor="#f5f5f5"
      animationDuration={1500}
      borderRadius={10}
      LinearGradientComponent={LinearGradient}
    >
      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginRight={15}
      >
        {/* Icon circle */}
        <SkeletonPlaceholder.Item
          width={70}
          height={70}
          borderRadius={99}
          marginBottom={8}
        />

        {/* Text placeholder */}
        <SkeletonPlaceholder.Item
          width={50}
          height={10}
          borderRadius={4}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default EachCategoryLoader;
