
export const About = () => {
  const tools = [
    {id: 1, name: "React JS"},
    {id: 2, name: "React Native"},
    {id: 3, name: "NodeJS"},
    {id: 4, name: "Bootstrap"},
    {id: 5, name: "Tailwind CSS"},
    {id: 6, name: "Git"},
    {id: 7, name: "Express"},
    {id: 8, name: "Postgres"},
    {id: 9, name: "MongoDB"},
    {id: 10, name: "HTML"},
    {id: 11, name: "CSS"},
    {id: 12, name: "Javascript"},
  ]
  return (
    <section>
        {/* <!-- Features --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="relative p-6 md:p-16">
    {/* <!-- Grid --> */}
    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
          About <span className="text-blue-500">Me</span>
        </h2>

        {/* <!-- Tab Navs --> */}
        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Hello! My name is <span className="text-blue-400 font-bold">Ashvin Sunga</span> and I enjoy creating things that live on the internet. I am an IT professional, whose into web development to explore new challenges and expand my technical expertise. My passion lies in creating interactive, user-friendly web and mobile applications, turning ideas into seamless digital experiences.</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Aside from creating personal projects, I&apos;m also collaborating on a mobile application - <span className="text-blue-400 font-bold">NONOGO</span> alongside experienced developers, refining my skills in real-world projects. I thrive on continuous learning and enjoy applying new concepts to solve complex problems.</span>
                <div className="space-y-3">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">By the way, Here are the technologies I&apos;ve been working with:</h2>
                </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 max-w-md space-y-1 text-gray-700 list-none list-inside">
                  
                  {tools.map((tool) => (
                    <li key={tool.id}>
                    ➧ {tool.name}
                    </li>
                  ))}
              </ul>


        </nav>
        {/* <!-- End Tab Navs --> */}
      </div>
      {/* <!-- End Col --> */}

      <div className="lg:col-span-6">
        <div className="relative">
          {/* <!-- Tab Content --> */}
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image"/>
            </div>

            {/* <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image"/>
            </div>

            <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image"/>
            </div> */}
          </div>
          {/* <!-- End Tab Content --> */}

          {/* <!-- SVG Element --> */}
          <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-blue-400 mr-6" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </div>
          {/* <!-- End SVG Element --> */}
        </div>
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}

    {/* <!-- Background Color --> */}
    <div className="absolute inset-0 grid grid-cols-12 size-full">
      <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
    </div>
    {/* <!-- End Background Color --> */}
  </div>
</div>
{/* <!-- End Features --> */}
    </section>
  )
}
