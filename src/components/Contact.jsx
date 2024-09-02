/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";

import zako from "../assets/zako.jpg";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              Zakarya Oukil
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Graphic Designer | UI/UX Specialist| Product Designer | Figma Mentor - ITM-Institute
              
            </p>

            <div className="mt-4">
            <p className="text-lg text-gray-700 dark:text-slate-300 mb-8">
              This is my resume
            </p>
            <a
              href="https://zakaryaoukilresume.tiiny.site/"
              download="GraphicDesignResumeZakaryaOukil.pdf"
              className="py-4 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Download Resume
            </a>
          </div> 
          
              <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-8 max-sm:justify-evenly">

              <a
                href="https://www.linkedin.com/in/zakaryaoukil/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/zako_o.o/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiInstagram />
              </a>
              <a
                href="zakaryaoukil2003@gmail.com"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGmail />
              </a>
            </div>
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={zako}
              alt="Zakarya Oukil"
              className="h-[200px] max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full mt-12"
            />
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 💙 by Zakarya Oukil
        </p>
      </section>
    </>
  );
};
export default Contact;
