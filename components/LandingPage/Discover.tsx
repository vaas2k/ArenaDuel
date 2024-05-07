import React from 'react'

const Discover = () => {
  return (
    <section className="section__container discover__container" id="about">
      <h2 className="section__header">
        Unlock the Power of Collaboration
      </h2>
      <div className="discover__grid gradient__box">
        <div className="discover__card">
          <span><i className="ri-group-fill"></i></span>
          <h4>Real-Time Coding</h4>
        </div>
        <div className="discover__card">
          <span><i className="ri-code-fill"></i></span>
          <h4>Joinable Coding Rooms</h4>
        </div>
        <div className="discover__card">
          <span><i className="ri-lightbulb-fill"></i></span>
          <h4>Expert Mentorship</h4>
        </div>
        <div className="discover__card">
          <span><i className="ri-timer-fill"></i></span>
          <h4>Fast-Paced Problem Solving</h4>
        </div>
        <div className="discover__card">
          <span><i className="ri-device-line"></i></span>
          <h4>Seamless Device Integration</h4>
        </div>
        <div className="discover__card">
          <span><i className="ri-lock-fill"></i></span>
          <h4>Secure Coding Environment</h4>
        </div>
        <div className="discover__card">
          <span><i className="ri-lock-fill"></i></span>
          <h4>Shared Code Editing</h4>
        </div>
        <div className="discover__card">
          <span><i className="ri-lock-fill"></i></span>
          <h4>Secure Code History & Rollback</h4>
        </div>
      </div>
    </section>
  )
}

export default Discover
