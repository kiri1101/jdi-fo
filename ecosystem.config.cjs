module.exports = {
  apps: [
    {
      name: 'jawdi',
      port: '3001',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
