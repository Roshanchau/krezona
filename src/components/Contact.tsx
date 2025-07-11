import { Button } from "@/base/ui/button";

const Contact = () => {
  return (
    <div
      className="flex md:flex-row flex-col md:items-center relative  md:justify-between max-w-7xl md:px-16 md:py-14 px-10 py-8 rounded-lg mt-16 mx-auto"
      style={{
        background: "linear-gradient(265deg ,#6357F6 0%, #E6606C 100%)",
      }}
    >
      <div className="flex flex-col gap-10">
        <h3 className="font-thin text-neutral-300">CONTACT</h3>
        <h1 className="font-light text-4xl text-white ">
         Contact Us
        </h1>
        <h3 className="font-thin text-neutral-300">Game Development is the art of creating games and describes</h3>
      </div>
      <img src="/images/contact.png" alt="contact" className="md:flex hidden"/>
      <Button className="md:absolute bg-red-500 px-6 py-5 md:right-48 md:mt-0 mt-5 ">CONTACT US</Button>
    </div>
  );
};

export default Contact;
