import MyCV from "../assets/CV.json"


export default function CV(){   

    return(
        <>
        <h1 className="subtitle">CV</h1>
        <ul className="cv-box">
            {MyCV.map((article) => (
                <li>
                    <h3>{article.name}</h3>
                    <p>{article.description}</p>
                </li>
            ))}
        </ul>
        </>
    )
}