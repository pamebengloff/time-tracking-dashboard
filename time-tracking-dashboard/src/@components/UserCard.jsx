import "./usercard-styles.css";
import Userphoto from "../@images/image-jeremy.png";

export function UserCard( {sendTime} ) {
 
    const mensaje = "enviado desde el hijo";
console.log(mensaje)
    return (
    <>
    <div className="user-card">

            <div className="info-container">
                
                <div className="user-img">
                    <img className="user-img" src={Userphoto} alt="" />
                </div>
               
               <div className="user-text">
                    <h4>Report for</h4>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>

            <div className="time-type-container">
               <button onClick={ () =>  sendTime(mensaje)} > <h4>Daily</h4>  </button> 
               <button onClick={sendTime} > <h4>Weekly</h4> </button> 
               <button onClick={sendTime} > <h4>Monthly</h4></button> 
            </div>
    
    </div>

    </>
    );
}

