 import Layout from "@/components/layout/Layout";
import React from "react";

export default function Page() {

 const jobs = [
  {
    title: "Auto Denter",
    desc: [
      "Inspect vehicle body damage and assess repair requirements",
      "Perform dent removal, panel beating, and body alignment work",
      "Repair or replace damaged body panels, doors, fenders, and bumpers",
      "Use hand tools, power tools, welding, hammering, grinding, sanding",
      "Ensure proper body alignment before painting",
      "Work with painters and workshop team",
      "Maintain tools and workshop cleanliness",
      "Follow safety and quality procedures",
    ],
    type: "Full-time",
  },

  {
    title: "Auto Electrician",
    desc: [
      "Inspect, diagnose and repair vehicle electrical systems",
      "Repair wiring, lighting, battery, starter, alternator, ignition",
      "Work on AC, power windows, central locking, infotainment",
      "Install sensors and electronic components",
      "Perform preventive maintenance",
      "Read wiring diagrams and manuals",
      "Follow safety and quality standards",
    ],
    type: "Full-time",
  },

  {
    title: "Senior Auto Mechanic",
    desc: [
      "Inspect, diagnose and repair vehicle issues",
      "Oil change, brake repair, suspension, engine tune-up",
      "Use diagnostic tools and manuals",
      "Replace worn or faulty parts",
      "Test vehicles after repair",
      "Maintain workshop safety",
      "Follow company policies",
      "Provide repair reports to supervisor",
    ],
    type: "Full-time",
  },

  {
    title: "Sales Outdoor Marketing (Arabic Speaking)",
    desc: [
      "Execute indoor and outdoor marketing campaigns",
      "Promote vehicle sales through field marketing",
      "Coordinate showroom promotions",
      "Assist in digital marketing",
      "Build customer relationships",
      "Prepare marketing reports",
      "Represent company professionally",
      "Valid UAE driving license required",
      "Marketing / automobile experience preferred",
    ],
    type: "Full-time",
  },
];

  return (
    <Layout headerStyle={1} footerStyle={1}>
      
      {/* HERO */}
      <section className="career-hero text-center">
        <div className="container">
          <h1>Careers</h1>
          <p>Join our workshop team and grow with us</p>
        </div>
      </section>

      {/* JOB LIST */}
 <section className="career-section">
  <div className="container">

    {jobs.map((job, index) => (
      <div className="job-card mx-auto mb-4" key={index}>

        {/* TITLE */}
        <h3 className="text-dark mb-3">
          {job.title}
        </h3>

        {/* DESCRIPTION */}
        <ul className="job-desc">
          {job.desc.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        {/* BOTTOM ROW */}
        <div className="job-footer">

          <p className="job-type">
            Job Type: Full-time
          </p>

          {/* <a
            href="mailto:optimusmegatroncars@gmail.com"
            className="apply-btn"
          >
            Apply Now
          </a> */}

          <p className="apply-mail">
            Apply: 
            <a href="mailto:optimusmegatroncars@gmail.com">
              optimusmegatroncars@gmail.com
            </a>
          </p>

        </div>

      </div>
    ))}

  </div>
</section>

    </Layout>
  );
}