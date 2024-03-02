// controllers/dataController.js
const fetchDataFromFirebase = async (req, res) => {
    try {
        // Fetch data from Firebase or perform any other operation
        const data = await fetchDataFromFirebase();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    fetchDataFromFirebase,
};
