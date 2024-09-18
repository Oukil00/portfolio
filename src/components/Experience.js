import React from "react";
import Atoms from '../assets/Images/atoms.png';
import Attendix from '../assets/Images/attendix.png';
import Medibook from '../assets/Images/medibook.png'; 
import ItNomad from '../assets/Images/isb.jpg';
import ESC from '../assets/Images/esc.jpg';
import ITM from '../assets/Images/ITM.jpg';


const Experience = () => {
  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-7xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center">
            Professional Experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Figma Mentor */}
          <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-4 rounded-xl shadow-md bg-slate-100">
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Figma Mentor
              </h1>
              <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
                <img src={ITM} alt="ITM-Institute" className="h-10 w-10 lg:h-16 lg:w-20 bg-transparent" />
                ITM-Institute
              </div>
              <p className="text-base md:text-base text-gray-500">
                August 2024 - Present
              </p>
            </div>
            <div className="flex w-fit mx-auto">
              <ul data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium">
                <li className="py-2 md:py-3">
                  Provided mentorship and guidance to students on effective use of Figma for UI/UX design.
                </li>
                <li className="py-2 md:py-3">
                  Conducted workshops and one-on-one sessions to enhance students' skills in Figma.
                </li>
                <li className="py-2 md:py-3">
                  Assisted in developing curriculum and educational materials related to Figma.
                </li>
              </ul>
            </div>
          </div>

          {/* Design Department Head | UI/UX Designer | Product Designer - Attendix */}
          <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-4 rounded-xl shadow-md bg-slate-100">
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Design Department Head | UI/UX Designer | Product Designer
              </h1>
              <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
                <img src={Attendix} alt="Attendix" className="h-10 w-10 lg:h-16 lg:w-20 bg-transparent" />
                Attendix
              </div>
              <p className="text-base md:text-base text-gray-500">
                January 2024 - Present
              </p>
            </div>
            <div className="flex w-fit mx-auto">
              <ul data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium">
                <li className="py-2 md:py-3">
                  Led the design team in creating user-centric interfaces for various projects.
                </li>
                <li className="py-2 md:py-3">
                  Oversaw the development of prototypes and mockups to improve user experience.
                </li>
                <li className="py-2 md:py-3">
                  Coordinated with cross-functional teams to ensure alignment with project goals.
                </li>
              </ul>
            </div>
          </div>

          {/* Design Department Head | UI/UX Designer | Product Designer - Medibook */}
          <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-4 rounded-xl shadow-md bg-slate-100">
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Design Department Head | UI/UX Designer | Product Designer
              </h1>
              <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
                <img src={Medibook} alt="Medibook" className="h-10 w-10 lg:h-16 lg:w-20 bg-transparent" />
                Medibook
              </div>
              <p className="text-base md:text-base text-gray-500">
                October 2023 - Present
              </p>
            </div>
            <div className="flex w-fit mx-auto">
              <ul data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium">
                <li className="py-2 md:py-3">
                  Directed design efforts for the Medibook platform, focusing on enhancing the user experience.
                </li>
                <li className="py-2 md:py-3">
                  Created and implemented UI/UX designs for various healthcare-related features.
                </li>
                <li className="py-2 md:py-3">
                  Collaborated with developers to ensure design accuracy and functionality.
                </li>
              </ul>
            </div>
          </div>

          {/* Design Department Head | UI/UX Designer | Product Designer - It Nomad */}
          <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-4 rounded-xl shadow-md bg-slate-100">
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Design Department Head | UI/UX Designer | Product Designer
              </h1>
              <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
                <img src={ItNomad} alt="It Nomad" className="h-10 w-10 lg:h-16 lg:w-20 bg-transparent" />
                It Nomad
              </div>
              <p className="text-base md:text-base text-gray-500">
                September 2023 - Present
              </p>
            </div>
            <div className="flex w-fit mx-auto">
              <ul data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium">
                <li className="py-2 md:py-3">
                  Oversaw design and development projects, ensuring high-quality UI/UX deliverables.
                </li>
                <li className="py-2 md:py-3">
                  Developed user-centric designs and prototypes for various applications.
                </li>
                <li className="py-2 md:py-3">
                  Worked closely with stakeholders to align design solutions with business goals.
                </li>
              </ul>
            </div>
          </div>

          {/* Design Department Head - English Speakers Club - USTHB */}
          <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-4 rounded-xl shadow-md bg-slate-100">
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Design Department Head
              </h1>

              <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
                <img src={ESC} alt="Medibook" className="h-10 w-10 lg:h-16 lg:w-20 bg-transparent" />
                English Speakers Club - USTHB
              </div>
              <p className="text-base md:text-base text-gray-500">
                October 2023 - June 2024
              </p>
            </div>
            <div className="flex w-fit mx-auto">
              <ul data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium">
                <li className="py-2 md:py-3">
                  Led the design efforts for promotional materials and digital content for the club.
                </li>
                <li className="py-2 md:py-3">
                  Created engaging and visually appealing designs to promote club activities and events.
                </li>
                <li className="py-2 md:py-3">
                  Coordinated with club members to align designs with their vision and goals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
