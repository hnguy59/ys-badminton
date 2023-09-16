import Image from 'next/image'
import Link from 'next/link'
import { CTA } from '../components/CTA'
import { useRef, useState, useEffect } from 'react'
import { instagramSocialData } from '../utils/data/siteData'
import { InstagramPost } from '../components/InstagramPost'

export default function Home() {
  const [contentStartTop, setContentStartTop] = useState<number>()
  const heroRef = useRef<HTMLDivElement | null>(null)
  // const contentStartTop = useMemo(() => heroRef.current?.offsetHeight, [heroRef])

  useEffect(() => {
    setContentStartTop(heroRef?.current?.offsetHeight)
  }, [heroRef])

  return (
    <>
      {/* HERO  */}
      <div className="h-full max-h-[1440px] w-full bg-transparent">
        <Image
          src="/images/ys-cover-image.jpg"
          alt="ys-cover-image"
          width={2048}
          height={1365}
          className="absolute left-0 top-0 z-[-999] h-full max-h-[1440px] w-full object-cover shadow-md"
        />
        <div
          ref={heroRef}
          className="absolute left-0 top-0 z-10 flex h-full max-h-[1440px] w-full flex-col items-center justify-center"
        >
          <h2 className="text-center text-5xl font-semibold leading-[68px] text-white">
            WELCOME TO
          </h2>
          <h1 className="text-center text-7xl font-bold leading-[80px] text-transparent">
            YS Badminton
          </h1>
        </div>
        <div className="absolute left-0 top-0 z-10 flex h-full max-h-[1440px] w-full items-end justify-center">
          <div className="flex justify-evenly gap-12 p-24">
            <Link href="/training/private">
              <button className="rounded-l-full bg-white p-5 text-3xl font-bold text-dark hover:bg-dark hover:text-white dark:bg-dark dark:text-white hover:dark:bg-white hover:dark:text-dark">
                PRIVATE TRAINING
              </button>
            </Link>
            <Link href="/training/group">
              <button className="rounded-r-full bg-white p-5 text-3xl font-bold text-dark hover:bg-dark hover:text-white dark:bg-dark dark:text-white hover:dark:bg-white hover:dark:text-dark">
                GROUP TRAINING
              </button>
            </Link>
          </div>
        </div>
      </div>
      {heroRef ? (
        <>
          {/* WE PUSH THE LIMIT */}
          <div
            id="we-push-the-limit"
            className="relative isolate h-full px-6 py-6 lg:px-8 "
            style={{ marginTop: contentStartTop }}
          >
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
            <div className="flex flex-col-reverse gap-8 lg:flex-row">
              <div className="flex w-full flex-col text-left lg:w-2/4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  We push the limit.
                </h1>
                <p className="mt-6 text-lg leading-8">
                  Unlock your <b>badminton</b> potential with our team of dedicated coaches, ready
                  to guide you towards success and help you reach new heights in the sport.
                </p>
                <div className="justify-left mt-10 flex items-center gap-x-6">
                  <Link href="/services">
                    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-green-400 dark:hover:bg-green-500 dark:focus-visible:outline-green-400">
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex w-full items-center justify-center lg:w-2/4">
                <Image
                  src="/images/ys-cover-image.jpg"
                  alt="ys-cover-image"
                  width={2048}
                  height={1365}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          {/* SOCIALS */}
          <div
            id="socials"
            className="flex flex-col items-center justify-center gap-8 rounded bg-pink-50 dark:bg-dark px-6 py-6 lg:px-8"
          >
            <h2 className="text-center text-[38px] font-black leading-[45px]">Socials</h2>
            <p className="text-center text-[20px]">
              The team behind YS Badminton is what drives our vision to inspire and empower
              individuals to love the sport badminton. The team behind YS Badminton is what drives
              our vision to inspire and empower individuals to love the sport badminton.
            </p>
            <Link href="/jointheteam" className="w-[12rem]">
              <button className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Social Button
              </button>
            </Link>
          </div>
          {/* SOCIAL 3 POSTS */}
          <div
            id="social 3"
            className="flex flex-col items-center justify-center gap-8 px-6 py-6 lg:px-8"
          >
            <h2 className="text-center text-[38px] font-black leading-[45px]">Follow us</h2>
            <div className="flex flex-row gap-6">
              {instagramSocialData.map((post) => (
                <InstagramPost key={post.href} href={post.href} />
              ))}
            </div>
          </div>
          <CTA />
        </>
      ) : (
        <>loading</>
      )}
    </>
  )
}
