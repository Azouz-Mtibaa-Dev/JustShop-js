const nodemailer = require('nodemailer');

// Configurer le transporteur de messagerie
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'justshop.tunisie@gmail.com',
    pass: 'wlisqnzumgyilsrl',
  },
});

// Fonction pour envoyer un e-mail de contact
async function sendMail(name, email, message) {
  const mailOptions = {
    from: 'justshop.tunisie@gmail.com',
    to: 'azouzzizoumtibaa@gmail.com',
    subject: 'Nouveau message de contact',
    text: `
      Nom: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé :', info.response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = sendMail;