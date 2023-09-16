import { FeatureCardType } from '../utils/types'
import { FeatureCard } from './FeatureCard'

interface FeatureCardGroupProps {
  title: string
  description?: string
  featureGroup: FeatureCardType[]
}

export function FeatureCardGroup({ featureGroup, title, description }: FeatureCardGroupProps) {
  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="text-center text-3xl font-semibold">{title}</div>
      {description && <div className="text-md text-center">{description}</div>}
      <div className="flex justify-between gap-4">
        {featureGroup.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  )
}
