require('dotenv').config()

const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');
const { GraphQLClient } = require('graphql-request')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();

});

const port = process.env.SERVER_PORT || 8080;        // set our port
const router = express.Router();

router.get('/maintenance', function (req, res) {

    const client = new GraphQLClient('https://api.yelp.com/v3/graphql', {
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_CLIENT_KEY}`,
        },
    })

    client.request(`

        {
            search(term: "car repair",
                    location: "san francisco",
                    limit: 5) {

                total
                business {
                    name
                    rating
                    review_count
                    location {
                        address1
                        city
                        state
                        country
                    }

                }

            }

        }

    `).then(data => res.json(data))


});

app.use('/api', router);
app.listen(port);

console.log(`Server Started on port http://localhost:${port}/api`)