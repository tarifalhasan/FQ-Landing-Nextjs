"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Container from "../Container";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Replace this with your logic to handle form submission
  };

  return (
    <section className="pb-[155%] sm:pb-[100%] lg:pb-[85%] xl:pb-[55%] n bg-contact w-full relative m-0 p-0 bg-bottom bg-no-repeat bg-cover">
      <Container className="">
        <div className="pt-28">
          <h2 className="heading text-skin-secondary">Contactanos</h2>
        </div>
        <div className="absolute z-20 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Container className="w-full max-w-[699px]">
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <div>
                <label
                  className="text-base lg:text-2xl font-normal pb-1 block"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  required
                  className="bg-skin-secondary bg-opacity-[8%] outline-none border-none focus:outline-none block px-4 py-3 w-full rounded-[10px] text-white text-sm lg:text-base font-bold"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  className="text-base  lg:text-2xl font-normal pb-1 block"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  required
                  className="bg-skin-secondary required:border-red-500 required:border bg-opacity-[8%] outline-none border-none focus:outline-none block px-4 py-3 w-full rounded-[10px] text-white text-sm lg:text-base font-bold"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  className="text-base lg:text-2xl font-normal pb-1 block"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  className="bg-skin-secondary bg-opacity-[8%] outline-none border-none focus:outline-none block px-4 py-3 w-full rounded-[10px] text-white text-sm lg:text-base font-bold"
                  rows={9}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                className="w-full justify-center btn_primary"
                type="submit"
              >
                Contactanos
              </button>
            </form>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
