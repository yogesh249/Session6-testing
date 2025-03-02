let jobArray = [];

function addJob(title, company, salary, location) {
  if (!title || !company || !salary || !location) {
    return false;
  }

  const newJob = { title, company, salary, location };
  jobArray.push(newJob);
  return newJob;
}

function readJobs() {
  return jobArray;
}

module.exports = { addJob, readJobs, jobArray };