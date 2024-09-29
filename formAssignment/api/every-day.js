export default function handler(req, res) {
    // Your logic here, e.g., database cleanup, data fetching, etc.
    res.status(200).json({ message: 'Daily cron job executed' });
  }