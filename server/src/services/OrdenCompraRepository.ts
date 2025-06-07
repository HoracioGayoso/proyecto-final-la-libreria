import dbConnection from './dbConnection';
import { OrdenCompra } from '../@types/schemaInterfaces';

export const getAllOrdenesCompra = async (): Promise<OrdenCompra[]> => {
  return await dbConnection('OrdenCompra').select('*');
};

export const getOrdenCompraById = async (id: string): Promise<OrdenCompra | undefined> => {
  return await dbConnection('OrdenCompra').where({ id }).first();
};

export const addOrdenCompra = async (newOrden: object): Promise<OrdenCompra[]> => {
  return await dbConnection('OrdenCompra').insert(newOrden).returning('*');
};

export const updateOrdenCompra = async (id: string, updatedOrden: object): Promise<OrdenCompra[]> => {
  return await dbConnection('OrdenCompra').where({ id }).update(updatedOrden).returning('*');
};

export const deleteOrdenCompra = async (id: string): Promise<number> => {
  return await dbConnection('OrdenCompra').where({ id }).delete();
}; 