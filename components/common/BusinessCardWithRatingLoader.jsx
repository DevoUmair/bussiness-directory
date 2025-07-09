import { LinearGradient } from 'expo-linear-gradient';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder-v2';

const BusinessCardWithRatingLoader = () => {
  return (
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
        marginBottom={10}
      >
        {/* Top Image */}
        <SkeletonPlaceholder.Item
          width="100%"
          height={170}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        />

        {/* Info Row */}
        <SkeletonPlaceholder.Item
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
          padding={15}
        >
          {/* Business Info (name + address) */}
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width={150} height={20} borderRadius={4} marginBottom={6} />
            <SkeletonPlaceholder.Item width={100} height={14} borderRadius={4} />
          </SkeletonPlaceholder.Item>

          {/* Rating stars */}
          <SkeletonPlaceholder.Item
            width={70}
            height={15}
            borderRadius={8}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default BusinessCardWithRatingLoader;
