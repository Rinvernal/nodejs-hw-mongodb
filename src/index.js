import { initMongoDB } from './db/initMongoDB.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};

bootstrap();


// Стара версія

// import { setupServer } from './server.js';

// const startApp = async () => {
//   try {
//     setupServer();
//   } catch (error) {
//     console.error('Error starting the app:', error);
//   }
// };

// startApp();



