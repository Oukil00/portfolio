import Project_prop from "./project_prop";
import { SiFigma } from "react-icons/si";
import unifood from "../assets/unifood.png";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
  Esc,
  Logo,
  ITM,
  Medibook,
  Attendix,
  Isb,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
<Project_prop
  title="It Nomad WebDesign"
  para="A sleek web application with modern design using React, Vite, HTML5, CSS3, and Tailwind CSS for a seamless user experience."
  img={Isb}
  link="https://it-nomad.netlify.app/"
  github_link=""
  html5={
    <Tooltip title="HTML5" arrow>
      <IconButton>
        <SiHtml5 className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  css3={
    <Tooltip title="CSS 3" arrow>
      <IconButton>
        <SiCss3 className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  react={
    <Tooltip title="React" arrow>
      <IconButton>
        <SiReact className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  vite={
    <Tooltip title="Vite" arrow>
      <IconButton>
        <SiVite className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  javascript={
    <Tooltip title="JavaScript" arrow>
      <IconButton>
        <SiJavascript className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  tailwindcss={
    <Tooltip title="TailWind CSS" arrow>
      <IconButton>
        <SiTailwindcss className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  figma={
    <Tooltip title="Figma" arrow>
      <IconButton>
        <SiFigma className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
/>
<Project_prop
  title="Attendix WebDesign"
  para="A robust attendance management web app built with React, Vite, HTML5, CSS3, and Tailwind CSS for a responsive and user-friendly design."
  img={Attendix}
  link="https://attendix-grh.web.app/"
  figma={
    <Tooltip title="Figma" arrow>
      <IconButton>
        <SiFigma className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  html5={
    <Tooltip title="HTML5" arrow>
      <IconButton>
        <SiHtml5 className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  css3={
    <Tooltip title="CSS 3" arrow>
      <IconButton>
        <SiCss3 className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  react={
    <Tooltip title="React" arrow>
      <IconButton>
        <SiReact className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  vite={
    <Tooltip title="Vite" arrow>
      <IconButton>
        <SiVite className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  javascript={
    <Tooltip title="JavaScript" arrow>
      <IconButton>
        <SiJavascript className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  tailwindcss={
    <Tooltip title="TailWind CSS" arrow>
      <IconButton>
        <SiTailwindcss className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
/>
<Project_prop
  title="Medibook WebDesign"
  para="An innovative healthcare web platform using React, Vite, HTML5, CSS3, and Tailwind CSS to connect doctors and patients with a modern interface."
  img={Medibook}
  link="https://medibooking.netlify.app/"
  github_link=""
  figma={
    <Tooltip title="Figma" arrow>
      <IconButton>
        <SiFigma className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  html5={
    <Tooltip title="HTML5" arrow>
      <IconButton>
        <SiHtml5 className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  css3={
    <Tooltip title="CSS 3" arrow>
      <IconButton>
        <SiCss3 className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  react={
    <Tooltip title="React" arrow>
      <IconButton>
        <SiReact className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  vite={
    <Tooltip title="Vite" arrow>
      <IconButton>
        <SiVite className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  javascript={
    <Tooltip title="JavaScript" arrow>
      <IconButton>
        <SiJavascript className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  tailwindcss={
    <Tooltip title="TailWind CSS" arrow>
      <IconButton>
        <SiTailwindcss className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
/>
<Project_prop
  title="English Speakers Club - USTHB WebDesign"
  para="A dynamic platform for improving English language skills, built with React, JavaScript, and CSS3 for an interactive and engaging user experience."
  img={Esc}
  link="https://englishspeakersclub.podia.com/"
  github_link=""
  figma={
    <Tooltip title="Figma" arrow>
      <IconButton>
        <SiFigma className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  react={
    <Tooltip title="React" arrow>
      <IconButton>
        <SiReact className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  javascript={
    <Tooltip title="JavaScript" arrow>
      <IconButton>
        <SiJavascript className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
  css3={
    <Tooltip title="CSS 3" arrow>
      <IconButton>
        <SiCss3 className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
/>
<Project_prop
  title="UI/UX Design for an HR Management mobile app"
  para="A user-centric mobile app design for Attendix, focusing on intuitive navigation and a modern interface."
  img={Attendix}  // Assuming Attendix logo also represents the mobile app design
  link="https://www.figma.com/proto/ilTghNxFoxZV8zUfpbu256/It-Nomad-Projects-Design?page-id=192%3A361&node-id=4168-15097&viewport=940%2C-53%2C0.02&t=wKOGAG9mEGwLUD0T-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4168%3A14945"  // Link to mobile app or its details
  github_link=""  // Provide link if available
  figma={
    <Tooltip title="Figma" arrow>
      <IconButton>
        <SiFigma className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
/>
<Project_prop
  title="UI/UX Design for a FastFood Delivery mobile app"
  para="A user-centric mobile app design for UniFood, focusing on intuitive navigation and a modern interface."
  img={unifood}  // Assuming Attendix logo also represents the mobile app design
  link="https://www.figma.com/proto/ss80DdUnAg45TXT5ux4fds/UNIFood?page-id=0%3A1&node-id=588-331&viewport=933%2C-177%2C0.05&t=Gd69KuAAtoyNRRf8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=588%3A118&show-proto-sidebar=1"  // Link to mobile app or its details
  github_link=""  // Provide link if available
  figma={
    <Tooltip title="Figma" arrow>
      <IconButton>
        <SiFigma className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
/>
<Project_prop
  title="UI/UX Design for Medical Bookings mobile app"
  para="A modern mobile app design for Medibook, aimed at enhancing the user experience for healthcare management."
  img={Medibook}  // Assuming Medibook logo also represents the mobile app design
  link="https://www.figma.com/proto/ilTghNxFoxZV8zUfpbu256/It-Nomad-Projects-Design?page-id=0%3A1&node-id=2448-2261&viewport=-1840%2C203%2C0.06&t=Gqtlg8OCeXESFBEB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2448%3A2106&show-proto-sidebar=1"  // Link to mobile app or its details
  github_link=""  // Provide link if available
  figma={
    <Tooltip title="Figma" arrow>
      <IconButton>
        <SiFigma className="dark:text-slate-200 text-black" />
      </IconButton>
    </Tooltip>
  }
/>
        </div>
      </div>
    </section>
  );
};
export default Projects;
