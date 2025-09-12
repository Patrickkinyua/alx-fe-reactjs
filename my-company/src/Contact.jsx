import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "8px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "8px" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "8px" }}
        />
        <button type="button" style={{ padding: "10px", backgroundColor: "blue", color: "white" }}>
          Send
        </button>
      </form>
    </div>
  );
}
