import ContactForm from "./ContactForm";
import Tag from "./Tag";
import { VscSparkleFilled } from "react-icons/vsc";

const Contact = () => {
  return (
    <section id="contact" className="py-[5rem]">
      <Tag text="Contact" icon={<VscSparkleFilled />} />
      <h1 className="heading text-[#8f56cc] text-[2rem] xl:text-[3rem] [line-height:1.2] py-5">
        Let's make something awesome together!
      </h1>
      <ContactForm />   
    </section>
  );
};

export default Contact;
