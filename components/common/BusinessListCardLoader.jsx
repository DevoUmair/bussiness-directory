import { LinearGradient } from 'expo-linear-gradient';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder-v2';

const BusinessListCardLoader = () => {
  return (
    <SkeletonPlaceholder
      backgroundColor="#e0e0e0"
      highlightColor="#f5f5f5"
      animationDuration={1500}
      borderRadius={10}
      LinearGradientComponent={LinearGradient}
    >
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        padding={10}
        borderRadius={10}
        marginBottom={10}
        backgroundColor="#880808"
        elevation={10}
        gap={8}
      >
        {/* Left image */}
        <SkeletonPlaceholder.Item
          width={120}
          height={120}
          borderRadius={10}
        />

        {/* Right content */}
        <SkeletonPlaceholder.Item flex={1} gap={6}>
          {/* Title */}
          <SkeletonPlaceholder.Item width="80%" height={20} borderRadius={4} />

          {/* Address */}
          <SkeletonPlaceholder.Item width="60%" height={14} borderRadius={4} />

          {/* Rating row */}
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" gap={6} marginTop={4}>
            <SkeletonPlaceholder.Item width={15} height={15} borderRadius={99} />
            <SkeletonPlaceholder.Item width={30} height={10} borderRadius={4} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default BusinessListCardLoader;
