import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from './firebase';

export const createRide = async (newRide) => {
    console.log(newRide)
    const docRef = await addDoc(collection(db, "rides"), {
        owner: {
            name: newRide.owner.name,
            phone: newRide.owner.phone
        },
        from: newRide.from,
        to: newRide.to,
        time: newRide.time,
        seats: newRide.seats
    });
    return docRef;
}

export const getAllRides = async () => {
    const {docs} = await getDocs(collection(db, "rides"));
    const rides = docs.map((doc) => ({...doc.data(), id:doc.id }));
    return rides;
}