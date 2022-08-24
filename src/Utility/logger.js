let isLoggingEnabled = false;

const enableLogging = () => {
  if (!__DEV__) {
    console.warn('Pay2m could not enable logging on production!');
    return;
  }
  isLoggingEnabled = true;
};

let print = () => {};

if (__DEV__) {
  print = (message, level = 'LOG', timestamp = new Date().toISOString()) => {
    if (!isLoggingEnabled) {
      return;
    }
    console.log(
      `${level}::${timestamp}::${
        message instanceof Object ? JSON.stringify(message) : message
      }`,
    );
  };
}

Object.freeze(print);

export {print, enableLogging};
