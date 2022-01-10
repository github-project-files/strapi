module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '75bb4e7729a8fad8fb63970eb28a81f1'),
  },
});
