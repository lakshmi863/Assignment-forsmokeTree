export default async function handler(req, res) {
    // Logic for what you want to do every minute
    console.log("This will run every minute!");

    // Send a response back
    res.status(200).json({ message: "Minute task executed!" });
}
