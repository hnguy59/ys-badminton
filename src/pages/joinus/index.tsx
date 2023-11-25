import { CircularProgress, Divider } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Image } from '../../components/Image'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { useState } from 'react'

interface FormValues {
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  message: string
}

export default function JoinUs() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    try {
      await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: data.email,
          fullname: `${data.firstName} ${data.lastName}`,
          subject: '[JOIN THE TEAM] - Join the team',
          message: data.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
      reset()
      toast.success('Thank you for your interest. We will contact you soon.')
    }
  }

  return (
    <>
      <div className="flex flex-col gap-12 pt-12">
        <Image
          src="/images/cover-image.jpg"
          alt="cover image"
          width={2048}
          height={1536}
          className="aspect-[25/5] w-full rounded-lg object-cover"
        />
        <Divider />
        <div className="isolate grid gap-16 px-4 sm:grid-cols-3 sm:px-0 lg:px-8">
          <div className="col-span-2">
            <h3 className="text-base font-semibold leading-7">
              Do you have a passion for badminton coaching?
            </h3>
            <p className="mt-1 max-w-2xl text-justify text-sm leading-6 text-gray-500 dark:text-gray-300">
              YS Badminton is seeking Coaches for Kids Group Training, Adults Group Training and
              Private Training. Training sessions will generally take place after school on 4-6pm &
              weekend in the morning.
            </p>
          </div>
          <div className="col-span-1 flex items-end">
            <h3 className="text-2xl">Become a part of our dynamic coaching squad.</h3>
          </div>
        </div>
        <div className="isolate px-4 sm:px-0 lg:px-8">
          <div className="mt-6 border-t border-gray-700 dark:border-gray-300">
            <dl className="divide-y divide-gray-700 dark:divide-gray-300">
              <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6">Duties</dt>
                <dd className="mt-1 text-sm leading-6 sm:col-span-3 sm:mt-0">
                  <ul className="list-disc">
                    <li>Preparing and implementing suitable training sessions for players.</li>
                    <li>
                      Coach the fundamental skills of the respective sport and also coach the rules
                      of the game in conjunction with a strong emphasis on teamwork and good
                      sportsmanship.
                    </li>
                    <li>
                      Coaches maintain effective communication with players, parents (in case of
                      junior players), and other members of the coaching staff. They facilitate
                      teamwork, camaraderie, and a healthy competitive spirit among players.
                    </li>
                    <li>
                      Ensure the appropriate use of YS Badminton sporting equipment and facilities
                      at all times.
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6">Skills and Qualities</dt>
                <dd className="mt-1 text-sm leading-6 sm:col-span-3 sm:mt-0">
                  <ul className="list-disc">
                    <li>Knowledge and experience in coaching.</li>
                    <li>
                      Have student safety at the forefront of everything you do during all training
                      sessions and games.
                    </li>
                    <li>
                      Proactively communicate with individual students, coaches and staff as
                      necessary to and always present the Team in the best possible light at all
                      times.
                    </li>
                    <li>Sound organisational, interpersonal and communication skills.</li>
                    <li>
                      The ability to work independently and effectively in a team environment.
                    </li>
                    <li>
                      Maintain a high level of personal and professional presentation at all times.
                    </li>
                    <li>Be positive in support of the teams culture.</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-4 sm:px-0">
          <p className="mt-1 text-justify text-xs leading-6 text-gray-500 dark:text-gray-400">
            *YS Badminton is committed to the wellbeing and safety of students in it care. Blue Card
            legislation states a “No Card, No Start” policy. This means that paid employees must
            hold a current Paid Blue Card/Exemption Card or be issued with a Paid Blue
            Card/Exemption Card before they can commence work. Candidates may wish to consider how
            their Blue Card status will affect their suitably for this position as a Blue
            Card/Exemption Card is an inherent requirement of the role, prior to a state date. For
            more information on Blue Card/Exemption Cards, please go to the Blue Card Services
            website. If this sounds like the perfect job for you, please email your resume to
            ysbt.contact@gmail.com.
          </p>
        </div>
        <Divider />
        <div className="isolate px-6 lg:px-8">
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
            <p className="mt-2 text-lg leading-8">Ready to join our badminton dream team?</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Kento"
                    className={clsx(
                      'dark:bac block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                      errors.firstName && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                    )}
                    {...register('firstName', { required: true })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Momota"
                    className={clsx(
                      'dark:bac block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                      errors.lastName && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                    )}
                    {...register('lastName', { required: true })}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 ">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                    className={clsx(
                      'dark:bac block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                      errors.email && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                    )}
                    {...register('email', { required: true })}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 ">
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    id="phone-number"
                    autoComplete="tel"
                    placeholder="04XX XXX XXX"
                    className={clsx(
                      'dark:bac block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                      errors.phoneNumber && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                    )}
                    {...register('phoneNumber', { required: true })}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="I want to join the team"
                    className={clsx(
                      'block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                      errors.message && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                    )}
                    defaultValue={''}
                    {...register('message', { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                disabled={isLoading}
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <CircularProgress /> : <>Submit application</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
