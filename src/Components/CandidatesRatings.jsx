import React from 'react';

function CandidatesRating({ fullName, image, voteCount, totalVotes }) {
  const percentage = totalVotes > 0 ? ((voteCount / totalVotes) * 100).toFixed(2) : 0;

  return (
    <li className="result-candidate">

      <div className="result-candidate-image">
        <img src={image} alt={fullName} />
      </div>

      <div className="result-candidate-info">

        <div>
        <h5>{fullName}</h5>
        <small>{`${voteCount} ${voteCount === 1 ? 'vote' : 'votes'}`}</small>
        </div>

        <div className="result-candidate-loader">
        <span style={{ width: `${percentage}%` }}></span>
       </div>
       <small>{`${percentage}%`}</small>
       
      </div>
     
    </li>
  );
}

export default CandidatesRating;
