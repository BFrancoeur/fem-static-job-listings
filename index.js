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

let showProgrammingLanguages = function (jobs) {

// access each job listing 
    jobs.forEach(job => {
    
    // get id of job
    let jobId = job.id;

    let programmingLanguages = document.createElement('div');
    programmingLanguages.setAttribute('id', `programming-languages${job.id}`);

    // while 

    let jobSkillsWrap = document.querySelector('#job-skills-wrap');

        job.languages.forEach(language => {

            console.log('programming languages ', programmingLanguages);
            // wrap each job language in a <p> tag
            let programmingLanguage = document.createElement('p');
            programmingLanguage.classList.add('skill');

            programmingLanguage.textContent = language;

            programmingLanguages.appendChild(programmingLanguage);
            
            jobSkillsWrap.appendChild(programmingLanguages);

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
                    <p class="skill">${job.languages[0]}</p>
                    <p class="skill">${job.languages[1]}</p>
                    <p class="skill">${job.languages[2]}</p>
                </div>
            </div>
            <div class="col"> 
              ${tags.reduce((allTags, tag) => {
                // console.log("tag ", tag);
                return allTags + `<p class="tag">${tag}</p>`;
              })}
            </div>
        `;
        
        jobsList.appendChild(jobListing);
    });
    
}