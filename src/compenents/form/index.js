import React from "react";
import "./form.scss";

function Forms() {
  return (
    <section className="forms">
      <div className="formContainer">
        <form>
          <div className="block">
            <div className="formBlockContainer">
              <label htmlFor="input">Full Name*</label>
              <div className="inputBlock">
                <input id="input" type="text" placeholder="Enter your name" />
              </div>
            </div>
            <div className="formBlockContainer">
              <label htmlFor="input">Company Name*</label>
              <div className="inputBlock">
                <input
                  id="input"
                  type="text"
                  placeholder="Enter a company name"
                />
              </div>
            </div>
          </div>
          <div className="block">
            <div className="formBlockContainer">
              <label htmlFor="input">Email Id*</label>
              <div className="inputBlock">
                <input id="input" type="text" placeholder="xyz@example.com" />
              </div>
            </div>
            <div className="formBlockContainer">
              <label htmlFor="input">Phone Number*</label>
              <div className="inputBlock">
                <input
                  id="input"
                  type="text"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>
          <div className="block">
            <label htmlFor="input">Message</label>
            <div className="messageBlock">
              <textarea
                rows="7"
                cols="50"
                placeholder="please enter message here"
              ></textarea>
            </div>
          </div>
        </form>
        <button>Request a Demo</button>
      </div>
    </section>
  );
}

export default Forms;
