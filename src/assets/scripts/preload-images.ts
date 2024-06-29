import * as fs from 'fs';
import { program } from 'commander';

import { FileUtil } from './file-util';

const log = console.log;
const handleError = (message: string) => {
  log(message);
  process.exit(1);
};

const injectionMarker = '<!-- inject:preload-images --><!-- endinject -->';
const regexInjectionMarker =
  /(<!-- inject:preload-images -->)([\s\S]*?)(<!-- endinject -->)/gm;

program
  .version('1.0.0')
  .option(
    '-d, --dist <dist>',
    'Path to build output directory. Should be identical with `outputPath` property from `angular.json`'
  )
  .option(
    '-f, --file [file]',
    `Your index file name. If not provided, defaults to 'index.html'. Should contain the injection marker: ${injectionMarker}`
  )
  // .option('-i, --include [include]', 'Optional comma separated list of image file names to include for preload link generation')
  .option(
    '-i, --include [include]',
    'Optional path to list of image files to include for preload link generation'
  )
  // .option('-e, --exclude [exclude]', 'Optional comma separated list of image file names to exclude from preload link generation')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

const options = program.opts();

if (!options['dist']) {
  handleError('Please specify the build output directory of your application');
  program.outputHelp();
}

options['dist'] = FileUtil.normalizePath(options['dist']);
options['file'] = options['file'] ?? 'index.html';

const appBuildDirs = FileUtil.getAppBuildDirs(options['dist'], options['file']);

if (!appBuildDirs || appBuildDirs.length === 0) {
  handleError(
    `Could not find ${options['file']} in ${options['dist']} or its subdirectories.`
  );
}

for (const appBuildDir of appBuildDirs) {
  const files = fs.readdirSync(appBuildDir);
  // const images = FileUtil.filterImages(
  //   files,
  //   options['include'] ? options['include'].split(',') : undefined,
  //   options['exclude'] ? options['exclude'].split(',') : undefined
  // );

  const images = FileUtil.filterImagesFromFolders(files, [
    'src/assets/images/preload',
  ]);

  if (images && images.size > 0) {
    const preloadImageLinks = Array.from(images.keys())
      .map(
        image =>
          `<link rel="preload" as="image" href="${image}" type="image/${images.get(image)}" crossorigin="anonymous">`
      )
      .join('\n');
    const indexFilePath = `${appBuildDir}/${options['file']}`;

    const indexFileContent = fs.readFileSync(indexFilePath, 'utf8');
    const match = indexFileContent.match(regexInjectionMarker);

    if (!match || match.length === 0) {
      log(`No injection marker ${injectionMarker} found in ${indexFilePath}.`);
    } else {
      fs.writeFileSync(
        indexFilePath,
        indexFileContent.replace(regexInjectionMarker, preloadImageLinks)
      );
      log(`Inserted ${images.size} preload image links into ${indexFilePath}`);
    }
  }
}
