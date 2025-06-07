import dbConnection from './dbConnection';
import { RenglonDetallePedido } from '../@types/schemaInterfaces';

export const getAllRenglonesDetallePedido = async (): Promise<RenglonDetallePedido[]> => {
  return await dbConnection('RenglonDetallePedido').select('*');
};

export const getRenglonDetallePedidoById = async (id: string): Promise<RenglonDetallePedido | undefined> => {
  return await dbConnection('RenglonDetallePedido').where({ id }).first();
};

export const addRenglonDetallePedido = async (newRenglon: object): Promise<RenglonDetallePedido[]> => {
  return await dbConnection('RenglonDetallePedido').insert(newRenglon).returning('*');
};

export const updateRenglonDetallePedido = async (id: string, updatedRenglon: object): Promise<RenglonDetallePedido[]> => {
  return await dbConnection('RenglonDetallePedido').where({ id }).update(updatedRenglon).returning('*');
};

export const deleteRenglonDetallePedido = async (id: string): Promise<number> => {
  return await dbConnection('RenglonDetallePedido').where({ id }).delete();
}; 