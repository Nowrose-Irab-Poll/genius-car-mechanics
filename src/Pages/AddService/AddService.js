import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Inserted Successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-service">
      <h2>Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Service Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Service Description"
          {...register("description")}
        />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Image URL" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
