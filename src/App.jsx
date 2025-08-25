import { useState } from 'react'


function App() {
      const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  return (
    <>
      <div >
        <h1>Form in React </h1>
        <form>
          <label htmlFor="firstname" style={{ display: "block" }}>First  Name:</label>
          <input type="text" id="name" name="firstname" required placeholder='Enter your First Name' />
          <br /><br />
          <label htmlFor="Lastname" style={{ display: "block" }}>Last Name:</label>
          <input type="text" id="name" name="Lastname" placeholder='Enter Last Name'/>
          <br /><br />
          <label htmlFor="email" style={{ display: "block" }}>Email:</label>
          <input type="email" id="name" name="email" required placeholder='Enter your Email Address'/>
          <br /><br />
          <label htmlFor="contact" style={{ display: "block" }}>Contact Number:</label>
          <input type="tel" id="name" name="contact" required placeholder='Enter your Contact Number' />
          <br /><br />

        </form>
      </div>
    </>
  )
}

export default App
