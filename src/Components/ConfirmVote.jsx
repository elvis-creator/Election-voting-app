import React, { useEffect, useState } from "react";
import { candidates } from "../data";

function ConfirmVote() {
  // State to store the selected candidate
  const [modalCandidate, setModalCandidate] = useState(null);

  // Fetch the selected candidate
  const fetchCandidate = () => {
    const candidate = candidates.find((candidate) => candidate.id === "c1");
    if (candidate) {
      setModalCandidate(candidate);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  if (!modalCandidate) {

    return <div>Loading...</div>;
  }

  return (
    <section className="modal">
      <div className="modal-content confirm-vote-content">
        <h5>Please confirm your vote</h5>
        <div className="confirm-vote-image">
          <img
            src={modalCandidate.image}
            alt={modalCandidate.fullName}
          />
        </div>
        <h2>{modalCandidate.fullName}</h2>
        <p>{modalCandidate.motto}</p>
        <div className="confirm-vote-cta">
          <button className="btn">Cancel</button>
          <button className="btn-primary">Confirm</button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmVote;
