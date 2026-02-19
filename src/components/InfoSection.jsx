import { useState } from "react";
import "../styles/InfoSection.css";

export default function InfoSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Karl James Reta",
    title: "Fullstack Developer",
    contactNum: "+63 961-923-7582",
    emailAdd: "gordel.escher.bach@proton.me",
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
            <div className="nameDiv">
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
            </div>
          ) : (
            <div className="nameDiv">
              <h1>{profile.fullName}</h1>
              <h2>{profile.title}</h2>
            </div>
          )}
        </div>
        <div className="contactsDiv">
          <ul>
            {isEditing ? (
              <li className="phone">
                <input
                  value={profile.contactNum}
                  onChange={(e) => updateField("contactNum", e.target.value)}
                />
              </li>
            ) : (
              <li className="phone">{profile.contactNum}</li>
            )}
            {isEditing ? (
              <li className="email">
                <input
                  value={profile.emailAdd}
                  onChange={(e) => updateField("emailAdd", e.target.value)}
                />
              </li>
            ) : (
              <li className="email">{profile.emailAdd}</li>
            )}
            {isEditing ? (
              <li className="gitHub">
                <input
                  value={profile.ghProfile}
                  onChange={(e) => updateField("ghProfile", e.target.value)}
                />
              </li>
            ) : (
              <li className="gitHub">
                <a href="https://github.com/karldreta" target="blank">
                  {profile.ghProfile}
                </a>
              </li>
            )}
            {isEditing ? (
              <li className="location">
                <input
                  value={profile.location}
                  onChange={(e) => updateField("location", e.target.value)}
                />
              </li>
            ) : (
              <li className="location">{profile.location}</li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
