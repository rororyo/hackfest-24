import React, { useState, useEffect, useRef } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { getFirestore, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, app } from '../../../firebase';
import { useNavigate } from 'react-router';
import { Desktop, Mobile } from '../../utils/MediaQuery';

const db = getFirestore(app);

function Signin() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [googleSuccessMessage, setGoogleSuccessMessage] = useState(null);
  const isLoggingIn = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (isLoggingIn.current) {
          setSuccessMessage(`Account logged in successfully! Welcome, ${user.email}`);
          // Setelah menampilkan pesan sukses, kosongkan pesan setelah 3 detik (3000 milidetik)
          const timeoutId = setTimeout(() => {
            setSuccessMessage(null);
            navigate('/user-dashboard');
          }, 3000);

          return () => clearTimeout(timeoutId); // Membersihkan timeout saat komponen di-unmount
        }
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      isLoggingIn.current = true;
      setGoogleSuccessMessage(`Account logged in successfully via google! Welcome, ${user.displayName}`);
      // Setelah menampilkan pesan sukses, kosongkan pesan setelah 3 detik (3000 milidetik)
      const timeoutId = setTimeout(() => {
        setGoogleSuccessMessage(null);
      }, 3000);

      return () => clearTimeout(timeoutId); // Membersihkan timeout saat komponen di-unmount
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailAndPasswordAuth = async () => {
    try {
      if (isRegistering) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        setUser(user);
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        setUser(user);
      }
      setError(null);

      // Tampilkan pesan sukses login/registrasi
      setSuccessMessage(`Account logged in successfully via email!`);

      // Setelah menampilkan pesan sukses, kosongkan pesan setelah 3 detik (3000 milidetik)
      const timeoutId = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);

      return () => clearTimeout(timeoutId); // Membersihkan timeout saat komponen di-unmount
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
            <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>let's sign in and prove the results.</div>
          </div>
        </div>
        <div className="tech flex border bg-gradient-to-tr from-[#d8d8d83a] flex-col h-auto w-auto mx-52 my-5 mb-36 py-8 px-12 rounded-xl">
          {user && (
            <div className="chat-container">
              {successMessage && <div className="text-green-500">{successMessage}</div>}
              {googleSuccessMessage && <div className="text-green-500">{googleSuccessMessage}</div>}
            </div>
          )}
          <div className="text-2xl font-bold mx-auto">
            {isRegistering ? 'Register' : 'Sign In'}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-medium my-auto">Email</div>
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
          <div className="flex flex-col gap-2 my-7">
            <div className="text-xl font-medium my-auto">Password</div>
            <input
              className="border border-white py-3 px-4 w-full mb-2 rounded-xl text-black"
              placeholder="Insert your Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <a href="/signup" className="text-sm" htmlFor="signUpHere">
            Sign Up here
          </a>
          <div className="flex flex-row ml-auto">
            <div className="flex items-end justify-end gap-4">
              <button
                className="bg-second hover:bg-navbar text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleGoogleLogin}
              >
                Google Account
              </button>
              <button
                className="bg-second hover:bg-navbar text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleEmailAndPasswordAuth}
              >
                {isRegistering ? 'Register' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className='relative h-[60vh] overflow-hidden'>
          <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full flex justify-evenly items-center text-center flex-col gap-8'>
            <div className='flex text-6xl font-bold'>Welcome to the Z-Sharp Era</div>
            <div className='flex text-xl font-normal'>let's sign in and prove the results.</div>
          </div>
        </div>
        <div className="tech flex border bg-gradient-to-tr from-[#d8d8d83a] flex-col h-auto w-auto mx-2 my-5 mb-36 py-8 px-8 rounded-xl">
          {user && (
            <div className="chat-container">
              {successMessage && <div className="text-green-500">{successMessage}</div>}
              {googleSuccessMessage && <div className="text-green-500">{googleSuccessMessage}</div>}
            </div>
          )}
          <div className="text-2xl font-bold mx-auto">
            {isRegistering ? 'Register' : 'Sign In'}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-medium my-auto">Email</div>
            <input
              className="border border-white py-3 px-4 w-full mb-2 rounded-xl"
              placeholder="Insert your Email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-7 mt-4">
            <div className="text-xl font-medium my-auto">Password</div>
            <input
              className="border border-white py-3 px-4 w-full mb-2 rounded-xl"
              placeholder="Insert your Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <a href="/signup" className="text-sm mb-2" htmlFor="signUpHere">
            Sign Up here
          </a>
          <div className="flex flex-row">
            <div className="flex gap-4">
              <button
                className="bg-second hover:bg-navbar text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleGoogleLogin}
              >
                Google Account
              </button>
              <button
                className="bg-second hover:bg-navbar text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleEmailAndPasswordAuth}
              >
                {isRegistering ? 'Register' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>

      </Mobile>
    </>
  );
}

export default Signin;
