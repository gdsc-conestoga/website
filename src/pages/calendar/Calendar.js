import './Calendar.css'

import { useEffect, useState } from 'react'
import { getEvents } from '../../services/firestoreService'

function renderEvent(event) {
  return (
    <div key={event.id} className='event'>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.startTime && event.startTime.toDate().toDateString()}</p>
      <p>{event.duration}h</p>
    </div>
  )
}

function Calendar() {
  const [events, setEvents] = useState(null)

  useEffect(
    () => {
      async function loadEvents() {
        const firestoreEvents = await getEvents()
        setEvents(firestoreEvents)
      }

      loadEvents()
    }, 
    []
  )

  const currentMonth = []
  var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const selectedMonth = months[new Date().getMonth()]
  const runningDate = new Date()

  for (let date = 1; date <= 28; date++) {
    runningDate.setDate(date)
    currentMonth.push(new Date(runningDate))
  }

  return (
    <div className="calendar-container">
      {!events && (<div>Loading...</div>) }
      
      <h1>Upcoming Events</h1>
      {events && events.map(renderEvent)}

      <h2>{selectedMonth}</h2>
      <div className="calendar-grid">
        {
          currentMonth.map(date => (
            <div>{date.getDate()}</div>
          ))
        }
      </div>
    </div>
  );
}

export default Calendar;
