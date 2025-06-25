import dbConnection from './dbConnection';
import { OrdenVenta } from '../@types/schemaInterfaces';

export const getAllOrdenesVenta = async (): Promise<OrdenVenta[]> => {
  return await dbConnection('OrdenVenta').select('*');
};

export const getOrdenVentaById = async (id: string): Promise<OrdenVenta | undefined> => {
  return await dbConnection('OrdenVenta').where({ id }).first();
};

export const addOrdenVenta = async (newOrden: object): Promise<OrdenVenta[]> => {
  return await dbConnection('OrdenVenta').insert(newOrden).returning('*');
};

export const updateOrdenVenta = async (id: string, updatedOrden: object): Promise<OrdenVenta[]> => {
  return await dbConnection('OrdenVenta').where({ id }).update(updatedOrden).returning('*');
};

export const deleteOrdenVenta = async (id: string): Promise<number> => {
  return await dbConnection('OrdenVenta').where({ id }).delete();
};

export const createVentaWithRenglones = async (ordenVenta: any, renglones: any[]) => {
  return await dbConnection.transaction(async trx => {
    // 1. Insert the sale
    const [insertedOrden] = await trx('OrdenVenta').insert(ordenVenta).returning('*');

    // 2. For each renglon
    for (const renglon of renglones) {
      renglon.orden_venta_id = insertedOrden.id;
      await trx('RenglonOrdenVenta').insert(renglon);

      // 3. Subtract stock
      await trx('Producto')
        .where({ id: renglon.producto_id })
        .decrement('stock', renglon.cantidad);
    }

    return insertedOrden;
  });
};

export const getVentasDiarias = async (since: string, until: string) => {
  
  const ventas = await dbConnection('OrdenVenta')
    .select(
      dbConnection.raw("to_char(fecha_orden AT TIME ZONE 'America/Argentina/Buenos_Aires', 'YYYY-MM-DD') as fecha")
    )
    .sum({ total: 'montoTotal' })
    .whereRaw('fecha_orden >= ?', [since])
    .andWhereRaw('fecha_orden <= ?', [until])
    .andWhere('estado', 'COMPLETADO')
    .groupByRaw("to_char(fecha_orden AT TIME ZONE 'America/Argentina/Buenos_Aires', 'YYYY-MM-DD')")
    .orderBy('fecha');

  return ventas;
}; 