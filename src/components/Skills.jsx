import { useState } from "react";

// It doesn't have to be an array of objects, it could just be a string separated/joined by ...spread/...rest, or join(,)




export default function SkillsSection () {
    const [isEditing, setIsEditing] = useState(false);
    const [skills, setSkills] = useState([
        {
            id: crypto.randomUUID(),
            label: "Communication",
            value: "C2 English Proficiency",
        },
        {
            id: crypto.randomUUID(),
            label: "Competencies",
            value: "Creative Problem Solver, Goal-Oriented, Agile Learner",
        },
        {
            id: crypto.randomUUID(),
            label: "Technical",
            value: " HTML, CSS, JavaScript, Git, Node, ES6, Webpack, npm"
        }
        
    ])
    
    function handleButtonClick() {
        setIsEditing(prev => !prev);
    }
    
    function updateSkills(id, value) {
        setSkills(skills.map(skill => skill.id === id ? {...skill, value: value} : skill));
    }

    function updateSkillLabel (id, value) {
        setSkills(skills.map(skill => skill.id === id ? {...skill, label: value} : skill));
    }
    
    return (
        <>
            <button onClick={handleButtonClick}>{isEditing ? "Submit Edit" : "Edit"}</button>
            <section className="sectLvl4">
                <h3>Skills</h3>
                {skills.map(skill => (                    
                    <div key={skill.id}>
                        {isEditing ? (
                            <div>
                                <input value={skill.label} onChange={e => updateSkillLabel(skill.id, e.target.value)}/>
                                <input value={skill.value} onChange={e => updateSkills(skill.id, e.target.value)}/>
                            </div>
                        ) 
                        :(
                            <div>
                                <h4>{skill.label}</h4>
                                <h5>{skill.value}</h5>
                            </div>
                        )
                        }
                    </div>
                ))}
            </section>
        </>
    )
}