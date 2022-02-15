import { collection, getDocs, getFirestore } from "firebase/firestore"
import { getApp } from "firebase/app"

export async function getEvents() {
  const db = getFirestore(getApp())
  const eventsCollection = collection(db, 'events')
  console.log({eventsCollection});

  const events = await getDocs(eventsCollection)
  console.log({events});
  
  return events.docs.map(doc => ({
    id: doc.id,
    title: doc.data()['title'],
    description: doc.data()['description'],
    duration: doc.data()['duration'],
    startDate: doc.data()['startDate']
  }))
}