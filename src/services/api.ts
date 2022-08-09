import axios from 'axios';

import { TriviaResponse } from '../types';

const api = axios.create({
  baseURL: process.env.API_URL ?? 'https://opentdb.com/api.php',
});

export const getProblems = () =>
  api.get<TriviaResponse>('?amount=10&type=boolean');
