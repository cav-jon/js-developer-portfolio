async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/cav-jon/js-developer-portfolio/main/data/profile.json'

    const fetching = await fetch(url)

    return await fetching.json()
}