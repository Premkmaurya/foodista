import Header from "../../components/home/Header";
import Call from "../../components/about/Call";
import GetInTouch from "../../components/contact/GetInTouch";
import ContactForm from "../../components/contact/ContactForm";
import Footer from "../../components/common/Footer";

function Contact() {
  return (
    <div className=" text-black/80 min-h-screen">
      <Header />
      <div className="relative py-20 bg-cover bg-center">
        <div className="absolute inset-0 h-[40vh]">
          <img className="w-full h-full object-cover" src="/image/contact.jpg" alt="" />
        </div>
        <div className="relative container mx-auto text-center px-6">
          <h1 className="text-4xl text-white md:text-6xl font-extrabold tracking-tight">
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container font-[author] mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <GetInTouch />
        <ContactForm />
      </div>
      <Call />
      <Footer />
    </div>
  );
}

export default Contact;
