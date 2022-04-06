import { useEffect, useState } from 'react'
// import Modal from 'react-modal'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomButton from '../../components/CustomButton/CustomButton'
import InputField from '../../components/InputField/InputField'
import { addEvent, listenToEvents } from '../../services/firestoreService'
import { useUser } from '../../utils/hooks'
import './Calendar.css'

function renderEvent(event) {
  return (
    <div key={event.id} className='event'>
      <h3>{event.title}</h3>
      <p>{event.duration}h</p>
    </div>
  )
}

function Calendar() {
  const user = useUser()
  const [events, setEvents] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // const customStyles = {
  //   content: {
  //     background: 'black'
  //   }
  // }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const unsubscribe = listenToEvents((events) => {
      setEvents(events)
    })

    return () => unsubscribe()
  }, [])

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
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const selectedMonth = new Date().getMonth()
  const runningDate = new Date()

  for (let date = 1; date <= 28; date++) {
    runningDate.setDate(date)
    currentMonth.push(new Date(runningDate))
  }

  if (!events) {
    return (
      <div className="calendar-container">
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className="calendar-container">
      <h1>Upcoming Events</h1>

      <h2>{months[selectedMonth]}</h2>

      {user?.isAdmin && <CustomButton onClick={openEventModal} type="button" buttonText='+' />}

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
        open={modalOpen}
        onClose={closeEventModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add an event
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Add your event to the calendar.
          </Typography>
          <form onSubmit={handleCreateEventFormSubmit}>
            <InputField id="title" label="Title" type="text" />
            <InputField id="description" label="Description" type="textarea" />
            <InputField id="duration" label="Duration" type="number" />
            <InputField id="startTime" label="Date" type="date" />

            <CustomButton type="submit" buttonText='Create Event' />
          </form>
        </Box>
      </Modal>

      {/* <Modal
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

      </Modal> */}
    </div>
  );
}

export default Calendar;
