import Link from 'next/link'
export function CTA() {
  return (
    <div id="our-contact" className="mt-24 rounded-lg bg-purple-100 p-6 dark:bg-purple-700">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="sm:w-50 flex w-full flex-col justify-center gap-4">
          <h2 className=" leading-[41px]text-left text-[32px]">Get in touch</h2>
          <p className="text-left text-[20px]">Any questions, ask away!</p>
        </div>
        <Link
          href="/contactus"
          className="mb-10 flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg bg-white p-6 transition-all duration-300 hover:shadow-lg md:mb-0 md:h-fit"
        >
          <div className="bg-purple-light rounded-lg p-4">
            <div className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
                  fill="#A857FC"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.18085 5.42662C1.49757 4.97417 2.1211 4.86414 2.57355 5.18085L12.0001 11.7794L21.4266 5.18085C21.8791 4.86414 22.5026 4.97417 22.8193 5.42662C23.136 5.87907 23.026 6.5026 22.5735 6.81932L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L1.42662 6.81932C0.974174 6.5026 0.864139 5.87907 1.18085 5.42662Z"
                  fill="#A857FC"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-dark">
            <p className="mb-1 text-[20px] font-bold">Contact us</p>
            <p className="">
              We are located in <span className="font-bold">Brisbane, Australia</span>
            </p>
          </div>
          <div className="rotate-180">
            <div className="text-dark">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9999 6.00019H3.4099L6.7099 2.71019C6.8982 2.52188 7.00399 2.26649 7.00399 2.00019C7.00399 1.73388 6.8982 1.47849 6.7099 1.29019C6.52159 1.10188 6.2662 0.996094 5.9999 0.996094C5.73359 0.996094 5.4782 1.10188 5.2899 1.29019L0.289896 6.29019C0.198856 6.38529 0.127491 6.49743 0.0798963 6.62019C-0.0201217 6.86365 -0.0201217 7.13672 0.0798963 7.38019C0.127491 7.50294 0.198856 7.61508 0.289896 7.71019L5.2899 12.7102C5.38286 12.8039 5.49346 12.8783 5.61532 12.9291C5.73718 12.9798 5.86788 13.006 5.9999 13.006C6.13191 13.006 6.26261 12.9798 6.38447 12.9291C6.50633 12.8783 6.61693 12.8039 6.7099 12.7102C6.80363 12.6172 6.87802 12.5066 6.92879 12.3848C6.97956 12.2629 7.00569 12.1322 7.00569 12.0002C7.00569 11.8682 6.97956 11.7375 6.92879 11.6156C6.87802 11.4937 6.80363 11.3831 6.7099 11.2902L3.4099 8.00019H10.9999C11.2651 8.00019 11.5195 7.89483 11.707 7.70729C11.8945 7.51976 11.9999 7.2654 11.9999 7.00019C11.9999 6.73497 11.8945 6.48062 11.707 6.29308C11.5195 6.10554 11.2651 6.00019 10.9999 6.00019Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
