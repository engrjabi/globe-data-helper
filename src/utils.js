import MobileDetect from "mobile-detect";

const md = new MobileDetect(window.navigator.userAgent);

export const linkGenerator = (number, body) => {
  if (md.os() === "iOS") {
    return `sms:${number}&body=${body}`;
  }

  return `sms:${number}?body=${body}`;
};
