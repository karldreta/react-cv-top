import { useState } from "react";
import "../styles/Education.css";

export default function Education() {
  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "Ateneo de Davao University",
      course: "Philosophy",
      endYear: "2023",
    },
  ]);

  function handleButtonClick() {
    setIsEditing((prev) => !prev);
  }

  function updateEducation(eduId, field, value) {
    setEducation(
      education.map((edu) =>
        edu.id === eduId ? { ...edu, [field]: value } : edu,
      ),
    );
  }

  return (
    <>
      <button onClick={handleButtonClick}>
        {isEditing ? "Submit Edit" : "Edit"}
      </button>
      <section className="sectLvl3">
        <h3>Education</h3>
        {education.map((edu) => (
          <div key={edu.id}>
            {isEditing ? (
              <div className="schoolDiv">
                {" "}
                <input
                  placeholder={"School"}
                  value={edu.school}
                  onChange={(e) =>
                    updateEducation(edu.id, "school", e.target.value)
                  }
                />
                <input
                  placeholder={"End Year"}
                  value={edu.endYear}
                  onChange={(e) =>
                    updateEducation(edu.id, "endYear", e.target.value)
                  }
                />
                <br />
                <input
                  placeholder={"Course"}
                  value={edu.course}
                  onChange={(e) =>
                    updateEducation(edu.id, "course", e.target.value)
                  }
                />
              </div>
            ) : (
              <div className="schoolDiv">
                <h4>
                  {edu.school + " | "} <span>{edu.endYear}</span>{" "}
                </h4>
                <h5>{edu.course}</h5>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
