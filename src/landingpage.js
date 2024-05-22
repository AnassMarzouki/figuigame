export default function LandingPage (props) {
    return (
        <div className="welcome-page">
            <h1>Figuig Vocabulary Quiz</h1>
            <h4>Test your Figuig's vocabulary in this Quiz by answering all the 30 questions</h4>
            <h5>Good Luck ;) </h5>
            <button onClick={props.startGame}>Start Quiz</button>
        </div>)
}