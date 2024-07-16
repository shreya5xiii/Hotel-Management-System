import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

export default function Signup({ setshowroot }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      let response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let res = await response.json();
      console.log(data, res);
      setshowroot(1);
    } catch (error) {
      console.error("Error:", error);
      setError("myform", { type: "manual", message: error.message });
    }
  };

  return (
    <div className="container ">
      <div className="card main" style={{ borderRadius: "20px" }}>
        <div className="card-header">Sign Up</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row mt-2">
              <label className="col-md-4 text-md-right">User Name</label>
              <div className="col-md-8">
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: { value: 4, message: "Min length is 4" },
                    maxLength: { value: 20, message: "Max length is 20" },
                  })}
                  id="name"
                  type="text"
                  className="form-control inputcss"
                  placeholder="Enter name"
                />
                <span className="text-danger">
                  {errors.name && <p>{errors.name.message}</p>}
                </span>
              </div>
            </div>

            <div className="form-group row mt-2">
              <label className="col-md-4 text-md-right">Email Address</label>
              <div className="col-md-8">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  id="email"
                  type="text"
                  className="form-control inputcss"
                  placeholder="Enter email"
                />
                <span className="text-danger">
                  {errors.email && <p>{errors.email.message}</p>}
                </span>
              </div>
            </div>

            <div className="form-group row mt-2">
              <label htmlFor="password" className="col-md-4 text-md-right">
                Password
              </label>
              <div className="col-md-8">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: { value: 6, message: "Min length is 6" },
                  })}
                  id="password"
                  type="password"
                  className="form-control inputcss"
                  placeholder="Enter password"
                />
                <span className="text-danger">
                  {errors.password && <p>{errors.password.message}</p>}
                </span>
              </div>
            </div>

            <div className="form-group row mt-2">
              <label
                htmlFor="confirm_password"
                className="col-md-4 text-md-right"
              >
                Confirm Password
              </label>
              <div className="col-md-8">
                <input
                  {...register("confirm_password", {
                    required: "This field is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  id="confirm_password"
                  type="password"
                  className="form-control inputcss"
                  placeholder="Confirm password"
                />
                <span className="text-danger">
                  {errors.confirm_password && (
                    <p>{errors.confirm_password.message}</p>
                  )}
                </span>
              </div>
            </div>

            <div className="form-group row mt-2">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="button1"
                >
                  Signup
                </button>
                <p className="text-black mt-2 mb-2">
                  I already have an Account{" "}
                  <a
                    onClick={() => setshowroot(1)}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "blueviolet",
                    }}
                  >
                    Login Instead
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
