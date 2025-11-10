import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Basic required check
    if (!username.trim()) {
      alert("Please fill out the Username field.");
      return;
    }
    if (!email.trim()) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!phone.trim()) {
      alert("Please fill out the Phone field.");
      return;
    }
    if (!dob.trim()) {
      alert("Please fill out the Date of Birth field.");
      return;
    }

    // 2️⃣ Email validation
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // 3️⃣ Phone validation — must be exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // 4️⃣ Date of Birth validation — must not be in the future
    const today = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // 5️⃣ All validations passed → reset and close modal
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
    setIsOpen(false);
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <h2>Fill Details</h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />

              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
