import React from "react";
import { useForm } from "react-hook-form";

const classes = {
  formContainer:
    "w-full bg-gray-800 h-screen flex flex-col items-center justify-center",
  headline: "pb-1 font-bold text-xl text-gray-400",
  form:
    "max-w-lg w-full text-gray-200 mt-4 px-8 md:px-0 flex flex-col justify-center items-center ",
  wrapperBlocInput:
    "w-full flex flex-col sm:flex-row sm:space-x-8 justify-between items-center",
  blocInput: "flex flex-col justify-center items-center h-full",
  inputContainer: "flex flex-col justify-center",
  label: " ",
  input:
    "bg-gray-700 mb-0 border border-gray-600 rounded-lg focus:border-gray-900 focus:outline-none focus:bg-gray-500 py-1 px-4 block w-full  ",
};
function FormContact() {
  const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  // console.log(watch("prenom"));
  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const templateId = "template_1ksrj13";
    const serviceID = "my_account";
    sendFeedback(serviceID, templateId, {
      message_html: data.comment,
      reply_to: data.email,
    });
    r.target.reset();
  };
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };
  return (
    <section class="text-gray-600 body-font relative" id="contact">
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15432.522915569276!2d-17.467686399999998!3d14.761664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1612520045967!5m2!1sfr!2ssn"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Envoyez nous un message par mail
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Votre Email
              </label>
              <input
                ref={register({
                  required: "Entrez votre mail",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                ref={register({
                  required: true,
                })}
                id="comment"
                name="comment"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              envoyer
            </button>
            <p class="text-xs text-gray-500 mt-3"></p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormContact;
