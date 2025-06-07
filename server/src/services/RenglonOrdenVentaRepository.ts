import dbConnection from './dbConnection';
import { RenglonOrdenVenta } from '../@types/schemaInterfaces';

export const getAllRenglonesOrdenVenta = async (): Promise<RenglonOrdenVenta[]> => {
  return await dbConnection('RenglonOrdenVenta').select('*');
};

export const getRenglonOrdenVentaById = async (id: string): Promise<RenglonOrdenVenta | undefined> => {
  return await dbConnection('RenglonOrdenVenta').where({ id }).first();
};

export const addRenglonOrdenVenta = async (newRenglon: object): Promise<RenglonOrdenVenta[]> => {
  return await dbConnection('RenglonOrdenVenta').insert(newRenglon).returning('*');
};

export const updateRenglonOrdenVenta = async (id: string, updatedRenglon: object): Promise<RenglonOrdenVenta[]> => {
  return await dbConnection('RenglonOrdenVenta').where({ id }).update(updatedRenglon).returning('*');
};

export const deleteRenglonOrdenVenta = async (id: string): Promise<number> => {
  return await dbConnection('RenglonOrdenVenta').where({ id }).delete();
}; 