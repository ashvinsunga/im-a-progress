import { About } from "./About"
import { Projects } from "./Projects"
import Contact from "./Contact"

export const Home = () => {
  return (
    <main>
      <section className="font-sans">
        <div className="flex flex-col md:flex-row items-center max-w-8xl px-6 py-8 mx-auto h-screen">
          <div className="w-full md:w-1/2 py-8">
            <div className="text-neutral-700 text-xl font-semibold leading-none tracking-tighter">
              <div className="my-4">
                <p className="mb-3 md:text-4xl"> Hello, my name is </p>
                <h1 className="text-blue-500 text-3xl md:text-6xl">
                  Ashvin Sunga. <br />
                  I build things for the web.
                  </h1> 
              </div>
                <p className="py-2 text-base md:text-2xl" >
                  I&apos;m a Frontend Developer specializing in building (and ocassionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products at ...
                </p>
            </div>
          </div>
          <div className="w-full md:w-2/5">
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
