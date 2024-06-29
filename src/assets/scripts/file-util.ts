import * as fs from 'fs';
import * as path from 'path';

export class FileUtil {
  private static regexImageType = /\.(jpeg|jpg|png|gif|webp|svg)$/i;

  public static filterImagesFromFolders(
    rootFiles: string[],
    folders: string[]
  ): Map<string, string> {
    const include: string[] = [];

    for (const folder of folders) {
      const files = fs.readdirSync(folder);

      for (const file of files) {
        const imageType = FileUtil.getImageType(file);

        if (!imageType) {
          continue; // Not an image file
        }

        const fileName = FileUtil.getFileName(file)?.toLowerCase();

        fileName && include.push(fileName);
      }
    }

    return this.filterImages(rootFiles, include);
  }

  /**
   * Converts a path to Unix format which can be handled on all platforms.
   *
   * @param path - Path to normalize
   * @returns Normalized path in Unix format
   */
  public static normalizePath(path: string | undefined): string | undefined {
    return path ? path.replace(/\\/g, '/').replace(/\/$/, '') : path;
  }

  /**
   * Extracts the file type of the given input and checks whether this type is an image type.
   * @param file - File name including file extension
   * @returns Image type if detected (e.g., 'jpeg', 'png', ...), otherwise undefined.
   */
  public static getImageType(file: string): string | undefined {
    const extensionMatch = file.match(FileUtil.regexImageType);
    return extensionMatch ? extensionMatch[1].toLowerCase() : undefined;
  }

  /**
   * Checks whether the given directory contains the given file.
   * @param dir - Directory path
   * @param fileName - File name to check for
   * @returns true if the directory contains the file, otherwise false.
   */
  public static containsFile(dir: string, fileName: string): string | boolean {
    return dir && fileName && fs.existsSync(`${dir}/${fileName}`);
  }

  /**
   * Retrieves directories within the root that contain the specified index file.
   * @param root - Root directory path
   * @param indexFileName - Index file name (e.g., 'index.html')
   * @returns List of directories containing the index file.
   */
  public static getAppBuildDirs(root: string, indexFileName: string): string[] {
    const appBuildDirs: string[] = [];
    if (FileUtil.containsFile(root, indexFileName)) {
      appBuildDirs.push(root);
    } else {
      const children = fs.readdirSync(root);
      if (children) {
        for (const child of children) {
          if (FileUtil.containsFile(`${root}/${child}`, indexFileName)) {
            appBuildDirs.push(`${root}/${child}`);
          }
        }
      }
    }
    return appBuildDirs;
  }

  /**
   * Filters files to find images based on inclusion and exclusion criteria.
   * @param files - List of file names
   * @param include - Optional list of image names to include
   * @param exclude - Optional list of image names to exclude
   * @returns Map of image files and their types (e.g., 'jpeg', 'png', ...)
   */
  public static filterImages(
    files: string[],
    include?: string[],
    exclude?: string[]
  ): Map<string, string> {
    const images = new Map<string, string>();
    if (!files) {
      return images;
    }
    for (const file of files) {
      const imageType = FileUtil.getImageType(file);
      if (!imageType) {
        continue; // Not an image file
      }
      const fileName = FileUtil.getFileName(file)?.toLowerCase();
      if (
        exclude &&
        exclude.some(
          excludedFileName => fileName === excludedFileName.toLowerCase()
        )
      ) {
        continue; // Exclude this file
      }
      if (
        !include ||
        include.some(
          includedFileName => fileName === includedFileName.toLowerCase()
        )
      ) {
        images.set(file, imageType);
      }
    }
    return images;
  }

  /**
   * Extracts the name of a file without fingerprint and file type.
   * @param file - File name including fingerprint and/or file type
   * @returns Filename without fingerprint and file type
   */
  public static getFileName(file: string): string | undefined {
    const match = file.match(/((\.[- a-z0-9]*)?(.[\w\d]*){1})$/);
    return match && match.length > 0
      ? file.substr(0, file.indexOf(match[0]))
      : undefined;
  }
}
