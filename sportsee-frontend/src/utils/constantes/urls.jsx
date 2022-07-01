const urls = function (userId) {
    const domain = 'http://localhost:3000'

    const endpoints = {
        mainData: '',
        activity: '/activity',
        averageSessions: '/average-sessions',
        performance: '/performance',
        todayScore: '/today-score',
        keyData: '/key-data'
    }
    
    Object.keys(endpoints).forEach(key => {
    endpoints[key] = `${domain}/user/${userId}` + endpoints[key]
    })

    return endpoints
}

export default urls




/*
const urls = function (userId) {
    const domain = 'http://localhost:3000'
    return {
        mainData: `${domain}/user/${userId}`,
        activity: `${domain}/user/${userId}/activity`,
        averageSessions: `${domain}/user/${userId}/average-sessions`,
        performance: `${domain}/user/${userId}/performance`,
        todayScore: `${domain}/user/${userId}/today-score`,
        keyData: `${domain}/user/${userId}/key-data`
    }
}

export default urls
*/

/*
const urls = [
    `http://localhost:3000/user/${userId}`,
    `http://localhost:3000/user/${userId}/activity`,
    `http://localhost:3000/user/${userId}/average-sessions`,
    `http://localhost:3000/user/${userId}/performance`,
    `http://localhost:3000/user/${userId}/today-score`,
    `http://localhost:3000/user/${userId}/key-data`
]
*/