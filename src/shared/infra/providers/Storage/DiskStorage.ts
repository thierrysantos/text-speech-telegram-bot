import fs from 'fs';
import { ApplicationConfig } from '../../../../config';
import { IStoreRepository } from '../../../providers/Storage/IStorage';

export const store: IStoreRepository = async ({buffer, filename}) => {
  const filePath = `${ApplicationConfig.storagePath}/${filename}`;
  await fs.promises.writeFile(filePath, buffer);
  return `${ApplicationConfig.server.baseURL}/files/${filename}`;
};