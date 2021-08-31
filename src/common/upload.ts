/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import multer from 'multer';
import crypto from 'crypto';
import { resolve } from 'path';

const upload = (folder: string) => {
  const storage = multer.diskStorage({
    destination: resolve(__dirname, '..', '..', folder),
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  });

  return { storage };
};

export { upload };
