import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
});

sequelize.sync().then(() => {
  console.log('DB Synced');
}).catch((err) => {
  console.log('Error syncing DB: ', err);
});
