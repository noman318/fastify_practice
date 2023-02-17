const fastify = require("fastify");
const item = require("../Item");

const itemRoutes = (fastify, options, done) => {
  fastify.get("/", (req, reply) => {
    reply.send(item);
  });

  fastify.get("/item/:id", (req, reply) => {
    const { id } = req.params;
    const itemOne = item.find((one) => one.id === id);
    reply.send(itemOne);
  });

  done();
};
