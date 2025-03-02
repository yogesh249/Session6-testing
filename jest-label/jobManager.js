let jobArray = [];

function resetState() {
  jobArray.length = 0;
}

function addJob(title, company, salary, location) {
  if (typeof title !== "string" || typeof company !== "string" || typeof location !== "string") return false;
  if (typeof salary !== "number" || salary <= 0) return false;
  if (!title || !company || !salary || !location) return false;

  const newJob = { title, company, salary, location };
  jobArray.push(newJob);
  return newJob;
}

module.exports = { addJob, jobArray, resetState };