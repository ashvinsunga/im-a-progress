
import { ProjectCard } from "../components/ProjectCard"

import Nonogo from "../assets/projects/nonogo.jpg"
import Gadget from "../assets/projects/gadget.jpg"
import Etch from "../assets/projects/etch.jpg"
import Calculator from "../assets/projects/calculator.jpg"
import Library from "../assets/projects/library.jpg"
import ThorForm from "../assets/projects/form.jpg"

export const Projects = () => {
  const projects = [
    {id: 1, projLink: "https://ashvinsunga.github.io/im-a-progress/", image: Nonogo, title: "Nonogo", description: "It's still a work in progress, but we are getting there ...."},
    {id: 2, projLink: "https://ashvinsunga.github.io/im-a-progress/",image: Gadget, title: "Gadget Axis", description: "A project that I built way back 2022. Fortunately I was able to retrieved few screenshots and blueprint as well"},
    {id: 3, projLink: "https://ashvinsunga.github.io/odin_eas/",image: Etch, title: "Etch a Sketch", description: "Vanilla Sketching board where you can sketch with various colors!"},
    {id: 4, projLink: "https://ashvinsunga.github.io/odin_calculator/",image: Calculator, title: "Calculator", description: "A vanilla calculator "},
    {id: 5, projLink: "https://ashvinsunga.github.io/odin_library/",image: Library, title: "Book Library", description: "A vanilla book library where you can add books"},
    {id: 6, projLink: "https://ashvinsunga.github.io/odin_form/",image: ThorForm, title: "Basic Form", description: "A vanilla form I made, no function whatsover. Just a form"},
  ]

  return (
    <>
      <section className="pb-12 lg:pt-[60px] lg:pb-[60px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  My Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  Please have a look at my Personal and Collaborative Projects
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