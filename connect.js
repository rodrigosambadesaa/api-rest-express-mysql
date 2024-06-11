import mysql from 'mysql2';
import { CONNECTION } from './constants.js';



export const DB = mysql.createConnection(CONNECTION);