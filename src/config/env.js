'use strict';

const getEnv = (name) => {
  return process.env[name.toUpperCase()];
};

class Env {
  static get NODE_ENV() {
    return getEnv('NODE_ENV') || 'development';
  }

  static set NODE_ENV(value) {
    process.env.NODE_ENV = value;
  }

  static get PORT() {
    return Number(getEnv('port')) || 3000;
  }

  static set PORT(value) {
    process.env.PORT = value;
  }
}

module.exports = Env;

