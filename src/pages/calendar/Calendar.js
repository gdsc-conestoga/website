import './Calendar.css'

function renderEvent(event) {
  return (
    <div key={event.id} className='event'>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.startTime.toDateString()}</p>
      <p>{event.duration}h</p>
    </div>
  )
}

function Calendar() {
  const events = [
    {
      id: "1",
      title: "Game Night",
      description: "Setting up the calendar page",
      startTime: new Date(),
      duration: 1.0
    },
    {
      id: "2",
      title: "Info session",
      description: "Setting up the calendar page",
      startTime: new Date(),
      duration: 1.0
    },
    {
      id: "3",
      title: "Coding Mondays #3",
      description: "Setting up the calendar page",
      startTime: new Date(),
      duration: 1.0
    }
  ]
  return (
    <div className="calendar-container">
      <h1>Upcoming Events</h1>
      {events.map(renderEvent)}
    </div>
  );
}

export default Calendar;
