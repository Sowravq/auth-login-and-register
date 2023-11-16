import { useContext } from "react";
import { authContext } from "../ContaxApi/ContaxProvaider";
import { Navigate } from "react-router-dom";

const RouteProvaider = ({children}) => {
    const {users,lodding}=useContext(authContext)
    if(lodding){
        return(
            <div className="flex justify-center items-center mt-36">
                 <span className="loading loading-spinner loading-lg "></span>
            </div>

        ) 
            
        
    }
    if(users){
        return children;
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default RouteProvaider;