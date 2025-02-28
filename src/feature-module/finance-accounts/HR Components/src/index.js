document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll(".headingarrow");

    // Ensure the first field is open by default
    const firstHeading = headings[0];
    const firstArrow = firstHeading.querySelector(".toggle-arrow");
    const firstProfileRow = firstHeading.querySelector(".profile-row");

    // Show the first profile row and rotate the first arrow
    firstProfileRow.style.display = "flex";
    firstArrow.classList.add("arrow-rotated");

    // Add toggle functionality to all rows
    headings.forEach(heading => {
      const arrow = heading.querySelector(".toggle-arrow");
      const profileRow = heading.querySelector(".profile-row");   

      arrow.addEventListener("click", function () {
        const isHidden = profileRow.style.display === "none" || profileRow.style.display === "";
        profileRow.style.display = isHidden ? "flex" : "none";
        arrow.classList.toggle("arrow-rotated");
      });
    });
  });