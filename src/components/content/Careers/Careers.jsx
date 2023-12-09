import React from "react";
import Careers_image from "./career.jpg";
import "./Careers.css";
function Careers() {
  return (
    <div className="section__padding">
      <article className="text-center">
        <img className="careersImage" src={Careers_image} alt="Services" />
        {/* <h3 style={styles.container}>
          Lorem ipsum dolor
          <br /> sit amet,
          <br /> consectetur
        </h3> */}
      </article>
      <div style={{ margin: "5%" }}>
        <h2 className="careerheader">Careers</h2>
        <div className="careertext">
          <p>
            At IDA, we understand that a good career means different things to
            different people. Hence, IDA expects its employees to reposition and
            reinvent themselves as they go along in their careers, and also
            provide them with opportunities to do so.
            <br /> We offer a knowledge-driven environment to our employees and
            provide them training to help them enhance their skills. IDA is not
            only a place to work and earn, but also a place to learn and grow.
            Career growth here is not just in levels of hierarchy but in terms
            of how profound a person you become over the years.
          </p>
          <p>
            IDA Solutions has openings for
            <b> Software Engineer/Software Developer</b> applications positions
            with Master's degree (or Bachelor’s degree with 5 years of relevant
            Experience in lieu of Master’s Degree) in Computer Science,
            Engineering (any) and Technology or Comp Appl or related to design,
            develop, implement, maintain and test business functions and web
            applications using Java, .NET, Oracle, Swing, Hibernate, SAP,
            BigData, Hadoop and ETL tools. Must be skilled in designing, coding,
            testing, and implementing configuration changes to software
            applications to meet both functional and technical requirements.
          </p>
          <p>
            Work location is Schaumburg, IL with required travel to client
            locations throughout USA. Mail resumes to IDA Solutions Inc., 919 N
            Plum Grove Road, Suite # F, Schaumburg, IL-60173 or email to
            <a href="mailto:srini@idasolutions.net"> srini@idasolutions.net</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Careers;
// const styles = StyleSheet.create({
// container: {
//   fontSize: " 30px",
//   color: "black",
//   margin: "auto",
//   position: "absolute",
//   height: "fit-content",
//   top: "0",
//   bottom: "0",
//   left: "5%",
//   right: "60%",
//   textAlign: "left"
// },
