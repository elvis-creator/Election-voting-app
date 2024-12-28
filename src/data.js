import Thumbnail1 from './assets/flag1.jpg'
import Thumbnail2 from './assets/flag2.jpg'
import Thumbnail3 from './assets/flag3.png'
import Candidate1 from './assets/candidate1.jpg'
import Candidate2 from './assets/candidate2.jpg'
import Candidate3 from './assets/candidate3.jpg'
import Candidate4 from './assets/candidate4.jpg'
import Candidate5 from './assets/candidate5.jpg'
import Candidate6 from './assets/candidate6.jpg'
import Candidate7 from './assets/candidate7.jpg'


export const elections = [

  {
    id: 'e1',
    title: 'Havard Presidential Election 2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi corrupti repellat architecto laudantium amet nam praesentium exercitationem consectetur maiores.',
    thumbnail: Thumbnail1,
    candidates: ['c1', 'c2', 'c3', 'c4'],
    voters: []
  },
  {
    id: 'e2',
    title: 'Logon SRC Presidential Election 2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi corrupti repellat architecto laudantium amet nam praesentium exercitationem consectetur maiores.',
    thumbnail: Thumbnail2,
    candidates: ['c5', 'c6', 'c7'],
    voters: []
  },
  {
    id: 'e3',
    title: 'Stanford Presidential Election 2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi corrupti repellat architecto laudantium amet nam praesentium exercitationem consectetur maiores.',
    thumbnail: Thumbnail3,
    candidates: [],
    voters: []
  },
]


export const candidates = [
    
  {
    id: 'c1',
    fullName: 'Enoch Ganayo',
    image: Candidate1,
    motto: 'Sad quibusdan recusandro pamojr',
    voteCount: 23,
    election: 'e1',
  },
    
  {
    id: 'c2',
    fullName: 'Konzx quak',
    image: Candidate2,
    motto: 'Sad quibusdan  mexical recusandro pamojr baber',
    voteCount: 18,
    election: 'e1',
  },
  {
    id: 'c3',
    fullName: 'Celestine Auris',
    image: Candidate3,
    motto: 'Sad quibusdan  mexical recusandro pamojr baber',
    voteCount: 3,
    election: 'e2',
  },
  {
    id: 'c4',
    fullName: 'John Asima',
    image: Candidate4,
    motto: 'Sad quibusdan  mexical recusandro pamojr baber',
    voteCount: 54,
    election: 'e1',
  },
  {
    id: 'c5',
    fullName: 'Sangid Patel',
    image: Candidate5,
    motto: 'Sad quibusdan  mexical recusandro pamojrhyujhyst vgtfsrf vgtyahag',
    voteCount: 178,
    election: 'e2',
  },
  {
    id: 'c6',
    fullName: 'Vivian Jima',
    image: Candidate6,
    motto: 'Sad quibusdan  mexical recusandro pamojr baber',
    voteCount: 42,
    election: 'e2',
  },
  {
    id: 'c7',
    fullName: 'Muhamadu Barumu',
    image: Candidate7,
    motto: 'Sad quibusdan  mexical recusandro pamojr baber ghudhbcbib9ub',
    voteCount: 190,
    election: 'e2',
  },

]




  export const voters = [
    {
    id: 'v1',
    fullName: 'Earnest Bigf',
    email: 'Bigf@gmail.com',
    password: 'bigf123',
    isAdmin: false,
    votedElection: ['e2']
},
    {
    id: 'v2',
    fullName: 'Boston Higgf',
    email: 'Higgf@gmail.com',
    password: 'higgf123',
    isAdmin: false,
    votedElection: ['e1', 'e2']
},
    {
    id: 'v3',
    fullName: 'Daniel Vinayo',
    email: 'Vinayo@gmail.com',
    password: 'vinayo123',
    isAdmin: false,
    votedElection: ['e1', 'e2']
},
    
    {
    id: 'v4',
    fullName: 'Dania Ayl',
    email: 'Ayl@gmail.com',
    password: 'ayl123',
    isAdmin: false,
    votedElection: []
},
]
