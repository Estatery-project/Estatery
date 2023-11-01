const jsonServer = require('json-server');
const serverEstates = jsonServer.create(); // JSON Server for estates
const routerEstates = jsonServer.router('estates/db.json');
const middlewares = jsonServer.defaults();

const serverLocations = jsonServer.create(); // JSON Server for locations
const routerLocations = jsonServer.router('locations/db.json');

// Set default middlewares (logger, static, cors and no-cache) for both servers
serverEstates.use(middlewares);
serverLocations.use(middlewares);

// Add custom routes before JSON Server routers for both servers
serverEstates.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

serverLocations.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT, and PATCH, you need to use a body-parser
// You can use the one used by JSON Server for both servers
serverEstates.use(jsonServer.bodyParser);
serverLocations.use(jsonServer.bodyParser);

serverEstates.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

serverLocations.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default routers for both servers
serverEstates.use(routerEstates);
serverLocations.use(routerLocations);

// Listen on separate ports for both servers
const portEstates = 8000;
const portLocations = 8001;

serverEstates.listen(portEstates, () => {
  console.log(`Estates JSON Server is running on port ${portEstates}`);
});

serverLocations.listen(portLocations, () => {
  console.log(`Locations JSON Server is running on port ${portLocations}`);
});
