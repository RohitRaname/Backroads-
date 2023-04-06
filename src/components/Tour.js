import React from 'react'
import { tours } from '../data';

const TourList = () => {
  return (
    tours.map((tour) => {
        const { _id, image, date, title, info, location, duration, cost } =tour;
        return (
          <div className="tour" key={_id}>
            <div className="tour-img-container">
              <img className="tour-img" src={image} />
              <div className="tour-date">
                <span>{date}</span>
              </div>
            </div>
            <div className="tour-info">
              <h3 className="tour-title">{title}</h3>
              <p className="tour-text">{info}</p>

              <div className="tour-footer">
                <i className="fas fa-map"></i>
                <span>{location}</span>
                <span>{`${duration} days`}</span>
                <span>{`$${cost}`}</span>
              </div>
            </div>
          </div>
        );
      })
  )
}

export default TourList