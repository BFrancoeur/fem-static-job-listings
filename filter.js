

function filterCategories(jobs) {
    let roles = [];
    let levels = [];
    let languages = [];
    let tools = [];
    let filteredResults = [];

    jobs.filter(role => selectedRole.options[selectedRole.selectedIndex].text);
    console.log(selectedRole.options[selectedRole.selectedIndex].text);
}

function fillDropdown(category) {
    let selectRole = document.getElementById('roles');
    let selectLevel = document.getElementById('levels');
    let selectLanguage = document.getElementById('languages');
    let selectTool = document.getElementById('tools');
}

// get jobs
getJobsList(jobs) {
    return jobs;

    filterCategories(jobs);
}