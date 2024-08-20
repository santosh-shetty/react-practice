import React, { useContext, useState } from "react";
// import { Context } from "../Components/Context";

const StartGame = ({ toggle }) => {
  // const {value} = useContext(Context);

  return (
    <section className="container startGameSection center">
      {/* {console.log(value)} */}
      <div className="startGame">
        <div className="startGameFirstDiv">
          <img className="dicesImage" src="Images/Dices.jpg" alt="Dices" />
        </div>
        <div className="startGameSecDiv">
          <h1 className="BigTitle">DICE GAME</h1>
          <button className="btn playBtn" onClick={toggle}>
            Play Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartGame;
