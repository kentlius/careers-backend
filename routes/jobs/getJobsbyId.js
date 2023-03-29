module.exports = async (fastify, opts) => {
  fastify.get(
    "/:id",
    {
      onRequest: [fastify.authenticate],
    },
    async (request, reply) => {
      const { id } = request.params;
      const res = await fetch(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
      );
      return res.json();
    }
  );
};
