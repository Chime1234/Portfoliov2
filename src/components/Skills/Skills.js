import './Skills.css'
import uniqid from 'uniqid'
import {skills} from '../../data'
const Skills = () => {
    if (!skills.length) return null
  
    return (
      <section className='section_skills' id='skills'>
        <h2 className='section__title'>SKILLS</h2>
        <ul className='skills__list'>
          {skills.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    )
  }
export default Skills