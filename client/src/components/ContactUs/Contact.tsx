import axios from "axios";
import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://walter-wallet-server.vercel.app/send",
      data: { state },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        setState({ name: "", email: "", message: "", subject: "" });
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  return (
    <div className="w-[100vw]">
      <div className="container">
        <div className="row">
          <div className="flex items-center justify-center py-[50px]">
            <div>
              <h2 className="text-4xl overflow-hidden">Contact Us</h2>
              <p className="py-3">
                Let us know what you think! In order to provide better service,
                please do not hesitate to give us your feedback. Thank you.
              </p>
              <hr className="w-full" />
              <form method="POST" onSubmit={submitEmail}>
                <div className="py-4">
                  <div className="flex">
                    <div className="flex-1">
                      <input
                        placeholder="Name"
                        id="name"
                        type="text"
                        className={styles.form_control}
                        required
                        onChange={(e) =>
                          setState({ ...state, name: e.target.value })
                        }
                        value={state.name}
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        className={styles.form_control}
                        aria-describedby="emailHelp"
                        required
                        onChange={(e) =>
                          setState({ ...state, email: e.target.value })
                        }
                        value={state.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <input
                    placeholder="Subject"
                    id="subject"
                    type="text"
                    className={styles.form_control}
                    required
                    onChange={(e) =>
                      setState({ ...state, subject: e.target.value })
                    }
                    value={state.subject}
                  />
                </div>
                <div className="py-4">
                  <textarea
                    placeholder="Message"
                    id="message"
                    className={styles.form_text}
                    required
                    onChange={(e) =>
                      setState({ ...state, message: e.target.value })
                    }
                    value={state.message}
                  />
                </div>
                <button
                  type="submit"
                  className="w-[150px] bg-blue-600 text-white rounded py-2 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
