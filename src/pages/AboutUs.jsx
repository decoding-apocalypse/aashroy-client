import React, { useEffect } from "react";

import "./css/AboutUs.css";

const AboutUs = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="AboutUs">
      <div className="about-carousel">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active about-img"
              data-bs-interval="10000"
            >
              <img
                src="img/about-4.jpg"
                className="d-block w-100 "
                alt="nothing"
              />
            </div>
            <div className="carousel-item about-img" data-bs-interval="2000">
              <img
                src="img/about-5.jpg"
                className="d-block w-100 "
                alt="nothing"
              />
            </div>
            <div className="carousel-item about-img">
              <img
                src="img/about-6.jpg"
                className="d-block w-100 "
                alt="nothing"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="AboutUs-box">
        <h1>About Aashroy</h1>
        <div className="about-content">
          <p>
            We exist to defend the right to a safe home and to provide care and
            support to the homeless. Join us in ending the devastating impact to
            the homeless has on community and to Human Rights preservation and
            protection.With your help we plan to remove homelessness in our
            society and remove the crimes against them and make our society a
            better place.Be the change you want to see in the society by helping
            the helpless and being the hope to the community.Lead from the
            forefront donate,aware and report all that you can do!
          </p>
        </div>
      </div>
      <div className="about-part">
        <div className="about-card about-card-all">
          <img src="img/about-card-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Donation</h5>
            <p className="card-text">
              Donate today for a better cause and for serving humanity.
            </p>
            <div
              className="card-btn btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-warning">
                <a href="/donation">Donate Now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="about-card-2 ">
          <img src="img/about-card-2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <br />
              Public Awareness{" "}
            </h5>
            <p className="card-text">
              Understand about basic the Human Rights and the need of basic
              housing.
            </p>
            <div
              className="card-btn btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-warning">
                <a href="public-awareness">Public Awareness</a>
              </button>
            </div>
          </div>
        </div>
        <div className="about-card-3 ">
          <img src="img/about-card-3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Report any illegal activity</h5>
            <p className="card-text">
              Report any illegal and suspicious activity in your neighborhood.
            </p>
            <div
              className="card-btn btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-warning">
                <a href="/report"> Report Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="takeAction">
        <h1>Change comes from within</h1>
        <hr />
        <div className="takeAction-content">
          Change only happens when you get involved.
        </div>
      </div>
      <div className="about-partners">
        <div className="partners-content">
          <div className=".">
            <table className="about-ngoList">
              <thead>
                <tr className="table-heading">
                  <th>Sl.No</th>
                  <th>Name of the NGO</th>
                  <th>Address</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    BRIGHT FUTURE FOR PEOPLES AND RURAL AREA DEVELOPMENT OF
                    ASSAM
                  </td>
                  <td>
                    Old UBI Bank Building, 2nd floor, Bhuragaon Natun Bazar,
                    P.O. Bhuragaon, P.S. Bhuragaon, MARIGAON, 782121
                  </td>
                  <td> 9435117309</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>A CHIK BAPTIST CONVENTION</td>
                  <td>BAGPARA, P.O KHAGARPUR, DIST: BONGAIGAON</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>A RAY OF HOPE SOCIETY</td>
                  <td>C/O:Madhu Sudhan Sarkar,Haflong Bazar PO/PS:HAFLONG</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    A SOCIAL FOR HUMAN RESOURCE ORGANISATION AND IMPROVEMENTS
                  </td>
                  <td>Rup Nagar, Nalbari Gaon, PO- Gopalbazar,</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>AADHAAR SHIKSHA TRUST</td>
                  <td>
                    C/o MINI BORO, HOUSE NO 21, ULUBARI, KACHARI BASTI, GUWAHATI
                    781007{" "}
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>AADYA SRISHTI KALA MANDIR CULTURAL SOCIETY</td>
                  <td>S. DAHUTIA ROAD , BORPATHAR , TINSUKIA , TINSUKIA</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>AAGAN</td>
                  <td>
                    Hathimata Road, Ward No: 8, Opposite Surat Press, Kokrajhar,
                    Assam.
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>AANRKAPOR</td>
                  <td>
                    AANRKAPOR C/O: Dhiraj Kumar S/O ; Arjun Ch. Kumar P.OVill:
                    Gotanagar PNGB Road House No: 4 Near Gotanagar Nursery
                    Guwahati-781011
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Aasha (A Hope) Foundation and Social Welfare Society</td>
                  <td>
                    c/o Benzir Arfan, House no. 98, 2nd floor, Panbazar, Danish
                    Road, Lakhtokia, Districtkamrup (M), Guwahati. Assam.
                    Pincode781001. India
                  </td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>AASTHA FOUNDATION</td>
                  <td>
                    AASTHA FOUNDATION,CHOW CHAKRA BUILDING,N.N.DUTTA ROAD
                    ,SILCHAR-788001
                  </td>
                  <td>XXX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br></br>
      <div className="apibox">
        <div className="post">
          <h3>Heading</h3>
          <p style={{ marginLeft: "1rem" }}>
            Public API for all the homeless data uploaded by user
          </p>
          <div className="box">
            <button className="pgbtn">POST</button>
            <div className="linkbox">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://aashroy-api.herokuapp.com/api/upload"
              >
                https://aashroy-api.herokuapp.com/api/upload
              </a>
            </div>
          </div>
        </div>
        <div className="get">
          <h3>Heading</h3>
          <p style={{ marginLeft: "1rem" }}>
            Public API for all the donations made by users of Aashroy
          </p>
          <div className="box">
            <button className="pgbtn">GET</button>
            <div className="linkbox">
              <a href="https://aashroy-api.herokuapp.com/api/donation">
                https://aashroy-api.herokuapp.com/api/donation
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
