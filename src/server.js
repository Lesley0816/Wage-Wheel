// Dependencies go here
const path = require('path'); 
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Sequelize things (This will take care of the session stuff)
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// call express and set port 
const app = express();
const PORT = process.env.PORT || 3001;

// sets up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Middleware things
const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  

app.use(session(sess));

// Will inform express on which hbs templets to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

// intializes routes
app.use(routes);

// starts the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
})