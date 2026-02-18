import { useState } from "react";

export default function HobbiesSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [hobbies, setHobbies] = useState([
    {
      id: crypto.randomUUID(),
      hobby: "Programming",
    },
    {
      id: crypto.randomUUID(),
      hobby: "Reading",
    },
    {
      id: crypto.randomUUID(),
      hobby: "Writing",
    },
    {
      id: crypto.randomUUID(),
      hobby: "Practicing Muay Thai",
    },
    {
      id: crypto.randomUUID(),
      hobby: "Listening to Podcasts",
    },
  ]);

  function handleButtonClick() {
    setIsEditing((prev) => !prev);
  }

  function updateHobbies(id, value) {
    setHobbies(
      hobbies.map((hobby) =>
        hobby.id === id ? { ...hobbies, hobby: value } : hobby,
      ),
    );
  }

  return (
    <>
      <button className={"editHobbyBtn"} onClick={handleButtonClick}>
        {isEditing ? "Submit Edit" : "Edit Hobby"}
      </button>
      <section className="sectLvl5">
        <h3>Hobbies</h3>
        {hobbies.map((hobby) => (
          <div key={hobby.id}>
            {isEditing ? (
              <div>
                <input
                  value={hobby.hobby}
                  onChange={(e) => updateHobbies(hobby.id, e.target.value)}
                />
              </div>
            ) : (
              <div>
                <h5>{hobby.hobby}</h5>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
