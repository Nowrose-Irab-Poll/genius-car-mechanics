import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const { _id, name, description, img, price } = service;

  return (
    <div>
      <small>{_id}</small>
      <br />
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h2>{price}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Booking;
