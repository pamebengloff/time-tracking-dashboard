import "./usercard-styles.css";
import Userphoto from "../@images/image-jeremy.png";

export function UserCard(props) {
    return (
    <>
    <div className="user-container">

            <div className="info-container">
                
                <div className="user-img">
                    <img src={Userphoto} alt="" />
                </div>
               
               <div className="user-text">
                    <h4>Report for</h4>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>

            <div className="time-type-container">
                <h4>Daily</h4>
                <h4>Weekly</h4>
                <h4>Monthly</h4>
            </div>
    
    </div>

    </>
    );
}

