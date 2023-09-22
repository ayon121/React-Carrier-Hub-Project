const getStoredJobApplication = () => {
    const StoredJobApplication = localStorage.getItem('job-application')
    if(StoredJobApplication) {
        return JSON.parse(StoredJobApplication)
    }
    return [];
}
const saveJobApplication = id => {
    const StoredJobApplication = getStoredJobApplication();
    const exists = StoredJobApplication.find(JobId => JobId === id)
    if(!exists){
        StoredJobApplication.push(id)
        localStorage.setItem('job-application' , JSON.stringify(StoredJobApplication))
    }
}

export {saveJobApplication}