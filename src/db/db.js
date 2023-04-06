import { collection, addDoc, getDocs, query, where, Timestamp, Firestore } from "firebase/firestore";
import {db} from './firebase';

export const createRide = async (newRide) => {
    const docRef = await addDoc(collection(db, "rides"), {
        owner: {
            name: newRide.owner.name,
            phone: newRide.owner.phone
        },
        from: newRide.from,
        to: newRide.to,
        time: Timestamp.fromDate(newRide.time),
        seats: newRide.seats
    });
    return docRef;
}

export const getAllRides = async () => {
    const {docs} = await getDocs(collection(db, "rides"));
    const rides = docs.map((doc) => ({...doc.data(), id:doc.id }));
    rides.forEach(ride => {
        ride.time = ride.time.toDate();
    });
    return rides;
}


/* 
    Expects Array of objects {key, op, value}. 
    Ex: [ {"to", "==", "UFMG"}, {"time", ">=", (new Date())} ]
    For possible queries and opps, refer to https://firebase.google.com/docs/firestore/query-data/queries
*/
export const getWithFilters = async (filters) => {
    const collection_ref = collection(db, "rides");

    const params = []

    filters.forEach(filter => {
        console.log(filter)
        if(filter.key=="time"){
            filter.value = Timestamp.fromDate(filter.value)
        }
        console.log(filter)
        params.push(where(filter.key, filter.op, filter.value))
    });

    const q = query(collection_ref, ...params);
        
    const doc_refs = await getDocs(q);

    const rides = [];

    doc_refs.forEach(ride => {
        rides.push({
            id: ride.id, 
            ...ride.data()
        })
    });

    rides.forEach(ride => {
        ride.time = ride.time.toDate();
    });

    return rides;
}