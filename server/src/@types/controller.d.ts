export type ProductoFiltro = {
    nombre?: string;
    precio_unidad_min?: number;  // Rango de precio mínimo
    precio_unidad_max?: number;  // Rango de precio máximo
    precio_contenedor_min?: number;  // Rango de precio contenedor mínimo
    precio_contenedor_max?: number;  // Rango de precio contenedor máximo
    familia?: string;
    categoria_id?: string;
    proveedor_id?: string;
  };
  