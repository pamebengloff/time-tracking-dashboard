import { Timers } from "./@components/Timers";
import { UserCard } from "./@components/UserCard";
import {getDataForCards} from "./getDataForCards"
import "./app.css"

function App() {

  getDataForCards();

  return (
    <>
    <div className="all">
   
    <div className="usercard">
      <UserCard/>
    </div>

    <div className="timers">
      <Timers/>
    </div>

    </div>
    </>
  );
}

export default App;
