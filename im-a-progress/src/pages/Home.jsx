import { About } from "./About"
import { Projects } from "./Projects"
import { Contact } from "./Contact"

export const Home = () => {
  return (
    <main>
      <section className="font-sans">
        <div className="flex flex-col md:flex-row items-center max-w-8xl px-5 lg:px-24 py-8 mx-auto h-screen">
          <div className="w-full md:w-2/3 py-8">
            <div className="text-neutral-700 text-xl font-semibold leading-none tracking-tighter">
              <div className="my-4">
                <p className="mb-3 xl:text-4xl"> Hello, my name is </p>
                <h1 className="text-blue-500 text-3xl xl:text-6xl">
                  Ashvin Sunga. <br />
                  I build things for the web.
                  </h1> 
              </div>
                <p className="py-2 text-base xl:text-2xl" >
                  I&apos;m a passionate developer, currently making an exciting shift to web and mobile development. My journey into tech was fueled by a strong interest in building interactive, user-friendly applications that solve real-world problems.
                </p>
            </div>
          </div>
          <div className="w-full xs:w-1/3 sm:w-2/3 md:w-1/3 ml-10">
            <img src="https://www.svgrepo.com/show/493331/male-programmer-upper-body.svg" className="g-image" />
          </div>
        </div>
        <About />
        <Projects />
        <Contact />
      </section>



    </main>
  )
}
