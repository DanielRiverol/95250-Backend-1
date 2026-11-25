export default class ServiceManager{
    constructor(services){
        this.services= services;
    }

    getServices(){
        return this.services
    }
    getServiceById(id){
        return `Usuario con id ${id}`
    }
    addService(serviceData){
        return serviceData

    }
    updateService(id, updatedData){
        return 'Servicio actualizadp'
    }
    deleteService(id){
        return 'Servicio eliminado'
    }
}