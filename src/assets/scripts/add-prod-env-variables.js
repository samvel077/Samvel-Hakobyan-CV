const prodEnvVariables = {
  IS_PROD: true
}

Object.keys(prodEnvVariables).forEach(key => {
  process.env[key] = prodEnvVariables[key];
});

console.log('prod env variables successfully added.');
