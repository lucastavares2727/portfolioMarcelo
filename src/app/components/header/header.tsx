import Image from "next/image";
import './header.scss';

export function Header(){


    return(
        <div className="header">
        <div>
        <h1>👏 Hi, Im Marcelo</h1>
        <h1>Frontend Developer</h1>

        </div>
        
            <Image
            src="/marcelo.jpeg"
            alt="Vercel Logo"
            width={325}
            height={277}
            priority
            />
           
        </div>
    )
}