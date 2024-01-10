import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About my-Shop"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/dharmen.jpg"
            alt="contactus"
            style={{ width: "100%",height:"65vh" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          I am student of BTech with computer science & engineering specialization. I am working Full Stack web development using MERN stack technology. I also expend some time exploring new technology. My future learning field is Data domain field like data science. I have learnt some technologies and skills like - Git & GitHub, Linux, Word Press, Html, Css, Bootstrap, J2SE, J2EE, JavaScript, C/C++, Python, Node Js, Mongodb, React js, Express js,Data Structure. I have some other activities and skills like writing poem, leadership,Social activist, teaching. My favorite sports is cricket and also some little other sports. 
                                                             Thank you !
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
