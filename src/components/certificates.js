
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import adobe1 from '../assets/Images/adobe1.png';
import educator from '../assets/Images/educator.png';
import adobe3 from '../assets/Images/adobe3.png';
import cert1 from '../assets/Images/cert1.jpg';
import cert2 from '../assets/Images/cert2.jpg';
import gux from '../assets/Images/gux.png';
import gux2 from '../assets/Images/gux2.jpeg';
import gd from '../assets/Images/gd.jpeg';
import canva from '../assets/Images/canva.png';


const certificatesData = [
   
    {
      title: "Adobe Creative Educator Level 1-2",
      institution: "Adobe",
      date: "August 2024",
      img: educator ,
      link: "https://www.credly.com/badges/e598247e-a680-4716-844d-5cab9b09646f/linked_in_profile"
    },
    {
      title: "Certifying Adobe Skills",
      institution: "Adobe",
      date: "July 2024",
      img: adobe1,
      link: "https://www.credly.com/badges/3ca09a29-b127-4146-9ed1-377230bca18c/linked_in_profile"
    },
    {
      title: "Design User Experiences with Figma",
      institution: "LinkedIn",
      date: "July 2024",
      img: cert1,
      link: "https://www.linkedin.com/learning/certificates/7386844935590e7f514a9ba0d282323e0140f1bba21354600ba73cc3143379c5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BirF3srXgS061VV3F1YiNcw%3D%3D",
      skills: "User Interface Prototyping"
    },
    {
      title: "Figma for UX Design",
      institution: "LinkedIn",
      date: "July 2024",
      img: cert2,
      link: "https://www.linkedin.com/learning/certificates/8ae4c9ed61024cad0eeb2d1b5b7ca81aa1dfb8367bb3cec1ab70f1cae667d3a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BirF3srXgS061VV3F1YiNcw%3D%3D"
    },
    {
      title: "Google UX Design Professional Certificate",
      institution: "Google",
      date: "July 2024",
      img: gux,
      link: "https://www.credly.com/badges/4adb3050-f9ad-4ad8-b0b0-e3ba918a2401/linked_in_profile",
      skills: "User Experience (UX)"
    },
    {
      title: "Google UX Design Specialization",
      institution: "Google",
      date: "July 2024",
      img: gux2,
      link: "https://www.coursera.org/account/accomplishments/specialization/G3CD7FT7J4WQ",
      credentialID: "G3CD7FT7J4WQ",
      skills: "Wireframing, Web Design, Figma, User Experience Design (UED), Graphic Design, User Interface Design"
    },
    {
      title: "Graphic Design",
      institution: "University of Colorado Boulder",
      date: "July 2024",
      img: gd,
      link: "https://www.coursera.org/account/accomplishments/records/FE37JSXXLQUZ",
      credentialID: "FE37JSXXLQUZ",
      skills: "Graphic Design"
    },
    {
      title: "Graphic Design",
      institution: "Canva",
      date: "July 2024",
      img: canva,
      link: "https://canva.com/designschool/certification-award/7038b278-cb51-4f48-a292-3270ae11bc8c",
      credentialID: "7038b2",
      skills: "Logo Design, Communication, Graphic Design"
    }
  ];

const CertificateCard = ({ title, institution, date, img, link, credentialID, skills }) => {
  return (
    <div className="group relative flex flex-col flex-wrap mx-auto shadow-xl rounded-xl">
      <img
        src={img}
        alt={`${title} certificate`}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
        <h3 className="text-2xl font-medium text-white my-2">{title}</h3>
        <p className="px-2 text-lg text-white">{institution}</p>
        <p className="italic text-sm text-white mt-1">{date}</p>
        {credentialID && <p className="text-xs text-gray-200 mt-2">Credential ID: {credentialID}</p>}
        {skills && <p className="text-xs text-gray-200 mt-1">Skills: {skills}</p>}
        <div className="flex gap-7 justify-center items-center my-7 text-2xl">
          <a className="bg-white rounded-full p-2" href={link} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className='text-darkblue text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => (
  <section className="text-gray-600 body-font">
    <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
      <div id="certificates" className="flex flex-wrap w-full flex-col items-center text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
          Certificates
        </h1>
        <p className="text-lg font-medium leading-relaxed text-dark-orange">
          My Achievements
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8">
        {certificatesData.map((certificate, index) => (
          <motion.div
            key={index}
            className="transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CertificateCard {...certificate} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
