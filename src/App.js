import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([false, false, false]);
  const [success, setSuccess] = useState(false);

  const patterns = {
    username: /^[a-z\d]{6,14}$/i,
    password: /^[\w@-]{7,20}$/,
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };

  let errorCopy = error;

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    if (!patterns["username"].test(username)) {
      errorCopy[0] = true;
      setError([...errorCopy]);
    } else {
      errorCopy[0] = false;
      setError([...errorCopy]);
    }
    if (!patterns["email"].test(email)) {
      errorCopy[1] = true;
      setError([...errorCopy]);
    } else {
      errorCopy[1] = false;
      setError([...errorCopy]);
    }
    if (!patterns["password"].test(password)) {
      errorCopy[2] = true;
      setError([...errorCopy]);
    } else {
      errorCopy[2] = false;
      setError([...errorCopy]);
    }
    successMessage();
  };

  const successMessage = () => {
    if (
      errorCopy[0] === false &&
      errorCopy[1] === false &&
      errorCopy[2] === false
    ) {
      console.log(errorCopy);
      setSuccess(true);
    }
  };

  return (
    <div className="App">
      {success === false ? (
        <form className="form-container">
          <h3 className="big-devices">PocketChat</h3>
          <div className="form-control top-input">
            <input
              type="text"
              value={username}
              onChange={handleUsername}
              placeholder="Username..."
              className="pending"
            />
            {error[0] === false ? null : (
              <p>Username must be alphanumeric and contain 6 - 14 characters</p>
            )}
          </div>
          <div className="form-control">
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email..."
              className="pending"
            />
            {error[1] === false ? null : (
              <p>Email must be a valid address (example@gmail.com)</p>
            )}
          </div>
          <div className="form-control">
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password..."
              className="pending"
            />

            {error[2] === false ? null : (
              <p>
                Password must be alphanumeric (@._ and - are allowed) and be 8 -
                20 characters
              </p>
            )}
          </div>
          <div className="form-control-btn">
            <button onClick={login}>Login</button>
          </div>
        </form>
      ) : (
        <div className="successMessage">success chat app coming soon!!!</div>
      )}
    </div>
  );
}

export default App;
