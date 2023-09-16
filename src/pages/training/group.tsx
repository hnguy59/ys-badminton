import { ImageWithCTA } from '../../components/ImageWithCTA'
import { groupTrainingData } from '../../utils/data/siteData'

export default function Group() {
  return groupTrainingData.map((data, i) => (
    <ImageWithCTA
      key={data.title}
      image={data.image}
      imagePlacement={i % 2 == 0 ? 'LEFT' : 'RIGHT'}
    >
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {data.title}
      </h2>
      <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
        {data.description}
      </p>
      <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
        {data.timetable}
      </p>
      <a
        href={data.link}
        className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        JOIN NOW
      </a>
    </ImageWithCTA>
  ))
}
