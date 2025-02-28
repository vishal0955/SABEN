
import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Calendar } from "primereact/calendar";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import PredefinedDateRanges from "../../../core/common/datePicker";
import Modal from "react-bootstrap/Modal";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
import CalendarEventForm from "./CalenderEventForm";

const Calendars = () => {
  const routes = all_routes;
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [events, setEvents] = useState([]); // State to hold the list of events
  const calendarRef = useRef(null);

  const handleDateClick = (info) => {
    const selectedDate = info.dateStr; // The clicked date
    setSelectedDate(selectedDate); // Set the selected date
    setShowAddTaskModal(true); // Show the AddTask modal
  };

  const handleAddTaskClose = () => setShowAddTaskModal(false); // Close AddTask modal

  // Function to add a new event
  const addEvent = (newEvent) => {
    const eventWithColor = {
      ...newEvent,
      backgroundColor: selectedDate === "2025-02-18" ? "#009DC4" : "#33FF57",  // Color based on date or condition
      borderColor: selectedDate === "2025-02-18" ? "#009DC4" : "#33FF57",  // Border color based on the same condition
      color: "#FFFFFF", // Text color
    };
    
    setEvents([...events, newEvent]); // Add the new event to the existing list
    setShowAddTaskModal(false); // Close the modal after adding the event
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          {/* <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Calendar</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.homedashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Calendar
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <div className="me-2 mb-2">
                <div className="input-icon-end position-relative">
                  <PredefinedDateRanges />
                  <span className="input-icon-addon">
                    <i className="ti ti-chevron-down" />
                  </span>
                </div>
              </div>
              <div className="me-2 mb-2">
                <Link
                  to="#"
                  className="btn btn-primary d-flex align-items-center"
                  onClick={() => setShowAddTaskModal(true)}
                >
                  <i className="ti ti-circle-plus me-2" />
                  Create
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div> */}

          <div className="row">
            {/* Calendar Sidebar */}
            <div className="col-lg-2 theiaStickySidebar gap-2">
              <div className="stickybar">
                <div className="card">
                  <div className="card-body">
                    <div className="border-bottom pb-2 mb-4">
                      <Calendar
                        className="datepickers mb-4"
                        value={new Date()}
                        onChange={(e) => {}}
                        inline={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom pb-2 mb-4">
                       <h5 className="mb-2">
                        Upcoming Event
                        <span className="badge badge-success rounded-pill ms-2">
                      15
                    </span>
                  </h5>
                  <div className="border-start border-purple border-3 mb-3">
                    <div className="ps-3">
                      <h6 className="fw-medium mb-1">Meeting with Team Dev</h6>
                      <p className="fs-12">
                        <i className="ti ti-calendar-check text-info me-2" />
                        15 Mar 2025
                      </p>
                    </div>
                  </div>
                  <div className="border-start border-pink border-3 mb-3">
                    <div className="ps-3">
                      <h6 className="fw-medium mb-1">
                        Design System With Client
                      </h6>
                      <p className="fs-12">
                        <i className="ti ti-calendar-check text-info me-2" />
                        24 Mar 2025
                      </p>
                    </div>
                  </div>
                  <div className="border-start border-success border-3 mb-3">
                    <div className="ps-3">
                      <h6 className="fw-medium mb-1">UI/UX Team Call</h6>
                      <p className="fs-12">
                        <i className="ti ti-calendar-check text-info me-2" />
                        28 Mar 2025
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-bottom pb-2 mb-4">
                       <h5 className="mb-2">
                    Starred 
                        <span className="badge badge-success rounded-pill ms-2">
                      15
                    </span>
                  </h5>
                  <div className="border-start border-purple border-3 mb-3">
                    <div className="ps-3">
                      <h6 className="fw-medium mb-1">Meeting with Team Dev</h6>
                      <p className="fs-12">
                        <i className="ti ti-calendar-check text-info me-2" />
                        15 Mar 2025
                      </p>
                    </div>
                  </div>
                  <div className="border-start border-pink border-3 mb-3">
                    <div className="ps-3">
                      <h6 className="fw-medium mb-1">
                        Design System With Client
                      </h6>
                      <p className="fs-12">
                        <i className="ti ti-calendar-check text-info me-2" />
                        24 Mar 2025
                      </p>
                    </div>
                  </div>
                  <div className="border-start border-success border-3 mb-3">
                    <div className="ps-3">
                      <h6 className="fw-medium mb-1">UI/UX Team Call</h6>
                      <p className="fs-12">
                        <i className="ti ti-calendar-check text-info me-2" />
                        28 Mar 2025
                      </p>
                    </div>
                  </div>
                </div>

            </div>
            
           
            {/* Calendar */}
            <div className="col-lg-10 theiaStickySidebar">
              <div className="stickybar">
                <div className="card border-0">
                  <div className="card-body">
                    <FullCalendar
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      initialView="dayGridMonth"
                      headerToolbar={{
                        start: "today,prev,next",
                        center: "title",
                        end: "dayGridMonth,dayGridWeek,timeGridDay",
                      }}
                      events={events} // Provide events to FullCalendar
                      dateClick={handleDateClick} // Detecting clicks on dates
                      ref={calendarRef}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      <Modal show={showAddTaskModal} onHide={handleAddTaskClose}>
        <div className="modal-header bg-dark modal-bg">
          <h5 className="modal-title text-white">Add Task for {selectedDate}</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            onClick={handleAddTaskClose}
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <CalendarEventForm
            selectedDate={selectedDate}
            onSubmit={(formData) => {
              // Add the new event to the calendar
              const newEvent = {
                title: formData.title,
                start: formData.date, // Use the selectedDate
                end: formData.date, // Use the selectedDate or calculated end date
                description: formData.description,
              };
              addEvent(newEvent); // Pass the new event to be added
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default Calendars;

