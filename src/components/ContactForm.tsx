"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    form.current &&
      emailjs
        .sendForm("service_ki1blsb", "template_cuxfv9d", form.current, {
          publicKey: "fK97yz9qvL78R9Wq9",
        })
        .then(
          () => {
            alert("Message sent successfully!");
            //@ts-ignore
            form.current && form.current.reset();
          },
          (error) => {
            alert("Failed to send the message. Please try again.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className=" space-y-10">
      <div>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="mt-1 block w-full px-4 py-4 border border-gray-300 text-sm focus:ring-primary focus:border-primary"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="mt-1 block w-full px-4 py-4 border border-gray-300 text-sm focus:ring-primary focus:border-primary"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="mt-1 block w-full px-4 py-4 border border-gray-300 text-sm focus:ring-primary focus:border-primary"
          placeholder="Type your message"
          required
        ></textarea>
      </div>

      <div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-primary text-white px-4 py-4 shadow hover:bg-accent transition duration-200 text-sm font-medium"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};
