const seedCategories = require('./category-seeds');
const seedEvents = require('./event-seeds')
const seedUserBets = require('./userbets-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
//   await seedUsers();
//   console.log('\n----- USERS SEEDED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS SEEDED -----\n');

  await seedUserBets();
  console.log('\n----- USER BETS SEEDED -----\n');

  process.exit(0);
};

seedAll();