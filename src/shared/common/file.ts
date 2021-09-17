/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fs from 'fs';

const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }

  await fs.promises.unlink(filename);
};

export { deleteFile };