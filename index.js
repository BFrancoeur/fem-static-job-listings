// const { parse } = require("path");

getJobsList();

function getJobsList() {
    fetch('https://fem-static-job-listings-six.vercel.app/data.json')
    .then(response => response.json())
    .then(data => {
        showJobsList(data);
        // filterJobRoles(data);
    });

}

function isFeatured(job) {
    let divFeatured = document.querySelector('.featured');
    return (job.featured ? "Featured" : "");
}

// create variables for each filter element
const roles = document.querySelector('#roles');
const levels = document.querySelector('#levels');
const tools = document.querySelector('#tools');
const languages = document.querySelector('#languages');

// filter by tag type
jobs.filter(// filter based on selected option);

// display filtered array of jobs on frontend
// showJobsList(filteredJobs);



function showJobsList(jobs) {

    const jobsList = document.querySelector('#jobs-list');
    const roles = document.querySelector('#roles');

    let selectedRole = jobs.filter(role => roles.options[roles.selectedIndex].textContent); // this doesn't work! 

    roles.addEventListener('change', (event) => {
        console.log(role);
        return jobs.filter(role);
    });

    jobs.forEach(job => {

        const tags = [job.role, job.level, ...job.languages, ...job.tools];
        const jobListing = document.createElement('article');
        jobListing.setAttribute('id', `co${job.id}`);
        jobListing.classList.add('job-listing');
        jobListing.classList.add('card-bg-transparent');

        const newBadge = '<p id="new" class="company-item">New!</p>';
        const featuredBadge = '<p id="featured" class="company-item">Featured</p>';


        jobListing.innerHTML = `
            <div class="col">
                <img src="${job.logo}" alt="${job.company} logo" class="logo">
            </div>
            <div class="col">
                <div class="top-row row">
                    <p id="company-name" class="company-item">${job.company}</p>
                    ${job.new ? newBadge : ''}
                    ${job.featured ? featuredBadge : ''}
                </div>
                <div class="middle-row row">
                    <h2 class="job-title">${job.position}</h2>
                </div>
                <div class="bottom-row row">
                    <p class="job-info">${job.postedAt}</p>
                    <p class="dot"></p>
                    <p class="job-info">${job.contract}</p>
                    <p class="dot"></p>
                    <p class="job-info">${job.location}</p>
                </div>
            </div>
            <div class="col"> 
              ${tags.reduce((allTags, tag) => {
                return allTags + `<p class="tag">${tag}</p>`;
              }, '')}
            </div>
        `;
        
        jobsList.appendChild(jobListing);
    });
    
}

