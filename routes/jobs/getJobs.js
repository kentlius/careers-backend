const data = require("../../positions.json");

module.exports = async (fastify, opts) => {
  fastify.get(
    "/",
    {
      onRequest: [fastify.authenticate],
    },
    async (request, reply) => {
      const { page, description, location, full_time } = request.query;

      let json;

      try {
        const res = await fetch(
          "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
        );
        json = await res.json();
      } catch (err) {
        console.log(err);
      }

      let jobs = json || data;
      jobs = jobs.filter((job) => job);

      if (page) {
        const perPage = 4;
        const start = (page - 1) * perPage;
        const end = page * perPage;
        jobs = jobs.slice(start, end);
      }

      if (description) {
        jobs = jobs.filter((job) =>
          job.description.toLowerCase().includes(description.toLowerCase())
        );
      }

      if (location) {
        jobs = jobs.filter((job) =>
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      }

      if (full_time) {
        jobs = jobs.filter((job) => job.type === "Full Time");
      }

      return jobs;
    }
  );
};
