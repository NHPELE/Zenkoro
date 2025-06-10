// Minimal test for the login API
const request = require('supertest');
const app = require('./server');
const test = require('node:test');
const assert = require('node:assert');

// Should reject invalid credentials
test('POST /api/login with invalid credentials returns 401', async () => {
  const res = await request(app)
    .post('/api/login')
    .send({ username: 'wrong', password: 'wrong' });
  assert.strictEqual(res.statusCode, 401);
});

// Should succeed with correct credentials
test('POST /api/login with valid credentials returns token', async () => {
  const res = await request(app)
    .post('/api/login')
    .send({ username: 'user', password: '1234' });
  assert.strictEqual(res.statusCode, 200);
  assert.ok(res.body.token);
});
