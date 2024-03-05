import React from 'react'

export default function About() {
  return (
    <div className='about'>
        <section id='About'>
            <div className='about-us'>
                <h1>ABOUT US</h1>
            </div>
            <div className='container about-us-main'>
                <div className='row  about-us-main-row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='aboutus-info'>
                        <h2>WHY CHOOSE US</h2>
                        <h3>SriAngalaammanEnterprises</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 aboutus-video-main-row'>
                        <div className='aboutus-video-main' >
                        <div className='aboutus-video'>
                        <iframe className='aboutus-video-1' width="100%" height="400" src="https://www.youtube.com/embed/OzPD6MSx9JU?si=_HsHtoAsznODbCES" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                        </div>
                      
                    </div>

                </div>

            </div>
        </section>
    </div>
  )
}
