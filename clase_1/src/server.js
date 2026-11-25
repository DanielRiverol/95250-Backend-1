import { config } from "./config/env.config.js";

// console.log(config);
import ServiceManager from "./managers/ServiceManager.js";
import services from "./data/services.js";


const serviceManager = new ServiceManager(services)

console.log(serviceManager.getServices());
console.log(serviceManager.getServiceById(1));


console.log(`Servidor corriendo en el puerto ${config.port}`);
