import React from 'react';

export default function Card({title, imgsrc}) {
    return (
        <>
           <div className="col-md-4 col-10 max-auto">
                <div className="card" style={{width: '18rem'}}>
                    <img src={imgsrc} className="card-img-top" alt={title} />
                    <div className="card-body">
    <h5 className="card-title">{title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> 
        </>
    )
}
