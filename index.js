// const { parse } = require("path");

getJobsList();

console.log(typeof jobsList);

function getJobsList() {
    fetch('https://fem-static-job-listings-six.vercel.app/data.json')
    .then(response => response.json())
    .then(data => {
        console.table(data);
        showJobsList(data);
    });

}

function isFeatured(job) {
    let divFeatured = document.querySelector('.featured');
    return (job.featured ? "Featured" : "");
}

function showJobsList(jobs) {
    console.table(jobs);

    let jobsList = document.querySelector('#jobs-list');
    // jobsList.setAttribute('id', 'jobs-list');

    jobs.forEach(job => {
        const jobListing = document.createElement('article');
        jobListing.classList.add('job-listing');
        jobListing.classList.add('card-bg-transparent');
        let pNew = document.querySelector('.p-new');
        let pFeatured = document.querySelector('.featured');

        isPropertyValueTrue(job);

            jobListing.innerHTML = `
        <div class="col">
            <div class="row">
                <img src="${job.logo}" alt="${job.company} logo" class="logo">
            </div>
        </div>
        <div class="col">
            <div class="row">
                <div class="company-name"><p>${job.company}</p></div>
                <div class="tag-round new"><p class="p-new">New!
            </p>
            </div>
                <div class="tag-round featured"><p class="p-featured">New!${job.featured ? "Featured" : ""}</p></div>
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
        console.log('after innerHTML pNew: ', pNew);
        jobsList.appendChild(jobListing);
    });


    // function togglePNew(job, pNew) {
        
    //     console.log('job.new: ', job.new);
    //     console.log('pNew: ', pNew);
    //     if (job.new === true) {
    //         pNew.style.display = "block";
    //     } else {
    //         pNew.style.display = "none";
    //     } 
    
    //     console.log('job.new.value: ', job.new.value);
    // }

    function isPropertyValueTrue(job) {
        let pNew = document.querySelector('.p-new');
        let pFeatured = document.querySelector('.p-featured');

        console.log('pNew: ', pNew);
        console.log('pFeatured: ', pFeatured);

        let jobNew = job.new.value;
        let jobFeatured = job.featured.value;
        console.log('jobNew: ', jobNew);
        console.log('jobFeatured: ', jobFeatured);


    }

}