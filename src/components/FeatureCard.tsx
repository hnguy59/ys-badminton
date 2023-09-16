import Image from 'next/image'
import { FeatureCardType } from '../utils/types'
import Link from 'next/link'

interface FeatureCardProps {
  feature: FeatureCardType
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex h-fit min-w-[150px] flex-1 flex-col gap-2 rounded-xl bg-white/90 p-4 shadow-lg dark:bg-gray-700/90">
      <Image className="flex h-1/3 min-h-[50px] items-center justify-center" {...feature.image} />
      <div className="text-2xl font-semibold">{feature.title}</div>
      <div>{feature.description}</div>
      {feature.link && (
        <Link href={feature.link} className="flex self-center">
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-green-400 dark:hover:bg-green-500 dark:focus-visible:outline-green-400">
            Enquire now
          </button>
        </Link>
      )}
    </div>
  )
}
