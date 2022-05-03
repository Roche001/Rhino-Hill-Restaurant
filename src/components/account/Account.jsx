import React from "react";
import "./Account.css";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import { Si1Password } from "react-icons/si";

const Account = () => {
  return (
    <section id="Account">
      <div className="account-header">
        <h2>Account Creation</h2>
        <p>A few clicks is all it takes.</p>
      </div>
      <div className="forms">
        <div className="forms-explanation">
          <div className="info">
            <h3>Registration Info</h3>
            <form className="group">
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <RiAccountPinCircleFill />
                  </span>
                </div>
                <input
                  name=""
                  className="form-control"
                  placeholder="Full name"
                  type="text"
                  required
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <MdAttachEmail />
                  </span>
                </div>
                <input
                  name=""
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                  required
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BsTelephoneFill />
                  </span>
                </div>
                <select className="custom-select" style={{ maxWidth: "120px" }}>
                  <option selected="">+254</option>
                  <option value="1">+257</option>
                  <option value="2">+237</option>
                  <option value="3">+57</option>
                  <option value="3">+253</option>
                  <option value="3">+212</option>
                  <option value="3">+250</option>
                  <option value="3">+65</option>
                  <option value="3">+268</option>
                  <option value="3">+256</option>
                  <option value="3">+1-721</option>
                  <option value="3">+46</option>
                  <option value="3">+1</option>
                  <option value="3">+44</option>
                  <option value="3">+58</option>
                  <option value="3">+263</option>
                </select>
                <input
                  name=""
                  className="form-control"
                  placeholder="Phone number"
                  type="text"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <GiOfficeChair />
                  </span>
                </div>
                <select className="form-control">
                  <option selected=""> Select job type</option>
                  <option>Web Developer</option>
                  <option>Flight attendant</option>
                  <option>School teacher</option>
                  <option>Registered nurse</option>
                  <option> Sales representative</option>
                  <option>Engineer</option>
                  <option>Database administrator</option>
                  <option> Pediatric physician</option>
                  <option>Other Job Type</option>
                </select>
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <Si1Password />
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Create password"
                  type="password"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <Si1Password />
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Repeat password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <button type="button" className="button">
                  {" "}
                  Create Account{" "}
                </button>
              </div>
              <p className="text-center">
                Have an account? <a href="#">Log In</a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
