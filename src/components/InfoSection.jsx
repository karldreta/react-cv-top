import { useState } from "react";
import "../styles/InfoSection.css"

export default function InfoSection() {
    const [fullName, setFullName] = useState("");

    function editButton(e) {
        console.log( e.target.nextElementSibling);

        e.target.innerHTML = "Submit";
        const currentNameEl = e.target.nextElementSibling.querySelector('h1');
        const newNameEl = document.createElement('input');
        newNameEl.id = 'fullNameId'
        newNameEl.value = currentNameEl.innerHTML;
        currentNameEl.replaceWith(newNameEl);

        return newNameEl.value;
    }

    function submitButton() {
        console.log(editButton())
    }

    function handleFullName(value) {        
        setFullName(value)
    }
    
    return (
        <>
            <button onClick={editButton}>Edit</button>
            <section className={"sectLvl1"}>
               <div>
                    <h1>Karl James Reta</h1>
                    <h2>Fullstack Developer</h2>
               </div>
               <div>
                    <ul>
                        <li>+63 9619236505</li>
                        <li>karldreta@gmail.com</li>
                        <li>github.com/karldreta</li>
                        <li>Davao City, Philippines</li>
                    </ul>
               </div>
            </section>
        </>
    )
}
