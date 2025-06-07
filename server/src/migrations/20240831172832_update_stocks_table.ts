import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('Producto', (table) => {
        table.dropColumn('precio');
        table.uuid('stock_producto_id').references('id').inTable('StockProducto');
        table.decimal('precio_unidad');
        table.decimal('precio_contenedor');
        table.decimal('porcentaje_ganancia');
        table.enum('tipo_venta', ['UNIDAD', 'CONTENEDOR']).defaultTo('UNIDAD');
        table.dropColumn('min_stock');
      });
      await knex.schema.alterTable('StockProducto', (table) => {
        table.integer('red_alert');
        table.integer('yellow_alert');
        table.integer('green_alert');
        
        //table.dropColumn('producto_id');
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('Producto', (table) => {
        table.decimal('precio');
        table.dropColumn('precio_unidad');
        table.dropColumn('precio_contenedor');
        table.dropColumn('porcentaje_ganancia');
        table.dropColumn('tipo_venta');
        table.integer('min_stock');
      });
      await knex.schema.alterTable('StockProducto', (table) => {
        table.dropColumn('red_alert');
        table.dropColumn('yellow_alert');
        table.dropColumn('green_alert');
        
        table.uuid('producto_id').references('id').inTable('Producto');
      });
}

