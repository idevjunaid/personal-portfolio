import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";
import { MdOutlineSend } from "react-icons/md";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqaepalr");
  if (state.succeeded) {
    return <p>Thank you for reaching out! We will get back to you as soon as possible.</p>;

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-5">
        {/* Your Name Field */}
        <input
          id="your_name"
          type="text"
          name="your_name"
          placeholder="Your Name*"
          className="w-full py-5 px-2 bg-transparent border border-0 text-xl border-b-2 border-[#d1d5e0] dark:border-[#d1d1cf80] focus:border-[#aa70e0] focus:outline-none"
        />
        <ValidationError
          prefix="Your Name"
          field="your_name"
          errors={state.errors}
        />

        {/* Company Name Field */}
        <input
          id="company_name"
          type="text"
          name="company_name"
          placeholder="Company Name*"
          className="w-full py-5 px-2 bg-transparent border border-0 text-xl border-b-2 border-[#d1d5e0] dark:border-[#d1d1cf80] focus:border-[#aa70e0] focus:outline-none"
        />
        <ValidationError
          prefix="Company Name"
          field="company_name"
          errors={state.errors}
        />
      </div>
      <div className="flex gap-5">
        {/* Email Address Field */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address*"
          className="w-full py-5 px-2 bg-transparent border border-0 text-xl border-b-2 border-[#d1d5e0] dark:border-[#d1d1cf80] focus:border-[#aa70e0] focus:outline-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Phone Number Field */}
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full py-5 px-2 bg-transparent border border-0 text-xl border-b-2 border-[#d1d5e0] dark:border-[#d1d1cf80] focus:border-[#aa70e0] focus:outline-none"
          placeholder="Phone Number"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div className="flex">
        {/* Message Textarea */}
        <textarea
          id="message"
          name="message"
          placeholder="A Few Words"
          rows={5}
          className="w-full py-5 px-2 bg-transparent border border-0 text-xl border-b-2 border-[#d1d5e0] dark:border-[#d1d1cf80] focus:border-[#aa70e0] focus:outline-none resize-none "
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      {/* Submit Button */}
      <button type="submit" disabled={state.submitting}>
        <Button text="Send Message" varient="primary" url="#" icon={<MdOutlineSend />} />
      </button>
    </form>
  );
}

export default ContactForm;
