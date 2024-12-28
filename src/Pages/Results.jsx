import React, { useState } from 'react'
import { elections as dummyElection } from '../data'
import ResultElection from '../Components/ResultElection';

const Results = () => {

  const [elections, setElection] = useState(dummyElection)
  

  return (
    <section className="result">
      <div className="result-container">
        {
          elections.map(election => <ResultElection key={election.id} {...election}/>)
        }

      </div>
    </section>
  )
}

export default Results;