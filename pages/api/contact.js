// export default (req, res) => {
//   const data = req.body
//   const myResponse = res.json(data)
//   messageBody(myResponse.nome, myResponse.email)
// }

// const transporter = nodemailer.createTransport({ // Configura os parâmetros de conexão com servidor.
//   host: 'smtp.umbler.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'none',
//     pass: 'none'
//   }
// })

// let messageBody = (nome, email) => {
//   return {
//     from: 'contato@thamirisnunes.com.br',
//     to: 'contato@thamirisnunes.com.br',
//     subject: `Novo registro para aula Gratuita ${nome}`,
//     replyTo: email,
//     text: 'Essa  é uma mensagem de teste'
//   }
// }



// transporter.sendMail(messageBody, (err, info) => {
//   if (err) {
//     return console.log(err)
//   }

//   console.log(info)
// })