import React from 'react';
import CountUp from 'react-countup';

export default function Highlights() {
  return (
    <div>
      <section className='highlights'>
        <div className='container'>
          <div className='highlights-info-heading'>
            <h1>COMPANY HIGHLIGHTS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='highlights-countup'>
              <div className='highlights-info'>
              <div className='highlights-info-sub'>
                  
                  <img src={require("../Assets/Images/Highlights/count-up-1.jpg")} alt="" />
                  <CountUp start={0} end={100} duration={2} separator="," decimals={0}>
                    {({ countUpRef }) => (
                      <h3>
                        <span ref={countUpRef} />+
                      </h3>
                    )}

                  </CountUp>
                    </div>
              

                  <p>DISTRIBUTORS</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='highlights-countup'>
              <div className='highlights-info'>
              <div className='highlights-info-sub'>
                  
                  <img src={require("../Assets/Images/Highlights/count-up-2.jpg")} alt="" />
                  <CountUp start={0} end={100} duration={2} separator="," decimals={0}>
                    {({ countUpRef }) => (
                      <h3>
                        <span ref={countUpRef} />+
                      </h3>
                    )}

                  </CountUp>
                    </div>
              

                  <p>RUBBERBAND SHIPPED</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='highlights-countup'>
              <div className='highlights-info'>
              <div className='highlights-info-sub'>
                  
                  <img src={require("../Assets/Images/Highlights/count-up-3.jpg")} alt="" />
                  <CountUp start={0} end={100} duration={2} separator="," decimals={0}>
                    {({ countUpRef }) => (
                      <h3>
                        <span ref={countUpRef} />+
                      </h3>
                    )}

                  </CountUp>
                    </div>
              

                  <p>CUSTOMERS</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='highlights-countup'>
                <div className='highlights-info'>
                <div className='highlights-info-sub'>
                  
                  <img src={require("../Assets/Images/Highlights/count-up-4.jpg")} alt="" />
                  <CountUp start={0} end={100} duration={2} separator="," decimals={0}>
                    {({ countUpRef }) => (
                      <h3>
                        <span ref={countUpRef} />+
                      </h3>
                    )}

                  </CountUp>
                    </div>
              

                  <p>COUNTRIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='order-now-container'>
        <div className='container'>
            <div className='row'>
               <div className='col-lg-6 order-now-main'>
                <h1>Each Rubber Band Crafted to Perfection Period.</h1>
                <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                <a href="" className='order-now' > Order Now</a>
               </div>
            </div>

        </div>
      </section>
    </div>
  );
}
