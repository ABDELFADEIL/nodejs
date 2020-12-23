const request = require('supertest');
const app = require('../app');

describe('Subject EndPoints', () => {
  describe('GET /subjects', () => {
    it('should fetch subjects list', async() =>{
      const res = await request(app).get('/subjects')
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toBeGreaterThanOrEqual(0)
    })
  })
})
