
exports.up = function (knex) {
    await knex.schema.alterTable("cars", (tbl) => {
        tbl.text("color");
    });
};

exports.down = function (knex) {
    await knex.schema.alterTable("cars", (tbl) => {
        tbl.dropColumn("color");
    });
};
