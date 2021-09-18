import React, { useEffect } from "react";

import "./css/Publicaware.css";

const Publicaware = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div className="Publicaware">
      <div className="jumbotron">
        <div className="sos">Save</div>
        <div className="sos">Our</div>
        <div className="sos">Society</div>
      </div>
      <div className="logo-container">
        <div className="logo">
          <img src="./img/icons/fav-logo.png" alt="logo" />
        </div>
      </div>

      <div className="aware-content">
        <div className="article-box">
          <br></br>
          <br></br>
          <br></br>
          <h2>ARTICLES</h2>
          <br></br>
          <div className="news-card-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://nationalhomeless.org/about-us/projects/awareness-week/"
            >
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspic.jpg"
                  alt="article 1"
                ></img>
                <div className="article-text">
                  NATIONAL HUNGER & HOMELESSNESS AWARENESS WEEK
                </div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nctsn.org/resources/public-awareness/national-homeless-youth-awareness-month"
            >
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize1.jpg"
                  alt="article 2"
                ></img>
                <div className="article-text">
                  NATIONAL HOMELESS YOUTH AWARENESS MONTH
                </div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.narayanseva.org/blog/homelessness-in-india"
            >
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize3.jpg"
                  alt="article 3"
                ></img>
                <div className="article-text">
                  LIFE OF THE HOMELESS IN INDIA
                </div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Homelessness_in_India"
            >
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize2.jpg"
                  alt="article 4"
                ></img>
                <div className="article-text">WIKI: HOMELESSNESS IN INDIA</div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.homelesshub.ca/about-homelessness/homelessness-101/preventing-homelessness"
            >
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize4.jpg"
                  alt="article 5"
                ></img>
                <div className="article-text">PREVENTING HOMELESSNESS</div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://givingcompass.org/article/homelessness/"
            >
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize5.jpg"
                  alt="article 6"
                ></img>
                <div className="article-text">
                  HOMELESS - WHAT TO KNOW AND HOW TO HELP
                </div>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-017-0646-3"
            >
              <div className="news-card">
                <img
                  className="article-image"
                  src="img/homelesspicssize6.jpg"
                  alt="article 7"
                ></img>
                <div className="article-text">
                  SOCIAL CONDITIONS OF BECOMING HOMELESSNESS- SOME STORIES
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="Fund-Raiser">
          <h2>Fund Raiser</h2>

          <div className="Fundcards-group">
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/fundraiser-1.jpeg"
                  alt="Help India Breathe"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Help India Breathe</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5> $ 1,408,612</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/fundraiser-2.jpg"
                  alt="KhaanaChahiye"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>KhaanaChahiye</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 876,585 </h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/fundraiser-3.jpg"
                  alt="Feed the Hungry"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Feed the Hungry</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$89,870</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/fundraiser-4.png"
                  alt="Help India Breathe"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Help India Breathe</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$34,560</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/fundraiser-5.jpg"
                  alt="A Better life"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>A Better life</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 69,585 </h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/fundraiser-6.jpg"
                  alt="Charitable Change"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Charitable Change</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 76,585 </h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/fundraiser-7.jpg"
                  alt="Charity Cause"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Charity Cause</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 16,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/homelesspic-9.jpg"
                  alt="Thirst"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Thirst</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 6,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/homelesspic-8.jpg"
                  alt="Place for all"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Place for all</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 46,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/homelesspic-4.jpg"
                  alt="Hungry for Food"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Hungry for Food</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 76,585</h5>
              </div>
            </div>
            <div className="Fundcard">
              <div className="fundtools-img">
                <img
                  className="fundimage"
                  src="img/homelesspic-2.png"
                  alt="Asha"
                ></img>
              </div>
              <div className="fundtools">
                <h4>Fund Raiser</h4>
                <p>Asha</p>
                <div className="progress">
                  <div className="bar"></div>
                </div>
                <h5>$ 33,585</h5>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <div className="slogans">
          <h2>Slogans</h2>
          <div className="slogan-text">
            <br></br>
            <div className="slogan-text-each">
              <span className="quotes">“</span>
              <h3>You Don't Need A Reason To Help People.</h3>
            </div>

            <div className="slogan-text-each">
              <span className="quotes">“</span>
              <h3>If You Can't Feed a Hundred People, then Feed Just One.</h3>
            </div>

            <div className="slogan-text-each">
              <span className="quotes">“</span>
              <h3>We Can't Help Everyone But Everyone Can Help Someone.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="break-line"></div>
export default Publicaware;
