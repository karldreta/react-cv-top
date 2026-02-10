import { useState } from "react";

export default function Experience() {
    const [isEditing, setIsEditing] = useState(false);
    const [workHistory, setWorkHistory] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "Awesome OS",
            dateStart: "Oct 2021",
            dateEnd: "Feb 2022",
            description: "Service (Retail Chain)",
            tasks: [ 
                {
                    taskId: crypto.randomUUID(),
                    task: "Providing pre-drafted email responses to client's concerns.",
                },
                {
                    taskId:crypto.randomUUID(),
                    task: "Processing store orders and delivery for clients'."
                },
                {
                    taskId:crypto.randomUUID(),
                    task: "Tracking down order details and providing top-notch resolution."

                }
            ]
        },
        {
            id: crypto.randomUUID(),
            companyName: "Alorica",
            dateStart: "May 2022",
            dateEnd: "May 2023",
            description: "Sales & Service (Hotel Reservations)",
            tasks: [
                {
                    taskId: crypto.randomUUID(),
                    task: "Handling inbound calls to assist guests in booking room reservations for hotels or resorts through a third-party affiliated website.",
                },
                {
                    taskId:crypto.randomUUID(),
                    task: "Providing alternative locations with the requested amenities in case rooms are fully booked."
                },
                {
                    taskId:crypto.randomUUID(),
                    task: "All successful reservations are considered sales."

                }
            ]
        }
    ])

    function handleButtonClick() {
        setIsEditing(prev => !prev);
    }

    function updateField(id, field, value) {
        setWorkHistory(prev => prev.map(job => job.id === id ? { ...job, [field]: value } : job));
    }

    function updateTaskField(jobId, taskId, value) {
        setWorkHistory(prev => prev.map(
            job => job.id === jobId ? {
                ...job, 
                tasks: job.tasks.map(task => task.taskId === taskId ? 
                    {...task, task: value} : task
                )
            } : job
        ))
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
                            <br />
                            <input value={job.description} onChange={e => updateField(job.id, "description", e.target.value)}/>
                            <ul>
                                {job.tasks.map(task => <input 
                                key={task.taskId} 
                                value={task.task} 
                                onChange={e => updateTaskField(job.id, task.taskId, e.target.value)}/>)}
                            </ul>
                            </>
                        ) : 
                        (
                            <>
                            <h4>{job.companyName + " | " + job.dateStart + " - " + job.dateEnd}</h4>
                            <h5>{job.description}</h5>
                            <h6>
                                <ul>
                                    {job.tasks.map(task => <li key={task.taskId}>{task.task}</li>)}
                                </ul>
                            </h6>
                            </>
                        )
                        
                        }
                    </div>
                    ))}
            </section>
        </>
    )
}