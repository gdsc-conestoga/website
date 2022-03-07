import './Calendar.css'

import { useEffect, useState } from 'react'
import { addEvent, getEvents } from '../../services/firestoreService'
import Modal from 'react-modal';
import InputField from '../../components/inputField/InputField'
import CustomButton from '../../components/customButton/customButton'

function renderEvent(event) {
  return (
    <div key={event.id} className='event'>
      <h3>{event.title}</h3>
      <p>{event.duration}h</p>
    </div>
  )
}

function Calendar() {
  const [events, setEvents] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)

  const customStyles = {
    content: {
      background: 'black'
    }
  }

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

  const openEventModal = () => setModalOpen(true)
  const closeEventModal = () => setModalOpen(false)

  const handleCreateEventFormSubmit = async (e) => {
    e.preventDefault()
    const newEvent = {
      title: e.target.title.value,
      description: e.target.description.value,
      duration: +e.target.duration.value,
      startTime: new Date(e.target.startTime.value)
    }
    await addEvent(newEvent)
    closeEventModal()
  }

  const currentMonth = []
  var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const selectedMonth = new Date().getMonth()
  const runningDate = new Date()

  for (let date = 1; date <= 28; date++) {
    runningDate.setDate(date)
    currentMonth.push(new Date(runningDate))
  }

  if (!events) {
    return(
      <div className="calendar-container">
        <div>Loading...</div>
      </div>  
    )
  }

  return (
    <div className="calendar-container">
      <h1>Upcoming Events</h1>

      <h2>{months[selectedMonth]}</h2>

      <CustomButton onClick={openEventModal} type="button" buttonText='+' />

      <div className="calendar-grid">
        {
          currentMonth.map(date => {
            const event = events.find(e => 
              e.startTime.toDate().getMonth() === selectedMonth && 
              e.startTime.toDate().getDate() === date.getDate())
            return (
              <div className='calendar-cell' key={date.getDate()}>
                <div className='calendar-cell-date'>{date.getDate()}</div>
                {event && renderEvent(event)}
              </div>
            )
          })
        }
      </div>

      <Modal 
        isOpen={modalOpen} 
        onRequestClose={closeEventModal}
        style={customStyles}>
        
        <form onSubmit={handleCreateEventFormSubmit}>
          <InputField id="title" label="Title" type="text" />
          <InputField id="description" label="Description" type="textarea" />
          <InputField id="duration" label="Duration" type="number" />
          <InputField id="startTime" label="Date" type="date" />

          <CustomButton type="submit" buttonText='Create Event' />
        </form>

      </Modal>
    </div>
  );
}

export default Calendar;
