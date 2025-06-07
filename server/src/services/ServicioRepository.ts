import dbConnection from './dbConnection';
import { Servicio } from '../@types/schemaInterfaces';

// Obtener todos los servicios
export const getAllServicios = async (): Promise<Servicio[]> => {
  return await dbConnection('Servicio').select('*');
};

// Obtener un servicio por ID
export const getServicioById = async (id: string): Promise<Servicio | undefined> => {
  return await dbConnection('Servicio').where({ id }).first();
};

// Agregar un nuevo servicio
export const addServicio = async (newServicio: object): Promise<Servicio[]> => {
  return await dbConnection('Servicio').insert(newServicio).returning('*');
};

// Modificar un servicio
export const updateServicio = async (id: string, updatedServicio: object): Promise<Servicio[]> => {
  return await dbConnection('Servicio').where({ id }).update(updatedServicio).returning('*');
};

// Eliminar un servicio
export const deleteServicio = async (id: string): Promise<number> => {
  return await dbConnection('Servicio').where({ id }).delete();
}; 