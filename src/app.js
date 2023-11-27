import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRotes';
import authRoutes from './routes/authRoutes';
// import { handleErrors } from './controllers/errorController';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Kết nối MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false, // Tắt để sử dụng findOneAndUpdate thay thế
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Sử dụng bodyParser để đọc dữ liệu từ body của request
app.use(bodyParser.json());

// Sử dụng các routes đã được định nghĩa
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

// Middleware xử lý lỗi
// app.use(handleErrors);

// Bắt đầu lắng nghe trên cổng đã chọn
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
