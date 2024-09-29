export default async function handler(req, res) {
    // Logic for what you want to do every hour
    console.log("This will run every hour!");

    // Send a response back
    res.status(200).json({ message: "Hourly task executed!" });
}
