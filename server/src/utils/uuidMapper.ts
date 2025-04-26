import { v5 as uuidv5 } from 'uuid';
 
// Namespace custom para el UUID
const NAMESPACE_UUID = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'; 

//Funcion para crear un UUID subrogado a un identificador
export function stringToUUID(identificador: string): string {
  return uuidv5(identificador, NAMESPACE_UUID);
}
