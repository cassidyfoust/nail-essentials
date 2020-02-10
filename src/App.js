import React from 'react';
import './App.css';
import staffPhoto1 from './staff-photos/staff1.png';
import staffPhoto2 from "./staff-photos/staff2.png";
import staffPhoto3 from "./staff-photos/staff3.png";
import staffPhoto4 from "./staff-photos/staff4.png";
import staffPhoto5 from "./staff-photos/staff5.png";
import staffPhoto6 from "./staff-photos/staff6.png";
import staffPhoto7 from "./staff-photos/staff7.png";
import staffPhoto8 from "./staff-photos/staff8.png";

function App() {
  return (
    <div className="App">
      <div class="bgimg-1">
        <div class="caption">
          <h3 className="menu-bar">HOME</h3>
          <a className="menu-link" href="#staffSection">
            <h3 className="menu-bar">STAFF</h3>
          </a>
          <h3 className="menu-bar">SERVICES</h3>
          <h1>Nail Essentials</h1>
          <h3 className="menu-bar">FAQ</h3>
          <h3 className="menu-bar">BLOG</h3>
          <a
            className="menu-link"
            href="https://www.vagaro.com/us04/nailessentials2"
          >
            <h3 className="menu-bar">BOOK AN APPOINTMENT</h3>
          </a>
        </div>
      </div>

      <div>
        <div>
          <a className="anchor" name="staffSection"></a>
          <div className="staffSection">
            <div className="staffText">
              <h1>Staff</h1>
              <h3>
                We are extremely proud to have 3 CND Grand Master Nail Techs, 4
                licensed Nail Instructors and 3 Certified Toe Nail
                Reconstruction Specialists on staff.
              </h3>
            </div>
            <div className="staffPhotos">
              <div className="row1">
                <div>
                  <img src={staffPhoto1}></img>
                  <h4>Jeri</h4>
                </div>
                <div>
                  <img src={staffPhoto2}></img>
                  <h4>Michelle</h4>
                </div>
                <div>
                  <img src={staffPhoto3}></img>
                  <h4>Kimberly</h4>
                </div>
                <div>
                  <img src={staffPhoto4}></img>
                  <h4>Cindy</h4>
                </div>
              </div>
              <div className="row1">
                <div>
                  <img src={staffPhoto5}></img>
                  <h4>Carly</h4>
                </div>
                <div>
                  <img src={staffPhoto6}></img>
                  <h4>Renee</h4>
                </div>
                <div>
                  <img src={staffPhoto7}></img>
                  <h4>Stephanie</h4>
                </div>
                <div>
                  <img src={staffPhoto8}></img>
                  <h4>Kayli</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bgimg-1">
        <div class="caption">
          <span class="border">SCROLL UP</span>
        </div>
      </div>

      <div class="bgimg-1">
        <div class="caption">
          <span class="border">COOL!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
