import React, { useState, useEffect } from "react";
import DiceChange from "../Components/DiceChange";
import GameWin from "../Components/GameWin";
import GameLose from "../Components/GameLose";

const GamePlay = () => {
  const [diceNo, setDiceNo] = useState(null);
  const [userNo, setUserNo] = useState(null);
  const [score, setScore] = useState(0);
  const [showGameWin, setShowGameWin] = useState(false);
  const [showGameLose, setShowGameLose] = useState(false);
  const [firstRenderComplete, setFirstRenderComplete] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [showSelectNumAlert, setShowSelectNumAlert] = useState(false); // State for the modal

  const ButtonArray = [1, 2, 3, 4, 5, 6];

  // Function for check Dice And User Selected Number
  const checkNum = () => {
    if (userNo === diceNo) {
      const newScore = score + 10;
      setScore(newScore);
      setUserNo(null);
    } else {
      const newScore = score - 10;
      setScore(newScore);
      setUserNo(null);
    }
  };

  // Get Dice Number from DiceChange Component when it is roll
  const handleDiceChange = (num) => {
    if (userNo != null) {
      setDiceNo(num);
      // console.log("dice No :" + diceNo);
      // checkNum();
    } else {
      // alert("Please Select Any Number");
      setShowSelectNumAlert(true); // Show the modal
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setScore(0);
    setDiceNo(null);
    setUserNo(null);
    setShowGameWin(false);
    setShowGameLose(false);
    setShowSelectNumAlert(false); // Hide the modal
  };

  // closeAlertMessageFun
  const closeAlertMessageFun = () => {
    setShowSelectNumAlert(false); // Hide the modal
  };

  // Check for diceNo and userNo changes
  useEffect(() => {
    if (firstRenderComplete) {
      checkNum();
    } else {
      setFirstRenderComplete(true);
    }
  }, [diceNo]);

  // Check for winning and losing conditions
  useEffect(() => {
    if (score === 50) {
      setShowGameWin(true);
    } else if (score === -50) {
      setShowGameLose(true);
    }
  }, [score]);

  // This function is call when game play end and click play again in lose or win component
  const PlayAgainFun = () => {
    setPlayAgain((prev) => !prev);
    setScore(0); // Reset the score
    setShowGameLose(false); // Hide the GameLose component
    setShowGameWin(false); // Hide the GameWin component
  };

  // Return Game Win And Loose Components if True
  if (showGameWin) {
    return <GameWin play={PlayAgainFun} />;
  }

  // Return Game Loose Components if True
  if (showGameLose) {
    return <GameLose play={PlayAgainFun} />;
  }

  return (
    <section className="container">
      <div className="topDiv">
        <div className="topLeftDiv">
          <h1 className="score">{score}</h1>
          <p className="commonTitle">Total Score</p>
        </div>
        <div className="topRightDiv">
          <div className="buttons">
            {ButtonArray.map((num, key) => {
              return (
                <button
                  key={key}
                  className={`btn numBtn ${userNo === num ? "active" : ""}`}
                  onClick={() => setUserNo(num)}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <p className="commonTitle">
            {userNo ? `Your Selection is ${userNo}` : "Select One Number"}
            <br />
          </p>
        </div>
      </div>
      <div className="bottomDiv center">
        <DiceChange onChangeDice={handleDiceChange} getDiceNo={diceNo} animate={true} />
        <p className="commonTitle">{diceNo ? `Dice no. is ${diceNo}` : "Click on Dice to roll"}</p>
        <button className=" btn resetBtn " onClick={resetGame}>
          Reset Score
        </button>
        {/* Game Rule  Model Btn */}
        <button
          className=" btn ruleBtn"
          data-bs-toggle="modal"
          data-bs-target="#ruleModal"
        >
          Game Rule
        </button>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="ruleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  How to play dice game
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                1. Select any number
                <br />
                2. Click on dice image
                <br />
                3. after click on dice if selected number is equal to dice
                number you will get 10 point <br />
                4. if you get wrong guess then 10 point will be dedcuted
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn ruleBtn"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* This model show when no any no choosed */}

        <div
          className={`modal fade ${showSelectNumAlert ? "show" : ""}`}
          id="selectNumAlert"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: showSelectNumAlert ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Alert Message
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p style={{ color: "red",fontWeight:'600'}}>You have not selected any number</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn ruleBtn"
                  data-bs-dismiss="modal"
                  onClick={closeAlertMessageFun}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePlay;
