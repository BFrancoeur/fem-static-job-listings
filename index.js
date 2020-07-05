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
        const newBadge = '<p id="new" class="company-item">New!</p>';
        const featuredBadge = '<p id="featured" class="company-item">Featured</p>';

        isPropertyValueTrue(job);

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
                <h2 class="job-title">Senior Frontend Developer</h2>
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
            <div class="job-skills-wrap">
                <p class="skill">${job.level}</p>
                <p class="skill">${job.position}</p>
                <p class="skill">HTML</p>
                <p class="skill">CSS</p>
                <p class="skill">JavaScript</p>
            </div>
        </div>
        `;
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
       
        console.log('jobFeatured: ', jobFeatured);

        // check if the value of job.new is true
        console.log('job.new: ', job.new);

        // if it is true, then showNew();
        function showNew() {
            if (job.new === true) {
                pNew.style.display= 'block';
            } else {
                pNew.style.display = 'none';
            }
        }
        // else hideNew();

    


    }

}