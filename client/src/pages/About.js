import React from "react";
import Layout from "../components/Layout/Layout";
// import Image from "../styles/b.gif"; // Replace with the correct image path

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row about-us">
        <div className="col-md-6">
          <img src={Image} alt="About Us" style={{ width: "100%" }} />
        </div>
        <div className="col-md-6">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Welcome to [WOOL MART], a platform created with a unique
              vision – to connect wool growers with traders and customers. Our
              mission is to bridge the gap between producers and consumers in
              the wool industry, creating a space where transactions are
              seamless, and relationships are built on trust.
            </p>

            <h3>Our Purpose</h3>
            <p>
              At [WOOL MART], we understand the importance of a
              thriving wool industry. Our platform serves as a meeting point for
              wool growers, traders, and customers, fostering a community that
              benefits everyone involved. Whether you're a wool producer looking
              to showcase your products or a trader/customer seeking quality
              wool, we've designed this platform with you in mind.
            </p>

            <h3>Why [WOOL MART]?</h3>
            <p>
              <strong>Transparency:</strong> We believe in transparent
              transactions. Our platform provides detailed information about
              each wool product, empowering both growers and traders/customers
              to make informed decisions.
            </p>
            <p>
              <strong>Community Building:</strong> [WOOL MART] is more
              than just a marketplace. It's a community where wool enthusiasts
              come together to share knowledge, experiences, and contribute to
              the growth of the industry.
            </p>
            <p>
              <strong>Project School Purpose:</strong> [WOOL MART] was
              born out of a school project, driven by a passion for fostering
              connections and supporting the wool industry. Every interaction on
              our platform contributes to the success of this educational
              initiative.
            </p>

            <h3>Meet the Team</h3>
            <p>
              Behind [WOOL MART] is a dedicated team of individuals who
              are passionate about making a positive impact. From project
              initiators to developers, we're united by a shared commitment to
              building a platform that transforms the wool trade.
            </p>

            <p>
              Thank you for being a part of [WOOL MART]. Together, let's
              shape the future of the wool industry.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;