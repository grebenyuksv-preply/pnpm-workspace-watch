const chokidar = require('chokidar');
const { execSync } = require("child_process");

let instance = null;

const watch = () => {
  console.log('watching');
  instance = chokidar.watch(['node_modules', 'packages/**/node_modules'], {
    ignoreInitial: true,
  }).on('all', async (event, path) => {
    console.log(event, path);
    // await instance.close();
    // execSync(`pnpm i`, { stdio: 'inherit' });
    // watch();
  });
}

watch();