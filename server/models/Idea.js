import mongoose from 'mongoose';

const IdeaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  approved: { type: Boolean, default: false },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  pointsAwarded: { type: Boolean, default: false },
});

const Idea = mongoose.model('Idea', IdeaSchema);
export default Idea;
