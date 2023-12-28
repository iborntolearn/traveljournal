import React from "react";
import ReactDOM from "react";
import pinPic from "../images/pin.svg";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image-div">
                <img 
                    src={props.imageUrl}
                    className={props.class}
                />
            </div>
            <div className="card-text-div">
                <div className="card-location">
                    <img src={pinPic} className="card-pin"/>
                    <span className="location">{props.location}</span>
                    <p className="grey">
                        <a href={props.googleMapsUrl}>
                            View On Google Maps Link
                        </a>
                    </p>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <div className="card-date">
                    <span className="start-date">{props.startDate}</span>
                    <span className="dash"> - </span>
                    <span className="end-date">{props.endDate}</span>
                </div>
                
                <div>
                    <span className="card-description">{props.description}</span>
                </div>
            </div>
        </div>
        
    );
}