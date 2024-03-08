import React from "react";
import MainContain from "../components/MainContain";
import { Form, FormGroup } from "react-bootstrap";
import InputButton from "../components/InputButton";
import classes from "./style.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userForm } from "../features/InfoSlice";
import { validationSchema } from "../validation/validate";

const InfoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const onSubmit = (data) => {
    dispatch(userForm(data));
    if (data) {
      navigate("/plan");
    }
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
                placeholder={user.name || "e.g. Stephen King"}
                name="name"
                defaultValue={user.name || ""}
                {...register("name")}
                autoComplete="off"
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
                defaultValue={user.email || ""}
                placeholder={user.email || "e.g. stephenking@lorem.com"}
                name="email"
                {...register("email")}
                autoComplete="off"
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
                placeholder={user.phone || "e.g. +1 234 567 890"}
                name="phone"
                defaultValue={user.phone || ""}
                {...register("phone")}
                autoComplete="off"
              />
            </FormGroup>

            <div className="d-flex justify-content-end mt-5">
              {" "}
              <InputButton text={"Next"} />
            </div>
          </Form>
        </div>
      </div>
    </MainContain>
  );
};

export default InfoPage;
