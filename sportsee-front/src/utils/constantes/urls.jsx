const userId = 12 //get from URL params

const urls = {
    mainData: `http://localhost:3000/user/${userId}`,
    activity: `http://localhost:3000/user/${userId}/activity`,
    averageSessions: `http://localhost:3000/user/${userId}/average-sessions`,
    performance: `http://localhost:3000/user/${userId}/performance`,
    todayScore: `http://localhost:3000/user/${userId}/today-score`,
    keyData: `http://localhost:3000/user/${userId}/key-data`
}

export default urls 

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