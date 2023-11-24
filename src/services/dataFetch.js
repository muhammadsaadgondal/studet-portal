import database from "./firebase";
import { ref, get } from 'firebase/database';
import jwt from 'jsonwebtoken';

const datafetch = async (token) => {
    try {
        // Verify the token to get user information
        const decodedToken = jwt.verify(token, 'yourSecretKey'); // Replace with your actual secret key
        const userId = decodedToken.id;

        // Reference to the 'students' node in your database
        const dbRef = ref(database, `students/${userId}`); // Assuming you store user-specific data under the 'users' node

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
