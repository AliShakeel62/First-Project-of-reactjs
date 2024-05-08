import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import img1 from "./photos/font_rend.png";
import img2 from "./photos/profile.jpg";
function App() {
  let a = [
    "For designers",
    "Hire talent",
    "Inspiration",
    "Advertising",
    "Blog",
    "About",
    "Careers",
    "Support",
  ];
  console.log(a.length);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-white pt-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={img1} alt="img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Find designers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inspiration
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      UX Diploma
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UI ertificate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Live interactive workshops
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Go Pro
                </a>
              </li>
            </ul>
            <form className="d-flex navlast" role="search">
              <input
                type="search"
                className="form-control me-2 rounded-pill bg-body-secondary"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn bg-white text-dark rounded-pill"
                type="submit"
              >
                Log in
              </button>
              <button
                className="btn bg-dark text-white rounded-pill"
                type="submit"
              >
                Sing up
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="Sec1 ">
        <h4 className="fw-bold hea1 flex-wrap">
          FurniLux - Furniture Landing Page Design.
        </h4>
        <div className="detail pt-2 flex-wrap d-flex justify-content-md-between justify-content-lg-between justify-content-sm-between">
          <div className="imgsec d-flex ">
            <img src={img2} alt="img2" className="myimg rounded-pill" />
            <p className="mt-3 ms-2">
              M.Ali Shakee <br />
              <span className="firstbreak text-success">
                Available for Work
              </span>{" "}
              <span className="lastspan"> follow</span>
            </p>
          </div>
          <div className="btnsec">
            <button className="bg-white rounded-circle bs-3 ">❤</button>
            <button className=" rounded-circle bs-2">save</button>
            <button className="bs-1 text-white rounded-pill">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="secimg">
          <p className="d-flex flex-wrap justify-content-center">
            <img
              src="https://cdn.dribbble.com/userupload/12111539/file/original-1ae7830b2db671959e61647aafe6ee26.jpg?resize=1504x1128"
              alt="img"
              className="main-img1"
            />
          </p>
          <p className="  flex-wrap pera-01">
            FurniLux: Where Style Unfolds. Explore a curated collection of
            exquisite furniture on our landing page, designed to elevate your
            space. Immerse yourself in the fusion of modern aesthetics and
            comfort. Redefine your home with FurniLux – where every piece tells
            a story of timeless elegance.
          </p>
        </div>
      </div>
      <div className="Sec2">
        <div className="ImdSec">
          <p className="sec2-pera1 d-flex justify-content-center ">
            <img
              src="https://cdn.dribbble.com/userupload/12111541/file/original-f09ed0d6453cc7c0fd9f045c6a07e4b8.jpg?resize=1200x900&vertical=center"
              alt="img 1"
              className="flex-wrap"
            />
          </p>
          <h2 className="d-flex flex-wrap justify-content-center fw-bold">
            Full Preview
          </h2>
          <p className="sec-pera2 d-flex flex-wrap justify-content-center mt-5">
            <img
              src="https://cdn.dribbble.com/userupload/12111542/file/original-20bfe7ca8464b1b76a826fbbd41948c7.jpg?resize=1200x3894&vertical=center"
              alt="img"
              className="flex-wrap"
            />
          </p>
          <h3 className="sec2-heading1  flex-wrap  fw-bold mt-5">
            Want to Discuss Your Projects? Let's talk
          </h3>
          <p className="sec2-pera3 d flex-wrap fs-5">
            <b>Email: </b> alishakeel567567@gmail.com
          </p>
        </div>
        <div className="Sec3">
          <p className="sec3-pera01 fw-bold">More by Ali Shakeel</p>
          <div className="cards d-flex flex-row  flex-wrap ">
            <p className="Sec3-img  cord-1 Sec3-speacial  col-10  col-sm-5 col-md-2 col-lg-2 ">
              <img
                src="https://cdn.dribbble.com/userupload/12956373/file/original-a804aca50874bde6740e981fff18948e.jpg?resize=320x240&vertical=center"
                alt="img"
                className="rounded-4"
              />
            </p>

            <p className="Sec3-img  cord-2 col-sm-5 col-md-2 col-lg-2 col-10">
              <img
                src="https://cdn.dribbble.com/userupload/12955312/file/original-77627badc32f397508bd38ce556f2e46.jpg?resize=320x240&vertical=center"
                alt="img"
                className="rounded-4"
              />
            </p>

            <p className="Sec3-img  cord-3 col-sm-5 col-md-2 col-lg-2 col-10">
              <img
                src="https://cdn.dribbble.com/userupload/12948980/file/original-549c18a7844cc185edf9a44d6f2b5913.jpg?crop=0x0-1600x1200&resize=320x240&vertical=center"
                alt="img"
                className="rounded-4"
              />
            </p>

            <p className="Sec3-img  cord-4 col-sm-5 col-md-2 col-lg-2 col-10">
              <img
                src="https://cdn.dribbble.com/userupload/12958786/file/original-cb38559132744cd62dc4b4750e9e24bc.jpg?crop=0x0-3839x2879&resize=320x240&vertical=center"
                alt="img"
                className="rounded-4"
              />
            </p>
          </div>
          <div className="d-flex justify-content-evenly mt-5 flex-wrap ">
            <p className="lastimg">
              <img src={img1} alt="img" className="" />
            </p>
            {a.map((last) => (
              <p className="d-flex mt-3">{last}</p>
            ))}
          </div>
          <div className="lastcontainer d-flex justify-content-between flex-wrap">
            <div className="lastline d-flex justify-content-between flex-wrap">
              <p className="ms-1 fw-light text-secondary"> © 2024 Dribbble</p>
              <p className="ms-1 fw-light text-secondary"> Terms</p>
              <p className="ms-1 fw-light text-secondary"> Privacy</p>
              <p className="ms-1 fw-light text-secondary"> Cookies</p>
            </div>
            <div className="lastline2 d-flex justify-content-evenly">
              <p className="ms-2 fw-light text-secondary">Jobs</p>
              <p className="ms-2 fw-light text-secondary">Designers</p>
              <p className="ms-2 fw-light text-secondary">Freelancers</p>
              <p className="ms-2 fw-light text-secondary">Tags</p>
              <p className="ms-2 fw-light text-secondary">Places</p>
              <p className="ms-2 me-3 fw-light text-secondary">Resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
