import { collection, addDoc, getDocs, or } from "firebase/firestore";
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

export const getRides = async (filters) => {
    const {docs} = await getDocs(collection(db, "rides"));

    const rides = docs.map((doc) => ({...doc.data(), id:doc.id }));

    const filteredRides = rides.filter((ride) =>
        (!filters.from || (filters.from == ride.from)) &&
        (!filters.to || (filters.to == ride.to)) &&
        (!filters.time || (Date(filters.time) < Date(ride.time)))
    );

    return filteredRides;
}