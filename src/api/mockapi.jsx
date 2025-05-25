//mockapi.jsx
import axios from "axios";

//const BASE_URL = "https://62ba9b04573ca8f8328762ca.mockapi.io";
const BASE_URL = "https://api.data.gov.sg/v1";

const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI;


// Weather Forecast API
// Provides 2-hour, 24-hour, and 4-day weather forecasts.
// Endpoint: https://api.data.gov.sg/v1/environment/2-hour-weather-forecast

// Air Quality (PM2.5 & PSI) API
// Real-time air quality readings (PSI, PM2.5 levels).
// Endpoint: https://api.data.gov.sg/v1/environment/psi

// Traffic Images API
// Live traffic camera images across Singapore.
// Endpoint: https://api.data.gov.sg/v1/transport/traffic-images

// Taxi Availability API
// Real-time locations of available taxis.
// Endpoint: https://api.data.gov.sg/v1/transport/taxi-availability

// Public Transport (Bus & Train) APIs
// Bus Arrival Times: https://api.data.gov.sg/v1/transport/bus-arrival
// Train Service Alerts: https://api.data.gov.sg/v1/transport/train-service-alerts

// Car Park Availability API
// Real-time availability of public car parks.
// Endpoint: https://api.data.gov.sg/v1/transport/carpark-availability