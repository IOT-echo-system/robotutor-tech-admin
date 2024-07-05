import nodemailer from "nodemailer";

const emailConfig = {
  host: process.env.EMAIL_HOST ?? '',
  user: process.env.EMAIL_USER ?? '',
  pass: process.env.EMAIL_PASS ?? '',
  from: process.env.EMAIL_FROM ?? '',
}

export type MailOptions = { to: string, subject: string, html?: string, text?: string }

class EmailService {
  public static emailService: EmailService = new EmailService()
  private transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: 587,
    secure: false,
    auth: {
      user: emailConfig.user,
      pass: emailConfig.pass,
    },
  });

  private createMailOptions({to, subject, html, text}: MailOptions) {
    return {from: emailConfig.from, cc: emailConfig.from, to, subject, html, text};
  }

  sendMail(options: MailOptions) {
    this.transporter.sendMail(this.createMailOptions(options), (error, info) => {
      if (error) {
        return console.log(error);
      }
      strapi.log.info(`Message sent: ${info.messageId}, preview url ${nodemailer.getTestMessageUrl(info)}`);
    });
  }
}


export const emailService = EmailService.emailService
