 
import { FaShieldAlt, FaFileAlt, FaWallet } from "react-icons/fa";
import Link from "next/link";

export default function ConfidenceSection() {
  return (
    <section className="confidence-section">
      <div className="confidence-container">

        {/* LEFT */}
        <div>
          <h2 className="confidence-title">
            Buy Your Next Car with Confidence
          </h2>

          <p className="confidence-desc">
            Browse our premium vehicles. Every car is inspected and verified.
          </p>

          <div className="confidence-cards">

            <div className="confidence-card">
              <FaShieldAlt className="confidence-icon" />
              <div>
                <h4>Certified Quality Standards</h4>
                <p>Thorough inspection for safety & performance.</p>
              </div>
            </div>

            <div className="confidence-card">
              <FaFileAlt className="confidence-icon" />
              <div>
                <h4>Transparent Vehicle History</h4>
                <p>Complete ownership and service records.</p>
              </div>
            </div>

            <div className="confidence-card">
              <FaWallet className="confidence-icon" />
              <div>
                <h4>Flexible Financing</h4>
                <p>Easy EMI and budget-friendly options.</p>
              </div>
            </div>

          </div>

     <Link href="/car-list">
  <button className="confidence-btn">
    Browse Inventory
  </button>
</Link>
        </div>

        {/* RIGHT */}
        <div className="confidence-image-wrapper">
          <img src="/assets/car.jpeg" alt="car" className="confidence-image" />
        </div>

      </div>
    </section>
  );
}