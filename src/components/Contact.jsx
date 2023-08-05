import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ismail Shaikhnag",
          from_email: form.email,
          to_email: "shaikhnagismail@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible.",
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Ahh, something went wrong. Please try again.");
        },
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden lg:mt-12 lg:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="min-w-[400px]  flex-[0.75] rounded-2xl bg-black-100 p-8 lg:min-w-[600px]"
      >
        <h3 className={styles.sectionHeadText}>Get in touch.</h3>
        <p className={styles.sectionSubText}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col items-start gap-8 lg:items-stretch"
        >
          <label className="flex w-full flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name?"
              className="rounded-lg border  border-secondary bg-tertiary py-4 px-6 font-medium text-white  placeholder:text-secondary/50"
            />
          </label>
          <label className="flex w-full flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter you email address?"
              className="rounded-lg border border-secondary bg-tertiary py-4 px-6  font-medium text-white placeholder:text-secondary/50"
            />
          </label>
          <label className="flex w-full flex-col">
            <span className="mb-4 font-medium text-white">Your Message *</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              className="rounded-lg border border-secondary bg-tertiary py-4 px-6  font-medium text-white placeholder:text-secondary/50"
            />
          </label>

          <button
            type="submit"
            disabled={!form.message.trim()} // Check if isActive is false or if the message input is empty or only contains whitespace
            className={`${
              !form.message.trim() ? "cursor-not-allowed" : ""
            }  w-full rounded-xl border border-secondary  bg-tertiary py-3 px-8 font-bold text-white shadow-md shadow-primary`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex h-[350px] w-[800px] min-w-[800px] self-center md:h-[550px] lg:h-auto lg:flex-1 lg:self-auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
