import codingPicture from "../assets/Coding.jpg"

export default function firstpage() {
    return (
        <>
            <main>
                <h1 className="subtitle">Startsida</h1>
                <img src={codingPicture} alt="Fotografi av html-kod på en datorskärm" />
            </main>
        </>
    )
}