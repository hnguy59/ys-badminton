import { FeatureCardGroup } from '../../components/FeatureCardGroup'
import { privateTrainingData } from '../../utils/data/siteData'

export default function Private() {
  return (
    <FeatureCardGroup
      title="Private Training"
      description="private training description"
      featureGroup={privateTrainingData}
    />
  )
}
