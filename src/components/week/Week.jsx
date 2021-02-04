// check props
import React from "react";
import Day from "../day/Day";
import "./week.scss";

const Week = ({
  weekDates,
  events,
  handleStatusEvent,
  handleDeleteEvent,
  handleEventsRequest,
}) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        const daysWithWithoutLine = [];
        daysWithWithoutLine.push(new Date().getDay() === dayStart.getDay());

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            handleStatusEvent={handleStatusEvent}
            handleDeleteEvent={handleDeleteEvent}
            handleEventsRequest={handleEventsRequest}
            daysWithWithoutLine={daysWithWithoutLine}
            events={events}
          />
        );
      })}
    </div>
  );
};

export default Week;
