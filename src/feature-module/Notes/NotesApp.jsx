import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { all_routes } from "../router/all_routes";

// import { routes } from "../../core/common/selectoption/selectoption";
// import { routes } from "../../core/common/collapse-header/collapse-header";
// import { routes } from "../../core/common/collapse-header/collapse-header"
import CollapseHeader from "../../core/common/collapse-header/collapse-header";



const NotesApp = () => {
  const  routes = all_routes
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [currentNote, setCurrentNote] = useState(null); // Currently selected note
  const [noteContent, setNoteContent] = useState(""); // Editable content of the note

  // Sample Data: Grouped Notes by Date
  const notesData = [
    {
      date: "Sunday, August 18",
      notes: [
        { title: "Untitled note", date: "Aug 18" },
        { title: "Untitled note", date: "Aug 18" },
        { title: "#", date: "Aug 18" },
        {
          title: "Add a meeting title - 18 August 2024",
          details: "Attendees:",
          date: "Aug 18",
        },
        { title: "Untitled Note", date: "Aug 18" },
      ],
    },
    {
      date: "Saturday, February 24",
      notes: [
        {
          title: "Todoist complete task.",
          details: "Task ID: 7510800651",
          date: "Feb 24",
        },
        { title: "Testing testing 123 testing testing 123", date: "Feb 24" },
        { title: "Untitled Note", date: "Feb 24" },
        { title: "this is a test note,", date: "Feb 24" },
      ],
    },
    {
      date: "Friday, February 23",
      notes: [
        { title: "/", date: "Feb 23" },
        { title: "Untitled Note", date: "Feb 23" },
      ],
    },
  ];

  // Open modal and set the selected note
  const handleOpenModal = (note) => {
    setCurrentNote(note); // Set the current note data
    setNoteContent(note.title || ""); // Pre-fill note content
    setShowModal(true); // Show the modal
  };

  // Open modal for a new blank note
  const handleNewNote = () => {
    const newNote = { title: "", details: "", date: "" }; // Blank note structure
    handleOpenModal(newNote); // Open modal with the new note
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentNote(null);
    setNoteContent("");
  };

  // Save note changes
  const handleSaveNote = () => {
    alert(`Saved note: ${noteContent}`);
    handleCloseModal();
  };

  return (  
    <div className="page-wrapper">
        
    <div
      className="container-fluid bg-light text-dark py-4"
      style={{ minHeight: "100vh" }}
    >
       <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-2">
              <div className="my-auto mb-2">
             
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>
                        <i className="ti ti-smart-home" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Application</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Notes
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap grid gap-3">
              <div className="">
                  <div className="input-icon-start position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Todo List"
                    />
                  </div>
                </div>
                  <div className="d-flex align-items-center border rounded p-1 me-2">                    
                                  <Link to={all_routes.notesapp} className="btn btn-icon btn-sm">
                                    <i className="ti ti-list-tree" />
                                  </Link>
                                  <Link
                                    to={all_routes.notes}
                                    className="btn btn-icon btn-sm active bg-primary text-white"
                                  >
                                    <i className="ti ti-table" />
                                  </Link>
                                </div>
                <div className=" ">
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-file-export me-2" />
                      Export
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          <i className="ti ti-file-type-pdf me-1" />
                          Export as PDF
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          <i className="ti ti-file-type-xls me-1" />
                          Export as Excel{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="">
                  <Link
                    to=""
                    className="btn btn-primary d-flex align-items-center"
                    data-bs-toggle="modal" data-inert={true}
                    data-bs-target="#add_note"
                  >
                    <i className="ti ti-circle-plus me-2" />
                    Add Notes
                  </Link>
                </div> */}
                <div className="ms-2 head-icons">
                  <CollapseHeader />
                </div>
              </div>
            </div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Everything</h4>
        <div>
          <button
            className="btn btn-outline-dark me-3"
            onClick={handleNewNote} // Open new blank note
          >
            New Note
          </button>
          <button className="btn btn-outline-dark me-3">Added by me</button>
          <button className="btn btn-outline-dark">Shared with me</button>
        </div>
      </div>

      {/* Notes List */}
      {notesData.map((group, index) => (
        <div key={index} className="mb-5">
          {/* Date Header */}
          <h5 className="text-muted mb-3">{group.date}</h5>

          {/* Notes */}
          {group.notes.map((note, idx) => (
            <div
              key={idx}
              className="d-flex justify-content-between align-items-center py-2 px-3 bg-light border rounded mb-2"
              onClick={() => handleOpenModal(note)} // Open modal on click
              style={{ cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
            >
              <div>
                <h6 className="mb-1 text-dark">{note.title}</h6>
                {note.details && <p className="mb-0 text-muted">{note.details}</p>}
              </div>
              <span className="text-muted">{note.date}</span>
            </div>
          ))}
        </div>
      ))}

      {/* Modal for Add/Edit Note */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentNote?.title || "New Note"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="form-control"
            rows="8"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Write your note here..."
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveNote}>
            Save Note
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default NotesApp;
