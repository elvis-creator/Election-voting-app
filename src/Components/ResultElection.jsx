import React, { useState } from 'react'
import { candidates } from '../data'
import CandidatesRatings from './CandidatesRatings'


const ResultElection = ({ id, thumbnail, title }) => {
    const [totalVotes, setTotalVotes] = useState(500);
  
    const electionCandidates = candidates.filter(candidate => candidate.election === id);
  
    console.log("Candidates for election:", electionCandidates);
  
    return (
      <article className="results">
        <header className="result-header">
          <h4>{title}</h4>
          <div className="result-header-image">
            <img src={thumbnail} alt={title} />
          </div>
        </header>
        <ul className="result-list">
          {
            electionCandidates.map(candidate => (
              <CandidatesRatings key={candidate.id} {...candidate} totalVotes={totalVotes} />
            ))
          }
        </ul>
      </article>
    );
  };
  

export default ResultElection;