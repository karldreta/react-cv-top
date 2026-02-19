import { useState } from "react";
import "../styles/InfoSection.css";

export default function InfoSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Karl James Reta",
    title: "Fullstack Developer",
    contactNum: "+63 961-923-6505",
    emailAdd: "karldreta@gmail.com",
    ghProfile: "github.com/karldreta",
    location: "Philippines",
  });

  function handleButtonClick() {
    setIsEditing((prev) => !prev);
  }

  function updateField(key, value) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <>
      <button onClick={handleButtonClick} className="editInfoBtn">
        {isEditing ? "Submit Edit" : "Edit"}
      </button>
      <section className="sectLvl1">
        <div>
          {isEditing ? (
            <>
              <input
                id="fullName"
                value={profile.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
              />
              <input
                id="title"
                value={profile.title}
                onChange={(e) => updateField("title", e.target.value)}
              />
            </>
          ) : (
            <>
              <h1>{profile.fullName}</h1>
              <h2>{profile.title}</h2>
            </>
          )}
        </div>
        <div>
          <ul>
            {isEditing ? (
              <li>
                <input
                  value={profile.contactNum}
                  onChange={(e) => updateField("contactNum", e.target.value)}
                />
              </li>
            ) : (
              <li>{profile.contactNum}</li>
            )}
            {isEditing ? (
              <li>
                <input
                  value={profile.emailAdd}
                  onChange={(e) => updateField("emailAdd", e.target.value)}
                />
              </li>
            ) : (
              <li>{profile.emailAdd}</li>
            )}
            {isEditing ? (
              <li>
                <input
                  value={profile.ghProfile}
                  onChange={(e) => updateField("ghProfile", e.target.value)}
                />
              </li>
            ) : (
              <li>{profile.ghProfile}</li>
            )}
            {isEditing ? (
              <li>
                <input
                  value={profile.location}
                  onChange={(e) => updateField("location", e.target.value)}
                />
              </li>
            ) : (
              <li>{profile.location}</li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
