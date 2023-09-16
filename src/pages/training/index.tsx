import { Check } from '@mui/icons-material'
import Link from 'next/link'
import { CTA } from '../../components/CTA'

export default function Services() {
  return (
    <>
      <div className="pt-24 sm:pt-32">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Training Programs</h2>
            <p className="mt-6 text-lg leading-8">
              Our Premier Programs or Elite Training Programs are meticulously designed and tailored
              to offer the most advanced and comprehensive training experience, ensuring optimal
              skill development and performance enhancement for our dedicated athletes.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-6 lg:flex-row">
            <div className="mx-auto rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight">One-on-One Coaching</h3>
                <p className="mt-6 text-justify text-base leading-7">
                  Offering personalized training sessions tailored to individual players' specific
                  needs and goals, providing focused attention and customized guidance for maximum
                  improvement.
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:gap-6">
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Individualised attention
                  </li>
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Accelerated progress
                  </li>
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Tailored training programs
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight">Group Training Sessions</h3>
                <p className="mt-6 text-justify text-base leading-7">
                  Conducting group training programs for players of similar skill levels, promoting
                  healthy competition, teamwork, and skill development through drills, match play,
                  and structured exercises.
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:gap-6">
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Competitive Environment
                  </li>
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Learning from Observation
                  </li>
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Skill variety
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight">Junior Development Programs</h3>
                <p className="mt-6 text-justify text-base leading-7">
                  Designing specialised coaching programs for young aspiring badminton players,
                  focusing on building foundational skills, coordination, technique, and fostering a
                  love for the sport.
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:gap-6">
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Learning the fundamentals
                  </li>
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Fun and Engaging
                  </li>
                  <li className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    Building a love for badminton
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 flex flex-col gap-6 sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let us help you</h2>
            <p className="text-lg leading-8">
              For personalized assistance and to discover the best coaching option that suits your
              needs, please feel free to contact us. Our team is dedicated to providing you with the
              information and guidance necessary to make an informed decision. We look forward to
              hearing from you and helping you find the perfect coaching program tailored to your
              goals.
            </p>
            <Link href="/contactus" className="flex w-[12rem]">
              <button className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CTA />
    </>
  )
}
