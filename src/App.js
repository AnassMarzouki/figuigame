//import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';
import React from 'react'
//import fetchAPI from './fetchAPI';
import GameOver from './gameOver';
import LandingPage from './landingpage';
import ProgressBar from "@ramonak/react-progress-bar";


function App() {
  const [questionData, setQuestionData] = React.useState([])
    React.useEffect(()=> {
    async function fetchFromAPI () {
      const res = await fetch ('https://apifg.vercel.app/questions')
      const data = await res.json()
      setQuestionData(data)
    }

    fetchFromAPI()

  }, [])

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [gameOver, setGameOver] = React.useState(false)
    const [gameStart, setGameStart] = React.useState(true)
    const [progressBarState, setProgressbarState] = React.useState(1)

    

    function nextQuestion (){
      console.log(currentQuestion)
      if (currentQuestion < (questionData.length - 1)){
        setCurrentQuestion(prevQuestion => {
          
          return prevQuestion+1
        })
        setProgressbarState (prevProgress => {
          return prevProgress+1
        })
      } else {
        setGameOver(true)
      }
      

    }
    
    function endGame () {
      setGameOver(!gameOver)
    }

    function playAgain (){
      endGame()
      setScore(0)
      setCurrentQuestion(0)
      setProgressbarState(0)
    }

  
    const playNow = true

    function launchGame (){
      console.log(gameStart)
      return setGameStart(prevStat => !prevStat)

    }
  
  return (
    <main>
      <div>
        {gameStart ? <LandingPage startGame={launchGame}/> : <div>

        {gameOver ? <GameOver score={score} playAgain={playAgain}/> :
        <div className='global-container'>
          <h3 className='question-count'>Question {currentQuestion + 1}</h3>
          <div className='question-asked'>
            <h4 className='current-question'>{questionData[currentQuestion].questionText}</h4>
          </div>
          <div className='difficulty-tags'>
            <span className='difficulty-word'>Difficulty </span><span className= {questionData[currentQuestion].difficulty==='easy' ? 'diff-easy' : questionData[currentQuestion].difficulty==='medium' ? 'diff-medium' : 'diff-hard'}>{questionData[currentQuestion].difficulty}</span>
          </div>
          <div className="img-container">
            <img className='question-image' src={questionData[currentQuestion].questionImage}></img>
          </div>

          <div className='answers-button-container'>
            {questionData[currentQuestion].answerOptions.map( element => {
              return (
              <div >
                
                <button className="answer-btn" onClick={() => {
                  if (element.isCorrect) {
                    setScore(score + 1)
                  }
                  {nextQuestion()}}}>
                    {element.answerText}
                    </button>
                    
                </div>)
            })}
            
          </div>
            <div className='progress-bar'><ProgressBar completed={progressBarState} customLabel={`${progressBarState}/30`} maxCompleted={30} width='83%'/></div>
        </div>} </div>}
      </div>
     
    </main>
  );
}

export default App;
