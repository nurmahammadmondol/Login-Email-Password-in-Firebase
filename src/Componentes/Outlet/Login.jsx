import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseItems/Improt';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    setSuccess(false);
    setError('');

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        if (!result.user.emailVerified) {
          setError('Your email not verified');
        } else {
          // console.log(result);
          setSuccess(true);
        }
      })
      .catch(error => {
        // console.log('ERRoR', error.message);
        setError('Your email & password invalid');
        // setError(error.message);
      });
  };

  return (
    <div className="hero bg-[#eaf8f9] h-[500px] my-10 relative">
      <h2 className=" absolute left-3 top-3 text-gray-200 font-bold">
        Login Page
      </h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-accent text-white">Login</button>
          </div>

          <div>
            <p>
              Don't have an account?
              <Link to="/Registration">
                <span className="text-accent"> Registration</span>
              </Link>
            </p>
          </div>
        </form>

        <div>
          {Success && (
            <p className="text-green-500 ml-2 mb-1">
              Your account login success
            </p>
          )}

          {Error && <p className="text-red-500 ml-2 mb-1">{Error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
