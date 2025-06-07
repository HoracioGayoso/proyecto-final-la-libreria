import dbConnection from './dbConnection';
import { RenglonOrdenCompra } from '../@types/schemaInterfaces';

export const getAllRenglonesOrdenCompra = async (): Promise<RenglonOrdenCompra[]> => {
  return await dbConnection('RenglonOrdenCompra').select('*');
};

export const getRenglonOrdenCompraById = async (id: string): Promise<RenglonOrdenCompra | undefined> => {
  return await dbConnection('RenglonOrdenCompra').where({ id }).first();
};

export const addRenglonOrdenCompra = async (newRenglon: object): Promise<RenglonOrdenCompra[]> => {
  return await dbConnection('RenglonOrdenCompra').insert(newRenglon).returning('*');
};

export const updateRenglonOrdenCompra = async (id: string, updatedRenglon: object): Promise<RenglonOrdenCompra[]> => {
  return await dbConnection('RenglonOrdenCompra').where({ id }).update(updatedRenglon).returning('*');
};

export const deleteRenglonOrdenCompra = async (id: string): Promise<number> => {
  return await dbConnection('RenglonOrdenCompra').where({ id }).delete();
}; 