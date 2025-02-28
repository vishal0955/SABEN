import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./App.css"; // Add your CSS file if needed

 const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="container-fluid mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h4">
            Sales <span className="text-primary">Benjamin Price</span>
          </h1>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="summary-tab"
                data-bs-toggle="tab"
                data-bs-target="#summary-tab-pane"
                type="button"
                role="tab"
                aria-controls="summary-tab-pane"
                aria-selected="true"
              >
                Summary
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="schedule-tab"
                data-bs-toggle="tab"
                data-bs-target="#schedule-tab-pane"
                type="button"
                role="tab"
                aria-controls="schedule-tab-pane"
                aria-selected="false"
              >
                Schedule
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="feed-tab"
                data-bs-toggle="tab"
                data-bs-target="#feed-tab-pane"
                type="button"
                role="tab"
                aria-controls="feed-tab-pane"
                aria-selected="false"
              >
                Feed
              </button>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="summary-tab-pane"
              role="tabpanel"
              aria-labelledby="summary-tab"
            >
              <SummaryTab />
            </div>

            <div
              className="tab-pane fade"
              id="schedule-tab-pane"
              role="tabpanel"
              aria-labelledby="schedule-tab"
            >
              <ScheduleTab />
            </div>

            <div
              className="tab-pane fade"
              id="feed-tab-pane"
              role="tabpanel"
              aria-labelledby="feed-tab"
            >
              <FeedTab />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

 export const SummaryTab = () => {
  return (
    <div className="container-fluid">
      <TaskSummary />
      <TaskList />
    </div>
  );
};

 export const ScheduleTab = () => {
  return (
    <div className="container my-4">
      <h5>Today, 24 December</h5>
      <Timeline />
    </div>
  );
};

export const FeedTab = () => {
  return (
    <div className="container my-4">
      <SearchBar />
      <ActivityFeed />
    </div>
  );
};

export const TaskSummary = () => {
  const summaryItems = [
    { label: "CALLS", value: 0 },
    { label: "EMAILS", value: 0 },
    { label: "TO-DOS", value: 1, className: "text-primary" },
    { label: "LINKEDIN", value: 0 },
    { label: "OVERDUE", value: 172, className: "text-danger" },
    { label: "DUE TOMORROW", value: 2, className: "text-primary" },
  ];

  return (
    <div className="row text-center">
      {summaryItems.map((item, index) => (
        <div className="col" key={index}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-muted">{item.label}</h6>
              <h3 className={`{card-text ${item.className || ""}}`}>{item.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const TaskList = () => {
  const tasks = [
    {
      title: "Follow up on meetings",
      description: "2 meetings occurred in the last 7 days and need a follow-up",
    },
    {
      title: "Send a follow up email to Gursewek Singh",
      description: "Gursewek Singh opened your last email but hasn’t replied yet",
    },
    {
      title: "Send a follow up email to Matthew Fionda",
      description: "Matthew Fionda opened your last email but hasn’t replied yet",
    },
  ];

  return (
    <div className="list-group">
      {tasks.map((task, index) => (
        <div
          className="list-group-item d-flex justify-content-between align-items-start"
          key={index}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{task.title}</div>
            <small>{task.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Timeline = () => {
  const timelineItems = [
    { time: "08:00", task: "📋 Follow up on Jigsaw 24" },
    { time: "10:00", task: "✅ PHYSIO (Sports Massage) Ian", completed: true },
    { time: "11:00", task: "💼 Prospecting new business" },
    { time: "13:00", task: "🔒 Deep Work Focus Time" },
  ];

  return (
    <div className="timeline position-relative">
      <div className="time-indicator" style={{ top: "220px" }}></div>
      {timelineItems.map((item, index) => (
        <div
          className={`timeline-item d-flex align-items-start ${
            item.completed ? "completed" : ""
          }`}
          key={index}
        >
          <div className="time-label">{item.time}</div>
          <div className="task-box flex-grow-1">{item.task}</div>
        </div>
      ))}
    </div>
  );
};

export const SearchBar = () => (
  <div className="mb-4">
    <input type="text" className="form-control" placeholder="Search activities" />
  </div>
);

export const ActivityFeed = () => {
  const activities = [
    {
      title: "Event 1",
      description: "17 opens, 3 clicks",
    },
    {
      title: "Event 2",
      description: "SCOK Conference Room Upgrade",
    },
    {
      title: "Event 3",
      description: "8 opens + other activity",
    },
  ];

  return (
    <div>
      {activities.map((activity, index) => (
        <div className="activity-item" key={index}>
          <div className="activity-content">
            <div className="activity-title">{activity.title}</div>
            <p className="activity-subtext mb-0">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// const Home = () => {
//   return (
//     <div className="page-wrapper">
//     <TaskDashboard />
//     </div>

//   )
// }

export default Home;