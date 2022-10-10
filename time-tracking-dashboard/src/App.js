import { TimerCard } from "./@components/TimerCard";
import { UserCard } from "./@components/UserCard";
import {getDataForCards} from "./getDataForCards"
import "./app.css"

function App() {

  getDataForCards();

  return (
  <>
  <div className="all">
    <div className="gridish">
       <section className="item-usercard">
        <UserCard/>
        </section>
        <TimerCard/>
    </div>
  </div>
  </>
  );
}

export default App;
