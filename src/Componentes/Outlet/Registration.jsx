import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../FirebaseItems/Improt';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [Check, setCheck] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const CheckBox = e.target.check.checked;
    // const confirmPassword = e.target.email.value;
    console.log(email, password, CheckBox);

    setError('');
    setSuccess('');
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        'Password is invalid. It must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.'
      );
      return;
    }

    if (!Check) {
      setError('Please accept our all terms and conditions');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('Your account create successfully');

        sendEmailVerification(auth.currentUser).then(() => {
          console.log('Email Verification');
        });
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-[#eaf8f9] h-[550px] my-10 relative">
      <h2 className=" absolute left-3 top-3 text-gray-200 font-bold">
        Registration Page
      </h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-4 font-bold text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye></FaRegEye>}
            </button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered"
              // required
            />
          </div>

          <div className="form-control" onClick={() => setCheck(!Check)}>
            <label className="cursor-pointer justify-start label">
              <input
                type="checkbox"
                name="check"
                className="checkbox checkbox-accent"
              />
              <span className="label-text ml-2">
                Accept our all terms and conditions
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-accent text-white">Registration</button>
          </div>

          <div>
            <p>
              Already have an account?
              <Link to="/Login">
                <span className="text-accent"> Login</span>
              </Link>
            </p>
          </div>
        </form>

        <div className="ml-2 mb-1 text-red-500">
          {Error && <p className="text-red-500">{Error}</p>}
          {Success && <p className="text-green-500">{Success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Registration;
