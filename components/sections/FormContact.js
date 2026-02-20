"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function FormContact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    // ✅ Validation
    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      );

      toast.success("Message sent successfully 🚀");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="widget-contact-form">
        <div className="themesflat-container">
          <div className="contact-form">

            <div className="form-buy-car-form">
              <div className="title">Contact us Today</div>
              <p className="description">
                Your email address will not be published.
              </p>

              <form ref={form} onSubmit={sendEmail} className="form-buy-car">
                <input
                  type="text"
                  name="user_name"
                  className="input-buy-car"
                  placeholder="Full Name here"
                />

                <input
                  type="email"
                  name="user_email"
                  className="input-buy-car"
                  placeholder="Email Address"
                />

                <textarea
                  name="message"
                  className="input-buy-car"
                  placeholder="Write Message....."
                />

                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>

            <div className="map">
              <div className="map4">
                <iframe
                  src="YOUR_GOOGLE_MAP_EMBED_LINK"
                  height={570}
                  style={{ border: 0, width: "100%" }}
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
