module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        from: "beeni4429@gmail.com",
        subject: `${result.subject}`,
        text: `${result.message}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
