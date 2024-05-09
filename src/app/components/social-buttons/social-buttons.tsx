import { Github } from "../icons/github";
import { InstaIcon } from "../icons/insta-icon";
import { Linkedin } from "../icons/linkedin";
import { Twitter } from "../icons/twitter";
import './social-buttons.scss'

export function  Socialbuttons(){
    return(
       <div className="social">
            <a href="@instagran">
             <InstaIcon />
            </a>
            <a href="@linkedin">    
            <Linkedin />
            </a>
            <a href="@github"> 
            <Github  />
            </a>
            <a href="@twitter"> 
            <Twitter />
            </a>
           
       </div>
    )
}