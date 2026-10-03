import express from 'express';
 
const app = express();
const PORT = process.env.PORT || 4545;
 
app.get('/ping', (req, res) => {
  res.send({ message: 'pong v3' });
});
 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 
export default app;