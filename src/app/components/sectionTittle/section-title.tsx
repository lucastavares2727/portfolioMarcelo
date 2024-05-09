import './section-title.scss'
interface SectioTitleProps{
    text:string
}

export function SectionTitle ({text} : SectioTitleProps){

    return(
        <h3 className="section-title">{text}</h3>
    )
}