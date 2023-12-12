import "./App.css";
import logo from "./assets/logo.png";
import TravelList from "./components/TravelList";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <div>
        <h1 className="text-iron">Iron Travels</h1>
        <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      </div>

      <TravelList />
    </>
  );
}

export default App;
