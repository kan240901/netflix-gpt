import { GPTApiKey } from './Constants';
import OpenAI from 'openai';

export const client = new OpenAI({
  apiKey: GPTApiKey,
  dangerouslyAllowBrowser: true,
});
