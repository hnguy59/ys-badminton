import { ArrowDownward, School, Star, VerifiedUser } from '@mui/icons-material'

import { Image } from '../../components/Image'
import Link from 'next/link'
import { CTA } from '../../components/CTA'

export default function AboutUs() {
  return (
    <>
      {/* 1. our vision 2. our values 3. our mission 4. founders 5. our team (join the team 6. get in
      touch (contact us) */}
      <div id="our-vision" className="mx-auto flex flex-col items-center justify-center gap-8 ">
        <h1 className="text-center font-bold text-indigo-700 dark:text-indigo-300">About Us</h1>
        <h2 className="-mt-4 text-center text-3xl font-bold leading-6">We play the best</h2>
        <ArrowDownward className="h-8 w-8" />
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="h-min flex-1">
            <Image
              className="w-auto rounded-lg object-contain object-center"
              src="/images/kids-training-group.jpg"
              alt="kids training group"
              width={1080}
              height={1224}
            />
          </div>
          <div className="flex flex-[2] flex-col justify-center gap-4">
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-justify">
              To inspire and empower individuals to become skilled and confident badminton players.
              We aim to cultivate a love for the sport, nurture talent, and create a community of
              athletes who excel both on and off the court.
            </p>
          </div>
        </div>
      </div>
      <div id="our-values" className="mt-16">
        <div className="overflow-hidden">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto">
            <div className="mx-auto flex flex-col-reverse gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 lg:flex-row">
              <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row lg:flex-row">
                <div className="">
                  <h3 className="text-3xl font-bold">Our Values</h3>
                  <dl className="mt-10  space-y-8 text-base leading-7">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold">
                        <Star className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-green-400" />
                        Excellence
                      </dt>{' '}
                      <dd className="text-justify">
                        We are committed to providing top-quality coaching programs led by
                        experienced professionals, ensuring our players receive excellent guidance
                        and support.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold">
                        <VerifiedUser className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-green-400" />
                        Integrity
                      </dt>{' '}
                      <dd className="text-justify">
                        We prioritize integrity, fair play, and respect for opponents, fostering a
                        culture of good character on and off the court.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold">
                        <School className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-green-400" />
                        Personal Growth
                      </dt>{' '}
                      <dd className="text-justify">
                        We foster holistic player development, nurturing growth, resilience, and
                        confidence, empowering individuals with life skills beyond badminton.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-evenly gap-8">
                <Image
                  src="/images/clear-1.jpg"
                  alt="Product screenshot"
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                />
                <Image
                  src="/images/clear-4.jpg"
                  alt="Product screenshot"
                  className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-plays" className="mt-16 flex flex-col gap-8">
        <h3 className="text-center text-3xl font-bold">Our Plays</h3>
        <div className="flex flex-col gap-8 lg:flex-row">
          <iframe
            className="aspect-video w-full rounded-lg"
            title="sydney international 2022 defense"
            src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2FYSBadmintonTraining%2Fvideos%2F910022243735090%2F&show_text=false&width=560&t=0"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            className="aspect-video w-full rounded-lg"
            title="sydney international 2022 smash"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FYSBadmintonTraining%2Fvideos%2F5255373464589817%2F&show_text=false&width=560&t=0"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <div
        id="our-team"
        className="mt-24 flex flex-col items-center justify-center gap-8 px-6 lg:px-8"
      >
        <h2 className="text-center text-[38px] font-black leading-[45px]">
          It is all about our people
        </h2>
        <p className="text-center text-[20px]">
          The team behind YS Badminton is what drives our vision to inspire and empower individuals
          to love the sport badminton.
        </p>
        <Link href="/jointheteam" className="w-[12rem]">
          <button className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Join the team
          </button>
        </Link>
      </div>
      <CTA />
    </>
  )
}
