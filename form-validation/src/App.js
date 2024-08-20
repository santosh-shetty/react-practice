import "./App.css";
import Login from "./components/Login";
import LoginFormik from "./components/LoginFormik";
import LoginHook from "./components/LoginHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login></Login> */}
        {/* <LoginFormik></LoginFormik> */}
        <LoginHook></LoginHook>
      </header>
    </div>
  );
}

export default App;
