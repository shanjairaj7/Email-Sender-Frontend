import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { SEND_EMAIL } from "./mutations";

export const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendEmail, { data, loading, error }] = useMutation(SEND_EMAIL);

  const submitForm = (e) => {
    e.preventDefault();

    if (email.length !== 0 && message.length !== 0) {
      sendEmail({
        variables: {
          input: {
            from: email,
            message: message,
          },
        },
      });
    }
  };

  if (error) {
    alert("Error");
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <div className="w-96 p-5">
      <h1 className="text-xl font-medium mb-2">Contact Form</h1>
      <form className="flex flex-col" onSubmit={(e) => submitForm(e)}>
        <input
          type="email"
          required
          className="border border-gray-300 mb-4 p-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="border border-gray-300 p-3"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 py-3 text-white mt-3 rounded"
          type="submit"
          onClick={(e) => submitForm(e)}
          disabled={loading}
        >
          <span>{loading ? "Loading..." : "Submit Form"}</span>
        </button>
      </form>
    </div>
  );
};
