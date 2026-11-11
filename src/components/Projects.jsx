import { Screen } from "./Screen"
import { ProjectCard } from "./ProjectCard"

const projects = [
    {
        id:1, 
        title: 'Mi portafolio',
        description: 'Mi portafolio hecho con React y Vite',
        tags: ['React', 'Vite', 'CSS'],
    },
    {
        id:2, 
        title: 'Lista de tareas',
        description: 'Aplicación para organizar pendientes',
        tags: ['Javascript', 'HTML'],
    },
    {
        id:3, 
        title: 'Calculadora',
        description: 'Calculadora básica con diseño movil',
        tags: ['Javascript', 'CSS'],
    },
]

    

export const Projects = () => {
  return (
    <Screen title= "Mis Proyectos">
        <div className="card-list">
            {
                projects.map(project => (
                    <ProjectCard
                    key ={project.id}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    />
                )
                )
            }
        </div>

    </Screen>
  )
}
