const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/User')
const sequelize = require('../src/config/database')

beforeAll(() => {
  // done()
  return sequelize.sync()
})

beforeEach(() => {
  return User.destroy({ truncate: true })
})

describe('User Registration', () => {
  it('returns 200 ok when signup request is valid', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        user_name: 'user2',
        email: 'user2@email.com',
        password: 'p4ssword'
      })
      .then((response) => {
        expect(response.status).toBe(200)
        done()
      })
  })

  it('returns success message when signup request is valid', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        user_name: 'user2',
        email: 'user2@email.com',
        password: 'p4ssword'
      })
      .then((response) => {
        console.log(response)
        expect(response.body.message).toBe('User Created')
        done()
      })
  })

  it('saves the user to database', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        user_name: 'user2',
        email: 'user2@email.com',
        password: 'p4ssword'
      })
      .then(() => {
        User.findAll().then((userList) => {
          expect(userList.length).toBe(1)
          done()
        })
      })
  })
  it('saves the username and email to database', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        user_name: 'user2',
        email: 'user2@email.com',
        password: 'p4ssword'
      })
      .then(() => {
        User.findAll().then((userList) => {
          const savedUser = userList[0]
          expect(savedUser.user_name).toBe('user2')
          expect(savedUser.email).toBe('user2@email.com')
          done()
        })
      })
  })
})
