import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
      <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return firstName
        && (email && validateEmail(email))
        && password.value.length >= 8
        && (role === "individual" || role === "business");
  };

  const clearForm = () => {
    // Implement this function
    setFirstName('');
    setLastName('');
    setEmail("")
    setPassword({value: "", isTouched: false})
    setRole('')

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  function handlePasswordChange(e) {
    setPassword({value: e.target.value, isTouched: false})
  }


  const isPasswordValid = () => {
    return password.value.length >= 8 && password.isTouched
  }

  function handleOnBlur(e) {
    setPassword({value: e.target.value, isTouched: true})
  }

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                  placeholder="First name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                  placeholder="Last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}

              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
              />

            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                  placeholder="Password"
                  type="password"
                  value={password.value}
                  onChange={handlePasswordChange}
                  onBlur={handleOnBlur}
              />
              {!isPasswordValid() && password.isTouched && <PasswordErrorMessage/> }

            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
              >
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
  );
}

export default App;
