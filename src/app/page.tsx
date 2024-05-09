
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { EmailIcon } from "./components/icons/email-icons";
import {  Infor } from "./components/information/information";
import { Socialbuttons } from "./components/social-buttons/social-buttons";
import "./styles/home.scss";



export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Infor />
      <div className="buttons">
        <Socialbuttons />
        <a className="btn-primary" href="mailto:seuemailaqui">
           Contact me
           <EmailIcon />
           </a>
           </div>
    </main>
  )
}
