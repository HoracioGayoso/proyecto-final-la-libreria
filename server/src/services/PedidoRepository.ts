import dbConnection from './dbConnection';
import { Pedido } from '../@types/schemaInterfaces';

export const getAllPedidos = async (): Promise<Pedido[]> => {
  return await dbConnection('Pedido').select('*');
};

export const getPedidoById = async (id: string): Promise<Pedido | undefined> => {
  return await dbConnection('Pedido').where({ id }).first();
};

export const addPedido = async (newPedido: object): Promise<Pedido[]> => {
  return await dbConnection('Pedido').insert(newPedido).returning('*');
};

export const updatePedido = async (id: string, updatedPedido: object): Promise<Pedido[]> => {
  return await dbConnection('Pedido').where({ id }).update(updatedPedido).returning('*');
};

export const deletePedido = async (id: string): Promise<number> => {
  return await dbConnection('Pedido').where({ id }).delete();
}; 