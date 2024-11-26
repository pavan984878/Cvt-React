import { useState } from "react";
import "./ProfileCard.css";
function ProfileCard(props){
    // console.log('value of props received at profile Card:',props);
    let styles ={
      backgroundColor:"blanchedalmond",
      margin:"0 auto",
      width:"10rem",
    };
    // let showbio = false;
    let [showbio, setshowbio] = useState(false);
    return(
        // <>This is Profile Card </>
        <div className='container'>
        {/* // <div style={{backgroundColor:"blanchedalmond", margin:"0 auto", width:"10rem"}}> */}
        {/* <div style={styles}> */}
            {/* name:{props.name} <br/>
            Age:{props.age} <br/> */}


              {/* conditional rendering   */}
            {props.age > 18 ? <div>Age: {props.age}</div> : <div>Underage</div> }
            {<div className={props.online ? 'online' : 'offline'}></div>}

                {/* this works when only if is used  */}
              {/* {props.age > 18 && <div>not underage</div>} 
              we can't be using any if else loops in jsx      */}

              <button
              onClick={() => {
                setshowbio(!showbio);
                console.log(showbio);              
              }}
              >
                Toggle Bio
                </button>
              {showbio  &&  <span>{props.bio}</span>}
        </div>
    );
}

export default ProfileCard;