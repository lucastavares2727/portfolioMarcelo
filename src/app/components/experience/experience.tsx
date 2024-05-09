import Image from "next/image"
import { SectionTitle } from "../sectionTittle/section-title"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
        <SectionTitle  text="Experience"/>
        <p>3 years as Technical Support on Tapajos</p>
        <div className="experience-time">
            <div className="experience-language">
                <Image
                src="/python.png"
                alt="Python Logo"
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-3">
                        <span>3 years</span>
                    </div>
            </div>
         </div>
         <div className="experience-language">
                <Image
                src="/dj.png"
                alt="Dj Logo"
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-2">
                    <span>2 years</span>
                    </div>
            </div>
         </div>
         <div className="experience-language">
                <Image
                src="/flask.png"
                alt="Flask Logo"
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-1">
                    <span>1 years</span>
                    </div>
            </div>
         </div>
         <div className="experience-language">
                <Image
                src="/selenium.png"
                alt="selenium Logo"
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-3">
                    <span>3 years</span>
                    </div>
            </div>
         </div>
         <div className="experience-language">
                <Image
                src="/pandas.png"
                alt="Pandas Logo"
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-1">
                    <span>1 years</span>
                    </div>
            </div>
         </div>



         
        
    
        </div>
        </div>
    )
}