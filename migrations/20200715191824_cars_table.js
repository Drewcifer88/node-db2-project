
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments('id');
        tbl.string("VIN", 160).notNullable().unique();
        tbl.string("make", 160).notNullable();
        tbl.string("model", 160).notNullable();
        tbl.integer("mileage").notNullable();

    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars");
};
