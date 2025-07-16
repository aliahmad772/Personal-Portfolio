import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aab23d75-ff39-48bf-a92f-bf4d507db815");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Send!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Message Not Send!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      setResult(data.message);
    }
  };
  return (
    <div className="flex flex-col justify-center w-full ">
      <h1 className="text-4xl md:text-8xl font-extrabold text-center pb-8  md:pb-14 mt-10 lg:mt-24">
        Contact
      </h1>
      <form
        onSubmit={onSubmit}
        className="bg-amber-50 flex flex-col w-[90%] sm:w-[70%]  mx-auto p-3 sm:p-8 space-y-2 mb-20 border border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-2xl"
      >
        <label className="text-xl">Name:</label>
        <input
          className="border border-black/80 w-[100%] lg:w-[50%] px-2 text-lg rounded-sm h-auto"
          type="text"
          placeholder="Enter your name."
          name="name"
          required
        />
        <label className="text-xl">Email:</label>
        <input
          className="border border-black/80 w-[100%] lg:w-[50%] px-2 text-lg rounded-sm"
          type="text"
          placeholder="Enter your email."
          name="email"
          required
        />
        <label className="text-xl">Message:</label>
        <textarea
          className="border border-black/80 w-[100%] lg:w-[50%] px-2 text-lg rounded-sm h-[10rem]"
          type="text"
          placeholder="Type a message."
          name="message"
          required
        />
        <button
          type="submit"
          className="w-fit text-lg sm:text-xl mx-auto sm:mx-0  py-2 px-4 mt-2 border bg-[#1b1b1b] text-[#f5f5f5] rounded-lg hover:bg-[#303030ec] duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
