const express = require('express')
const idx = require('idx')

const router = express.Router()

const {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserTodayScore,
    getUserKeyData,
    getUserActivities,
} = require('./models')

const {
    handleNoUserData
} = require('./middleware')


router.get('/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/activities', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivities(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/today-score', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserTodayScore(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/key-data', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserKeyData(Number(userId))

    return handleNoUserData(res, userData)
})


module.exports = router
