import { Knex } from "knex";
const { v4: uuidv4 } = require('uuid');
export async function seed(knex: Knex): Promise<void> {

    //Borro todas las filas de todas las tablas
    await knex('RenglonOrdenVenta').del();
    await knex('OrdenVenta').del();
    await knex('RenglonOrdenCompra').del();
    await knex('OrdenCompra').del();
    await knex('RenglonDetallePedido').del();
    await knex('Pedido').del();
    await knex('Servicio').del();
    await knex('AlertaStock').del();
    await knex('StockProducto').del();
    await knex('Producto').del();
    await knex('Categoria').del();
    await knex('Proveedor').del();
    await knex('Usuario').del();


    //Cargo Usuarios
    await knex("Usuario").insert([
        {id: uuidv4(),
        nombre: "Usuario1",
        email: "Usuario1@gmail.com"},
        {id: uuidv4(),
        nombre: "Usuario2",
        email: "Usuario2@gmail.com"}
        
    ]);
    const Usuarios = await knex('Usuario').select('id');

    //Cargo Categorias
    await knex("Categoria").insert([
        {id: uuidv4(),
        nombre: "Categoria1",
        descripcion: "Categoria 1"},
        {id: uuidv4(),
        nombre: "Categoria2",
        descripcion: "Categoria 2"}
    ]);

    const Categorias = await knex('Categoria').select('id');

    //Cargo Proveedores

    await knex("Proveedor").insert([
        {id: uuidv4(),
        nombre: "Proveedor1",
        email: "Prov1@gmail.com", 
        telefono: "+54555443", 
        sitio_web: "proveedor1.com", },
        {id: uuidv4(),
        nombre: "Proveedor2",
        email: "Prov2@gmail.com", 
        telefono: "+54555444", 
        sitio_web: "proveedor2.com"}
        
    ]);

    const Proveedores = await knex('Proveedor').select('id');

    //Cargo Servicios
    await knex("Servicio").insert([
        {id: uuidv4(),cliente_id: Usuarios[0].id,
        nombre: "Servicio1",
        descripcion: "Prov1@gmail.com", 
        precio: "50.5"},
        {id: uuidv4(),cliente_id: Usuarios[1].id,
        nombre: "Servicio2",
        descripcion: "Prov2@gmail.com", 
        precio: "90.9"}
        
    ]);


    //Cargo Ordenes de Venta
    await knex("OrdenVenta").insert([
        {id: uuidv4(),cliente_id: Usuarios[0].id,
        fecha_orden: knex.fn.now(),  // Current timestamp 
        montoTotal: 150.00,  
        descripcion: 'Primera Orden',},
        {id: uuidv4(),cliente_id: Usuarios[1].id,
        fecha_orden: knex.fn.now(),
        montoTotal: 250.00,
        descripcion: 'Segunda Orden',}
    ]);

    const OrdenesVenta = await knex('OrdenVenta').select('id');

    //Cargo Productos
    await knex("Producto").insert([
        {id: uuidv4(),
        nombre: "Producto 1",
        codigo_barra: "8562314743659",
        descripcion: 'Primer Producto',
        precio: 50.0,
        min_stock: 5,
        categoria_id: Categorias[0].id,
        proveedor_id: Proveedores[0].id,
        imagen: "",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        },
        {id: uuidv4(),
        nombre: "Producto 2",
        codigo_barra: "621974465353",
        descripcion: 'Segundo Producto',
        precio: 25.0,
        min_stock: 10,
        categoria_id: Categorias[1].id,
        proveedor_id: Proveedores[1].id,
        imagen: "",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now()}
    ]);

    const Productos = await knex('Producto').select('id');

    //Cargo Renglones de Ordenes de Venta
    await knex("RenglonOrdenVenta").insert([
            {id: uuidv4(),
            orden_venta_id: OrdenesVenta[0].id,
            producto_id: Productos[0].id,
            cantidad: 3,
            precio_unitario: 50.0,
            precio_total: 150.0,
            servicio_id: "",
            fecha_creacion: knex.fn.now(),   
            fecha_actualizacion: knex.fn.now(),
            },
            {id: uuidv4(),
            orden_venta_id: OrdenesVenta[1].id,
            producto_id: Productos[1].id,
            cantidad: 10,
            precio_unitario: 25.0,
            precio_total: 250.0,
            servicio_id: "",
            fecha_creacion: knex.fn.now(),   
            fecha_actualizacion: knex.fn.now(),
            }
        ]);


    //Cargo Pedidos
    await knex("Pedido").insert([
        {id: uuidv4(),
        cliente_id: Usuarios[0].id,
        fecha_pedido: knex.fn.now(),   
        estado: "PROCESANDO",
        montoTotal: 100.0,
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        },
        {id: uuidv4(),
        cliente_id: Usuarios[1].id,
        fecha_pedido: knex.fn.now(),   
        estado: "PENDIENTE",
        montoTotal: 200.0,
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        }
    ]);

    const Pedidos = await knex('Pedido').select('id');

    //Cargo Renglones de Detalle de Pedidos
    await knex("RenglonDetallePedido").insert([
        {id: uuidv4(),
        pedido_id: Pedidos[0].id,
        producto_id: Productos[0].id,
        cantidad: 10,
        precio_renglon: 500.0,
        precio_unitario: 50.0,
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        },
        {id: uuidv4(),
        pedido_id: Pedidos[1].id,
        producto_id: Productos[1].id,
        cantidad: 5,
        precio_renglon: 125.0,
        precio_unitario: 25.0,
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        }
    ]);
    //Cargo Ordenes de Compra
    await knex("OrdenCompra").insert([
        {id: uuidv4(),
        proveedor_id: Proveedores[0].id,
        fecha_orden: knex.fn.now(),   
        estado:"PROCESANDO",
        montoTotal: 150.0,
        tipo_gasto: "COMPRA",
        descripcion: "Compra de material",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        },
        {id: uuidv4(),
        proveedor_id: Proveedores[1].id,
        fecha_orden: knex.fn.now(),   
        estado:"CANCELADO",
        montoTotal: 5000.0,
        tipo_gasto: "GASTO",
        descripcion: "Cancelado el gasto",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        }
    ]);

    const OrdenesDeCompra = await knex('OrdenCompra').select('id');

    //Cargo Renglones de Ordenes de Compra
    await knex("RenglonOrdenCompra").insert([
        {id: uuidv4(),
        orden_compra_id: OrdenesDeCompra[0].id,
        producto_id: "",
        cantidad: 10,
        precio_unitario: 15.0,
        precio_total: 150.0,
        servicio_id: "",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now()
        },
        {id: uuidv4(),
        orden_compra_id: OrdenesDeCompra[1].id,
        producto_id: "",
        cantidad: 10,
        precio_unitario: 15.0,
        precio_total: 150.0,
        servicio_id: "",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now()
        }
    ]);
    //Cargo Stock Productos
    await knex("StockProducto").insert([
        {id: uuidv4(),
        producto_id: Productos[0].id,
        cantidad_contenedores: 25,
        cantidad_por_contenedor: 10,
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        },
        {id: uuidv4(),
        producto_id: Productos[1].id,
        cantidad_contenedores: 10,
        cantidad_por_contenedor: 50,
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        }
    ]);

    const Stocks = await knex('StockProducto').select('id');
    
    //Cargo Alertas de Stock
    await knex("AlertaStock").insert([
        {id: uuidv4(),
        stock_id: Stocks[0].id,
        mensaje: "Solicitar Stock Urgente!",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        },
        {id: uuidv4(),
        stock_id: Stocks[0].id,
        mensaje: "Se sugiere solicitar stock",
        fecha_creacion: knex.fn.now(),   
        fecha_actualizacion: knex.fn.now(),
        }
    ]);
};
