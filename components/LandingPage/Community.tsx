import React from 'react'

const Community = () => {
  return (
    <section className="section__container build__container" id="community">
    <div className="build__image">
      <img src="./build.png" alt="build" />
    </div>
    <div className="build__content">
      <h2 className="section__header">
      Join a Thriving Programming <span>Community</span> now
      </h2>
      <p className="section__description">
      Connect, collaborate, and learn alongside a network of skilled developers. Share your knowledge, 
      solve problems together, and elevate your coding skills.
      </p>
      <ul className="build__grid">
        <li>
          <div className="build__card gradient__box">
            <span><i className="ri-eye-fill"></i></span>
            <h4>Senior<br />Developers</h4>
          </div>
        </li>
        <li>
          <div className="build__card gradient__box">
            <span><i className="ri-star-fill"></i></span>
            <h4>Junior<br />Developers</h4>
          </div>
        </li>
        <li>
          <div className="build__card gradient__box">
            <span><i className="ri-qr-scan-2-line"></i></span>
            <h4>AI<br />Engineers</h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Community