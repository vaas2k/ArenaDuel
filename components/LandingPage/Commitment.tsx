import React from 'react'

const Commitment = () => {
  return (
    <section className="section__container commitment__container" id="project">
      <div className="commitment__image">
        <img src="./commitment.png" alt="commitment" />
      </div>
      <div className="commitment__content">
        <h2 className="section__header">Built for Powerful  <span>Collaboration</span></h2>
        <p className="section__description">
        We empower developers to work together seamlessly, solving problems and achieving more through real-time collaboration features.
        </p>
        <ul className="commitment__list">
          <li>
            <div className="gradient__box">
              <span><i className="ri-shield-check-fill"></i></span>
              <p>Real-Time Code Editing</p>
            </div>
          </li>
          <li>
            <div className="gradient__box">
              <span><i className="ri-survey-fill"></i></span>
              <p>Joinable Coding Rooms</p>
            </div>
          </li>
          <li>
            <div className="gradient__box">
              <span><i className="ri-folder-keyhole-fill"></i></span>
              <p>Expert Mentorship & Problem Solving</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Commitment