import React from 'react'
import Bad from './bad'
import Average from './average'
import Good from './good'
import Excellent from './excellent'

import Confetti from 'react-confetti'

export default function GameOver (props) {
    

    return (
        <div className='game-over-screen'>
            <h1>Game Over</h1>
            
            <h3>Your score is {props.score}</h3>
            {props.score < 11 ? (<Bad />) :
            props.score >= 11 && props.score < 20 ?
            (<Average />) :
            props.score >= 21 && props.score < 27 ?
            (<Good />) : (<Excellent />)
            }
           
        
            <button onClick={props.playAgain}>Play Again !</button>
            

            {props.score>27 && <Confetti recycle={false} numberOfPieces={200}/>}
        </div>
    )
}