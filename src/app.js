import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import routerCategory from './routes/categoryRotes';
import routerAuth from './routes/authRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', productRoutes, routerCategory, routerAuth);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
