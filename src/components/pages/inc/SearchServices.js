import React, { useState, useEffect } from "react";

const services = [
  {
    id: 1,
    name: "Resume Review",
    description: "Get your resume reviewed by experts.",
  },
  {
    id: 2,
    name: "Mock Interviews",
    description: "Prepare for your interviews with mock sessions.",
  },
  {
    id: 3,
    name: "Career Counseling",
    description: "Get guidance on your career path from professionals.",
  },
  {
    id: 4,
    name: "Job Search Assistance",
    description: "Receive help in finding and applying for jobs.",
  },
  {
    id: 5,
    name: "LinkedIn Profile Optimization",
    description: "Enhance your LinkedIn profile for better visibility.",
  },
  {
    id: 6,
    name: "Cover Letter Writing",
    description: "Get help writing compelling cover letters.",
  },
  {
    id: 7,
    name: "Personal Branding",
    description: "Develop your personal brand to stand out in the job market.",
  },
  {
    id: 8,
    name: "Salary Negotiation",
    description: "Learn strategies for negotiating your salary and benefits.",
  },
  {
    id: 9,
    name: "Networking Strategies",
    description:
      "Discover effective ways to build and expand your professional network.",
  },
  {
    id: 10,
    name: "Skills Assessment",
    description:
      "Evaluate your skills to identify strengths and areas for improvement.",
  },
  {
    id: 11,
    name: "Job Market Analysis",
    description:
      "Get insights into the current job market trends and opportunities.",
  },
  {
    id: 12,
    name: "Interview Follow-Up Strategies",
    description: "Learn how to effectively follow up after an interview.",
  },
  {
    id: 13,
    name: "Job Offer Evaluation",
    description: "Get help evaluating and comparing job offers.",
  },
  {
    id: 14,
    name: "Freelancing Guidance",
    description: "Receive advice on starting and succeeding as a freelancer.",
  },
  {
    id: 15,
    name: "Internship Placement",
    description:
      "Find and secure internships to gain valuable work experience.",
  },
];

function SearchServices() {
  const [searchKey, setSearchKey] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchKey]);

  const handleSearch = () => {
    const filtered = services.filter(
      (service) =>
        service.name.toLowerCase().includes(searchKey.toLowerCase()) ||
        service.description.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <div>
      <div className="container mt-4">
        <form>
        <p className="main-heading">To Avail Services for your jobs Search below</p>
        <input
          class="form-control mr-sm-2 mb-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        </form>
        <div className="row">
          {filteredServices.map((service) => (
            <div className="col-md-4 mb-3" key={service.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                  <button className="btn btn-primary">Avail Service</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchServices;
