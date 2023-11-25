import { database } from './firebase';
import { ref, get } from 'firebase/database';

const datafetch = async () => {
    try {
        const dbRef = ref(database, `students`); // Assuming you store user-specific data under the 'users' node

        // Fetch data
        const snapshot = await get(dbRef);

        // Handle the data
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('No data available');
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
}

export default datafetch;
