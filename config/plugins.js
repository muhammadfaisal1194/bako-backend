module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "beeni4429@gmail.com",
        defaultReplyTo: "beeni4429@gmail.com",
      },
    },
  },
});
