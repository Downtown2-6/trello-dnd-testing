import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";
import axios from "axios";

export const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  // --------------------------
  //#region HARDCODING THE BOARDID TO '1' BECAUSE NO OTHER BOARD RIGHT NOW HAS TASKS
  // --------------------------
  const getEvents = async () => await axios.get("/api/tasks/1");

  //#endregion HARDCODING THE BOARDID TO '1' BECAUSE NO OTHER BOARD RIGHT NOW HAS TASKS

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);

  const updateEvent = async ({ event }) => {
    console.log("This is updateEvent", event);
    console.log("This is updateEvent event start", event.start);
    console.log("This is updateEvent event end", event.end);
    axios.put(`/api/tasks/${event.id}`, {
      start: event.start,
      end: event.end,
    });
  };

  return (
    <div>
      <br/>
      <FullCalendar
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[daygridPlugin, interactionPlugin]}
        selectable
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        height={"80vh"}
        events={events}
        editable={true}
        eventResizableFromStart={true}
        eventDrop={updateEvent}
      />
    </div>
  );
};
