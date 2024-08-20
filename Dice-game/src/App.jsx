import { useState } from "react";
import "./App.css";
import StartGame from "./assets/Pages/StartGame";
import GamePlay from "./assets/Pages/GamePlay";

function App() {
  const [IsGamePlay, setIsGamePlay] = useState(false);
  const GamePlayFun = () => {
    setIsGamePlay((prevState) => !prevState);
  };
  return <>{IsGamePlay ? <GamePlay/> : <StartGame  toggle={GamePlayFun}/>}</>;
}

export default App;
