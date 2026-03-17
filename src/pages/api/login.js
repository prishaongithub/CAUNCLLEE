export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // 🔐 Replace with real DB check
    if (username === 'demo' && password === 'demo123') {
      // Set cookie
      res.setHeader('Set-Cookie', `token=valid-token; Path=/; HttpOnly`);
      return res.status(200).json({ message: 'Login successful' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(405).end(); // Method Not Allowed
}
