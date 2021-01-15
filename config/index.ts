import { existsSync, mkdirSync } from 'fs';
import dotenv from 'dotenv';

export const loadConfig = () => {

  if (!existsSync('./dist')) {
    mkdirSync('./dist');
  }
  
  dotenv.config();
}