cube(`Products`, {
  sql: `SELECT * FROM products`,

  measures: {
    count: {
      type: `count`
    }
  },

  dimensions: {
    productId: {
      sql: `product_id`,
      type: `string`,
      primaryKey: true
    },
    name: {
      sql: `name`,
      type: `string`
    },
    category: {
      sql: `category`,
      type: `string`
    },
    subCategory: {
      sql: `sub_category`,
      type: `string`
    },
    isActive: {
      sql: `is_active`,
      type: `boolean`
    }
  }
});