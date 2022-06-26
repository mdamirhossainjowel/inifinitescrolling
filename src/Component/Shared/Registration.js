import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    userEmailPass,
    loadingEmailPass,
    errorEmailPass,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, usergoogle, loadinggoogle, errorgoogle] =
    useSignInWithGoogle(auth);

  if (loadingEmailPass || loadinggoogle) {
    return <Loading></Loading>;
  }
  if (usergoogle || userEmailPass) {
    navigate("/");
  }
  const onSubmit = async (data) => {
    if (data.Password === data.Confirm_Password) {
      await createUserWithEmailAndPassword(data.Email, data.Confirm_Password);
      await updateProfile({ displayName: data.Name });
    } else {
      alert("Both Password Should Be Same");
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl mx-6 lg:w-1/2 lg:mx-auto my-14">
      <div className="card-body max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-accent text-center mb-4">
          REGISTRATION
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Full Name"
            {...register("Name", { required: true })}
          />
          {errors.Name?.type === "required" && "Name is required"}

          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Email"
            {...register("Email", { required: true })}
          />
          {errors.Email?.type === "required" && "Email is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder=" Password"
            type="password"
            {...register("Password", { required: true })}
          />
          {errors.Password?.type === "required" && "Password is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Confirm Password"
            type="password"
            {...register("Confirm_Password", { required: true })}
          />
          {errors.Confirm_Password?.type === "required" &&
            "Password is required"}

          {errorEmailPass || errorgoogle ? (
            <p className="text-red-400">
              Error: {errorEmailPass?.message || errorgoogle?.message}
            </p>
          ) : (
            ""
          )}

          <input className="btn btn-accent w-full" type="submit" />
        </form>
        <Link to="/login" className="underline text-accent">
          Already Have Account?Please Login
        </Link>

        <div className="divider">OR</div>
        <div className="card-actions justify-center">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-accent w-full max-w-lg "
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
