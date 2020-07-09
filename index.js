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

function showProgrammingLanguages(jobs) {

    

// access each job listing 
    jobs.forEach(job => {
    
    // get id of job
    let jobId = job.id;

    // while 
    console.log('job ', job);

    let jobSkillsWrap = document.querySelector('#job-skills-wrap');

        job.languages.forEach(language => {
            
            let programmingLanguages = [];
            programmingLanguages.push(language);

            console.log('programming language ', programmingLanguages);
            // wrap each job language in a <p> tag

        });
        programmingLanguages.forEach(language => {
            let programmingLanguageElem = document.createElement('p');
            programmingLanguageElem.classList.add('skill');
            
            jobSkillsWrap.appendChild(programmingLanguageElem);
        });
    });
        // append each job to the #job-skills-wrap div
        // jobSkillsWrap.appendChild(programmingLanguages);
}

function showJobsList(jobs) {

    let jobsList = document.querySelector('#jobs-list');
    // jobsList.setAttribute('id', 'jobs-list');

    jobs.forEach(job => {
        
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
                <div id="job-skills-wrap">
                    <p class="skill">${job.level}</p>
                    <p class="skill">${job.position}</p>
                </div>
            </div>
        `;
        
        jobsList.appendChild(jobListing);
    });
    showProgrammingLanguages(jobs);
    
}