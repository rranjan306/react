import React from 'react';
import Card from './Card';
import data from './data';

export default function Service(props) {
    

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {data.map((d, index) => {
                            return <Card key={index} title={d.title} imgsrc={d.imgserc}/>
                        })}
                    </div>
                </div>
                </div>
            </div>
            
        </>
    )
}
