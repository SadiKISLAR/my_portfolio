import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import {
    ErrorEmailToastDark,
    ErrorEmailToastLight,
    SendEmailToastDark,
    SendEmailToastLight,
} from "../../utils/customToastify";

const Contact = () => {
    const initialState = {
        user_name: "",
        user_subject: "",
        user_email: "",
        user_message: "",
    };
    const formRef = useRef();
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_jg6fgmp",
                "template_vl9uckh",
                formRef.current,
                "kvpaxHFcI6rNUTJwQ"
            )
            .then(
                (result) => {
                    {
                        SendEmailToastLight("Email Send Successfuly");
                    }
                    setForm(initialState);
                },
                (error) => {
                    {
                        ErrorEmailToastLight(error.text);
                    }
                }
            );
    };
    return (
        <div id="contact" className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">If you want to work with me, please contact me!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <i className="fa-solid fa-envelope c-icon fa-lg"></i>
                            sadi22kislar@gmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What do you want?</b> Get in touch. Always available for
                        freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                            }}
                            type="text"
                            placeholder="Name"
                            name="user_name"
                            value={form?.user_name || ""}
                            onChange={handleChange}
                            required
                        />
                        <input
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                            }}
                            type="text"
                            placeholder="Subject"
                            name="user_subject"
                            value={form?.user_subject}
                            onChange={handleChange}
                            required
                        />
                        <input
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                            }}
                            type="email"
                            placeholder="Email"
                            name="user_email"
                            value={form?.user_email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                            }}
                            id=""
                            rows="5"
                            placeholder="Message"
                            name="user_message"
                            value={form?.user_message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact