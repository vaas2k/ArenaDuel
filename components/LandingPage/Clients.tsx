import { Card } from '@radix-ui/themes'
import React from 'react'

const Clients = () => {
  return (
    <section className="section__container client__container" id="resources">
      <div className="client__image gradient__box">
        <img src="./client.png" alt="client" />
      </div>
      <div className="client__content ">
        <h2 className="section__header">
          What our <span>trusted clients</span> say
        </h2>
        <div className="">

          <div className="">

            
            <div className="py-[23px]">
              <Card className="client__card gradient__box h-[150px]">
                <p>
                I no longer dread coding challenges thanks to DevSage
                      real-time support. Its like having a personal coding
                      coach!
                </p>
                <h4>Sarah Thompson</h4>
                <h5>Frontend Developer</h5>
              </Card>
            </div>
            <div className="swiper-slide">
              <Card className="client__card gradient__box h-[150px]">
                <p>
                As a mentor on DevSage, I get to share my passion for
                      coding while helping shape the next generation of
                      developers
                </p>
                <h4>John Rodriguez</h4>
                <h5>Software Engineer </h5>
              </Card>
            </div>
            
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Clients