import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Default, Mobile } from "../utils/MediaQuery";

export default function Dropdown() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        if (user.displayName != null) {
          setUser(user.displayName);
        } else {
          setUser(user.email);
        }
      } else {
        setIsLogin(false);
      }
    });
  }
    , []);
  return (
    <>
      <Default>
        <div className="relative">
          <div className="mr-7 rounded-full bg-white py-2 px-4">
            {isLogin ?
              <button onClick={() => setIsDropdown(!isDropdown)} className="text-black font-bold w-36 overflow-hidden truncate">
                <p>
                  {user}
                </p>
              </button>
              :
              <a href="/signin" className="text-black font-bold">Sign In</a>
            }
            {isLogin ?
              <div className="absolute w-36 right-12 top-12 z-50">
                {isDropdown &&
                  <div className="bg-white border-2 rounded-lg flex flex-col justify-start gap-2 py-2 px-2">
                    <button onClick={() => window.location.href = "/user-dashboard"} className="text-black font-semibold flex hover:scale-105 transition-all w-full">
                      <img src="./assets/user.svg" alt="dashboard" className="mr-1 inline-block" />
                      Dashboard
                    </button>
                    <button className="text-black font-semibold flex hover:scale-105 transition-all w-full"
                      onClick={() => {
                        auth.signOut()
                        window.location.href = "/"
                      }}>
                      <img src="./assets/logout.svg" alt="logout" className="mr-2 ml-1 inline-block" />
                      Sign Out
                    </button>
                  </div>
                }
              </div>
              : null
            }
          </div>
        </div>
      </Default>
      <Mobile>
        <div className="relative">
          <div className="rounded-full bg-white py-2 px-4">
            {isLogin ?
              <button onClick={() => setIsDropdown(!isDropdown)} className="text-black font-bold w-24 overflow-hidden truncate">
                <p>
                  {user}
                </p>
              </button>
              :
              <a href="/signin" className="text-black font-bold">Sign In</a>
            }
            {isLogin ?
              <div className="absolute w-36 right-0 top-12 z-50">
                {isDropdown &&
                  <div className="bg-white border-2 rounded-lg flex flex-col justify-start gap-2 py-2 px-2">
                    <button onClick={() => window.location.href = "/user-dashboard"} className="text-black font-semibold flex hover:scale-105 transition-all w-full">
                      <img src="./assets/user.svg" alt="dashboard" className="mr-1 inline-block" />
                      Dashboard
                    </button>
                    <button className="text-black font-semibold flex hover:scale-105 transition-all w-full"
                      onClick={() => {
                        auth.signOut()
                        window.location.href = "/"
                      }}>
                      <img src="./assets/logout.svg" alt="logout" className="mr-2 ml-1 inline-block" />
                      Sign Out
                    </button>
                  </div>
                }
              </div>
              : null
            }
          </div>
        </div>
      </Mobile>
    </>
  );
}