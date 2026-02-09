import { useState } from "react";
import "../styles/InfoSection.css"

export default function InfoSection() {
    const [isEditing, setIsEditing] = useState(false);
    // const [fullName, setFullName] = useState("Karl James Reta");
    // const [title, setTitle] = useState("Fullstack Developer")
    const [profile, setProfile] = useState({
        fullName: "Karl James Reta",
        title: "FullStack Developer",
    })

    function updateField(key, value) {
        setProfile(prev => ({...prev, [key]: value}));
      }

    const [contactNumber, setContactNumber] = useState("+63 961-923-6505")
    const [emailAdd, setEmailAdd] = useState("karldreta@gmail.com")
    const [githubProfile, setGitHubProfile] = useState("github.com/karldreta")
    const [location, setLocation] = useState("Philippines")


    function handleButtonClick() {
        setIsEditing(prev => !prev);
    }
    
    return (
        <>
            <button onClick={handleButtonClick}>
            {isEditing ? "Submit Edit" : "Edit"}
            </button>
            <section className="sectLvl1">
                <div>
                {isEditing ? (
                    <>
                    <input id="fullName" value={profile.fullName} onChange={(e) => updateField("fullName", e.target.value)}/> 
                    <input id="title" value={profile.title} onChange={(e) => updateField("title", e.target.value)}/>
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
                        {
                            isEditing ?
                            <li> 
                                <input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                            </li> :
                            <li>{contactNumber}</li>
                        }
                        {
                            isEditing ?
                            <li>
                                <input value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)}/>
                            </li> :
                            <li>{emailAdd}</li>
                        }
                        {
                            isEditing ?
                            <li>
                                <input value={githubProfile} onChange={(e) => setGitHubProfile(e.target.value)}/> 
                            </li>:
                            <li>{githubProfile}</li>
                        }
                        {
                            isEditing ?
                            <li>
                                <input value={location} onChange={(e) => setLocation(e.target.value)} />
                            </li> :
                            <li>{location}</li>
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}


// Conditional for which button to use?
        // if the button is toggled to "edit" then editButton()
        // else submitButton

    // function editButton(e) {
    //     console.log( e.target.nextElementSibling);

    //     e.target.textContent = "Submit Edit";
    //     const currentNameEl = e.target.nextElementSibling.querySelector('h1');
    //     const editNameInput = document.createElement('input');
    //     editNameInput.id = 'fullNameId'
    //     editNameInput.value = currentNameEl.innerHTML;
    //     currentNameEl.replaceWith(editNameInput);

    //     return editNameInput.value;
    // }

    // function submitButton() {
    //     console.log(editButton())
    // }

    // function handleFullName(value) {        
    //     setFullName(value)
    // }