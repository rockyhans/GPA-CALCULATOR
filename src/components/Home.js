import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* 702239816951-s4o5q1p08097pn9p2qbtomiqo8suictm.apps.googleusercontent.com */}
      {/* 702239816951-s4o5q1p08097pn9p2qbtomiqo8suictm.apps.googleusercontent.com */}
      {/* reference token --
      1//04cbWn4L8kQ9oCgYIARAAGAQSNwF-L9Ir7Uu2LdT72DXplTuwiFTxAU1ZvQh3Wtqltf9CYF0JF7vNlDU750UynNzOJtk6XEEIIRc
      access tocken -- ---
      ya29.a0ARW5m772ferjWqWZglchGBM-iKsLhJxhZ6K8Z7F3LU0NfB10VsDkTiE1Ks-47jcdWJ1qTEr-04XUhi9cBvndWxfowPFv6qHVFHDFynUyuNqeNSauBpmFxEvmUwCKK7dr6BjP4Y75kvqd9JRbUcNuHKF4nxsT79YL9EJkjYDkaCgYKAYASARISFQHGX2Mis9Zu4vaySRl14oZqoTAwgw0175
 */}












      <div className="mainPage">
        <Navbar />
        <div className="mainPage1">
          <div className="page11">
            <div className="page101">
              <p>
                Read the INSTRUCTIONS to use the application efficiently, Click
                on the below button:{" "}
              </p>
              <Link to="/instructions">
                <button>Instructions</button>
              </Link>
            </div>
            <div className="page101">
              <p>
                Build &nbsp; YOUR PROFILE to save and store your Grade Points,
                Click on the below button:{" "}
              </p>
              <Link to="/about">
                <button>Your Profile</button>
              </Link>
            </div>
          </div>
          <div className="page12">
            <div className="page101">
              <p>
                Read the Instructions and Calculate SGPA Grade & Persentage,
                Click on the below button:{" "}
              </p>
              <Link to="/SgpaCal">
                <button>SGPA Calculator</button>
              </Link>
            </div>
            <div className="page101">
              <p>
                Read the Instructions and Calculate CGPA Grade & Persentage,
                Click on the below button:{" "}
              </p>
              <Link to="/CgpaCal">
                <button>CGPA Calculator</button>
              </Link>
            </div>
          </div>
          <div className="about">
            <Link to="/about" style={{ border: "none" }}>
              <button>
                {" "}
                Read about the Application & Connect with us....{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* <header className="home-header">
          <h1>
            <u>Calculate your CGPA & SPGA quickly and easily</u>
          </h1>
        </header> */}
        {/* <Link to="/instructions" className="instBtnLink">
          <button className="instButton">
            <b> &nbsp; INSTRUCTIONS &nbsp;</b>
          </button>
        </Link> */}
        {/* <div className="jntuhPhotoDiv"> */}
        {/* <div className="scrolling-text tmpClass">
            <h1 style={{color:""}}>
              <u>
                <b>Welcome To GPA (SGPA & CGPA) Calculator(JNTUH) ! </b>
              </u>
            </h1>
          </div> */}
        {/* <img
            alt="JHTUH"
            // src="https://m.media-amazon.com/images/I/71y50-KHLoL.png"
            src={bbb}
            className="jntuhPhoto"
          ></img> */}

        {/* <div className="scrolling-text">
          <h1>
            <u>
              <b>Welcome To GPA (SGPA & CGPA) Calculator(JNTUH) ! </b>
            </u>
          </h1>
        </div> */}
        {/* </div> */}
        {/* <section className="home-content">
          <h3>FOR CALCULAATOR DETAILS , VISIT INSTRUCTIONS SECTION _ </h3>
          <br />
          <h4 className="hsP">
            PLEASE! GIVE THE RESPONCES , IT WILL HELP US TO IMPROVE APPLICATION
            .......!
          </h4>
        </section> */}

        {/* <Instructions /> */}

        {/* <div className="navigation">
              <Link to="/instructions" className="nav-link">
                <div className="bo-text">
                  <b> &nbsp; INSTRUCTIONS &nbsp;</b>
                </div>
              </Link>
              <Link to="/SgpaCal" className="nav-link">
                <div className="bo-text">
                  <b> &nbsp; SGPA CALCULATOR &nbsp;</b>
                </div>
              </Link>
              <Link to="/CgpaCal" className="nav-link">
                <div className="bo-text">
                  <b> &nbsp; CGPA CALCULATOR &nbsp;</b>
                </div>
              </Link>
            </div> */}
        {/* <footer className="home-footer">
              <div className="home-footer01">
              <p>&copy; 2024 GPA Calculator App. All rights reserved.</p>
              </div>
            </footer>
           */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
