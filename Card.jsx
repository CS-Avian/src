import ProfilePic from './components/Saitan.jpg'

export default function Card() {
    return(
        <div className="card">
            <img src={ProfilePic} alt="Card Image" className="card-img" />
            <h2 className="card-title">ADHITHYA</h2>
            <p className="card-text">I am a software engineer.Working at Google.</p>
        </div>
    )
}   