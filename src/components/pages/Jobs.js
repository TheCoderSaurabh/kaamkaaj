import "./style/Jobs.css";
import SearchJobs from "./inc/SearchJobs";

const Jobs = () => {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4> Jobs </h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home / Jobs </h6>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-4">
        <h2 className="main-heading text-center">Jobs to Apply</h2>
        <div className="underline m-auto mb-4"></div>

        <SearchJobs />
        {/* <div className="row">
        {jobs.map(job => (
          <div className="col-md-4 mb-3" key={job.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
};

export default Jobs;
