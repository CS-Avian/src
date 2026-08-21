import React,{useState} from 'react'
 
export default function Ui() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   if (isLoggedIn) {
  return (
    <div>
       <h1>Welcome User</h1>
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
    </div>
  )
}