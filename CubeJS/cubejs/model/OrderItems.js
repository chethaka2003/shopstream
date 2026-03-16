cube(`OrderItems`, {
  sql: `SELECT * FROM order_items`,

  joins: {
    Orders: {
      relationship: `belongsTo`,
      sql: `${CUBE}.order_id = ${Orders}.order_id`
    },
    Products: {
      relationship: `belongsTo`,
      sql: `${CUBE}.product_id = ${Products}.product_id`
    }
  },

  measures: {
    count: {
      type: `count`
    },
    quantitySold: {
      sql: `quantity`,
      type: `sum`
    },
    grossRevenue: {
      sql: `quantity * unit_price`,
      type: `sum`,
      format: `currency`
    },
    returnedItems: {
      sql: `CASE WHEN returned = 1 THEN quantity ELSE 0 END`,
      type: `sum`
    }
  },

  dimensions: {
    itemId: {
      sql: `item_id`,
      type: `string`,
      primaryKey: true
    },
    returned: {
      sql: `returned`,
      type: `boolean`
    }
  }
});