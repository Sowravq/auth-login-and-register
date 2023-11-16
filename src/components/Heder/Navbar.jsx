import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../ContaxApi/ContaxProvaider";



const Navbar = () => {
    const  {users,logOut} = useContext(authContext);
     const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('singout succesful');
        })
        .catch(error=>{
            console.log(error);
        })
     }
     
    return (
        <div className="flex items-center justify-between shadow-lg p-4">
            <div>
                {
                    users? <p className="text-3xl font-bold">{users.email}</p>:
                    <h2 className="text-4xl font-bold">FireBase</h2>
                }
                 
                 
            </div>
            <div>
                <ul className="flex gap-4 items-center">
                    <li  ><NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                    }>Home</NavLink></li>
                   {users &&
                      <li  ><NavLink to="/accordin" className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                  }>Accordion</NavLink></li>
                   }
                    
                    <li  ><NavLink to="/register" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                    }>Register</NavLink></li>
                   {
                    users?  <button onClick={handleLogOut} className="btn btn-outline btn-warning">Log Out</button>:
                    <li ><NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                }>Login</NavLink></li>
                   }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;