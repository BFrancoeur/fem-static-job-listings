// const { parse } = require("path");

getJobsList();

function getJobsList() {
    fetch('https://fem-static-job-listings-six.vercel.app/data.json')
    .then(response => response.json())
    .then(data => {
        showJobsList(data);
    });

}

function isFeatured(job) {
    let divFeatured = document.querySelector('.featured');
    return (job.featured ? "Featured" : "");
}

function filterCatgories() {
    /**
     * The categories are:
        - Role: Frontend, Backend, Fullstack
        - Level: Junior, Midweight, Senior
        - Languages: Python, Ruby, JavaScript, HTML, CSS
        - Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)
     */

     // create an array for each category
     let role = ['Frontend', 'Backend', 'Fullstack'];
     let level = ['Junior', 'Midweight', 'Senior'];
     let languages = ['Python', 'Ruby', 'JavaScript', 'HTML', 'CSS'];
     let tools = ['React', 'Sass', 'Vue', 'Django', 'Ruby on Rails' ];

     
}

function showJobsList(jobs) {

    let jobsList = document.querySelector('#jobs-list');
    // jobsList.setAttribute('id', 'jobs-list');

    jobs.forEach(job => {

        const tags = [job.role, job.level, ...job.languages, ...job.tools];
        let firstIteration = '';
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