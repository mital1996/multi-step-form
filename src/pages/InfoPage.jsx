import React from "react";
import MainContain from "../components/MainContain";
import { Form, FormGroup } from "react-bootstrap";
import InputButton from "../components/InputButton";
import classes from "./style.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const InfoPage = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      ),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only numeric characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(validationSchema),
  });
  // console.log("form>>>", errors.name);
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };
  return (
    <MainContain>
      <div className={` ${classes.main_content}`}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className={classes.form_contain}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className={classes.form_group}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Label>Name</Form.Label>
                {errors.name && (
                  <div className={classes.error_message}>
                    {errors.name.message}
                  </div>
                )}
              </div>

              <Form.Control
                className={`${
                  errors.name ? classes.invalid : classes.form_input
                }`}
                placeholder="e.g. Stephen King"
                name="name"
                {...register("name")}
              />
            </FormGroup>

            <FormGroup className={classes.form_group}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Label>Email Address</Form.Label>
                {errors.email && (
                  <div className={classes.error_message}>
                    {errors.email.message}
                  </div>
                )}
              </div>

              <Form.Control
                className={`${
                  errors.email ? classes.invalid : classes.form_input
                }`}
                placeholder="e.g. stephenking@lorem.com"
                name="email"
                {...register("email")}
              />
            </FormGroup>

            <FormGroup className={classes.form_group}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Label>Phone Number</Form.Label>
                {errors?.phone && (
                  <div className={classes.error_message}>
                    {errors.phone.message}
                  </div>
                )}
              </div>

              <Form.Control
                className={`${
                  errors.phone ? classes.invalid : classes.form_input
                }`}
                placeholder="e.g. +1 234 567 890"
                name="phone"
                {...register("phone")}
              />
            </FormGroup>
            <div className="d-flex justify-content-end mt-5">
              <Link to={"/plan"}>
                {" "}
                <InputButton text={"Next"} />
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </MainContain>
  );
};

export default InfoPage;
