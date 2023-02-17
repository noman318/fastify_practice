const fastify = require("fastify")({ logger: false });
const PORT = 4000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log(error);
    process.exit(1);
  }
};

start();
