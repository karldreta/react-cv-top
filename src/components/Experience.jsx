import { useState } from "react";
import "../styles/Experience.css";

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
          taskId: crypto.randomUUID(),
          task: "Processing store orders and delivery for clients'.",
        },
        {
          taskId: crypto.randomUUID(),
          task: "Tracking down order details and providing top-notch resolution.",
        },
      ],
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
          taskId: crypto.randomUUID(),
          task: "Providing alternative locations with the requested amenities in case rooms are fully booked.",
        },
        {
          taskId: crypto.randomUUID(),
          task: "All successful reservations are considered sales.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      companyName: "VXI Global Solutions",
      dateStart: "June 2022",
      dateEnd: "Sep 2024",
      description: "Sales & Service (Digital Satellite Service)",
      tasks: [
        {
          taskId: crypto.randomUUID(),
          task: "Handling inbound calls to address clients' billing concerns and providing solutions to reduce their monthly bills moving forward.",
        },
        {
          taskId: crypto.randomUUID(),
          task: "Offering premium add-ons to clients for a rubost viewing experience.",
        },
        {
          taskId: crypto.randomUUID(),
          task: "All successful reservations are considered sales.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      companyName: "GoGoGrandparent",
      dateStart: "Sep 2024",
      dateEnd: "Present",
      description: "Transportation Service for Seniors",
      tasks: [
        {
          taskId: crypto.randomUUID(),
          task: "Handling inbound calls to assist elderly clients in booking a ride.",
        },
        {
          taskId: crypto.randomUUID(),
          task: "Informing and registering first-time callers about the service.",
        },
        {
          taskId: crypto.randomUUID(),
          task: "Providing feedback on the dashboard process and call flow scripts to management for better call procedure.",
        },
      ],
    },
  ]);

  function handleButtonClick() {
    setIsEditing((prev) => !prev);
  }

  function updateWorkField(id, field, value) {
    setWorkHistory((prev) =>
      prev.map((job) => (job.id === id ? { ...job, [field]: value } : job)),
    );
  }

  function updateTaskField(jobId, taskId, value) {
    setWorkHistory((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              tasks: job.tasks.map((task) =>
                task.taskId === taskId ? { ...task, task: value } : task,
              ),
            }
          : job,
      ),
    );
  }

  function addExperience() {
    const expToAdd = [
      {
        id: crypto.randomUUID(),
        companyName: "",
        dateStart: "",
        dateEnd: "",
        description: "",
        tasks: [
          {
            taskId: crypto.randomUUID(),
            task: "",
          },
          {
            taskId: crypto.randomUUID(),
            task: "",
          },
          {
            taskId: crypto.randomUUID(),
            task: "",
          },
        ],
      },
      ...workHistory,
    ];
    setWorkHistory(expToAdd);
  }

  function removeExperience(job) {
    const expToRemove = workHistory.filter((work) => job.id !== work.id);
    console.log(expToRemove);
    setWorkHistory(expToRemove);
  }

  return (
    <>
      <button onClick={handleButtonClick}>
        {isEditing ? "Submit Edit" : "Edit"}
      </button>
      <section className="sectLvl2">
        <h3>Experience</h3>
        <div className="experienceDiv">
          <button
            className={isEditing ? "btn show add" : "btn hide"}
            onClick={addExperience}
          >
            Add an Experience
          </button>
          {workHistory.map((job) => (
            <div key={job.id}>
              {isEditing ? (
                <div className="jobDiv">
                  <button
                    className={isEditing ? "btn show remove" : "btn hide"}
                    onClick={() => removeExperience(job)}
                  >
                    Remove Experience
                  </button>
                  <input
                    placeholder={"Company Name"}
                    value={job.companyName}
                    onChange={(e) =>
                      updateWorkField(job.id, "companyName", e.target.value)
                    }
                  />
                  <div className="dateInputs">
                    <input
                      placeholder={"Date Start"}
                      value={job.dateStart}
                      onChange={(e) =>
                        updateWorkField(job.id, "dateStart", e.target.value)
                      }
                    />
                    <input
                      placeholder={"Date End"}
                      value={job.dateEnd}
                      onChange={(e) =>
                        updateWorkField(job.id, "dateEnd", e.target.value)
                      }
                    />
                  </div>
                  <br />
                  <input
                    placeholder={"Job Description"}
                    value={job.description}
                    onChange={(e) =>
                      updateWorkField(job.id, "description", e.target.value)
                    }
                  />
                  <br />
                  <ul>
                    {job.tasks.map((task) => (
                      <input
                        placeholder={"Task"}
                        key={task.taskId}
                        value={task.task}
                        onChange={(e) =>
                          updateTaskField(job.id, task.taskId, e.target.value)
                        }
                      />
                    ))}
                  </ul>
                  <br />
                </div>
              ) : (
                <div className="jobDiv">
                  <h4>
                    {job.companyName +
                      " | " +
                      job.dateStart +
                      " - " +
                      job.dateEnd}
                  </h4>
                  <h5>{job.description}</h5>
                  <h6>
                    <ul>
                      {job.tasks.map((task) => (
                        <li key={task.taskId}>{task.task}</li>
                      ))}
                    </ul>
                  </h6>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
