"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
  Esc,
  Logo,
  ITM,
  Medibook,
  Attendix,
  Isb,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Esc}
              title="English Speakers Club - USTHB"
              subtitle="Graphic Designer"
              date="September 2021 - June 2024"
              para="- Created compelling visual designs for the English Speakers Club, enhancing brand identity and communication through graphic design."
            />
            <Exp_prop
              img={Esc}
              title="English Speakers Club - USTHB"
              subtitle="UI/UX Designer"
              date="September 2021 - June 2024"
              para="Designed and improved UI/UX for the club's digital platforms, creating wireframes and prototypes to enhance usability and user engagement."
            />

            <Exp_prop
              img={Esc}
              title="English Speakers Club - USTHB"
              subtitle="Design Team Lead"
              date="September 2023 - June 2024"
              para="- Led the design team at the English Speakers Club, overseeing the creation of impactful visual content and ensuring cohesive design strategies to enhance brand presence and communication."
            />
            <Exp_prop
              img={Logo}
              title="Freelance"
              subtitle="Graphic Designer"
              date="August 2023 - present"
              para="As a Freelance Graphic Designer, I have been responsible for creating visually compelling designs for various clients. My work includes designing branding materials, marketing collateral, and digital assets tailored to meet each client's specific needs and objectives."
            />

            <Exp_prop
              img={Logo}
              title="Freelance"
              subtitle="UI/UX Designer"
              date="August 2023 - present"
              para="In my role as a Freelance UI/UX Designer, I have worked on designing user interfaces and enhancing user experiences for a range of applications. This involves conducting user research, creating wireframes and prototypes, and ensuring that the final design is both functional and aesthetically pleasing."
            />

            <Exp_prop
              img={ITM}
              title="ITM Institute"
              subtitle="Graphic - UI/UX Design Instructor"
              date="August 2024 - present"
              para="At ITM Institute, I instruct students in both Graphic Design and UI/UX Design. My role involves developing and delivering course content, mentoring students, and providing hands-on training in design tools and methodologies to prepare them for careers in the design industry."
            />

            <Exp_prop
              img={Medibook}
              title="Medibook"
              subtitle="Co-Founder & Design Team Lead"
              date="June 2024 - present"
              para="As a Co-Founder and Design Team Lead at Medibook, I oversee the design and development of our product offerings. My responsibilities include leading a team of designers, coordinating design strategies, and ensuring that our products deliver a seamless and engaging user experience."
            />

            <Exp_prop
              img={Attendix}
              title="Attendix"
              subtitle="Co-Founder & Design Team Lead"
              date="June 2024 - present"
              para="In my role as Co-Founder and Design Team Lead at Attendix, I am responsible for guiding the design direction of our solutions. This includes leading the design team, managing design projects, and ensuring that our products align with user needs and business goals."
            />

            <Exp_prop
              img={Isb}
              title="It Nomad"
              subtitle="Co-Founder & Design Team Lead"
              date="June 2024 - present"
              para="At It Nomad, as a Co-Founder and Design Team Lead, I manage and drive the design vision for our projects. I work closely with the design team to create innovative solutions and oversee the design process from concept to completion, ensuring high-quality outcomes for our clients."
            />

          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
