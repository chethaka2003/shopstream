import cubejs from '@cubejs-client/core';

const cubeApi = cubejs('secret123', {
  apiUrl: 'http://localhost:4000/cubejs-api/v1'
});

export default cubeApi;