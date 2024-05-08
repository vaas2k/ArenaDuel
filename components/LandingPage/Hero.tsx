import React from 'react'

const Hero = () => {
  return (
    <header className="header" id="home">
      <div className="section__container header__container">
        <div className="header__content">
          <h1 className='light:text'> Code  <span>Together</span> <span>Solved</span> Faster.</h1>
          <p className="section__description ">
          A collaborative coding platform that connects programmers for instant teamwork, mentorship, 
          and problem-solving.
          </p>
          <div className="header__btns">
            <button className="btn">Start Collaborating Now</button>
          </div>
        </div>
        <div className="header__image">
          <img style={{width:'500px' , height :'500px'}} src="./twobuds.png" alt="header" />
        </div>
      </div>
    </header>
  )
}

export default Hero