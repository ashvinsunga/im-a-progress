import Hello from "../assets/hello.json"

import Lottie from "lottie-react"


export const Contact = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-8xl px-6 mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Say <span className="text-blue-500">&quot;Hello!&quot;</span> and don&apos;t be shy.
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            Thank you for visiting!
            </p>
            <p className="mt-6 text-md/5 lg:text-lg/6 text-gray-600">
            Whether you have a question, comment, or simply want to say hello, I encourage you to reach out. I&apos;m here to assist and love connecting with my community, so don&apos;t hesitate to get in touch. 
            </p>
          </div>
          <div className="font-bold pt-8 sm:px-10 sm:pt-10 max-lg:text-center">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">You can send your email here:</p>
                <p className="max-w-lg text-sm/6 md:text-xl text-blue-400 ">
                  ashvinsunga@yahoo.com.ph
                </p>

                <p className="mt-6 text-lg font-medium tracking-tight text-gray-950">You may call or text:</p>
                <p className="max-w-lg text-sm/6 md:text-xl text-blue-400">
                  +639 76 027 9150
                </p>

            </div>
        </div>

        <div>
            <Lottie animationData={Hello} style={{width: "100%"}} />
        </div>
      </div>
    </section>
  )
}
