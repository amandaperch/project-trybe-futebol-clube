import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { matches } from './Double/matches.double';
import { app } from '../app';
import Matches from '../database/models/match';


chai.use(chaiHttp);
const { request, expect } = chai;

//describe('', () => { it('',() => {}) }) - Exemplo de inicio de teste para usar em outros arquivos

describe('User and Login', () => {
  before(async () => {
    sinon.stub(Matches, "findOne").resolves(matches as Matches)
  })
  after(() => {
    (Matches.findOne as sinon.SinonStub).restore();
  })

  // questão 22
   describe('Acesso com dados válidos no Front-end', () => {

    it('A rota utilizada é do tipo POST', async () => {
      const response = await chai.request(app).post('/login').send(matches);

      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('token');
    })
});
});