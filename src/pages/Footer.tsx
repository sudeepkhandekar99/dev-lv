import React, { Fragment, useState } from "react";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Plugins
import axios from "axios";

// Data
import contactData from "../data/contact.json";
import { markdownToHTML } from "../utils/converter";

// Images
import logo from "../assets/images/logo2.png";
import foot_logo from "../assets/images/logo_footer_new.png";
// import mainLogo from "../assets/images/Leelavati_Logo.png";
import mainLogo from "../assets/images/lv_logo.jpg";

// Icons
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import MapPinSvg from "../assets/images/map-pin-line.svg";
import PhoneSvg from "../assets/images/phone-line.svg";
import EmailSvg from "../assets/images/mail-line.svg";
import WebSvg from "../assets/images/global-line.svg";

type formDataType = {
  "your-name": string;
  "your-email": string;
  "your-subject": string;
  "your-message": string;
};
const initialFormData = {
  "your-name": "",
  "your-email": "",
  "your-subject": "",
  "your-message": "",
};

// to handle sending form message
type serverStateType = {
  submitting: boolean;
  status?: {
    ok: boolean;
    msg: string;
  } | null;
};

// ---------------

function Footer() {
  const [formData, setFormData] = useState<formDataType>(initialFormData);
  const [serverState, setServerState] = useState<serverStateType>({
    submitting: false,
    status: null,
  });

  /**
   * Change {formData} variable when user input data
   *
   * @param e change event in form inputs
   */
  const handleDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Handle the http request we sent to send our message (that user wrote)
   * and give message to the user to know what happened, is the message sent or not.
   *
   * @param ok if message has been sent or not
   * @param msg the message to be shown to the user
   */
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFormData(initialFormData);
    }
    setTimeout(() => {
      setServerState((prev: serverStateType) => ({ ...prev, status: null }));
    }, 3000);
  };

  /**
   * Submitting message when user clock send button
   *
   * @param e form submit event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submitting Form
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: contactData.formspreeEndpoint,
      data: formData,
    })
      .then((r) => {
        handleServerResponse(true, "Message Has Been Send");
      })
      .catch((r) => {
        handleServerResponse(false, "Error occuars while sending");
      });
  };
  return (
    <footer className="footer">
      {/* <div className="footer-content center-relative"> */}
      <div className="footer-logo">
        <img src={logo} alt="Leelavati Automation" />
      </div>

      <div className="footer-container">
        <div className="section-f1">
          <img src={mainLogo} alt="Main Logo" />
          <p>
            Unit #809, The EPI Centre, <br /> Sattva & The Wadhwa Group,
            <br /> Near Shivaj Chowk, Above D-Mart,<br />
            Chembur East, Mumbai - 400071
          </p>
          <p>
            GST NO.: <b>27AABCL9949B1ZC</b>
          </p>
          <a href="https://maps.app.goo.gl/DrNmkKUBFGaBGTeu7" target="_blank">
            <button className="icon-button">
              <img src={MapPinSvg} alt="Map Pin" />
              <span>DIRECTIONS</span>
            </button>
          </a>
        </div>
        <div className="section-f2">
          <span className="section-title">Contacts</span>
          <div className="footer-contact">
            <img src={PhoneSvg} alt="Phone Icon" />
            <div className="footer-phone">
              <a href="tel:9820062906">+91 9820062906</a>
              <a href="tel:9372355842">+91 9372355842</a>
            </div>
          </div>
          <div className="footer-contact">
            <img src={EmailSvg} alt="Email Icon" />
            <div className="footer-email">
              <a href="mailto:manoj@leelavati.com">manoj@leelavati.com</a>
              <a href="mailto:leelavatiautomation@gmail.com">
                leelavatiautomation@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <img src={WebSvg} alt="Web Icon" />
            <a href="https://leelavatiautomation.com/" target="_blank">
              <span>https://leelavatiautomation.com/</span>
            </a>
          </div>

          <div className="social-holder">
            <a href="https://x.com/lapl5">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/leelavatiautomation/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.youtube.com/@leelavatiautomationplc5732">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="section-f2">
        {/* <div className="section-f3"> */}
        <div className="footer-contact">
            <img src={EmailSvg} alt="Email Icon" />
            <div className="footer-email">
            <a href="https://airtable.com/apps2k8KL4pjvKmwd/pag2VPCZHv48GYp6u/form" target="_blank">
            <p className="">Write us a message</p></a>
            </div>
          </div>
          
          {/* <div className="contact-form">
            <form action="#" method="post" onSubmit={handleSubmit}>
              <p>
                <input
                  id="name"
                  type="text"
                  name="your-name"
                  placeholder="NAME"
                  required
                  value={formData["your-name"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <input
                  id="contact-email"
                  type="email"
                  name="your-email"
                  placeholder="EMAIL"
                  pattern="(?=.*[a-zA-Z])[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                  required
                  value={formData["your-email"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <input
                  id="subject"
                  type="text"
                  name="your-subject"
                  placeholder="SUBJECT"
                  value={formData["your-subject"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <textarea
                  id="message"
                  name="your-message"
                  placeholder="MESSAGE"
                  required
                  value={formData["your-message"]}
                  onChange={handleDataChange}
                ></textarea>
              </p>
              <p className="contact-submit-holder">
                <input type="submit" value="SEND" />
              </p>
              {(serverState.submitting || serverState.status?.msg) && (
                <p className="respond-message">
                  {serverState.submitting
                    ? "Sending message"
                    : serverState.status
                    ? serverState.status?.msg
                    : ""}
                </p>
              )}
            </form>
          </div> */}
          <div className="clear"></div>
        </div>
      </div>
      {/* <div className="footer-mail">
        {contactData.contactInfo.map((info, i) => (
          <div key={"contact-info-" + i} className="info-code">
            <p className="info-code-title">{info.title}</p>
            <p className="info-code-content">
              {info.link ? (
                Array.isArray(info.link) ? (
                  info.link.map((item, index) => (
                    <a key={index} href={item.to}>
                      {item.text}
                      <br />
                    </a>
                  ))
                ) : (
                  <a href={info.link.to}>{info.link.text}</a>
                )
              ) : (
                info.value
              )}
            </p>
          </div>
        ))}
      </div> */}

      <div className="copyright-holder">
        © {new Date().getFullYear()}{" "}
        <a href="/">Leelavati Automation Pvt. Ltd.</a>
      </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
