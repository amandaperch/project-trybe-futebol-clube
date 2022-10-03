import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {login, user} from './Double/user.doubles';
import { app } from '../app';
import User from '../database/models/user';
import { Response } from 'superagent';
import { isExpressionStatement } from 'typescript';
chai.use(chaiHttp);
const { request, expect } = chai;

//describe('', () => { it('',() => {}) }) - Exemplo de inicio de teste para usar em outros arquivos

describe('User and Login', () => {
  before(async () => {
    sinon.stub(user, 'findOne').resolves({id: 1, ...user} as User)
  })
  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  })
  // questão 02
  describe('Acesso com dados válidos no Front-end', () => {

    it('A rota utilizada é do tipo POST', async () => {
      const response = await chai.request(app).post('/login').send(user);

      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal(user);
    })
  })
  // questão 04
  describe('Não terá o acesso sem informar e-mail', () => {

    it('Login sem e-mail tem o retorno de bad request',async () => {

    })
    it('Não tem o campo e-mail o retorno 400 , com a mensagem "All Fields must be filled" ', () => {

    })
  })
  // questão 06 
  
  describe('Não terá o acesso sem informar senha', () => {
    
    it('Login sem senha tem o retorno de bad request', async () => {

    })
    it('Não tem o campo "password" o retorno 400 , com a mensagem "All Fields must be filled" ', () => {

    })
  })
  // questão 08 
    describe('Não terá acesso com um email inválido', () => { 
    
    it('Login sem  email incorreto retornará status não-autorizado', async () => {

    })
    it('Campo  "email" inválido o retorno 400 , com a mensagem "Incorrect email or password" ', async () => {

    })
  })
  // questão 10 
  describe('Não terá acesso com um senha inválida', () => {

    it('Login sem  senha incorreto retornará status não-autorizado', async () => {

    })
    it('Campo  "senha" inválido o retorno 400 , com a mensagem "Incorrect email or password" ', async () => {

    })
  })
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
