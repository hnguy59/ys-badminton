import { ArrowDownward } from '@mui/icons-material'
import { CTA } from '../../components/CTA'
import { Image } from '../../components/Image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <>
      {/* 1. our vision 2. our values 3. our mission 4. founders 5. our team (join the team 6. get in
      touch (contact us) */}
      <div id="our-vision" className="mx-auto flex flex-col items-center justify-center gap-8 ">
        <h1 className="text-center font-bold text-indigo-700 dark:text-indigo-300">About Us</h1>
        <h2 className="-mt-4 text-center text-3xl font-bold leading-6">Push your Limit!</h2>
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
              Growing up in Malaysia, Suen&apos;s journey in badminton began with systematic
              training at a young age, culminating in professional play across various states. Even
              upon relocating to Brisbane, his fervour for the sport remained unwavering. In the
              initial stages, Suen extended his love for badminton by engaging in sparring sessions
              with members of the Australian National team. His dedication also led him to offer
              invaluable advice to friends seeking to improve their badminton skills. This
              commitment to the sport and its community underscores the foundation of YS Badminton.
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
              <div className="flex w-full flex-col items-center justify-center gap-8">
                <div className="">
                  <h3 className="text-3xl font-bold">About Us</h3>
                  <p className="text-justify">
                    Our founder Yi Suen Kaw officially establishes YS Badminton in 2018 at Brisbane,
                    throughout the past 5 years, Suen has led to the formation of a dedicated team
                    of passionate and qualified badminton coaches in Brisbane. Together, they have
                    been offering private session to individual, as well as Adults and Kids Group
                    training, catering all ages and skill levels that possible. We also run weekly
                    social sessions for our students and other badminton lovers in the community.
                    Our team&apos;s unwavering commitment lies in imparting the utmost expertise in
                    badminton techniques and skills to our students. This collective dedication
                    empowers our students to elevate their badminton proficiency and reach new
                    heights in their gameplay and aspirations, for example participating Queensland
                    Badminton Association and other higher state competitions.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold">Push your Limit!</h3>
                  <p className="text-justify">
                    &quot;Push The Limits&quot; is a core belief at YS Badminton, encouraging each
                    student to transcend their boundaries. By adopting this philosophy and mastering
                    advanced techniques, our students can surpass even their highest aspirations,
                    achieving extraordinary outcomes that exceed the norm.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold">Contribute to Our Community</h3>
                  <p className="text-justify">
                    In the past year, YS Badminton has been immensely grateful for the trust
                    bestowed upon us by our students and the recognition and support from the
                    community. Notably, we had the privilege to coach the Badminton team at Brisbane
                    Girls Grammar School from 2019 to 2020, which resulted in the team achieving two
                    championship victories. Furthermore, we are delighted to share that Suen&apos;s
                    expertise has led him to be invited as the coach for the University of
                    Queensland (UQ) Badminton National Team for the year 2023. In this role, Suen is
                    dedicated to equipping and advancing the skills and techniques of the students,
                    enhancing their proficiency in badminton to participate in upcoming games across
                    Australia.
                  </p>
                  <br />
                  <p className="text-justify">
                    We are deeply honoured to play a role in the growth and triumphs of these
                    aspiring badminton players. Our commitment to sharing our expertise in
                    techniques and skills remains steadfast, ensuring all our players receive the
                    best.
                  </p>
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
