
import { ProjectCard } from "../components/ProjectCard"

export const Projects = () => {
  const projects = [
    {id: 1, image: "https://flowbite.com/docs/images/blog/image-1.jpg", title: "Nonogo", description: "It's still a work in progress, but we are getting there ...."},
    {id: 2, image: "https://flowbite.com/docs/images/blog/image-1.jpg", title: "Gadget Axis", description: "A project that I built way back 2022. Fortunately I was able to retrieved few screenshots and blueprint as well"},
    {id: 3, image: "https://flowbite.com/docs/images/blog/image-1.jpg", title: "Basic Form", description: "Just a basic form, no function at all "},
    {id: 3, image: "https://flowbite.com/docs/images/blog/image-1.jpg", title: "Basic Form", description: "Just a basic form, no function at all "},
  ]

  return (
    <>
      <section className="pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  My Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  Please have a look at my Personal and Client Projects
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3" >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
            }
            
          </div>
        </div>
      </section>
  </>
  )

}