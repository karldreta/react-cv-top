import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Components //
import InfoSection from "./components/InfoSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SkillsSection from "./components/Skills";
import HobbiesSection from "./components/Hobbies";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="blurEffectDiv">
      <InfoSection />
      <Experience />
      <Education />
      <div className="additionalSectionDiv">
        <SkillsSection />
        <HobbiesSection />
      </div>
    </div>
  </StrictMode>,
);
