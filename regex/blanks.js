const isEmpty = (str) => !str.trim().length;

const isBoolean = (str) => ['true', 'false', '1', '0'].indexOf(str) > -1;

const isAlpha = /^[A-ZА-ЯЁ]+$/i.test(str);

const isAlphaNumeric = (str) => /^[0-9A-ZА-ЯЁ]+$/i.test(str);

const numeric = (delimiter = '.') =>
  new RegExp(`^[+-]?([0-9]*\\${delimiter})?[0-9]+$`);
const isNumeric = (str, delimiter) => numeric(delimiter).test(str);

const isPostalCode = (str) => /^\d{6}$/.test(str);

const isPassportNumber = (str) => /^\d{10}$/.test(str);

const isMobilePhone = (str) => /^(\+?7|8)?9\d{9}$/.test(str);

const isURL = (str) =>
  /https?:\/\/(www\.)?[-\w@:%\.\+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-\w()@:%\.\+~#=//?&]*)/i.test(
    str
  );

const isEmail = (str) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i.test(
    str
  );

const isStrongPassword = (str) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?\/])[-\w#!$@%^&*+~=:;?\/]{8,}$/.test(
    str
  );

const isCreditCard = (str) =>
  str.trim().length !== 0 &&
  str
    .replace(/\D/g, '')
    .split('')
    .reverse()
    .reduce(
      (s, c, i) => (s += +(i % 2 !== 0 && (c *= 2) > 9 ? (c -= 9) : c)),
      0
    ) %
    10 ===
    0;
