import WorkIcon from "../@images/icon-work.svg";
import "./timercard-styles.css"

export function TimerCard({data}) {
console.log(data)
    return (
    <>
        <div className="timer-card">

        <div className="icon-cont">
        <img className="icon" src={WorkIcon} alt="" />
        </div>
         
          <div className="info-card">
            
            {/* <h4> {data.title } </h4>
            
            <h1> {data.timeframes.weekly.current} </h1> */}

          </div>
        </div>
         
       
    </>
    );
}

