import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  dialectOptions: {
    ssl: {
      require: true,               // Enforce SSL usage
      rejectUnauthorized: false   // Optional: Ignore certificate validation issues
    }
  },
  'storage': ':memory:',
});
