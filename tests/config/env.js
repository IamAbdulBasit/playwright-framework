const ENV = process.env.ENV || 'dev';
const envConfig = await import(`./${ENV}.env.js`);
export default envConfig.default;

// const ENV = process.env.ENV || 'dev';

// let envConfig;
// switch(ENV) {
//   case 'dev':
//     envConfig = await import('./dev.env.js');
//     break;
//   case 'prod':
//     envConfig = await import('./prod.env.js');
//     break;
//   default:
//     envConfig = await import('./dev.env.js');
// }

// export default envConfig.default;