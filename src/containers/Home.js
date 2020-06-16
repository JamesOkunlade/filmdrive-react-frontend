import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container home-container">
          <div className="hmp-topbar">
            <h3 className="octin-font">
              Hollywood movies transferred to your laptop every Wednesdays and
              Saturdays
            </h3>
          </div>
          <div className="hmp-content">
            <div className="hmp-boxwhite">
              <div className="hmp-actionbar">
                <Link
                  className="hmp-joinnowbtn w3-button w3-xxxlarge w3-hover-red"
                  to="/movies"
                >
                  View Catalog
                </Link>
              </div>
              <div className="carousel">
                <div className="imgcarousel ">
                  <div className="single-imgbox w3-card-4">
                    <Link to="/">
                      <img
                        id="slider"
                        className="single-img"
                        src={require("../assets/images/posters/poster1.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="single-imgbox w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster7.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="single-imgbox  w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster2.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div id="hide" className="single-imgbox   w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster3.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div id="hide" className="single-imgbox w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster4.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="imgcarousel ">
                  <div className="single-imgbox w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster10.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="single-imgbox w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster7.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="single-imgbox  w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster9.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div id="hide" className="single-imgbox   w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster6.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div id="hide" className="single-imgbox w3-card-4">
                    <Link to="/">
                      <img
                        className="single-img"
                        src={require("../assets/images/posters/poster7.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="title">
              <span className="titletext w3-center ">How We Drive</span>
              <span>
                <img src={require("../assets/images/trucklogo.png")} alt="" />
              </span>
            </div>
          </div>
          <div className="hmp-content2">
            <div className="hmp-section">
              <div className=" hmp-flexcontainer">
                <div className="hmp-numbercard">
                  <h1>1</h1>
                </div>
                <div className="hmp-detailcard">
                  <h1>Buy your voucher</h1>
                  <h4>Filmdrive voucher cost N1000. </h4>
                </div>
              </div>
              <div className=" hmp-flexcontainer">
                <div className="hmp-numbercard">
                  <h1>2</h1>
                </div>
                <div className="hmp-detailcard">
                  <h1>Create your list</h1>
                  <h4>Be spoilt for choice. Browse from hundreds of movies.</h4>
                </div>
              </div>
              <div className=" hmp-flexcontainer">
                <div className="hmp-numbercard">
                  <h1>3</h1>
                </div>
                <div className="hmp-detailcard">
                  <h1>Prompt delivery</h1>
                  <h4>
                    Movies you selected are delivered every Wednesdays and
                    Saturdays.
                  </h4>
                </div>
              </div>
              <div className="hmp-calltoaction">
                <Link
                  className="joinnowbtn w3-button w3-xxxlarge w3-hover-red"
                  to="/signup"
                >
                  Join now
                </Link>
              </div>
            </div>
          </div>
          <div className="hmp-footer">
            <h3>
              With over 10 terabytes of hollywood movies stored and being
              stored, Filmdrive can conveniently satiate your movie craze. Make
              your movie list and have them delivered to you every Wednesdays
              and Saturdays. Subscription cost N1000 only. Over 98% of our
              subscribers are pleased with our service.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
