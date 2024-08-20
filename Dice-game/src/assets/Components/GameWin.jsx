import React from 'react'

const GameWin = ({play}) => {
  return (
    <section className="container startGameSection center">
    <div className="gameLose">
      <div className="startGameFirstDiv">
        <img className="commonImg" src="Images/happy.jpg" alt="Dices" />
      </div>
      <div className="gameLoseSecDiv">
        <h2 className="mb-20">You Win the game</h2>
        <button className="btn playBtn" onClick={play}>
          Play Again
        </button>
      </div>
    </div>
  </section>
  )
}

export default GameWin