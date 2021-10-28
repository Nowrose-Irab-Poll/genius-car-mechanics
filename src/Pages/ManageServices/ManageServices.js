import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    console.log("deleting", id);
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2>This is Manage Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <p>{service.name}</p>
          <button
            onClick={() => {
              handleDelete(service._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
