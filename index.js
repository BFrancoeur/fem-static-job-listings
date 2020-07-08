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

// function getProgrammingLanguages(job) {
//     job.languages.forEach(language => {
//         let programmingLanguages = document.querySelector('.programming-languages');
//         let programmingLanguage = document.createElement('p');
//         programmingLanguage.classList.add('skill');
//         programmingLanguage.textContent = language;
        
//         // programmingLanguages.appendChild(programmingLanguage);
//         console.log('getProgrammingLanguages, jobs: ', job.languages);
//         console.log('getProgrammingLanguages ', programmingLanguage);
//     });
// }

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

        let jobSkillsWrap = '';


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
                    <div id="programming-languages"></div>
                </div>
            </div>
        `;
        jobsList.appendChild(jobListing);

            // job.languages.forEach(language => {
            //     let programmingLanguage = document.createElement('p');
            //     programmingLanguage.classList.add('skill');

            //     let languageName = language;
            //     programmingLanguage.textContent = languageName;

            //     let programmingLanguages = document.querySelector('#programming-languages');
            //     programmingLanguages.appendChild(programmingLanguage);
            
            // });

            jobs.forEach(job => {
                
                let id = 'co' + job.id;
                let companyId = document.querySelector('#' + id);
                
                job.languages.forEach(language => {
                    jobSkillsWrap = document.querySelector('job-skills-wrap');
                    let programmingLanguage = document.createElement('p');
                    programmingLanguage.classList.add('skill');
        
                    jobSkillsWrap.appendChild('programmingLanguage');
                });
            
            });
            
    });

}