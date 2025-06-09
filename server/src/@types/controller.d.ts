export type ProductoFiltro = {
    nombre?: string;
    precio_unidad_min?: number; 
    precio_unidad_max?: number;  
    familia?: string;
    categoria_id?: string;
    proveedor_id?: string;
    alerta?: string;
};

export type VentaFiltro = {
    id?: string;
    nombre?: string;  
    documento?: string;  
    email?: string;  
    fecha?: string; 
    celular?: string;
};