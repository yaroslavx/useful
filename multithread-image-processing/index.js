const glob = require('glob');
const imageScale = require('./image-process-multithread');

(async () => {
  await Promise.all(
    glob
      .sync('./images/*.jpg')
      .filter((img) => img.indexOf('_small') < 0)
      .map(imageScale)
  );
})();
