import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Common({name, imgsrc, visit, btname}) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1> {name} <strong className="brand_name">The Navigator</strong></h1>
              <h2 className="my-3">
                We are the team of talented developer making websites
              </h2>
              <div className="my-3">
                  <NavLink to={visit} className="btn-get-started">{btname}</NavLink>
              </div>
            </div>
            <div className="text-right col-lg-6 order-1 order-lg-2 header_img">
              <img src={imgsrc} alt="home" className="img-fluid animated" style={{width: '250px'}}/>
            </div>
            </div>
          </div>
        </div>
      </div> 
      </section>
    </>
  )
}
