cube(`Orders`, {
  sql: `SELECT * FROM orders`,

  joins: {
    Customers: {
      relationship: `belongsTo`,
      sql: `${CUBE}.customer_id = ${Customers}.customer_id`
    }
  },

  measures: {
    count: {
      type: `count`
    }
  },

  dimensions: {
    orderId: {
      sql: `order_id`,
      type: `string`,
      primaryKey: true
    },
    status: {
      sql: `status`,
      type: `string`
    },
    channel: {
      sql: `channel`,
      type: `string`
    },
    shippingCountry: {
      sql: `shipping_country`,
      type: `string`
    },
    orderDate: {
      sql: `order_date`,
      type: `time`
    }
  }
});