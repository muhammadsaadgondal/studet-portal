
import database from "./firebase";
import { ref, get, set, push } from 'firebase/database';


const datafetch = () => {
    const fetchData = async () => {
        try {
            // Reference to the 'students' node in your database
            const dbRef = ref(database, 'students');

            // Fetch data
            const snapshot = await get(dbRef);

            // Handle the data
            if (snapshot.exists()) {
                console.log('Data exists:', snapshot.val());
                return snapshot.val();
            } else {
                console.log('No data available');
                return null;
                // const studentKey = push(dbRef).key;
                // await push(dbRef, {
                //     name: 'Muhammad Saad Gondal',
                //     fName: "Muhammad Pervaiz",
                //     reg: 'fa21-bcs-035',
                //     contact: '0320-1054643',
                //     nationality: 'Pakistani',
                //     dob: '08-02-2002',
                //     email: 'saadgondal203@gmail.com'
                // }
                // );
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return error;
        }
    };

    fetchData();
}

export default datafetch;