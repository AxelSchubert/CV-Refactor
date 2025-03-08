import { useState, useEffect } from "react"
import BeatLoader from "react-spinners/BeatLoader.js";

export default function portfolio() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.github.com/users/AxelSchubert/repos").then((response) => response.json())
            .then((data) => {
                setTimeout(() =>{
                    setProjects(data);
                    setLoading(false);
                }, 1500)

            }).catch((error) => { console.log(error) })
    }, [])

    if (loading) {
        return (
            <>¨
                <main>
                    <h3 className="subtitle">Mina projekt</h3>
                    <BeatLoader className="loader" color="rgba(128, 0, 0, 1)" size={30} />
                </main></>
        )
    }

    return (
        <>
            <main>
                <h3 className="subtitle">Mina projekt</h3>
                <div className="container">
                    {projects.map((project) => {
                        return (
                            <>
                                <div className="project">
                                    <h3>{project.name}</h3>
                                    <p>Språk: {project.language || "Unknown language"}</p>
                                    <a href={project.html_url} target="_blank">Github-länk</a>
                                </div>
                            </>
                        )
                    })}
                </div>
            </main>
        </>
    )
}