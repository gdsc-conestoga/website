import { getApp } from "firebase/app"
import { addDoc, collection, getFirestore, onSnapshot, query, where } from "firebase/firestore"

export async function listenToEvents(onUpdate) {
  const db = getFirestore(getApp())
  const eventsCollection = collection(db, 'events')
  const eventsQuery = query(eventsCollection, where('title', '!=', ''))
  return onSnapshot(eventsQuery, (querySnapshot) => {
    console.log('Updating events');
    onUpdate(querySnapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data()['title'],
      description: doc.data()['description'],
      duration: doc.data()['duration'],
      startTime: doc.data()['startTime']
    })))
  })
}

export async function addEvent(event) {
  const db = getFirestore(getApp())
  const eventsCollection = collection(db, 'events')
  await addDoc(eventsCollection, event)
}