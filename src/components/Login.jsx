import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
export default function Index({ setshowroot }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (d) => {
    try {
      fetch(`http://localhost:3000/Login?email=${d.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data[0].password == d.password) {
            localStorage.setItem("loggedin_user_id", data[0]._id);
            localStorage.setItem("loggedin_user_name", data[0].name);
            localStorage.setItem("loggedin_user_email", d.email);
            location.href = "/welcome";
          } else {
            window.alert(
              "Please Signup if already signup then fill correct info"
            );
          }
        });
    } catch (error) {
      console.error("Error:", error);
      setError("myform", { type: "manual", message: error.message });
    }
  };

  return (
    <div className="container ">
      <div className="card main " style={{ borderRadius: "20px" }}>
        <div className="card-header">Login </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row mt-2">
              <label htmlFor="email" className="col-md-4 text-md-right">
                Email Address
              </label>
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
                  {errors.email && <p> {errors.email.message}</p>}
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
                  {errors.password && <p> {errors.password.message}</p>}
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
                  Login
                </button>
                <p className="text-black mt-2 mb-2">
                  I have not any Account{" "}
                  <a
                    onClick={() => setshowroot(0)}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "blueviolet",
                    }}
                  >
                    Sign Up
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
