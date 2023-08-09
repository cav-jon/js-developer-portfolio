function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const linkedin = document.getElementById('profile.linkedin')
    linkedin.href = profileData.linkedin
    linkedin.innerText = profileData.name

}
function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softskills')

    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardskills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><img src="${skill.logo}" alt="" title="${skill.name}"></li>`).join('')

}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map((project) =>
        `<li><span class="title"><h3>${project.name}</h3></span>
            <a href="${project.url}" target="_blank">Link</a>
        </li>`
    ).join('')
}

function updateProfessionalExperience(profileData) {
    const pExperience = document.getElementById('profile.professionalexperience')
    pExperience.innerHTML = profileData.professionalExperience.map((job) =>
    `<li><span class="title"><h3>${job.name}</h3></span>
        <span class="period">${job.period}</span>
        <p>${job.description}</p>
    </li>`).join('')
}

(async function () {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)

})()

