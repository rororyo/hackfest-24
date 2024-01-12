import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, app } from '../../../firebase';
import { useNavigate } from 'react-router';
import { Desktop, Mobile } from '../../utils/MediaQuery';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Validasi password
      if (password !== repeatPassword) {
        setError('Passwords do not match');
        return;
      }

      // Registrasi pengguna
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Reset state
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setError('');

      // Tampilkan pesan berhasil
      setSuccessMessage(`Account created successfully! Welcome, ${user.email}`);
      navigate("/");

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Desktop>
        <div className='relative h-[60vh] overflow-hidden'>
          <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
            <div className='flex text-7xl font-bold justify-center text-center px-64 py-10'>Welcome to the Z-Sharp Era</div>
            <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>let's sign up and prove the results.</div>
          </div>
        </div>

        <div className="tech flex border bg-gradient-to-tr from-[#d8d8d83a] flex-col h-auto w-auto mx-52 my-5 mb-36 py-8 px-12 rounded-xl">
          <div className="text-2xl font-bold mx-auto">Sign Up</div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-medium my-auto'>Email</div>
            <input
              className="border border-white py-3 px-4 w-full mb-2 rounded-xl text-black"
              placeholder="Insert your Email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-2 my-7'>
            <div className='text-xl font-medium my-auto'>Password</div>
            <input
              placeholder="Insert your Password"
              name="password"
              className="border border-white py-3 px-4 w-full mb-2 rounded-xl text-black"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-medium my-auto'>Repeat Password</div>
            <input
              className="border border-white py-3 px-4 w-full mb-2 rounded-xl text-black"
              placeholder="Insert your Password Again"
              name="repeatPassword"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-red-500">{error}</div>}
          {successMessage && <div className="text-green-500">{successMessage}</div>}

          <a href='/signin' className="text-sm" htmlFor="rememberMe">
            Sign In here
          </a>
          <div className="flex items-end justify-end">
            <button
              className="bg-second hover:bg-navbar text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignUp}
            >
              Submit
            </button>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className='relative h-[50vh] overflow-hidden'>
          <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
            <div className='flex text-5xl font-bold justify-center text-center px-8 py-10'>Welcome to the Z-Sharp Era</div>
            <div className='flex text-xl font-normal justify-center text-center px-8 py-10'>let's sign up and prove the results.</div>
          </div>
        </div>
        <div className="tech flex border bg-gradient-to-tr from-[#d8d8d83a] flex-col h-auto w-auto mx-2 mb-36 py-8 px-8 rounded-xl gap-4">
          <div className="text-2xl font-bold mx-auto">Sign Up</div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-medium my-auto'>Email</div>
            <input
              className="border border-white py-3 px-4 w-full rounded-xl"
              placeholder="Insert your Email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-medium'>Password</div>
            <input
              className="border border-white py-3 px-4 w-full rounded-xl"
              placeholder="Insert your Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-medium'>Repeat Password</div>
            <input
              className="border border-white py-3 px-4 w-full rounded-xl"
              placeholder="Insert your Password Again"
              name="repeatPassword"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-red-500">{error}</div>}
          {successMessage && <div className="text-green-500">{successMessage}</div>}

          <a href='/signin' className="text-sm" htmlFor="rememberMe">
            Sign In here
          </a>
          <div className="flex items-end justify-end">
            <button
              className="bg-second hover:bg-navbar text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignUp}
            >
              Submit
            </button>
          </div>
        </div>

      </Mobile>
    </>
  );
}

export default Signup;
