import React from "react";
import ReactDOM from "react-dom/client";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";


// const About = () => {
//     return(
//         <div>
//             <h1>This is about page</h1>
//             {/*This is function based component*/}
//             <Profile name="akash" email="akash@gmail.com" address="mumbai"/>
//             {/*This is Class based component*/}
//             <ProfileClass name="mohit" email="mohit@gmail.com" address="pune" />
//         </div>
//     )
// }
// export default About;
// -------------------------------------------------------------------------------------


//?here this React.Component can also be written as Component, if we destructure it while importing (eg --> "import {Component} from React")

class About extends React.Component{
    constructor(){super()
        
    }
    render(){
        
        return(
            <div>
                <h1>this is about page</h1>
                <ProfileClass />
            </div> 
        )
    }
    componentDidMount(){
        
    }
}
export default About;
