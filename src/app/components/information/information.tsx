import { SectionTitle } from '../sectionTittle/section-title'
import './information.scss'

export function Infor(){

    return(

        <div className="infos">
        <SectionTitle text='Languages'/>
        <div className="languages-infos">
          <span> EN - intermediary</span>
          <span> PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text='Education' />
        <div className="languages-infos">
        <span></span>
        <span> Computer Science Bachelors Degree - 
          Universidade Federal do Piauí</span>
          </div>
        </div>
       
    )
}