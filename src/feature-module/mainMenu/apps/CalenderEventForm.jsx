import React, { useState } from "react";



const CalendarEventForm = ({ selectedDate, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [allDay, setAllDay] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ title, description, date: selectedDate });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
        <label className="form-label">Assignee</label>
        <input
          type="text"
          className="form-control"
           placeholder="Assign this event to someone"
           value={assignee}           onChange={(e) => setAssignee(e.target.value)}        />
      </div>

      {/* All Day Toggle */}
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label className="form-label mb-0">All day</label>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
             type="checkbox"
            id="allDaySwitch"
            checked={allDay}
            onChange={(e) => setAllDay(e.target.checked)}
          />
        </div>
      </div>
        <button type="submit" className="btn btn-primary">Add Event</button>
      </form>
    );
  };
  export default CalendarEventForm;
