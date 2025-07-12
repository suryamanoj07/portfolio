import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1svobsb",  // Replace with your EmailJS Service ID
        "template_milcyxw",  // Replace with your EmailJS Template ID
        form.current,
        "w9DhLqum4AvheeOVI"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-responsive px-responsive"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-lg font-bold text-white mb-4">CONTACT</h2>
        <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-responsive-base sm:text-responsive-lg lg:text-base text-gray-400 font-semibold max-w-2xl mx-auto">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md sm:max-w-lg bg-[#0d081f] p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-responsive-lg sm:text-responsive-xl lg:text-base font-semibold text-white text-center mb-6">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-responsive-sm sm:text-responsive-base lg:text-sm transition-colors duration-200"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-responsive-sm sm:text-responsive-base lg:text-sm transition-colors duration-200"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-responsive-sm sm:text-responsive-base lg:text-sm transition-colors duration-200"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-responsive-sm sm:text-responsive-base lg:text-sm transition-colors duration-200 resize-none"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 sm:py-4 text-white font-semibold rounded-md hover:opacity-90 transition-all duration-200 text-responsive-base sm:text-responsive-lg lg:text-sm transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
