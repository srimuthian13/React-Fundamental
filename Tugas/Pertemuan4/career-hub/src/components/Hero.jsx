

function Hero() {
  return (
    <section className="hero">
      <h2>Find Your Dream Career Here</h2>

      <p>
        Discover thousands of job opportunities from the best companies.
        Start your journey and find the career that fits your passion and skills.
      </p>

      <button className="hero-btn" onClick={() => document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' })}>
        Explore Jobs
      </button>
    </section>
  );
}

export default Hero;