import _jobs from "../data/jobs.json";
import { IJob } from "../interfaces";

const jobs: IJob[] = _jobs.sort((a, b) => {
  const dateA = new Date(a.publicationDate);
  const dateB = new Date(b.publicationDate);
  return dateB.getTime() - dateA.getTime();
});

export const PageJobs = () => {
  return (
    <div className="page pageJobs">
      <p>There are {jobs.length} jobs:</p>

      <div className="jobs">
        {jobs.map((job) => {
          return (
            <div className="job" key={job.id}>
              <div className="title">
                <a href={job.url} target="_blank">
                  {job.title}
                </a>
              </div>
              <div className="company">{job.company}</div>
              <div className="description">{job.description}</div>
              <div className="skills">{job.skillList}</div>
              <div className="publicationDate">{job.publicationDate}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
