import { TimerCard } from "./@components/TimerCard";
import { UserCard } from "./@components/UserCard";
import { data } from "./@data/data";
import "./app.css"

function App() {

 /* { 
    data.map( (data) =>  <TimerCard key={data.title} data={data} /> )
  }*/

 // const getData = data.map( (data) =>  <TimerCard key={data.title} data={data} /> )

  const sendTime = (bottonRes) => {
    console.log(bottonRes);
  }

  return (
  <>
  <div className="all">
    <div className="gridish">
      <section className="item-usercard">
        <UserCard sendTime={sendTime} />
      </section>
      
      <TimerCard />

    </div>
  </div>
  </>
  );
}

export default App;
