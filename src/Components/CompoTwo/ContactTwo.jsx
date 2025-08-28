import { useState } from "react";
import axios from "axios";
import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import RowImageContainer from "./Parts/RowImageContainer";
import { ContactData } from "./data";

const ContactTwo = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    setIsSubmitting(true)
    e.preventDefault();
    try {
      const res = await axios.post("https://sachin-bhadoriya-mern-stack-developer.onrender.com/api/contact", { name, contact, message });
      setSuccessMsg(res.data.message);
      setName("");
      setContact("");
      setMessage("");
    } catch (err) {
      setSuccessMsg("Something went wrong!");
    }
    setIsSubmitting(false)
  };

  return (
    <div>
      <VantaBackground />
      <div className="container text-white">
        <div className="subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt">
            <div className="txtonly">
              <h2 className="name notoSerifDisplay" style={{ marginBottom: "10px" }}>
                {ContactData.heading}
              </h2>
              <p>{ContactData.description}</p>

              <div className="contact-info mt-4">
                <p style={{ fontFamily: "monospace" }}>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${ContactData.email}`} className="text-white text-decoration-none">
                    {ContactData.email}
                  </a>
                </p>
                <p style={{ fontFamily: "monospace" }}>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${ContactData.phone}`} className="text-white text-decoration-none">
                    {ContactData.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="form-contact" onSubmit={handleSubmit}>


              <div className="form-group">
                <input
                  type="text"
                  className="nameForm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  style={{ textTransform: "capitalize" }}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel" maxlength="10" pattern="\d{10}"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Your Contact"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows="3"
                  required
                ></textarea>
              </div>
              {
                successMsg && <p className="success" style={{
                  color: "#49bd29ff", fontSize: "16px", fontWeight: 600
                }}>{successMsg}</p>
              }
              <div className="form-group">
                <button type="submit">{!isSubmitting ? "Submit" : "Submitting"}</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTwo;
