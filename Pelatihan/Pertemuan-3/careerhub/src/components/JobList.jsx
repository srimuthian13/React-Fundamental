import JobCard from './JobCard';
import jobs from '../jobs.js';

const JobList = () => {
    return (
        <section className="job-list max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-center text-amber-800 font-extrabold text-3xl md:text-4xl mb-8 tracking-wide">
                Daftar Lowongan Pekerjaan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {/* Hardcoded Jobs */}
                <JobCard title="Software Engineer" company="TechCorp" location="New York, NY" salary="$120,000" status={false} />
                <JobCard title="Data Analyst" company="DataSolutions" location="San Francisco, CA" salary="$95,000" status={false} />
                <JobCard title="Product Manager" company="InnovateX" location="Austin, TX" salary="$110,000" status={false} />
                <JobCard title="UX Designer" company="Creative Minds" location="Seattle, WA" salary="$100,000" status={false} />
                <JobCard title="DevOps Engineer" company="CloudWorks" location="Boston, MA" salary="$115,000" status={false} />
                <JobCard title="Sales Associate" company="RetailPro" location="Chicago, IL" salary="$45,000" status={false} />
                <JobCard title="Marketing Specialist" company="BrandBoost" location="Los Angeles, CA" salary="$70,000" status={false} />
                <JobCard title="Customer Support Representative" company="HelpDesk Inc." location="Miami, FL" salary="$40,000" status={false} />
                <JobCard title="Financial Analyst" company="MoneyMatters" location="Dallas, TX" salary="$85,000" status={false} />
                <JobCard title="HR Manager" company="PeopleFirst" location="Denver, CO" salary="$90,000" status={false} />

                {/* Mapped Jobs */}
                {jobs.map((job, index) => (
                    <JobCard
                        key={index}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        salary={job.salary}
                        status={job.status}
                    />
                ))}
            </div>
        </section>
    );
};

export default JobList;