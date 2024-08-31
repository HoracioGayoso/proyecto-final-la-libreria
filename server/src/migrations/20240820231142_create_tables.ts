import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('Usuario', table => {
      table.uuid('id').primary();
      table.string('nombre').notNullable();
      table.string('email').notNullable();
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('Proveedor', table => {
      table.uuid('id').primary();
      table.string('nombre').notNullable();
      table.string('email');
      table.string('telefono');
      table.string('sitio_web');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('Categoria', table => {
      table.uuid('id').primary();
      table.string('nombre').notNullable();
      table.text('descripcion');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('Producto', table => {
      table.uuid('id').primary();
      table.string('nombre').notNullable();
      table.string('codigo_barra');
      table.text('descripcion');
      table.decimal('precio');
      table.integer('min_stock');
      table.uuid('categoria_id').references('id').inTable('Categoria');
      table.uuid('proveedor_id').references('id').inTable('Proveedor');
      table.string('imagen');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('StockProducto', table => {
      table.uuid('id').primary();
      table.uuid('producto_id').references('id').inTable('Producto');
      table.integer('cantidad_contenedores');
      table.integer('cantidad_por_contenedor');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('AlertaStock', table => {
      table.uuid('id').primary();
      table.uuid('stock_id').references('id').inTable('StockProducto');
      table.string('mensaje');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('Servicio', table => {
      table.uuid('id').primary();
      table.uuid('cliente_id').references('id').inTable('Usuario');
      table.string('nombre');
      table.text('descripcion');
      table.decimal('precio');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('Pedido', table => {
      table.uuid('id').primary();
      table.uuid('cliente_id').references('id').inTable('Usuario');
      table.timestamp('fecha_pedido');
      table.enu('estado', ['PENDIENTE', 'PROCESANDO', 'ENVIADO', 'CANCELADO']).defaultTo('PENDIENTE');
      table.decimal('montoTotal');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('RenglonDetallePedido', table => {
      table.uuid('id').primary();
      table.uuid('pedido_id').references('id').inTable('Pedido');
      table.uuid('producto_id').references('id').inTable('Producto');
      table.integer('cantidad');
      table.decimal('precio_renglon');
      table.decimal('precio_unitario');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('OrdenCompra', table => {
      table.uuid('id').primary();
      table.uuid('proveedor_id').references('id').inTable('Proveedor');
      table.timestamp('fecha_orden');
      table.enu('estado', ['PENDIENTE', 'PROCESANDO', 'RECIBIDO', 'CANCELADO']).defaultTo('PENDIENTE');
      table.decimal('montoTotal');
      table.enu('tipo_gasto', ['COMPRA', 'GASTO', 'INVERSION']).defaultTo('COMPRA');
      table.text('descripcion');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('RenglonOrdenCompra', table => {
      table.uuid('id').primary();
      table.uuid('orden_compra_id').references('id').inTable('OrdenCompra');
      table.string('producto_id'); // *1
      table.integer('cantidad');
      table.decimal('precio_unitario');
      table.decimal('precio_total');
      table.string('servicio_id'); // *1
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('OrdenVenta', table => {
      table.uuid('id').primary();
      table.uuid('cliente_id').references('id').inTable('Usuario');
      table.timestamp('fecha_orden');
      table.enu('estado', ['PENDIENTE', 'PROCESANDO', 'COMPLETADO', 'CANCELADO']).defaultTo('PENDIENTE');
      table.decimal('montoTotal');
      table.enu('tipo_venta', ['VENTA', 'DEVOLUCION']).defaultTo('VENTA');
      table.text('descripcion');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    })
    .createTable('RenglonOrdenVenta', table => {
      table.uuid('id').primary();
      table.uuid('orden_venta_id').references('id').inTable('OrdenVenta');
      table.string('producto_id'); // *1
      table.integer('cantidad');
      table.decimal('precio_unitario');
      table.decimal('precio_total');
      table.string('servicio_id'); // *1
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
      table.timestamp('fecha_actualizacion').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
    .dropTableIfExists('RenglonOrdenVenta')
    .dropTableIfExists('OrdenVenta')
    .dropTableIfExists('RenglonOrdenCompra')
    .dropTableIfExists('OrdenCompra')
    .dropTableIfExists('RenglonDetallePedido')
    .dropTableIfExists('Pedido')
    .dropTableIfExists('Servicio')
    .dropTableIfExists('AlertaStock')
    .dropTableIfExists('StockProducto')
    .dropTableIfExists('Producto')
    .dropTableIfExists('Categoria')
    .dropTableIfExists('Proveedor')
    .dropTableIfExists('Usuario');
}

