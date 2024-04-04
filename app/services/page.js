"use client";
import { BottomMenu } from "../BottomMenu/BottomMenu";
import React, { useState } from "react";
import "./services.css";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    services: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      setFormData({
        fname: "",
        lname: "",
        email: "",
        services: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.fname.trim()) {
      errors.fname = "First name is required";
    }
    if (!data.lname.trim()) {
      errors.lname = "Last name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }
    if (!data.services) {
      errors.services = "Please select at least one service";
    }
    return errors;
  };

  return (
    <>
      <BottomMenu />
      <form className="formcontainer" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
        {errors.fname && <span className="error">{errors.fname}</span>}
        <label htmlFor="lname">Last Name</label>
        <input
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />
        {errors.lname && <span className="error">{errors.lname}</span>}
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <label htmlFor="services">Services requested:</label>
        <label htmlFor="webbuilding">Full-Stack Webpage.</label>
        <input
          type="radio"
          id="webbuilding"
          name="services"
          value="Full-Stack Webpage"
          onChange={handleChange}
        />
        <label htmlFor="frontend">Front-end Webpage.</label>
        <input
          type="radio"
          id="frontend"
          name="services"
          value="Front-end Webpage"
          onChange={handleChange}
        />
        <label htmlFor="backend">Back-end Webpage.</label>
        <input
          type="radio"
          id="backend"
          name="services"
          value="Back-end Webpage"
          onChange={handleChange}
        />
        {errors.services && <span className="error">{errors.services}</span>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
