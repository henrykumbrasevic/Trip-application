import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const SignUpPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const { registerUser } = useAuth();
  

  const onSubmit = async (data) => {
        registerUser(data.username, data.password);
    }
  

  return (
    <>
      <div className="flex flex-col place-items-center h-dvh">
        {/* Icon */}
        <div className="pb-[3.3rem] pt-[3rem] tablet:pt-[5.5rem] tablet:pb-[4.53rem] desktop:pt-[4.9rem] desktop:pb-[5.19rem]">
        </div>

        <div className="bg-semi-dark-blue rounded-[0.63rem] pr-[1.5rem] tablet:pr-[2rem] tablet:rounded-[1.25rem] ">
          <h1 className="heading-l pl-[1.5rem] pt-[1.5rem] pb-[2.2rem] tablet:pl-[2rem] tablet:pt-[1.7rem] tablet:pb-[2.1rem] desktop:pb-[2.1rem] desktop:pt-[1.75rem] tracking-tight">
            Sign Up
          </h1>
          {/* Form */}
          {/* While submitting the form, calls "onSubmit" function */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pl-[1.5rem] tablet:pl-[2rem]"
          >
            {/* Email input window */}
            <div className="pb-[1.2rem] tablet:pb-[1.1rem] relative">
              <input
                type="text"
                id="username"
                placeholder="Username"
                {...register("username", {
                  required: "Can't be empty",
    
                })}
                // If the error occurs, sets input border red
                // Tailwind autofill class, leaves original CSS
                // Calls setError state to remove the error when user starts typing
                className={`bg-semi-dark-blue border-0 border-b-[0.063rem] pb-7 pl-[1rem] tablet:pb-[1.9rem] desktop:pb-[1.7rem] tablet:w-[21rem] autofill:transition-colors autofill:duration-[999999999s] hover:opacity-100 hover:border-b-white form-input ${errors.email ? "border-red" : "greyish-blue"
                  }`}
                onInput={() => setError("")}
              />
              {/* Separation of errors by checking their type and placing them differently*/}
              <div className="relative">
                {errors.email?.type === "required" && (
                  <p className="error-text text-red absolute bottom-[1.15rem] left-[10.84rem] tablet:left-[14.44rem]">
                    Can`t be empty
                  </p>
                )}
              </div>
              <div className="relative">
                {errors.email?.type === "pattern" && (
                  <p className="error-text text-red absolute top-[0.1rem] left-[0.5rem]">
                    Invalid email address
                  </p>
                )}
              </div>
            </div>
            {/* Passwword input window */}
            <div className="pb-[1.3rem] tablet:pb-[1.1rem] desktop:pt-[0.25rem]">
              <input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "Can't be empty",
                //   pattern: {
                //     value:
                //       /^(?=.*\d)(?=.*[A-Z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*.,?]).{8,}$/,
                //     message:
                //       "At least 8 characters, capital letter, symbol and number",
                //   },
                })}
                className={`bg-semi-dark-blue border-0 border-b-[0.063rem] pb-7 pl-[1rem] tablet:pb-[1.9rem] tablet:w-[21rem] desktop:pb-[1.7rem] autofill:transition-colors autofill:duration-[999999999s] hover:opacity-100 hover:border-b-white form-input ${errors.password ? "error-red" : "greyish-blue"
                  }`}
                onInput={() => setError("")}
              />
              <div className="relative">
                {errors.password?.type === "required" && (
                  <p className="error-text text-red absolute bottom-[1.15rem] left-[10.84rem] tablet:left-[14.44rem]">
                    Can`t be empty
                  </p>
                )}
              </div>
              <div className="relative">
                {errors.password?.type === "pattern" && (
                  <p className="tablet:text-[0.8125rem] text-red absolute top-[0.1rem] left-[0.5rem] mobile:text-[0.78rem]">
                    At least 8 chars, capital letter, symbol and number
                  </p>
                )}
              </div>
            </div>
            <div className="relative">
              {/* Shows errors coming from error state */}
              {error && (
                <p className="error-text text-red absolute pl-[0.6rem] bottom-[0.2rem]">
                  {error}
                </p>
              )}
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-red text-white body-m rounded-[0.375rem] w-[17.438rem] h-[3rem] hover:bg-white hover:text-semi-dark-blue hover:duration-500 tablet:w-[21rem]"
            >
              Create an account
            </button>
          </form>
          <p className="body-m pl-[3.7rem] pt-[1.4rem] pb-[1.62rem] tablet:pl-[5.75rem] tablet:pb-[2rem]">
            Already have an account?
            <Link to={`/login`} className="text-red body-m mx-1 tablet:mx-3 ">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;