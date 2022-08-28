import uniqid from 'uniqid'
import './ProjectContainer.css'
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
const ProjectContainer = ({ project }) => (
    <div className='project'>
      <h3>{project.name}</h3>
      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
  
      {project.sourceCode && (
        <a
        target="_blank"
          href={project.sourceCode}
          aria-label='source code'
          className='icon'
        >
          <FaGithub />
        </a>
      )}
  
      {project.livePreview && (
        <a
          target="_blank"
          href={project.livePreview}
          aria-label='live preview'
          className='icon'
        >
          <MdLaunch />
        </a>
      )}
    </div>
  )
  
  export default ProjectContainer
  