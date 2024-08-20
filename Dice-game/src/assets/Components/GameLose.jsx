import React from "react";

const GameLose = ({play}) => {
  return (
    <section className="container startGameSection center">
      <div className="gameLose">
        <div className="startGameFirstDiv">
          <img className="commonImg" src="Images/sad.jpg" alt="Dices" />
        </div>
        <div className="gameLoseSecDiv">
          <h2 className="mb-20">You Lose the game</h2>
          <button className="btn playBtn" onClick={play} >
            Play Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameLose;
