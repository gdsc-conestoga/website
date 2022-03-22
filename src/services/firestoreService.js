import { getApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export async function listenToEvents(onUpdate) {
  const db = getFirestore(getApp());
  const eventsCollection = collection(db, "events");
  const eventsQuery = query(eventsCollection, where("title", "!=", ""));
  return onSnapshot(eventsQuery, (querySnapshot) => {
    onUpdate(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data()["title"],
        description: doc.data()["description"],
        duration: doc.data()["duration"],
        startTime: doc.data()["startTime"],
      }))
    );
  });
}

export async function addEvent(event) {
  const db = getFirestore(getApp());
  const eventsCollection = collection(db, "events");
  await addDoc(eventsCollection, event);
}
export async function deleteEvent(id) {
  const db = getFirestore(getApp());
  const events = doc(db, "events", id);
  await deleteDoc(events);
}
