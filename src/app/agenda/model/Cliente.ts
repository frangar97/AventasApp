export interface Cliente {
    /*Id: number,
    EmpresaId:string, 
    CodigoCliente :string, 
    CodigoAsesor :string, 
    Nombre :string,  
    Latitud :number, 
    Longitud :number, 
    Habilitado: number*/
    Codigo: string
    Nombre: string
    checkin: boolean
    checkout: boolean
}