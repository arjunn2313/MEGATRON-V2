 'use client'
import { useState } from "react"

export default function ModalOfferPrice({ isToggled5, handleToggle5 }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
Hi, I would like to make an offer for a car.

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
💰 Offer Price: ${price}
    `.trim()

    const whatsappUrl = `https://wa.me/971565049928?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div className={`modal fade ${isToggled5 ? "show d-block" : ""}`} id="offer-price">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleToggle5}
            />

            <h4 className="title-form">Make An Offer Price</h4>

            <form
              className="offer-price-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="group-form">
                <input
                  className="test-driver-name"
                  placeholder="Enter Your Name Here"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="group-form">
                <input
                  className="test-driver-mail"
                  placeholder="Email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <div className="group-form">
                <input
                  className="trade-price"
                  placeholder="Trade Price"
                  type="text"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <input
                className="test-driver-submit"
                type="submit"
                value="Send Request"
              />
            </form>
          </div>
        </div>
      </div>

      {isToggled5 && (
        <div className="modal-backdrop fade show" onClick={handleToggle5} />
      )}
    </>
  )
}
