import React, { useState, useEffect } from 'react';
import PIKE from '../Assets/PIKESHOW.JPG'
import './HeadImage.css';

function ZoomingElement() {
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const zoomFactor = 0.01;
            const maxZoom = 5;

            const newZoomLevel = 1 + scrollPosition * zoomFactor;

            setZoomLevel(Math.min(newZoomLevel, maxZoom));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <div
        className="zooming-element"
        style={{ transform: `scale(${zoomLevel})` }}
        >
            <img src={PIKE} className="PIKE"></img>
        </div>
    )
}

export default ZoomingElement;
