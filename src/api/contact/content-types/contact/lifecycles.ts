import {emailService} from "../../../../service/emailService";
import {updateContent} from "../../../../utils/utils";
import {createdMailHTMLContent} from "./emailTemplates/created.html";
import {resolvedMailHTMLContent} from "./emailTemplates/resolved.html";


export default {
  afterCreate({result}) {
    const subject = updateContent('Thank You for Contacting Robotutor Tech! Ticket no.: {{id}}', {id: result.id})
    const html = updateContent(createdMailHTMLContent, result);
    emailService.sendMail({to: result.email, subject, html})
  },

  beforeUpdate({params}) {
    if (params.data.status === 'RESOLVED' && !params.data.solution) {
      throw new Error("The solution field is required when the status is resolved.")
    }
  },

  afterUpdate({result}) {
    if (result.status === 'RESOLVED') {
      const subject = updateContent('Your Ticket Has Been Resolved {{id}}', {id: result.id})
      const html = updateContent(resolvedMailHTMLContent, result);
      emailService.sendMail({to: result.email, subject, html})
    }
  }
}
