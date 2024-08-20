import React from "react";
import { useForm } from "react-hook-form";

function LoginHook() {
  const { register, handleSubmit,formState: { errors }, } = useForm();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"} placeholder="Enter username..."
        />
        {errors.firstName?.type === "required" && (
          <p className="Error" role="alert">First name is required</p>
        )}

        <input
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}  placeholder="Enter username..."
        />
        {errors.mail && <p  className="Error" role="alert">{errors.mail?.message}</p>}

        <input className="btn" type="submit" />
      </form>
    </>
  );
}

export default LoginHook;
