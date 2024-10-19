import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading,setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://web-builderit.com/api/portfolio-contact", formData);

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Your message has been sent successfully!',
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        timer: 3000,
        timerProgressBar: true,
      });
    }finally{
      setLoading(false);
    }
  };

  return (
    <section className=" text-gray-800 text-center lg:text-left" id="contact">
      <div className="px-6 py-12 md:px-12 pt-24 bg-black ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl text-gray-200 uppercase font-bold tracking-tight leading-tight mb-6">
              Contact <span className="text-yellow-400"> Me</span>
            </h1>
            <p className="text-gray-200">
              Feel free to reach out for collaborations or inquiries. I'm always open to discussing new projects or opportunities!
            </p>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block rounded-lg border-t shadow-sm shadow-pink-600 bg-black px-6 py-12 md:px-12">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-8">
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-black focus:border-pink-600 focus:outline-none"
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-black focus:border-pink-600 focus:outline-none"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-200 bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-black focus:border-pink-600 focus:outline-none"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-200 bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-black focus:border-pink-600 focus:outline-none"
                  placeholder="Enter Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 mb-6 w-full bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                 {loading ? "Sending..." : "Submit"} 
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
