const express = require('express');
const router = express.Router();

const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');
const roomsController = require('../controllers/rooms');
const travelController = require('../controllers/travel');

// Meal routes
// Get a list of all meals
router
    .route('/meals')
    .get(mealsController.mealList);

// Get details of a specific meal by its code
router
    .route('/meals/:mealCode')
    .get(mealsController.mealsFindCode);

// News routes
// Get a list of all news articles
router
    .route('/news')
    .get(newsController.newsList);

// Get a specific news article by its code
router
    .route('/news/:newsCode')
    .get(newsController.newsFindCode);

// Room routes
// Get a list of all rooms
router
    .route('/rooms')
    .get(roomsController.roomList);

// Get details of a specific room by its code
router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindCode);

// Travel routes
// Get a list of all trips
router
    .route('/trips')
    .get(travelController.travel);

// Get details of a specific trip by its code
router
    .route('/trips/:tripCode')
    .get(travelController.travel);

module.exports = router;