import { v4 as uuid } from 'uuid';
import { ISpeechRepository } from '../repositories/SpeechRepository/ISpeechRepository';
import convertToABuffer from './convertToBuffer';
import { IStoreRepository } from '@shared/providers/Storage/IStorage';

const toSpeechLink = (
  speechRepository: ISpeechRepository,
  storageStoreRepository: IStoreRepository,
) => async (text: string) => {
  const response = await speechRepository({
    audioConfig: { audioEncoding: 3 },
    input: {
      text,
    },
    voice: {
      languageCode: 'pt-BR',
      name: 'pt-BR-Standard-A',
    },
  });

  const buffer = convertToABuffer(response);

  const path = await storageStoreRepository({
    buffer,
    filename: `${uuid()}.mp3`,
    isPublic: true,
  });

  return path;
};

export default toSpeechLink;
