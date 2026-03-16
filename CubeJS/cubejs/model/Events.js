cube(`Events`, {
  sql: `SELECT * FROM events`,

  measures: {
    count: {
      type: `count`
    },
    pageViews: {
      sql: `CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END`,
      type: `sum`
    },
    productViews: {
      sql: `CASE WHEN event_type = 'product_view' THEN 1 ELSE 0 END`,
      type: `sum`
    },
    addToCart: {
      sql: `CASE WHEN event_type = 'add_to_cart' THEN 1 ELSE 0 END`,
      type: `sum`
    },
    checkoutStart: {
      sql: `CASE WHEN event_type = 'checkout_start' THEN 1 ELSE 0 END`,
      type: `sum`
    },
    purchases: {
      sql: `CASE WHEN event_type = 'purchase' THEN 1 ELSE 0 END`,
      type: `sum`
    }
  },

  dimensions: {
    eventId: {
      sql: `event_id`,
      type: `string`,
      primaryKey: true
    },
    eventType: {
      sql: `event_type`,
      type: `string`
    },
    device: {
      sql: `device`,
      type: `string`
    },
    eventTime: {
      sql: `timestamp`,
      type: `time`
    }
  }
});