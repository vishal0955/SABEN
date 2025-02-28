// import React from 'react';

// const SchedulingWorkload = () => {
//     const teamMembers = [
//         "Annie Carter",
//         "Camille Rich",
//         "Conrado Heralcio",
//         "Isabel Coral",
//         "Joel Jones",
//         "Kevin Long",
//         "Krystal Pearson",
//         "Lorena Jesusa",
//         "Malisa Zuniga",
//         "Michael Sanchez",
//         "Shanice Phillips",
//         "Stephen Patterson",
//       ];
    
//       const weeks = [
//         { week: "Oct 15–21", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
//         { week: "Oct 22–28", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
//         { week: "Oct 29–Nov 4", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
//         { week: "Nov 5–11", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
//       ];
    
//       const getRandomHours = () => {
//         return Math.random() > 0.8 ? Math.round(Math.random() * 10) : "";
//       };

//   return (
//  <div className='page-wrapper'>
//      <div className="container my-4">

// <div className="d-flex justify-content-end grid gap-1 mb-3">
//   <button className="btn btn-secondary">Expand All</button>
//   <button className="btn btn-secondary">Collapse All</button>
//   <button className="btn btn-secondary">Backlog Box</button>
//   <button className="btn btn-secondary">Leave Feedback</button>
// </div>


// <div className="table-responsive">
//   <table className="table table-bordered text-center">
//     <thead className="table-light">
//       <tr>
//         <th>Team Member</th>
//         {weeks.map((week, index) => (
//           <th key={index} colSpan={week.days.length}>
//             {week.week}
//           </th>
//         ))}
//       </tr>
//       <tr>
//         <th></th>
//         {weeks.map((week, index) =>
//           week.days.map((day, idx) => <th key={`${index}-${idx}`}>{day}</th>)
//         )}
//       </tr>
//     </thead>
//     <tbody>
//       {teamMembers.map((member, index) => (
//         <tr key={index}>
//           <td className="fw-bold">{member}</td>
//           {weeks.map((week, weekIndex) =>
//             week.days.map((_, dayIndex) => (
//               <td
//                 key={`${weekIndex}-${dayIndex}`}
//                 className={Math.random() > 0.8 ? "table-danger fw-bold" : ""}
//               >
//                 {getRandomHours()}
//               </td>
//             ))
//           )}
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
// </div>

//  </div>
//   );
// };

// export default SchedulingWorkload;

import React, { useState} from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";

const SchedulingWorkload = () => {
  const data = [
    { name: "Annie Carter", work: [8, 8, 10, 10, 10, null, null, 5, 5, 5, 5, 5, null, null, 10.5, 10.5, 10.5, 8, null, null] },
    { name: "Camille Rich", work: [8, 8, 8, 8, 8, null, null, 5, 5, 5, 5, 1, null, null, 8, 7, 4, 8, null, null] },
    { name: "Conrado Heraclio", work: [4, 6, 4, 7, 3, null, null, 5, 5, 5, 5, 5, null, null, 2.67, 2.67, 2.67, 2.67, null, null] },
    { name: "Isabel Coral", work: [4, 6, 4, 7, 3, null, null, 5, 5, 5, 5, 5, null, null, 2.5, 2.5, 2.5, 2, null, null] },
    { name: "Joel Jones", work: [0, 0, 0, 0, 10, null, null, 8, 8, 8, 8, 8, null, null, 2, 2, 2, 2, null, null] },
    { name: "Kevin Long", work: [8, 8, 10, 10, 10, null, null, 0, 0, 0, 0, 0, null, null, 12, 8, 0, 8, null, null] },
    { name: "Krystal Pearson", work: [0, 0, 0, 0, 0, null, null, 8, 8, 8, 8, 8, null, null, 8, 8, 8, 8, null, null] },
    { name: "Stephen Patterson", work: [2, 3, 2, 3, 1, null, null, 7.2, 7.2, 7.2, 7.2, 7.2, null, null, 2.25, 2.25, 2.25, 2.25, null, null] },
  ];

  // Table headers including dates and weekends marked
  const headers = [
    "Mo 15", "Tu 16", "We 17", "Th 18", "Fr 19", "Sa 20", "Su 21",
    "Mo 22", "Tu 23", "We 24", "Th 25", "Fr 26", "Sa 27", "Su 28",
    "Mo 29", "Tu 30", "We 31", "Th 1", "Fr 2", "Sa 3"
  ];

  // Function to apply conditional styling (exclude weekends)
  const getCellStyle = (value, index) => {
    if (value === null) {
      return "bg-light"; // Empty cells for weekends
    } else if (value > 8) {
      return "text-danger fw-bold"; // Red for hours > 8
    } else if (value > 0 && value < 8) {
      return "text-primary fw-bold"; // Blue for hours < 8
    }
    return ""; // Default styling
  };

  const [showModal, setShowModal] = useState(false);
  
    // Open modal to add task
    const handleAddProject = () => {
      setShowModal(true);
    };
    

  return (
    <div className="page-wrapper">
    <Container fluid className="mt-4">
      <Row className="mb-3">
        <Col><h4>WorkLoad</h4></Col>
        <Col className="text-end">
          <Button variant="outline-secondary" className="me-2">Assign Member</Button>
          <Button variant="outline-secondary" className="me-2" onClick={handleAddProject}>Create Project</Button>
          <Button variant="outline-secondary">Leave Feedback</Button>
        </Col>
      </Row>

      <Table bordered hover responsive>
        <thead className="bg-light text-center">
          <tr>
            <th>Team Member</th>
            {headers.map((day, index) => (
              <th key={index} className={`text-center ${day.includes('Sa') || day.includes('Su') ? 'bg-light' : 'bg-dark-grey'}`}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((member, index) => (
            <tr key={index}>
              <td className="fw-bold d-flex align-items-center">
                <img  
                  src="https://i.ibb.co/m5YV69W/image.png"
                  alt="profile"
                  className="rounded-circle me-2"
                />
                {member.name}
              </td>
              {member.work.map((hours, idx) => (
                <td key={idx} className={`text-center ${getCellStyle(hours, idx)}`}>
                  {hours !== null ? hours : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default SchedulingWorkload;

