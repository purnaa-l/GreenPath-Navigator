import express from 'express';
import Idea from '../models/Idea.js';
import User from '../models/User.js';

const router = express.Router();

// Submit a new idea
router.post('/submit', async (req, res) => {
  const { title, description, userId } = req.body;
  try {
    const newIdea = new Idea({ title, description, submittedBy: userId });
    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit idea', error });
  }
});

// Get all approved ideas
router.get('/', async (req, res) => {
  try {
    const approvedIdeas = await Idea.find({ approved: true }).populate('submittedBy', 'name email');
    res.json(approvedIdeas);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch ideas', error });
  }
});

// Vote on an idea
router.post('/vote/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const idea = await Idea.findById(id);
    if (idea.votes.includes(userId)) {
      return res.status(400).json({ message: 'User already voted' });
    }

    idea.votes.push(userId);
    await idea.save();
    res.status(200).json(idea);
  } catch (error) {
    res.status(500).json({ message: 'Failed to vote on idea', error });
  }
});

// Admin approval for ideas
router.patch('/approve/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const idea = await Idea.findById(id);
    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    idea.approved = true;
    await idea.save();
    res.status(200).json(idea);
  } catch (error) {
    res.status(500).json({ message: 'Failed to approve idea', error });
  }
});

export default router;
