export default ({ config }) => ({
    ...config,
    extra: {
      SERVER_ADDRESS: process.env.SERVER_ADDRESS || '', //Set something here to throw an error
    },
  });