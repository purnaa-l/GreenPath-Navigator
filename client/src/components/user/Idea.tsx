import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { toast } from 'react-toastify';

interface Idea {
  _id: string;
  title: string;
  description: string;
  votes: string[];
  approved: boolean;
  submittedBy: { email: string };
}

const IdeasPage: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]); // Approved ideas
  const [submittedIdeas, setSubmittedIdeas] = useState<Idea[]>([]); // Submitted but not approved ideas
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId] = useState('exampleUserId'); // Simulating a user ID
  const [loading, setLoading] = useState(false);
  const [votedIdeas, setVotedIdeas] = useState<Set<string>>(new Set()); // To track already voted ideas

  useEffect(() => {
    const fetchIdeas = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Idea[]>('/api/ideas');
        const approvedIdeas = response.data.filter((idea) => idea.approved);
        const submittedIdeas = response.data.filter((idea) => !idea.approved);
        setIdeas(approvedIdeas);
        setSubmittedIdeas(submittedIdeas);
      } catch (error) {
        console.error('Error fetching ideas:', error);
        toast.error('Failed to fetch ideas');
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  // Submit a new idea
  const submitIdea = async () => {
    if (!title || !description) {
      toast.error('Please provide a title and description');
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/ideas/submit', { title, description, userId });
      setTitle('');
      setDescription('');
      toast.success('Idea submitted for approval!');
      // Refresh ideas list
      fetchIdeas();
    } catch (error) {
      console.error('Error submitting idea:', error);
      toast.error('Failed to submit idea');
    } finally {
      setLoading(false);
    }
  };

  // Vote on an idea
  const voteOnIdea = async (id: string) => {
    if (votedIdeas.has(id)) {
      toast.info('You have already voted for this idea');
      return;
    }

    try {
      await axios.post(`/api/ideas/vote/${id}`, { userId });
      setVotedIdeas(new Set(votedIdeas.add(id)));
      toast.success('Voted successfully!');
    } catch (error) {
      console.error('Error voting on idea:', error);
      toast.error('Failed to vote on idea');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Banner Image */}
      <div
        className="w-full h-40 bg-skyBlue rounded-lg mb-6 flex items-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage: 'url("/bg1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        🌿 Join the Green Path Initiative
      </div>

      <h1 className="text-3xl font-bold mb-4 text-forestGreen">Submit Your Sustainability Idea</h1>

      {/* Idea Submission Form */}
      <Card className="mb-6 border border-mossGreen shadow-md">
        <CardContent className="bg-lightSand p-6 rounded-t-lg">
          <Input
            placeholder="Idea Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4 border-mossGreen placeholder-leafGreen"
            aria-label="Idea title"
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4 border-mossGreen placeholder-leafGreen"
            aria-label="Idea description"
          />
        </CardContent>
        <CardFooter className="flex justify-end p-4 bg-lightSand">
          <Button
            onClick={submitIdea}
            className="bg-forestGreen hover:bg-leafGreen text-white"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Idea'}
          </Button>
        </CardFooter>
      </Card>

      {/* Approved Ideas Section */}
      <h2 className="text-2xl font-bold mb-4 text-earthBrown">Approved Ideas</h2>
      {loading ? (
        <p>Loading ideas...</p>
      ) : (
        <ul className="space-y-4">
          {ideas.length > 0 ? (
            ideas.map((idea) => (
              <Card key={idea._id} className="p-4 flex justify-between items-center border-mossGreen shadow-sm">
                <CardContent className="w-full">
                  <h3 className="font-semibold text-leafGreen">{idea.title}</h3>
                  <p className="text-earthBrown">{idea.description}</p>
                </CardContent>
                <Button
                  onClick={() => voteOnIdea(idea._id)}
                  className="bg-skyBlue text-white"
                  disabled={votedIdeas.has(idea._id)}
                >
                  {votedIdeas.has(idea._id) ? 'Voted' : 'Vote'}
                </Button>
              </Card>
            ))
          ) : (
            <p>No approved ideas yet.</p>
          )}
        </ul>
      )}

      {/* Submitted Ideas Section */}
      <h2 className="text-2xl font-bold mb-4 text-earthBrown">Submitted Ideas (Pending Approval)</h2>
      <ul className="space-y-4">
        {submittedIdeas.length > 0 ? (
          submittedIdeas.map((idea) => (
            <Card key={idea._id} className="p-4 border-mossGreen shadow-sm">
              <CardContent>
                <h3 className="font-semibold text-leafGreen">{idea.title}</h3>
                <p className="text-earthBrown">{idea.description}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No submitted ideas yet.</p>
        )}
      </ul>
    </div>
  );
};

export default IdeasPage;
