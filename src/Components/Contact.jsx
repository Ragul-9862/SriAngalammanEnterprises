import React from 'react';

export default function Contact() {
    return (
        <div className='contact-us'>
            <section>
                <div className='contact-heading'>
                    <h1>Contact Us</h1>
                </div>
                <div className='container'>
                    <div className='row contact-main'>
                        <div className='col-lg-4 contact-main-info'>
                            <h3>Want to Buy Rubber Bands?</h3>
                            <a href="#" className='order-now'>Order Now</a>
                        </div>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-6'>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="nameInput" placeholder="Name"/>
                                            <label htmlFor="nameInput">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
                                            <label htmlFor="emailInput">Email address</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="tel" className="form-control" id="phoneInput" placeholder="Phone"/>
                                    <label htmlFor="phoneInput">Phone</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" style={{width: '100%',height:"300px"}} rows={20} placeholder="Message" id="messageInput"></textarea>
                                    <label htmlFor="messageInput">Message</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
