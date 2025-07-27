import React, { useEffect, useState } from "react";

// use the api to call the data from backend using react useEffect()
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop and maintain web applications.",
  },
  {
    id: 2,
    title: "Data Scientist",
    description: "Analyze and interpret complex data.",
  },
  {
    id: 3,
    title: "Product Manager",
    description: "Oversee the development and delivery of products.",
  },
  {
    id: 4,
    title: "UX Designer",
    description: "Design user-friendly interfaces.",
  },
  {
    id: 5,
    title: "QA Engineer",
    description: "Ensure the quality of software products.",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    description: "Maintain and improve CI/CD pipelines.",
  },
  {
    id: 7,
    title: "System Administrator",
    description: "Manage and maintain IT infrastructure.",
  },
  {
    id: 8,
    title: "Frontend Developer",
    description: "Build responsive web interfaces.",
  },
  {
    id: 9,
    title: "Backend Developer",
    description: "Develop server-side logic and databases.",
  },
  {
    id: 10,
    title: "Network Engineer",
    description: "Design and maintain network systems.",
  },
  {
    id: 11,
    title: "Business Analyst",
    description: "Analyze business needs and processes.",
  },
  {
    id: 12,
    title: "Technical Writer",
    description: "Create and maintain technical documentation.",
  },
  {
    id: 13,
    title: "IT Support Specialist",
    description: "Provide technical support to users.",
  },
  { id: 14, title: "Data Analyst", description: "Extract insights from data." },
  {
    id: 15,
    title: "Security Analyst",
    description: "Protect systems and data from threats.",
  },
  {
    id: 16,
    title: "Mobile Developer",
    description: "Create mobile applications for iOS and Android.",
  },
  {
    id: 17,
    title: "Cloud Engineer",
    description: "Manage cloud infrastructure and services.",
  },
  {
    id: 18,
    title: "AI Engineer",
    description: "Develop and implement AI models and solutions.",
  },
];

const SearchJobs = () => {
  //using api to fetch and search data
  //   const [showJobs, setShowJobs] = useState(jobs);
  //   const [searchJob, setSearchJob] = useState("");

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     handleSearch();
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, [searchJob]);

  // const handleSearch = async() => {
  //   try {
  //     const gotData = await axios.get(
  //       //rest api
  //     );
  //     setJob(gotData.data)
  //   }
  // }

  const [searchKey, setSearchKey] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchKey]);

  const handleSearch = () => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchKey.toLowerCase()) ||
        job.description.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="container mt-4">
      <form>
        <p className="main-heading">To search for your jobs to apply type below</p>
        <input
          class="form-control mr-sm-2 mb-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div className="row">
          {filteredJobs.map((job) => {
            return (
              <div className="col-md-4 mb-3" key={job.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">{job.description}</p>
                    <button className="btn btn-primary">Apply Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default SearchJobs;
