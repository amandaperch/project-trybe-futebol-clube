import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { findAll, findAllFinished, findAllInProgress } from './Double/matches.double';
import { app } from '../app';
import Matches from '../database/models/match';


chai.use(chaiHttp);
const { request, expect } = chai;

//describe('', () => { it('',() => {}) }) - Exemplo de inicio de teste para usar em outros arquivos

describe('Match', () => {
    // questão 22
    it('Retornando todos os matches', async () => {

      const matches = findAll()

      before(async () => {
        sinon.stub(Matches, "findAll").resolves(matches as any[])
      })
      after(() => {
        (Matches.findAll as sinon.SinonStub).restore();
      })

      const response = await chai.request(app).get('/matches');

      expect(response.status).to.equal(200);
      expect(response.body).to.be.equal(matches);
    })

    it('InProgress false', async () => {
      const matches = findAllFinished()

      before(async () => {
        sinon.stub(Matches, "findAll").resolves(matches as any[])
      })
      after(() => {
        (Matches.findAll as sinon.SinonStub).restore();
      })
      const response = await chai.request(app).get('/matches?inProgress=false')
      expect(response.status).to.equal(200);
      expect(response.body).to.be.equal(matches);
    })

    it('InProgress true', async () => {
      const matches = findAllInProgress()

      before(async () => {
        sinon.stub(Matches, "findAll").resolves(matches as any[])
      })
      after(() => {
        (Matches.findAll as sinon.SinonStub).restore();
      })
      const response = await chai.request(app).get('/matches?inProgress=true')
      expect(response.status).to.equal(200);
      expect(response.body).to.be.equal(matches);
    })

    it('Validação de token com erro na rota post', async () => {

      const errortoken = {
        message: 'Token must be a valid token',
        code: 'UNAUTHORIZED',
      };
      const response = await chai.request(app)
          .post('/matches')
          .set({ Authorization: 'invalid_token' });
        expect(response.body).to.be.deep.equal(errortoken);
    })

    it('Atualizaçõa de matches', async () => {
      const payload = {
        homeTeam: 16,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,
        inProgress: true
      };

      const response = await chai.request(app).post('/matches').send(payload);
        expect(response.body).to.be.deep.equal({ id: 1, ...payload });
        expect(response.status).to.be.equal(200);
    
    })
});
