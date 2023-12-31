import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../components/ContaxApi/ContaxProvaider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
 
  
const Register = () => {
    const  {createUser} = useContext(authContext)
    const navigate = useNavigate();
    console.log(createUser);
    const  handleRegister =e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate("/login")
        })
         .catch(error=>{
            console.log(error);
         })

        console.log(email,password,name);

        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              </form>
              <p>Already account here? Please<Link to="/login"><button className="btn btn-link">Loggin</button></Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;