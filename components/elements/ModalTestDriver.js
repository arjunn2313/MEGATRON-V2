"use client";
import { useState } from "react";

export default function ModalTestDriver({ handleToggle4, isToggled4 }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10h00am - 11h00am");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hi, I would like to schedule a test drive.

📅 Date: ${date}
⏰ Time: ${time}
👤 Name: ${name}
📞 Phone: ${phone}
    `.trim();

    const whatsappUrl = `https://wa.me/971565049928?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div
        className={`modal fade ${isToggled4 ? "show d-block" : ""}`}
        id="test-driver"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleToggle4}
            />
            <h4 className="title-form">Schedule Test Driver</h4>
            <form
              onSubmit={handleSubmit}
              method="post"
              className="test-driver-form"
              aria-label="Contact form"
              noValidate="novalidate"
              data-status="init"
            >
              <div className="group-form">
                <input
                  className="datetimepicker"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="group-form">
                <div className="group-select">
                  <select
                    className="nice-select"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  >
                    <option data-value className="option selected">
                      10h00am - 11h00am
                    </option>
                    <option data-value="11h00am - 12h00am" className="option">
                      11h00am - 12h00am
                    </option>
                    <option data-value="13h00am - 14h00am" className="option">
                      13h00am - 14h00am
                    </option>
                    <option data-value="15h00am - 16h00am" className="option">
                      15h00am - 16h00am
                    </option>
                  </select>
                </div>
              </div>
              <div className="group-form">
                <input
                  className="test-driver-name"
                  placeholder="Enter Your Name "
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group-form">
                <input
                  className="test-driver-form"
                  placeholder="Your Phone"
                  type="tel"
                   required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                className="test-driver-submit"
                type="submit"
                defaultValue="Send Request on WhatsApp"
              />
            </form>
          </div>
        </div>
      </div>
      {isToggled4 && (
        <div className="modal-backdrop fade show" onClick={handleToggle4} />
      )}
    </>
  );
}
