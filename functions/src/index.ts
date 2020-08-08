import * as functions from 'firebase-functions';
import express from 'express';
import * as fireorm from 'fireorm';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

const admin = require('firebase-admin');
const firestore = admin.initializeApp(functions.config().firebase).firestore();
fireorm.initialize(firestore);

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  app.useGlobalPipes(new ValidationPipe());

  return app.init();
};


createNestServer(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
