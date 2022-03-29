import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { userService } from "../service/userService";

const classes = {
  formContainer:
    "bg-gray-800 flex  flex-col items-center justify-center w-full h-full  ",
  headline: "pb-1 font-bold text-xl text-gray-400",
  form:
    "max-w-md w-full text-gray-200 mt-2 px-8 md:px-0 flex flex-col justify-center items-center ",
  wrapperBlocInput:
    "w-full flex flex-col sm:flex-row sm:space-x-8 justify-between items-center",
  blocInput: "flex flex-col justify-center w-full items-center h-full",
  inputContainer: "flex flex-col w-full justify-center",
  label: " ",
  input:
    "bg-gray-700 mb-0 border min-w-sm border-gray-600 rounded-lg focus:border-gray-900 focus:outline-none focus:bg-gray-500 py-1 px-4 block w-full  ",
};
function FormLogin({ setOpenLogin }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [logging, setLogging] = useState(false);
  const [message, setMessage] = useState("");
  let history = useHistory();

  useEffect(() => {
    setMessage("");
    setLogging(false);
  }, []);

  const onSubmit = (data) => {
    setLogging(true);
    userService
      .login(data)
      .then((res) => {
        setLogging(false);
        setMessage("CONNEXION REUSSIE");
        console.log(res);
        history.push("/app");
        setOpenLogin(false);

        // // window.location.reload();
      })
      .catch((e) => {
        setLogging(false);
        setMessage("ECHEC CONNEXION");
      });
  };
  console.log(watch("username"));
  return (
    <div className={classes.formContainer}>
      <h2 className={classes.headline}>Connexion</h2>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.wrapperBlocInput}>
          <div className={classes.blocInput}>
            <div className={classes.inputContainer}>
              <label className="mr-4" htmlFor="email">
                Email
              </label>
              <input
                className={classes.input}
                type="email"
                id="username"
                placeholder="baba@gmail.com"
                name="username"
                ref={register({ required: true })}
              />
              {errors.username && (
                <span class="text-sm font-bold text-red-600 ">
                  Email invalide
                </span>
              )}
              <label className={classes.label} htmlFor="password">
                Mot de Passe
              </label>
              <input
                className={classes.input}
                id="password"
                type="password"
                placeholder="Mot de Passe"
                name="password"
                ref={register({ required: true })}
              />
              {errors.password && (
                <span class="text-sm font-bold text-red-600 ">
                  Mot de Passe invalide
                </span>
              )}
            </div>
          </div>
        </div>
        {logging ? (
          <button
            className="bg-orange-600 text-sm mt-4 flex flex-row items-center 
                      rounded-lg py-3 px-12 w-full focus:outline-none hover:bg-orange-500"
            type="submit"
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            CONNEXION ...
          </button>
        ) : (
          <button
            className="bg-orange-500 text-sm mt-4 
                      rounded-lg py-3 px-12 w-full focus:outline-none hover:bg-orange-500"
            type="submit"
          >
            SE CONNECTER
          </button>
        )}
        {message && (
          <div
            class=" py-3 px-4 text-lg rounded-lg h-10 border-t-4 space-x-8 w-10/12 border-red-800 font-bold flex flex-row justify-between
            items-center bg-orange-200 text-red-600 m-4"
          >
            {message}
            <svg
              onClick={() => {
                setMessage("");
              }}
              class="h-5 w-5 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </form>
    </div>
  );
}

export default FormLogin;
