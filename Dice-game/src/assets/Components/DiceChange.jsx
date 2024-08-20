import React, { useState } from "react";

const DiceChange = ({ onChangeDice, getDiceNo }) => {
  // const [diceNo, setDiceNo] = useState(1);
  
  // Change Randomly Dice when it click
  const changeDice = (min, max) => {
    const num = Math.floor(Math.random() * (max - min) + min);
    // setDiceNo(num);
    console.log(num);
    onChangeDice(num);
  };
  return (
    <>
      {/* {console.log(getDiceNo)} */}
      
      <img
        src={`Images/dice_${getDiceNo == null ? 1 : getDiceNo}.png`}
        alt={`Dice No is${getDiceNo}`}
        onClick={() => changeDice(1, 7)}
      />
    </>
  );
};

export default DiceChange;
