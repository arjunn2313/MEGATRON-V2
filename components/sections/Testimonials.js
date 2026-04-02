"use client";

export default function Testimonials() {
  const reviews = [
    {
      text: "Honestly, the experience was outstanding from start to finish. Extremely professional, trustworthy, and easy to deal with—everything was smooth and stress-free.",
    },
    {
      text: "From the first interaction to the final step, the service was excellent. Transparent, professional, and very easy to work with. Highly recommended.",
    },
    {
      text: "An excellent experience overall. Everything was handled efficiently, and communication was clear from start to finish. Truly reliable service.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">

        <h2 className="testimonials-title">
          Our Happy Customers
        </h2>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              
              <span className="quote-icon left">“</span>
              <p>{review.text}</p>
              <span className="quote-icon right">”</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}