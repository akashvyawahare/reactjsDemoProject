import React from "react";
import Skeleton from "./skeleton";

class ProfileClass extends React.Component {
   constructor(){
        super();
        this.state = {
            //count : 0, //this is first state variable
            //count2 : 0 //this is another state variable
            userDetails : null
        }
        console.log("constructor");
        
        
   }
   render(){
            console.log("render method");
            
        //just like we return the jsx from a component, in a class based component we return the jsx from the render method. 
        if(this.state.userDetails === null)
            return <Skeleton/>
            const {name, url, avatar_url, location, company} = this.state.userDetails;
        return (
            <div style={{border : "1px solid black", padding : "20px", borderRadius : "8px", marginTop : "6px"}}>
                <h1>name : {name}</h1>
                <h1>profile URL : {url}</h1>
                <h1>location : {location}</h1>
                <h1>company : {company}</h1>
                <img src={avatar_url} style={{height : "200px"}} alt="avatar" />
                <p>This is class based component</p>

            </div>
        )

   }
   //componentDidMount() executes after constructor() and render() method. (it is just like useEffect hook which executes after complete rendering of the component). we use this method to invoke apis
   async componentDidMount(){
    console.log('componeentDidMount');
    
    //here we made this componentDidMount as async bcoz we want to fetch the api data inside of it
        const data = await fetch("https://api.github.com/users/Surendrakumarpatel");
        const resData = await data.json();
        
        this.setState({
            userDetails : resData,
        })

        
        
   }

   componentDidUpdate(){
    console.log('componentDidUpdate is called');
    this.timer = setInterval(()=>{console.log('akash');
    }, 1000) //here we did 'this.timer' instead of 'const timer/let timer' bcoz we wanted to access it regardless of its scope.(so that we would be able to access it inside of componentWillUnmount()).setInterval(callback, time) executes a function repeatedly after a fixed amount of time (in milliseconds).
   }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timer); //clearInterval() is just a built js method.It is used to stop an interval timer that was previously created using setInterval().
        //If we don’t stop the interval, it keeps running forever, even when the component or program no longer needs it.
        //In React, especially in componentWillUnmount() or useEffect cleanup, we use clearInterval() to stop intervals when the component is removed, to avoid memory leaks.
        
    }
}

export default ProfileClass;

/**
 *todo) React lifecycle of this component -->
 * 
 *? [MOUNTING PHASE]
 * 
 * constructor() method will be called first.
 * 
 * then, the render() method will be called.
 * 
 * in render(), it will check if userDetails is null or not. If yes it will return <Skeleton/> and execution of render() will be completed.(It will be definitely empty for the component's first render).
 * 
 *? [UPDATING PHASE]
 * 
 * then, componentDidMount will be called.
 * 
 * In, componentDidMount(), we are fetching the api and updating the state variable 'userDetails' by storing APIs response data in it. 
 * 
 * so, as the state variable updates, the component renders again, and the render() method called again with the updated data.
 * 
 * now, as our component rendered again, the componentDidUpdate() method will be called. this method runs after every update(re-render) of our component.
 * 
 * 
 * 
 */