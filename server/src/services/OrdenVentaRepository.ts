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