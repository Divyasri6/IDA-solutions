import React from "react";
import aboutbanner from "./about-banner.jpg";
import "./about.css";
function Aboutus() {
  return (
    <div className="section__padding">
      <img className="aboutImage" src={aboutbanner} alt="logo" />
      <div style={{ margin: "5%" }}>
        <h3 className="aboutheader">About Us </h3>
        <p className="aboutText">
          Ida helps companies leverage information technology to optimize their
          business performance to gain and sustain a competitive advantage. Ida
          is a premier IT consulting firm that offers a wide variety of
          comprehensive IT services with the ability to integrate diverse and
          complex business systems. We provide innovative advice and world-class
          service to our clients. Our strength comes from a commitment to
          Financial, Healthcare, Manufacturing and extensive experience with IT
          implementation.
        </p>
        <br />
        <p className="aboutText">
          Ida is a privately held premier IT consulting firm that offers
          solution advisory and IT consulting services to Various Sectors and
          top organizations nationwide. Ida offers a unique consulting model
          that provides an implementation-oriented partnership with clients, and
          a work environment that offers colleagues a path for professional
          growth and personal challenge unequalled in the industry. Founded in
          2010, the company has offices in Schaumburg, Illinois; and offshore
          office in Hyderabad, India. Our commitment to our customers comes from
          a solid knowledge of our client’s business and access to the best
          resources available. Ida offers a fun, flexible entrepreneurial
          environment with unlimited growth potential. Ida is a company
          passionate about transforming the way business works. At Ida , we
          collaborate with our clients to strategize, build and implement
          technology-enabled business solutions to gain measurable competitive
          advantage. As a client, you will work directly with our principals,
          ensuring a senior level of expertise and attention for your particular
          technical needs. This personalized approach is the foundation for the
          success that Ida brings to clients.
        </p>
        <br />
        <h4 className="about-sub-header">Accountability</h4>
        <br />
        <p className="aboutText">
          Ida is proud of our preferred vendor and technology services
          relationships with many prestigious companies. We consistently
          maintain historical relationships that exceed our customer’s
          expectations and project needs.
        </p>
        <br />
        <h4 className="about-sub-header">Successful Track Record</h4>
        <br />
        <p className="aboutText">
          Our customer loyalty far exceeds industry standards. Our clients have
          given us 95 percent repeat business and 100 percent are poised to
          provide outstanding recommendations.
        </p>
        <br />
        <h4 className="about-sub-header">Expertise</h4>
        <br />
        <p className="aboutText">
          At Ida , our expertise comes from the sum experience of our employees.
          In addition to our ability to attract the best local talent available,
          our principal consultants average 10 years of industry experience. By
          combining these factors, we deliver a caliber of service and expertise
          second to none.
        </p>
      </div>
    </div>
  );
}
export default Aboutus;
