import { useState } from 'react'


function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [submittedData, setSubmittedData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      firstname,
      lastname,
      email,
      contact,
    });

    alert("Form Submitted Successfully");
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
  }
  return (
    <>
      <div >
        <h1>Form in React </h1>
        <form style={{ alignItems: "center" }}>
          <label htmlFor="firstname" style={{ display: "block" }}>First  Name:</label>
          <input type="text" id="name" name="firstname" required placeholder='Enter your First Name'
            onChange={(e) => setFirstName(e.target.value)} value={firstname}
          />
          <br /><br />
          <label htmlFor="Lastname" style={{ display: "block" }}>Last Name:</label>
          <input type="text" id="name" name="Lastname" placeholder='Enter Last Name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
          <br /><br />
          <label htmlFor="email" style={{ display: "block" }}>Email:</label>
          <input type="email" id="name" name="email" required placeholder='Enter your Email Address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br /><br />
          <label htmlFor="contact" style={{ display: "block" }}>Contact Number:</label>
          <input type="tel" id="name" name="contact" required placeholder='Enter your Contact Number'
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          />
          <br /><br />
          <label htmlFor="gender">Gender</label>
          <input type="radio" name='gender' value="male" id='male'
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}

          />
          Male
          <input type="radio" name="gender" value="female" id='female'
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          female
          <input type="radio" name="gender" value="other" id='other'
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <br /><br />
          <button onClick={handleSubmit}>Submit</button>

        </form>
        <h1>First Name: {submittedData.firstname}</h1>
        <h1>Last Name: {submittedData.lastname}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Contact Number: {submittedData.contact}</h1>
      </div>
    </>
  )
}

export default App
