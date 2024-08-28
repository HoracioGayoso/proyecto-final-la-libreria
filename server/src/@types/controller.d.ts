export type ProductoFiltro = {
    nombre?: string;
    precio_min?: number;  // Rango de precio mínimo
    precio_max?: number;  // Rango de precio máximo
    categoria_id?: string;
    proveedor_id?: string;
    min_stock?: number;
  };
  