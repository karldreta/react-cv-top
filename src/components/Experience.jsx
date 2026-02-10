import { useState } from "react";

export default function Experience() {
    const [isEditing, setIsEditing] = useState(false);
    const [workHistory, setWorkHistory] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "Awesome OS",
            dateStart: "Oct 2021",
            dateEnd: "Feb 2022",
            workTitle: "Service (Retail Chain)",
            workTasks: [
                "Providing pre-drafted email responses to client's concerns.",
                "Processing store orders and delivery for clients'.",
                "Tracking down order details and providing top-notch resolution."
            ]
        },
        {
            id: crypto.randomUUID(),
            companyName: "Alorica",
            dateStart: "May 2022",
            dateEnd: "May 2023",
            workTitle: "Sales & Service (Hotel Reservations)",
            workTasks: [
                "Handling inbound calls to assist guests in booking room reservations for hotels or resorts through a third-party affiliated website.",
                "Providing alternative locations with the requested amenities in case rooms are fully booked.",
                "All successful reservations are considered sales."
            ]
        }
    ])

    function handleButtonClick() {
        setIsEditing(prev => !prev);
    }

      function updateField(id, field, value) {
        setWorkHistory(prev => prev.map(job => job.id === id ? { ...job, [field]: value } : job));
      }


    return (
        <>
            <button onClick={handleButtonClick}>
            {isEditing ? "Submit Edit" : "Edit"}
            </button>
            <section className="sectLvl2">
                <h3>Experience</h3>
                {workHistory.map(job => (
                    <div key={job.id}>
                        {isEditing ? 
                        (
                            <>
                            <input value={job.companyName} onChange={e => updateField(job.id, "companyName", e.target.value)}/>
                            <input value={job.dateStart + " - " + job.dateEnd} onChange={e => updateField(job.id,"dateStart", e.target.value)}/>
                            
                            </>
                        ) : 
                        (
                        <h4>{job.companyName + " | " + job.dateStart + " - " + job.dateEnd}</h4>
                        
                        )
                        
                        }
                    </div>
                    ))}
            </section>
        </>
    )
}