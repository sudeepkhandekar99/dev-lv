import React, { useState } from 'react';
import LOGO from "../../assets/images/icon_logo_form.png";
import close from "../../assets/images/x.svg";

type ModalProps = {
    closeModal: () => void;
};

const Modal = ({ closeModal }: ModalProps) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const downloadUrl = 'https://leelavatiautomation.com/wp-content/uploads/2022/03/Leelavati_Automation_catlog_new.pdf';
        window.location.href = downloadUrl;
        closeModal();
    };

    const handleOverlayClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={closeModal}>
                    <img src={close} alt="close" />
                </span>
                <div className="logo-container">
                    <img src={LOGO} alt="Company Logo" className="logo"/>
                </div>
                <form onSubmit={handleSubmit} className='brochure-form'>
                    <label htmlFor="name" className='text'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="inputmodal"
                    />
                    <label htmlFor="email" className='text'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="inputmodal"
                    />
                    <label htmlFor="phone"className='text'>Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="inputmodal"
                    />
                    <label htmlFor="message" className='text'>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="inputmodal"
                        rows={4}
                    />
                    <button type="submit" className="modalbutton">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
