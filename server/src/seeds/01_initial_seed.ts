import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('RenglonOrdenVenta').del();
  await knex('OrdenVenta').del();
  await knex('RenglonOrdenCompra').del();
  await knex('OrdenCompra').del();
  await knex('RenglonDetallePedido').del();
  await knex('Pedido').del();
  await knex('Servicio').del();
  await knex('AlertaStock').del();
  await knex('Producto').del();
  await knex('Categoria').del();
  await knex('Proveedor').del();

  
  // Usuarios
  const usuarioIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Usuario').insert([
    { id: usuarioIds[0], nombre: 'Juan Perez', email: 'juan@example.com' },
    { id: usuarioIds[1], nombre: 'Maria Gomez', email: 'maria@example.com' },
    { id: usuarioIds[2], nombre: 'Carlos Ruiz', email: 'carlos@example.com' }
  ]);
  
  // Proveedores
  const proveedorIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Proveedor').insert([
    { id: proveedorIds[0], nombre: 'Proveedor Uno', email: 'proveedor1@example.com', telefono: '123456789', sitio_web: 'https://proveedor1.com' },
    { id: proveedorIds[1], nombre: 'Proveedor Dos', email: 'proveedor2@example.com', telefono: '987654321', sitio_web: 'https://proveedor2.com' },
    { id: proveedorIds[2], nombre: 'Proveedor Tres', email: 'proveedor3@example.com', telefono: '555555555', sitio_web: 'https://proveedor3.com' },
  ]);

  // Categorias
  const categoriaIds = [uuidv4(), uuidv4(), uuidv4(),uuidv4(),uuidv4(),uuidv4(),uuidv4()];
  await knex('Categoria').insert([
    { id: categoriaIds[0], nombre: 'Adhesivos', descripcion: 'Cintas,pegamentos,etc' },
    { id: categoriaIds[1], nombre: 'Papeleria', descripcion: 'Hojas, blocks, etc' },
    { id: categoriaIds[2], nombre: 'Utiles escolares', descripcion: 'Articulos para alumnos en edad escolar' },
    { id: categoriaIds[3], nombre: 'Electronicos', descripcion: 'Calculadoras, pendrives,etc' },
    { id: categoriaIds[4], nombre: 'Mochilas y cartucheras', descripcion: 'Mochilas y cartucheras escolares' },
    { id: categoriaIds[5], nombre: 'Instrumentos de oficina', descripcion: 'Instrumentos de oficina (clips,chinchetas,organizadores,etc)' },
    { id: categoriaIds[6], nombre: 'Insumos impresión', descripcion: 'Cartuchos de impresora, toner, tintas' },
  ]);

  // Productos
  const productos = [
    { codigo_barra: '4015000090056', nombre: 'ADH EN BARRA VOLIBARRA 10gr. (30/360)', descripcion: 'Adhesivo en barra', precio_unidad: 243.41086, porcentaje_ganancia: 55, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1MXSL_m1p51wmABcwl3TXi8ZZN1qckpoi", activo: true, stock: 9, min_stock: 5 },
    { codigo_barra: '7790400018608', nombre: 'ADH P.UNIPOX 100ml. UNIVERSAL (12/48)', descripcion: 'Adhesivo permanente', precio_unidad: 1029.18438, porcentaje_ganancia: 45, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1FwXZrY_7u7N_N2SRzUiVzqnFYSZ5uKk8", activo: true, stock: 3, min_stock: 5 },
    { codigo_barra: '4026700408157', nombre: 'ADH UHU COLA UNIVERSAL 125ml. (5/100)', descripcion: 'Adhesivo permanente', precio_unidad: 1710.92294, porcentaje_ganancia: 55, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=164NVSv5GOhV49BbruTo9hznOaOib9MvZ", activo: true, stock: 0, min_stock: 5 },
    { codigo_barra: '6926341895409', nombre: 'AROS METAL N. 40 x100u .(5/20)', descripcion: 'Papeleria', precio_unidad: 4356.49114, porcentaje_ganancia: 80, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1-q48s6KLXxtRMemXSxxf982fX19UHjqp", activo: true, stock: 15, min_stock: 3 },
    { codigo_barra: '7792560463432', nombre: 'BLOCK OF. HUSARES ### x80h. 6331 (5/40)', descripcion: 'Papeleria', precio_unidad: 922.7408, porcentaje_ganancia: 55, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1YpJfL-rpwuO-ZAHkellF5J-h4SzLxAAK", activo: true, stock: 31, min_stock: 10 },
    { codigo_barra: '7796569233227', nombre: 'BLOCK OF.TRIUNF. ### 80h (5/50)', descripcion: 'Papeleria', precio_unidad: 871.64697, porcentaje_ganancia: 55, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=12AXluT8nVSW7eVQjr1AxifMro8JblM12", activo: true, stock: 39, min_stock: 10 },
    { codigo_barra: '70330172975', nombre: 'BOLIG BIC CRISTAL 0.7 x25u. (6) Color ROJO', descripcion: 'Utiles de escritura', precio_unidad: 4056.75538, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1TyF3EzCiwqQ4JZoL1Ol0fNDQjrT6sfwY", activo: true, stock: 33, min_stock: 20 },
    { codigo_barra: '70330172982', nombre: 'BOLIG BIC CRISTAL 0.7 x25u. (6) Color NEGRO', descripcion: 'Utiles de escritura', precio_unidad: 4056.75538, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1YwFlzI8EltAE8BmpvBG-4IIsc01pv3hh", activo: true, stock: 25, min_stock: 20 },
    { codigo_barra: '70330200234', nombre: 'BOLIG BIC CRISTAL 0.7 x25u. (6) Color AZUL', descripcion: 'Utiles de escritura', precio_unidad: 4056.75538, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1yXJTnISwhnhMW7-7tAv4TYKMHyqCXMaP", activo: true, stock: 34, min_stock: 20 },
    { codigo_barra: '70330200241', nombre: 'BOLIG BIC CRISTAL 0.7 x25u. (6) Color VERDE', descripcion: 'Utiles de escritura', precio_unidad: 4056.75538, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1vNfsuVA8jtxdye7QcArnbh4QoNgTOsvn", activo: false, stock: 55, min_stock: 20 },
    { codigo_barra: '70330139503', nombre: 'BOLIG BIC BLIST. OPACO 1.0 x3u. A/N (50) ROJO', descripcion: 'Utiles de escritura', precio_unidad: 486.81071, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1B1MIbli4MJiQapyzcGZQG-ud2my4jRlP", activo: true, stock: 87, min_stock: 20 },
    { codigo_barra: '7033017658', nombre: 'BOLIG BIC BLIST. OPACO 1.0 x3u. A/N (50) NEGRO', descripcion: 'Utiles de escritura', precio_unidad: 486.81071, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1_lXGngLBw-m3WdWnm5aDuv1Ce5v04yGk", activo: false, stock: 95, min_stock: 20 },
    { codigo_barra: '70330176584', nombre: 'BOLIG BIC BLIST. OPACO 1.0 x3u. A/N (50) AZUL', descripcion: 'Utiles de escritura', precio_unidad: 486.81071, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1JLb9CytjvwDVV3LKzyWmvbLStH8ht6Gs", activo: true, stock: 15, min_stock: 20 },
    { codigo_barra: '70330176607', nombre: 'BOLIG BIC BLIST. OPACO 1.0 x3u. A/N (50) VERDE', descripcion: 'Utiles de escritura', precio_unidad: 486.81071, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1kZHoYPlWXM8_KbwzPHMPDIHOKcei_k9N", activo: true, stock: 47, min_stock: 20 },
    { codigo_barra: '4005400926215', nombre: 'BOLIG FABER TRILUX COLORS x12u. (48) Col...', descripcion: 'Utiles de escritura', precio_unidad: 898.13012, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1gPdkvBTLq27P2QM5Mba0qpWf0bsomCNU", activo: false, stock: 85, min_stock: 20 },
    { codigo_barra: '4549526608933', nombre: 'CALCULADORA CIENT. CASIO FX-82LA PLUS 2', descripcion: 'Electronicos', precio_unidad: 8799.90263, porcentaje_ganancia: 55, categoria_id: categoriaIds[3], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1kv7IeUDzxdiL6lCNIz_S-Jxxe8hOp1nW", activo: true, stock: 3, min_stock: 2 },
    { codigo_barra: '4549526607219', nombre: 'CALCULADORA CIENT. CASIO FX-82MS 2', descripcion: 'Electronicos', precio_unidad: 7583.1184, porcentaje_ganancia: 55, categoria_id: categoriaIds[3], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1Rs-BFft_qi0sPj0hsUqDhMNMginJX_6B", activo: true, stock: 0, min_stock: 2 },
    { codigo_barra: '7795513177822', nombre: 'CAN FILGO LISBOA LISA', descripcion: 'Cartucheras', precio_unidad: 886.53179, porcentaje_ganancia: 70, categoria_id: categoriaIds[4], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1f9vPyrbFFfLi3YS60hwI-LoDFyJNMoqC", activo: false, stock: 50, min_stock: 3 },
    { codigo_barra: '7792621083649', nombre: 'CAN FOOTY 2 CIE. BASQUET C/LUZ 17032', descripcion: 'Cartucheras', precio_unidad: 6782.776, porcentaje_ganancia: 70, categoria_id: categoriaIds[4], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1KXVnzPikZhmiOM7UMiFvyDAtd181tEcr", activo: false, stock: 43, min_stock: 3 },
    { codigo_barra: '7792621128760', nombre: 'CAN FOOTY DESPL. 1 CIE. UNICORNIO 19024/54', descripcion: 'Cartucheras', precio_unidad: 7198.048, porcentaje_ganancia: 70, categoria_id: categoriaIds[4], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1_QdiCfrKrVTLJpV3jfl1rbPdOobWJrTX", activo: true, stock: 77, min_stock: 3 },
    { codigo_barra: '7798160260633', nombre: 'CAN GOTCCI BRILLO C/VISOR 63 (55)', descripcion: 'Cartucheras', precio_unidad: 1935.91312, porcentaje_ganancia: 55, categoria_id: categoriaIds[4], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1ee4itkdAOlZEWB1GU7LX7kXgTNhjpuKi", activo: true, stock: 1, min_stock: 3 },
    { codigo_barra: '7798160260749', nombre: 'CAN GOTCCI LONA TRIANGULAR 74 (88)', descripcion: 'Cartucheras', precio_unidad: 1130.0945, porcentaje_ganancia: 55, categoria_id: categoriaIds[4], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1k5xuvmX8OcGV1ghNbuNAxDO3ETV-yXDO", activo: false, stock: 91, min_stock: 3 },
    { codigo_barra: '7798004930036', nombre: 'CARBONICO CARBOTYPE AZUL x 50', descripcion: 'Instrumentos de oficina', precio_unidad: 10523.0433, porcentaje_ganancia: 70, categoria_id: categoriaIds[5], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1bU-E5JuwxfxGRRucZGAeC2OnqMo17Cg0", activo: true, stock: 51, min_stock: 2 },
    { codigo_barra: '7798004930029', nombre: 'CARBONICO CARBOTYPE NEGRO x 50', descripcion: 'Instrumentos de oficina', precio_unidad: 10064.18952, porcentaje_ganancia: 70, categoria_id: categoriaIds[5], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1RhahwLxTfOEZCS2hJhH6kFBTUcFZElFh", activo: true, stock: 37, min_stock: 2 },
    { codigo_barra: '6932653908881', nombre: 'CARP* A4 2A PVC COLOR (2x40) (30)', descripcion: 'Papeleria', precio_unidad: 1256.8633, porcentaje_ganancia: 55, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1g0ZlBGVTKuWGM8pfZ_y5Mu2m9OKQlEGS", activo: false, stock: 5, min_stock: 4 },
    { codigo_barra: '7794765003521', nombre: 'CARP* A4 2A PVC COLOR (2x20/25) (50)', descripcion: 'Papeleria', precio_unidad: 1109.9572, porcentaje_ganancia: 55, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1_zeW5CmKoOcWMfc4O367SlZr4Fh3E8jb", activo: true, stock: 67, min_stock: 4 },
    { codigo_barra: '7796191523406', nombre: 'CARP* CARTULINA A4 2 SOLAP. x25', descripcion: 'Papeleria', precio_unidad: 3046.19763, porcentaje_ganancia: 110, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[2], imagen: "https://drive.google.com/thumbnail?id=1OMHNxcWi6wWXlBVU4Ro7ifObd257c0vT", activo: false, stock: 79, min_stock: 5 },
    { codigo_barra: '21001400728', nombre: 'CARP* POLIP. A4 10 FOLIOS', descripcion: 'Papeleria', precio_unidad: 528.41317, porcentaje_ganancia: 55, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1OeezPT0bFx5lNmXzeaLM8XL2wr-ypRIQ", activo: true, stock: 83, min_stock: 2 },
    { codigo_barra: '7796893021965', nombre: 'CARTULINA COLOR x20u.', descripcion: 'Papeleria', precio_unidad: 1563.47004, porcentaje_ganancia: 75, categoria_id: categoriaIds[1], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1f4nozR6HRuXhnK2gxzKiYVtj6OWeBx9T", activo: false, stock: 93, min_stock: 3 },
    { codigo_barra: '7792533000956', nombre: 'CHINCHES SEÑALADOR GALERA BOL. x50', descripcion: 'Instrumentos de oficina', precio_unidad: 379.10341, porcentaje_ganancia: 55, categoria_id: categoriaIds[5], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=19MfSPTSv6Oh4BnKoolOhpgA71WMlbKWa", activo: false, stock: 75, min_stock: 5 },
    { codigo_barra: '7798047120685', nombre: 'CINTA/ADH. AUCA DUCT TAPE 48x9m.', descripcion: 'Cinta reforzada', precio_unidad: 1129.72303, porcentaje_ganancia: 70, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=18L9MRwCQ4cJECehb5QvIelAAEmPjZcGX", activo: false, stock: 45, min_stock: 3 },
    { codigo_barra: '7794765000742', nombre: 'CINTA/ADH. CORTEFACIL x25m. TUBO x12u. (60)', descripcion: 'Cinta adhesiva comun', precio_unidad: 910.86925, porcentaje_ganancia: 100, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1GaiVJo6Tpkv85vxIBLmXPg2hN0Q0yeGU", activo: true, stock: 59, min_stock: 3 },
    { codigo_barra: '6945410412156', nombre: 'CINTA/ADH. ESPUMA STIKO 12x5m.', descripcion: 'Cinta adhesiva comun', precio_unidad: 248.42498, porcentaje_ganancia: 70, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=158z30VUO_VT7KcQVjSQHyfUrQsj098q_", activo: true, stock: 17, min_stock: 3 },
    { codigo_barra: '635468112301', nombre: 'CINTA/ADH. MOTEX 12mmx30m. (24/288)', descripcion: 'Cinta adhesiva comun', precio_unidad: 114.52081, porcentaje_ganancia: 55, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1x8uiqkYPd408D3bki0Shq_GWjiL6kVOB", activo: false, stock: 89, min_stock: 3 },
    { codigo_barra: '7798047120128', nombre: 'CINTA/ADH. PAPEL AUCA 24x50m. (36)', descripcion: 'Cinta adhesiva comun', precio_unidad: 599.3003, porcentaje_ganancia: 70, categoria_id: categoriaIds[0], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=11bjrsPlWdXxlrYoPjFXLB7XmhCKLFMhM", activo: true, stock: 35, min_stock: 3 },
    { codigo_barra: '6923794420783', nombre: 'CLASIFICADOR POLIPROP. A4 IRAM (12)', descripcion: 'Instrumentos de oficina', precio_unidad: 1624.2072, porcentaje_ganancia: 55, categoria_id: categoriaIds[5], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=173p-5C2T0HWRzDa9D3LVhh--U257yybX", activo: true, stock: 49, min_stock: 5 },
    { codigo_barra: '4716982060333', nombre: 'CLASIFICADOR POLIPROP. OFICIO (12)', descripcion: 'Instrumentos de oficina', precio_unidad: 1706.1, porcentaje_ganancia: 55, categoria_id: categoriaIds[5], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1lSQPZFJ_XfKtYTT0Zss3X-tKSO52C2ES", activo: false, stock: 19, min_stock: 6 },
    { codigo_barra: '7796728000271', nombre: 'COM CARTUCHO P/EPSON T133 MAGENTA', descripcion: 'Cartucho de impresora', precio_unidad: 881.90028, porcentaje_ganancia: 80, categoria_id: categoriaIds[6], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1ujjxIrAt0BUA8S7iiPkeMdJUqnbyrMPK", activo: true, stock: 63, min_stock: 2 },
    { codigo_barra: '6920620009082', nombre: 'COM CARTUCHO P/EPSON T133 NEGRO', descripcion: 'Cartucho de impresora', precio_unidad: 881.90028, porcentaje_ganancia: 80, categoria_id: categoriaIds[6], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1inOZOJhUoPXrs1cXRGOJhPYh8r_jAFOM", activo: true, stock: 65, min_stock: 2 },
    { codigo_barra: '6940843171793', nombre: 'COM CARTUCHO P/EPSON T133 CYAN', descripcion: 'Cartucho de impresora', precio_unidad: 881.90028, porcentaje_ganancia: 80, categoria_id: categoriaIds[6], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=10-g4ccFiU3X-lTSQd6hOFzMncTzOFRoB", activo: true, stock: 13, min_stock: 2 },
    { codigo_barra: '6926474634746', nombre: 'COM CARTUCHO P/EPSON T133 AMARILLO', descripcion: 'Cartucho de impresora', precio_unidad: 1067.56348, porcentaje_ganancia: 80, categoria_id: categoriaIds[6], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1VHygLH-yfpzD3kyWsEdG44vdPagQULLd", activo: false, stock: 53, min_stock: 2 },
    { codigo_barra: '4710268258827', nombre: 'COM MOUSE GENIUS INALAMB. 8015', descripcion: 'Mouse Inalambrico', precio_unidad: 4346.58513, porcentaje_ganancia: 70, categoria_id: categoriaIds[3], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1tCiVUal1UubGI4XSrMh4mw-oGkNXvsa3", activo: true, stock: 41, min_stock: 3 },
    { codigo_barra: '8072018053011', nombre: 'COM PAD P/MOUSE GTC PAD-100', descripcion: 'Mousepad', precio_unidad: 380.2494, porcentaje_ganancia: 80, categoria_id: categoriaIds[3], proveedor_id: proveedorIds[1], imagen:"https://drive.google.com/thumbnail?id=1HPmqTvaFRyQse5SMthI6-8lGUUqdiDTK" , activo: false, stock: 73, min_stock: 3 },
    { codigo_barra: '8072021062901', nombre: 'COM PARLANTE GTC SPG-133', descripcion: 'Parlante Genius', precio_unidad: 4958.65841, porcentaje_ganancia: 70, categoria_id: categoriaIds[3], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1ZiIg84i6TBeF87lYCGgZNQugbnH63jre", activo: true, stock: 81, min_stock: 5 },
    { codigo_barra: '740617309720', nombre: 'COM PENDRIVE PLAST.  32GB SANDISK', descripcion: 'Pendrive 32gb', precio_unidad: 3267.40838, porcentaje_ganancia: 55, categoria_id: categoriaIds[3], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1GozMgQfKgX4gJrhEDWB2iOPKQHfmX5Sg", activo: false, stock: 61, min_stock: 10 },
    { codigo_barra: '91163251323', nombre: 'COM TECLADO GENIUS SLIMSTAR 230', descripcion: 'Teclado Genius', precio_unidad: 2907.3813, porcentaje_ganancia: 55, categoria_id: categoriaIds[3], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1P9UtlsEIY3d2VJocWkMY_zvnLEfaGAl7", activo: true, stock: 69, min_stock: 3 },
    { codigo_barra: '7793198133010', nombre: 'COMPAS PIZZINI ESC.133 C/Estuche (20/240)', descripcion: 'Compás de dibujo técnico', precio_unidad: 669.67232, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[1], imagen: "https://drive.google.com/thumbnail?id=1nHufmmy1e0S91gfIlysgEIF6HSvE67Kc", activo: false, stock: 27, min_stock: 10 },
    { codigo_barra: '5993102218945', nombre: 'FSIA. REGLA COLOURS FLEXIBLE 15cm. 21894', descripcion: 'Regla flexible', precio_unidad: 256.0844, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1eAs2M8YHot5hI7f7R1q6TGhMscPmUS2b", activo: false, stock: 23, min_stock: 15 },
    { codigo_barra: '4007817106525', nombre: 'GOMA STAEDTLER LAPIZ C/ESC. (12)', descripcion: 'Goma de borrar', precio_unidad: 843.39747, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1Po4vd748l00cLpD0p5pdN4kLkD6pNcGU", activo: true, stock: 30, min_stock: 40 },
    { codigo_barra: '70330408982', nombre: 'LAPIZ GRAFITO BIC CONTE EVOLUTION x4u.', descripcion: 'Lapiz de dibujo ', precio_unidad: 362.58558, porcentaje_ganancia: 70, categoria_id: categoriaIds[2], proveedor_id: proveedorIds[0], imagen: "https://drive.google.com/thumbnail?id=1fy9tDr3g44NjkTRaWtbN4sES6mO-23Hw", activo: false, stock: 30, min_stock: 40 },
  ];
  const productoIds = Array.from({ length: productos.length }, () => uuidv4());
  const productosConIds = productos.map((p, i) => ({
    ...p,
    id: productoIds[i]
  }));

  await knex('Producto').del();
  await knex('Producto').insert(productosConIds);



  const alertaStock = productosConIds.map(p => ({
    id: uuidv4(),
    producto_id: p.id,
    stock: p.stock,
    fecha_creacion: new Date(),
    fecha_actualizacion: new Date()
  }));
  await knex('AlertaStock').insert(alertaStock);

  
  const servicioIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Servicio').insert([
    { id: servicioIds[0], cliente_id: usuarioIds[0], nombre: 'Envío rápido', descripcion: 'Entrega en 24h', precio: 15 },
    { id: servicioIds[1], cliente_id: usuarioIds[1], nombre: 'Instalación', descripcion: 'Instalación a domicilio', precio: 50 },
    { id: servicioIds[2], cliente_id: usuarioIds[2], nombre: 'Garantía extendida', descripcion: 'Cobertura adicional', precio: 30 },
  ]);


  const pedidoIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('Pedido').insert([
    { id: pedidoIds[0], cliente_id: usuarioIds[0], fecha_pedido: new Date(), estado: 'PENDIENTE', montoTotal: 200 },
    { id: pedidoIds[1], cliente_id: usuarioIds[1], fecha_pedido: new Date(), estado: 'ENVIADO', montoTotal: 300 },
    { id: pedidoIds[2], cliente_id: usuarioIds[2], fecha_pedido: new Date(), estado: 'CANCELADO', montoTotal: 150 },
  ]);


  const renglonDetallePedidoIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('RenglonDetallePedido').insert([
    { id: renglonDetallePedidoIds[0], pedido_id: pedidoIds[0], producto_id: productoIds[0], cantidad: 2, precio_renglon: 200, precio_unitario: 100 },
    { id: renglonDetallePedidoIds[1], pedido_id: pedidoIds[1], producto_id: productoIds[1], cantidad: 1, precio_renglon: 1500, precio_unitario: 1500 },
    { id: renglonDetallePedidoIds[2], pedido_id: pedidoIds[2], producto_id: productoIds[2], cantidad: 3, precio_renglon: 600, precio_unitario: 200 },
  ]);


  const ordenCompraIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('OrdenCompra').insert([
    { id: ordenCompraIds[0], fecha_orden: new Date(), montoTotal: 500, tipo_gasto: 'COMPRA', motivo: 'Reposición', descripcion: 'Compra de libros' },
    { id: ordenCompraIds[1], fecha_orden: new Date(), montoTotal: 1000, tipo_gasto: 'GASTO', motivo: 'Equipamiento', descripcion: 'Compra de laptops' },
    { id: ordenCompraIds[2], fecha_orden: new Date(), montoTotal: 400, tipo_gasto: 'INVERSION', motivo: 'Mobiliario', descripcion: 'Compra de sillas' },
  ]);


  const renglonOrdenCompraIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('RenglonOrdenCompra').insert([
    { id: renglonOrdenCompraIds[0], orden_compra_id: ordenCompraIds[0], producto_id: productoIds[0], cantidad: 10, precio_unitario: 50, precio_total: 500 },
    { id: renglonOrdenCompraIds[1], orden_compra_id: ordenCompraIds[1], producto_id: productoIds[1], cantidad: 2, precio_unitario: 500, precio_total: 1000 },
    { id: renglonOrdenCompraIds[2], orden_compra_id: ordenCompraIds[2], producto_id: productoIds[2], cantidad: 2, precio_unitario: 200, precio_total: 400 },
  ]);


  const ordenVentaIds = [1000,1001,1002];
  await knex('OrdenVenta').insert([
    { id: ordenVentaIds[0], usuario_id: usuarioIds[0], fecha_orden: new Date(), estado: 'PENDIENTE', montoTotal: 200, tipo_venta: 'VENTA', descripcion: 'Venta de libros',tipo_pago: "Efectivo" },
    { id: ordenVentaIds[1], usuario_id: usuarioIds[1], fecha_orden: new Date(), estado: 'COMPLETADO', montoTotal: 1500, tipo_venta: 'VENTA', descripcion: 'Venta de laptops',tipo_pago: "Efectivo" },
    { id: ordenVentaIds[2], usuario_id: usuarioIds[2], fecha_orden: new Date(), estado: 'CANCELADO', montoTotal: 600, tipo_venta: 'DEVOLUCION', descripcion: 'Devolución de sillas',tipo_pago: "Efectivo" },
  ]);


  const renglonOrdenVentaIds = [uuidv4(), uuidv4(), uuidv4()];
  await knex('RenglonOrdenVenta').insert([
    { id: renglonOrdenVentaIds[0], orden_venta_id: ordenVentaIds[0], producto_id: productoIds[0], cantidad: 2, precio_unitario: 100, precio_total: 200, porcentaje_descuento_manual: 0, servicio_id: servicioIds[0] },
    { id: renglonOrdenVentaIds[1], orden_venta_id: ordenVentaIds[1], producto_id: productoIds[1], cantidad: 1, precio_unitario: 1500, precio_total: 1500, porcentaje_descuento_manual: 0, servicio_id: servicioIds[1] },
    { id: renglonOrdenVentaIds[2], orden_venta_id: ordenVentaIds[2], producto_id: productoIds[2], cantidad: 3, precio_unitario: 200, precio_total: 600, porcentaje_descuento_manual: 10, servicio_id: servicioIds[2] },
  ]);
} 