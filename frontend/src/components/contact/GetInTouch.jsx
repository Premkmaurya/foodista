import { GoClock } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function GetInTouch() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 text-gray-400 text-sm font-semibold uppercase">
        <div className="w-8 h-px bg-gray-600"></div>
        <span>Keep Close</span>
      </div>
      <h2 className="text-3xl font-[Beach] md:text-4xl font-bold leading-tight">
        Get In Touch
      </h2>
      <p className="text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneanue
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculusss mus. Donec quam
        felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center space-x-4">
          <FaLocationDot color="black" size={22} />
          <div className="text-sm">
            <p className="font-semibold text-white">
              Sovvy Restaurant, R. Raya
            </p>
            <p className="text-gray-400">Canggu, Badung, Bali</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <IoCall color="black" size={22} />
          <div className="text-sm">
            <p className="font-semibold text-white">(+62) 81 224 557 900</p>
            <p className="text-gray-400">(+62) 82 222 577 912</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MdFlight color="black" size={22} />
          <div className="text-sm">
            <p className="font-semibold text-white">Reservation@sovvy.com</p>
            <p className="text-gray-400">Books@sovvy.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <GoClock color="black" size={22} />
          <div className="text-sm">
            <p className="font-semibold text-white">Open 04:00 PM WITA</p>
            <p className="text-gray-400">Closed 01:00 AM WITA</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          <div className="flex justify-start items-center">
            <FaInstagram
              onClick={() =>
                window.open(
                  "https://www.instagram.com/premmaurya222",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              color={"black"}
              size={23}
              className="cursor-pointer"
            />
            <FaGithub
              onClick={() => window.open("https://www.github.com/Premkmaurya")}
              color={"black"}
              size={23}
              className="ml-4 cursor-pointer"
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/prem-maurya-8640b5319/"
                )
              }
              color={"black"}
              size={23}
              className="ml-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
