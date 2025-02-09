// import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import gsap from "gsap";

// const ContactForm = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   useEffect(() => {
//     // Animate form elements on mount
//     gsap.from(".animate-form", {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });
//   }, []);

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const onSubmit = (data: any) => {
//     console.log(data);
//     setIsSubmitted(true);
//     reset();

//     // Animate success message
//     gsap.from(".success-message", {
//       opacity: 0,
//       y: -20,
//       duration: 0.5,
//     });

//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   return (
//     <div className="relative max-w-md mx-auto   p-8  border-indigo-500/20 bg-black bg-opacity-20 backdrop-blur-sm">
//       <h2 className="text-2xl font-medium text-left mb-8 border-b border-gray-600">
//         Write Me
//       </h2>

//       {isSubmitted && (
//         <div className="mb-6 p-4 bg-indigo-900/50 border border-indigo-400 text-indigo-200 rounded">
//           Thank you for your message! I will get back to you soon.
//         </div>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             {...register("name", { required: "Name is required" })}
//             className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm  sm:text-sm p-2   text-white  transition duration-300"
//           />
//           {errors.name && (
//             <p className="mt-1 text-sm text-red-400">
//               {errors.name.message as string}
//             </p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//                 message: "Please enter a valid email",
//               },
//             })}
//             className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm  sm:text-sm p-2   text-white  transition duration-300"
//           />
//           {errors.email && (
//             <p className="mt-1 text-sm text-red-400">
//               {errors.email.message as string}
//             </p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium">
//             Message
//           </label>
//           <textarea
//             id="message"
//             rows={4}
//             {...register("message", { required: "Message is required" })}
//             className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm  sm:text-sm p-2   text-white  transition duration-300"
//           />
//           {errors.message && (
//             <p className="mt-1 text-sm text-red-400">
//               {errors.message.message as string}
//             </p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="flex items-center justify-center w-full mt-8 p-4 border border-transparent shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:scale-105"
//         >
//           <span>Send Message</span>
//           {/* <Mail className="ml-2 h-4 w-4" /> */}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    gsap.from(".animate-form", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const onSubmit = (data: any) => {
    const formData = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      custom_field: "Some custom value",
    };

    emailjs
      .send(
        "service_f1qkpnm", // Replace with your service ID
        "template_y1kuwuh", // Replace with your template ID
        formData,
        "sEDL1-8Tc5cKH1S5J" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSubmitted(true);
          gsap.from(".success-message", {
            opacity: 0,
            y: -20,
            duration: 0.5,
          });
          setTimeout(() => setIsSubmitted(false), 3000);
          reset();
        },
        (error) => {
          console.log("Failed to send email.", error.text);
        }
      );
  };

  return (
    // <div className="relative max-w-md mx-auto p-8 border-indigo-500/20 bg-black bg-opacity-20 backdrop-blur-sm">
    //   <h2 className="text-2xl font-medium text-left mb-8 border-b border-gray-600">
    //     Write Me
    //   </h2>

    //   {isSubmitted && (
    //     <div className="mb-6 p-4 bg-indigo-900/50 border border-indigo-400 text-indigo-200 rounded">
    //       Thank you for your message! I will get back to you soon.
    //     </div>
    //   )}

    //   <form
    //     ref={formRef}
    //     onSubmit={handleSubmit(onSubmit)}
    //     className="space-y-4 animate-form"
    //   >
    //     <div>
    //       <label htmlFor="name" className="block text-sm font-medium">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         {...register("name", { required: "Name is required" })}
    //         className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm sm:text-sm p-2 text-white transition duration-300"
    //       />
    //       {errors.name && (
    //         <p className="mt-1 text-sm text-red-400">
    //           {errors.name.message as string}
    //         </p>
    //       )}
    //     </div>

    //     <div>
    //       <label htmlFor="email" className="block text-sm font-medium">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         {...register("email", {
    //           required: "Email is required",
    //           pattern: {
    //             value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //             message: "Please enter a valid email",
    //           },
    //         })}
    //         className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm sm:text-sm p-2 text-white transition duration-300"
    //       />
    //       {errors.email && (
    //         <p className="mt-1 text-sm text-red-400">
    //           {errors.email.message as string}
    //         </p>
    //       )}
    //     </div>

    //     <div>
    //       <label htmlFor="message" className="block text-sm font-medium">
    //         Message
    //       </label>
    //       <textarea
    //         id="message"
    //         rows={4}
    //         {...register("message", { required: "Message is required" })}
    //         className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm sm:text-sm p-2 text-white transition duration-300"
    //       />
    //       {errors.message && (
    //         <p className="mt-1 text-sm text-red-400">
    //           {errors.message.message as string}
    //         </p>
    //       )}
    //     </div>

    //     <button
    //       type="submit"
    //       className="flex items-center justify-center w-full mt-8 p-4 border border-transparent shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:scale-105"
    //     >
    //       Send Message
    //     </button>
    //   </form>
    // </div>

    <div className="relative max-w-md mx-auto   p-8  border-indigo-500/20 bg-black bg-opacity-20 backdrop-blur-sm">
      <h2 className="text-2xl font-medium text-left mb-8 border-b border-gray-600">
        Write Me
      </h2>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-indigo-900/50 border border-indigo-400 text-indigo-200 rounded">
          Thank you for your message! I will get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm  sm:text-sm p-2   text-white  transition duration-300"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">
              {errors.name.message as string}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
            className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm  sm:text-sm p-2   text-white  transition duration-300"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message", { required: "Message is required" })}
            className="mt-1 block w-full rounded-none border-b bg-black/60 border-gray-500 shadow-sm  sm:text-sm p-2   text-white  transition duration-300"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">
              {errors.message.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full mt-8 p-4 border border-transparent shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:scale-105"
        >
          <span>Send Message</span>
          {/* <Mail className="ml-2 h-4 w-4" /> */}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
