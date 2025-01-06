import React from 'react';
import { candidates as dummyCandidates } from '../data';
import { useParams } from 'react-router-dom';
import Candidate from '../Components/Candidate';
import ConfirmVote from '../Components/ConfirmVote';

function Candidates() {
  const { id } = useParams();

  console.log('Election ID:', id); // Debugging log

  // Ensure `id` matches candidate.election correctly
  const electionId = id.replace(':', '').trim(); // Clean `id` if necessary
  const candidates = dummyCandidates.filter(candidate => candidate.election === electionId);

  console.log('Filtered Candidates:', candidates); // Debugging log

  return (

    <>
     
    <section className="candidates">
      <header className="candidates-header">
        <h1>Vote Your Candidate</h1>
        <p>
          These are the candidates for the selected election. Please vote once and wisely,
          because you won't be allowed to vote in this election again.
        </p>
      </header>
      <div className="candidate-container">
        {
          candidates.length > 0 
            ? candidates.map(candidate => <Candidate key={candidate.id} {...candidate} />)
            : <p>No candidates found for this election.</p>
        }
      </div>
    </section>
    <ConfirmVote/>
    </>
  );
}

export default Candidates;
