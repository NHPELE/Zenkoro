const request = require('supertest');
const app = require('./server');
const test = require('node:test');
const assert = require('node:assert');

test('POST /api/login with invalid credentials returns 401', async () => {
  const res = await request(app)
    .post('/api/login')
    .send({ username: 'wrong', password: 'wrong' });
  assert.strictEqual(res.statusCode, 401);
});
