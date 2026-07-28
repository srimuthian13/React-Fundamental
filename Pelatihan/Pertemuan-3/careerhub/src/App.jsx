// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css'
import JobList from './components/JobList'


const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const jobs = [
  {
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
  },
  {
    title: 'Product Manager',
    company: 'InnovateX',
    location: 'New York, NY',
    salary: '$100,000 - $130,000',
  },
  {
    title: 'Data Scientist',
    company: 'DataWorks',
    location: 'Seattle, WA',
    salary: '$110,000 - $140,000',
  },
];  

function App() {

  return (
    <div>
      {/* Props */}
      {fruits.map((fruit, id) => (
        <p key={id}>{fruit}</p>
      ))}
      
      {jobs.map((job, id) => (
        <div key={id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.salary}</p>
        </div>
      ))}
      
      <Header />
      <Hero />
      <Content />
      <JobList />
      <Footer />
    </div>
  )
}

export default App
