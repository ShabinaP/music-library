const { expect } = require('chai');
const getDb = require('../src/services/db');
const request = require('supertest');
const app = require('..src/app');

describe('create album', () => {
    let db;
    beforeEach(async () => (db = await getDb()));

    afterEach(async () => {
        await db.query('DELETE FROM Album');
        await db.close()
    });

    describe('/artist/:artistId/album', () => {
        describe('POST', () => {
            it('creates a new album in the database assosciated to an artist', async () => {
                const res = await (await request(app).post('/artist/:artistId/album')).send({
                    name: 'Better',
                    year: 2018
                });
                expect(res.status).to.equal(201);
            })
        })
    })
})