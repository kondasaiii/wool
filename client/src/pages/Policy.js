import React from "react";
import Layout from "../components/Layout/Layout";
// import Image from "../styles/d.gif"; // Replace with the correct image path

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6">
          <img
            src={Image}
            alt="Privacy Policy"
            height={400}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>Privacy Policy</h2>
          <p>
            <strong>Last Updated:</strong> [24/01/2024]
          </p>

          <h6>1. Information We Collect</h6>
          
          <h6>2. How We Use Your Information</h6>
          

          <h6>3. Cookies and Tracking Technologies</h6>
        

          <h6>4. Third-Party Links</h6>
          
          <h6>5. Security</h6>
          

          <h6>6. Changes to this Privacy Policy</h6>
         

          <h6>7. Contact Us</h6>
          <p>
            For questions or concerns, contact us at <a href="mailto:contact@yourwebsitename.com">contact@yourwebsitename.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;