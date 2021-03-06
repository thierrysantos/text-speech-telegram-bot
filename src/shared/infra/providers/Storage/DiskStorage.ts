import fs from 'fs';
import { ApplicationConfig } from '@config/env';
import {
  IStoreRepository,
  IGetRepository,
} from '@shared/providers/Storage/IStorage';

export const store: IStoreRepository = async ({ buffer, filename }) => {
  const filePath = `${ApplicationConfig.storagePath}/${filename}`;
  await fs.promises.writeFile(filePath, buffer);
  return `${ApplicationConfig.server.baseURL}/files/${filename}`;
};

export const get: IGetRepository = async ({ path }) => {
  const file = await fs.promises.readFile(path);
  return file;
};
