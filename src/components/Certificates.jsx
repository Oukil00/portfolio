import React from 'react';
import adobe from '../assets/adobe.png';
import adobe2 from '../assets/adobe2.png';
import adobe3 from '../assets/adobe3.png';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import gux from '../assets/gux.png';
import gux2 from '../assets/gux2.jpeg';
import gd from '../assets/gd.jpeg';
import canva from '../assets/canva.png';

const certificatesData = [
  {
    title: "Adobe Creative Educator Level 1",
    institution: "Adobe",
    date: "August 2024",
    img: adobe,
    link: "https://www.credly.com/badges/eb07c160-4369-422d-8ab2-18a6b263bde0/linked_in_profile"
  },
  {
    title: "Adobe Creative Educator Level 2",
    institution: "Adobe",
    date: "August 2024",
    img: adobe2,
    link: "https://www.credly.com/badges/e598247e-a680-4716-844d-5cab9b09646f/linked_in_profile"
  },
  {
    title: "Certifying Adobe Skills",
    institution: "Adobe",
    date: "July 2024",
    img: adobe3,
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
  const isCredly = link.includes('credly.com');

  return (
    <div className="shadow-2xl rounded-3xl border-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 h-auto max-h-[500px] p-8 flex flex-col justify-between hover:bg-gradient-to-tl from-gray-100 to-white dark:from-gray-700 dark:to-gray-900 transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center">
        <div className={isCredly ? "max-w-[80px] pr-3 mr-3 mb-4" : "w-full mb-4"}>
          <img src={img} alt={`${title} certificate`} className={isCredly ? "" : "w-full h-32 object-contain rounded-lg p-2"} />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 dark:from-teal-400 dark:to-gray-300 text-2xl tracking-wide font-semibold">
            {title}
          </h1>
          <p className="text-gray-800 dark:text-gray-100 text-lg my-2">
            {institution}
          </p>
          <p className="italic text-sm text-gray-600 dark:text-gray-400">
            {date}
          </p>
          {credentialID && <p className="text-xs text-gray-500 mt-2">Credential ID: {credentialID}</p>}
          {skills && <p className="text-xs text-gray-500 mt-1">Skills: {skills}</p>}
        </div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-4 bg-blue-500 text-center text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Show Credential
      </a>
    </div>
  );
};

const Certificates = () => (
    <div id="certificates" className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-black dark:text-white">
        My Certificates
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((certificate, index) => (
          <CertificateCard key={index} {...certificate} />
        ))}
      </div>
    </div>
  );

export default Certificates;
