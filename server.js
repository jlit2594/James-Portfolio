const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server now active on ${PORT}`);
});