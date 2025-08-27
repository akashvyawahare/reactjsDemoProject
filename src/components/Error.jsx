import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return(
        <div>
            <h1>{err.data}</h1> 
            <p>page {err.statusText}  {err.status}</p>
            
        </div>
    )
}
export default Error;