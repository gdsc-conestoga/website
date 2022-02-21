import { collection, getDocs, getFirestore } from "firebase/firestore"
import { getApp } from "firebase/app"

export async function getEvents() {
  const db = getFirestore(getApp())
  const eventsCollection = collection(db, 'events')

  const events = await getDocs(eventsCollection)
  
  return events.docs.map(doc => ({
    id: doc.id,
    title: doc.data()['title'],
    description: doc.data()['description'],
    duration: doc.data()['duration'],
    startTime: doc.data()['startTime']
  }))
}