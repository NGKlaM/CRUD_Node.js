import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  price: { type: Number, required: true },
  rate: Number,
  student: {
    _id: mongoose.Schema.Types.ObjectId,
    fullname: String,
    email: String,
    role: String,
    createdAt: Date,
    updatedAt: Date,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Product', productSchema);
