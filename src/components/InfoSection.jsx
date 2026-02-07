import { useState } from "react";
import "../styles/InfoSection.css"

export default function InfoSection() {
    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState("Karl James Reta");
    const [title, setTitle] = useState("Fullstack Developer")
    const [contactNumber, setContactNumber] = useState("+63 961-923-6505")
    const [emailAdd, setEmailAdd] = useState("karldreta@gmail.com")
    const [githubProfile, setGitHubProfile] = useState("github.com/karldreta")
    const [location, setLocation] = useState("Philippines")


    function handleButtonClick() {
        setIsEditing(prev => !prev);
    }
    
    return (
        <>
            <section className="sectLvl1">
                <div>
                {
                    isEditing ? 
                    <input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}/> :
                    <h1>{fullName}</h1>
                }
                {
                     isEditing ? 
                     <input value={title} onChange={(e) => setTitle(e.target.value)}/> :
                     <h2>{title}</h2>
                }

                </div>
                <div>
                    <ul>
                        {
                            isEditing ?
                            <input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}/> :
                            <li>{contactNumber}</li>
                        }
                        {
                            isEditing ?
                            <input value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)}/> :
                            <li>{emailAdd}</li>
                        }
                        {
                            isEditing ?
                            <input value={githubProfile} onChange={(e) => setGitHubProfile(e.target.value)}/> :
                            <li>{githubProfile}</li>
                        }
                        {
                            isEditing ?
                            <input value={location} onChange={(e) => setLocation(e.target.value)} /> :
                            <li>{location}</li>
                        }
                    </ul>
                </div>
            </section>
            <button onClick={handleButtonClick}>
                {isEditing ? "Submit Edit" : "Edit"}
            </button>
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