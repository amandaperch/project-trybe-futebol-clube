import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { teams } from './Double/teams.double';
import { app } from '../app';
import Teams from '../database/models/team';


chai.use(chaiHttp);
const { request, expect } = chai;

//describe('', () => { it('',() => {}) }) - Exemplo de inicio de teste para usar em outros arquivos

describe('Verify router teams', () => {

  // questão 13
  it('A rota utilizada é do tipo GET', async ()  => {

    before(async () => {
      sinon.stub(Teams, "findOne").resolves(teams as Teams)
    })
    after(() => {
      (Teams.findOne as sinon.SinonStub).restore();
    })

    const response = await chai.request(app).get('/teams');

      expect(response.status).to.equal(201);
      expect(response.body).to.equal(teams);
  })

  // questão 17
  it('Retorna um time especifico conforme id',async () => {
    
    before(async () => {
      sinon.stub(Teams, "findByPk").resolves(teams as Teams)
    })
    after(() => {
      (Teams.findByPk as sinon.SinonStub).restore();
    })

    const response = await chai.request(app).get('/teams/1');

    expect(response.status).to.equal(201);
    expect(response.body).to.equal(teams);

  })
})