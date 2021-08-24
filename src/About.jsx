import React from 'react';
import Common from './Common';
import img from './images/about.svg';

export default function About(props) {
    

    return (
        <>
            <Common name="Welcome to about page" imgsrc={img} visit="/contact" btname="Contact Now" />
        </>
    )
}
