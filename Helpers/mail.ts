import fs from "fs";
import Handlebars from "handlebars";
type replacements = {
  name: string;
  message: string;
  subject: string;
  email: string;
  greeting?: string;
};

export const createHTMLToSend = (path: string, replacements: replacements) => {
  const html = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  const template = Handlebars.compile(html);

  const htmlToSend = template(replacements);

  return htmlToSend;
};
