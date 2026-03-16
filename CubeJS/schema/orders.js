cube(`Orders`, {
  sql: `SELECT * FROM orders`,

  measures: {
    count: {
      type: `count`
    },

    revenue: {
      sql: `order_items.quantity * order_items.unit_price`,
      type: `sum`
    }
  },

  dimensions: {
    orderId: {
      sql: `order_id`
      type: `string`,
      primaryKey: true
    },

    status: {
      sql: `status`,
      type: `string`
    },

    orderDate: {
      sql: `order_date`,
      type: `time`
    }
  }
});