const fetch = require('node-fetch');
const path = require('path');
const cors = require('cors');
const express = require('express');
const api = express();
api.use(cors());
api.use(express.static(path.join(__dirname, "dist")));
api.engine('html', require('ejs').renderFile);

const corsOptions = {	
    allowedOrigin: "*",	
	allowedMethods: "GET,POST,PUT,OPTIONS,DELETE,PATCH",	
    //allowedHeaders: ["Accept", "Authorization", "Content-Type", "Origin", "X-Requested-With", "x-total-count"],	
    allowedHeaders: ["x-total-count"],	
    exposedHeaders: 'Authorization',	
};

api.use(cors(corsOptions));

const getJson = async () => {
    const jsonRequest = await fetch('https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json');
    const json =  await jsonRequest.json();
    const results = json.results.map((x, i) => 
    ({ 
        id: i+1,
        ...x,  
        location: {
            ...x.location,
            coordinates: {
                latitude: parseFloat(x.location.coordinates.latitude),
                longitude: parseFloat(x.location.coordinates.longitude)
            }
        } 
    }));
    return results;
}

const pagination = (array, initial, limit) => {
    let response = array.splice(initial ? parseInt((initial-1) * (limit ? parseInt(limit) : 0)) : 0, limit ? parseInt(limit) : array.length);
    return response;
};

api.get('/api/', async (req, res) => {
    const json = await getJson();
    const {firstName, lastName} = req.query;
    let response = json;
    if(firstName) {
        response = response.filter(x => x.name.first.includes(firstName));
    };
    if(lastName) {
        response = response.filter(x => x.name.last.includes(lastName));
    };

    return res.header('x-total-count', response.length).json(pagination(response, req.query.page, req.query.limit));
});

api.get('/api/range', async (req, res) => {
    const json = await getJson();
    const type = req.query.type;
    let response = json;
    let filters = {};
    let normal_filters = {
        minLon: -34.016466,
        minLat: -54.777426,
        maxLon: -26.155681,
        maxLat: -46.603598
    };
    let special1_filters = {
        minLon: -15.411580,
        minLat: -46.361899,
        maxLon: -2.196998,
        maxLat: -34.276938
    };
    let special2_filters = {
        minLon: -20.000000,
        minLat: -52.997614,
        maxLon: -19.766959,
        maxLat: -44.428305
    };
    if(type) {
        if(type === 'normal') {
            filters = normal_filters;
        };
        if(type === 'especial') {
            filters = special1_filters;
        };
        if(type === 'special2') {
            filters = special2_filters;
        };
        if(type === 'trabalhoso') {
            [normal_filters, special1_filters, special2_filters].map(filters => {
                response = response.filter(x => 
                    x.location.coordinates.latitude < filters.minLat ||
                    x.location.coordinates.latitude > filters.maxLat ||
                    x.location.coordinates.longitude < filters.minLon ||
                    x.location.coordinates.longitude > filters.maxLon
                );
            });
        } else {
            response = json.filter(x => 
                x.location.coordinates.latitude >= filters.minLat &&
                x.location.coordinates.latitude <= filters.maxLat &&
                x.location.coordinates.longitude >= filters.minLon &&
                x.location.coordinates.longitude <= filters.maxLon
            )
        }
    }

    return res.header('x-total-count', response.length).json(pagination(response, req.query.offset, req.query.limit));
});

api.get('/api/:id', async (req, res) => {
    const json = await getJson();
    let response = json;
    let status = 200;
    if(req.params.id && json.filter(x => x.id === parseInt(req.params.id)).length > 0) {
        response = json.filter(x => x.id === parseInt(req.params.id))[0];
    } else {
        status = 404;
        response = {message: 'User not found'};
    };
    return res.status(status).json(response);
});

api.get('*', (req, res) => {
    return res.render(path.join(__dirname, 'dist/index.html'))
});

api.listen(3000, () => console.log('Listening to 3000 port'));