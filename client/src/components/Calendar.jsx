import { useState } from "react";

const Calendar = () => {
  const customDate = new Date("2024-03-03T12:00:00Z");
  console.log(customDate);

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get the day of the week for the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // State to track the availability of each date
  const [availability, setAvailability] = useState({});

  // Function to toggle the status of a date
  const toggleAvailability = (date) => {
    setAvailability((prev) => ({
      ...prev,
      [date]: prev[date] === "available" ? "not_available" : "available",
    }));
  };

  // Generate the calendar grid
  const renderCalendar = () => {
    const calendar = [];
    let day = 1;

    // Fill the grid with empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(<div key={`empty-${i}`} className="p-4 border"></div>);
    }

    // Fill the grid with the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(i).padStart(2, "0")}`;
      const status = availability[date] || "available"; // Default to 'available'

      calendar.push(
        <div
          key={date}
          className={`p-4 border cursor-pointer ${
            status === "available" ? "bg-blue-100" : "bg-red-100"
          }`}
          onClick={() => toggleAvailability(date)}
        >
          <span>{i}</span>
          <span className="block text-sm text-gray-600">{status}</span>
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        {new Date(currentYear, currentMonth).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        <div className="font-bold text-center">Sun</div>
        <div className="font-bold text-center">Mon</div>
        <div className="font-bold text-center">Tue</div>
        <div className="font-bold text-center">Wed</div>
        <div className="font-bold text-center">Thu</div>
        <div className="font-bold text-center">Fri</div>
        <div className="font-bold text-center">Sat</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
