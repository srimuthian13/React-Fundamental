import JobCard from './JobCard';

function JobList() {
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "PT Tech Solutions",
            location: "Bandung",
            type: "Full Time",
            salary: "Rp8.000.000 - Rp10.000.000"
        },
        {
            id: 2,
            title: "System Administrator",
            company: "XYZ Corporation",
            location: "San Francisco, CA",
            description: "Responsible for managing and maintaining computer systems and networks."
        },
        {
            id: 3,
            title: "IT Support Specialist",
            company: "XYZ Corporation",
            location: "San Francisco, CA",
            description: "Responsible for providing technical support and assistance to users."
        },
        {
            id: 4,
            title: "Digital Marketing Specialist",
            company: "Bright Media",
            location: "Bandung",
            type: "Hybrid",
            salary: "Rp6.500.000 - Rp8.500.000"
        },
        {
            id: 5,
            title: "Software Engineer",
            company: "WIZ company",
            location: "San Francisco, CA",
            description: "Responsible for designing, developing, and maintaining software applications."
        },
        {
            id: 6,
            title: "Customer Service",
            company: "ABC Company",
            location: "San Francisco, CA",
            description: "Responsible for providing excellent customer service and resolving client issues."
        },
        {
            id: 7,
            title: "Data Analyst",
            company: "PT Digital Nusantara",
            location: "Bandung",
            type: "Full Time",
            salary: "Rp8.000.000 - Rp10.000.000"
        },
        {
            id: 8,
            title: "UI/UX Designer",
            company: "Creative Studio ID",
            location: "Jakarta",
            type: "Hybrid",
            salary: "Rp7.000.000 - Rp9.000.000"
        },
        {
            id: 9,
            title: "Backend Developer",
            company: "Tech Solutions",
            location: "Surabaya",
            type: "Remote",
            salary: "Rp9.000.000 - Rp12.000.000"
        },
        {
            id: 10,
            title: "Mobile Developer",
            company: "PT App Indonesia",
            location: "Yogyakarta",
            type: "Full Time",
            salary: "Rp8.500.000 - Rp11.000.000"
        },
        {
            id: 11,
            title: "Data Analyst",
            company: "Insight Data Corp",
            location: "Jakarta",
            type: "Full Time",
            salary: "Rp7.500.000 - Rp10.500.000"
        }
    ];

    return (
        <section id="jobs-section" className="job-list">
            <h2 className="job-title">Latest Job Vacancies</h2>
            <div className="job-card">
                {jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>
        </section>
    );
}

export default JobList;