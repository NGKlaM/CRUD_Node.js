import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  price: { type: Number, required: true },
  rating: Number,
  category: {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String },
    description: { type: String },
    slug: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Product', productSchema);
