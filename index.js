// const { parse } = require("path");

getJobsList();

console.log(typeof jobsList);

function getJobsList() {
    fetch('https://fem-static-job-listings-six.vercel.app/data.json')
    .then(response => response.json())
    .then(data => {
        showJobsList(data);
    });

}

function hidePNew(pNew) {
    pNew.style.display = 'none';
}

function isNew(job, pNew) {
    pNew = document.querySelector('.p-new');
    return (job.new ? "New!" : hidePNew(pNew));
}

function isFeatured(job) {
    let divFeatured = document.querySelector('.featured');
    return (job.featured ? "Featured" : "");
}

function showJobsList(jobs) {
    console.table(jobs);

    const jobsList = document.querySelector('#jobs-list');
    // jobsList.setAttribute('id', 'jobs-list');

    jobs.forEach(job => {
        const jobListing = document.createElement('article');
        jobListing.classList.add('job-listing');
        jobListing.classList.add('card-bg-transparent');
        let pNew = document.querySelector('.new');
        let pFeatured = document.querySelector('.featured');

            jobListing.innerHTML = `
        <div class="col">
            <div class="row">
                <img src="${job.logo}" alt="${job.company} logo" class="logo">
            </div>
        </div>
        <div class="col">
            <div class="row">
                <div class="company-name"><p>${job.company}</p></div>
                <div class="tag-round new"><p class="p-new">${isNew(job)}
            </p>
            </div>
                <div class="tag-round featured"><p class="p-featured">${job.featured ? "Featured" : ""}</p></div>
            </div>
            <div class="row">
                <h3 class="job-title">Senior Frontend Developer</h3>
            </div>
            <div class="row">
                <ul id="job-description-list">
                    <li class="tag-description">
                    ${job.postedAt}
                    </li>
                    <li class="tag-description">
                    ${job.contract}
                    </li>
                    <li class="tag-description">
                    ${job.location}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col">
            <div class="row">
                <p class="tag-skill">
                ${job.level}
                </p>
                <p class="tag-skill">
                ${job.position}
                </p>
                <p class="tag-skill">
                    HTML
                </p>
                <p class="tag-skill">
                    CSS
                </p>
                <p class="tag-skill">
                    JavaScript
                </p>
            </div>
        </div>
        `;
        
        jobsList.appendChild(jobListing);
    });

}