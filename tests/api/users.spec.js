/* global describe beforeEach it */

const {expect} = require('chai');
const request = require('supertest');
const { db, models: { User } } = require('../../server/db');
const seed = require('../../seed');
const app = require('../../server/server');

describe('User routes', () => {
  beforeEach(async() => {
    await seed();
  })

  describe('/api/users/', () => {

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(2);
    })
  }) // end describe('/api/users')
}) // end describe('User routes')