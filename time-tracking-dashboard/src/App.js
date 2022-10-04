import { TimerCard } from "./@components/TimerCard";
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
      <TimerCard/>
      <TimerCard/>
      <TimerCard/>
      <TimerCard/>
    </div>

    </div>
    </>
  );
}

export default App;
