import { ITextRepository } from '../repositories/TextRepository/ITextRepository';
import { IGetRepository } from '@shared/providers/Storage/IStorage';

const toText = (
  textRepository: ITextRepository,
  getAudioContent: IGetRepository,
) => async (filePath: string) => {
  const buffer = await getAudioContent({ path: filePath });

  const response = await textRepository({
    audio: {
      content: buffer,
    },
    config: {
      // OGG
      encoding: 6,
      languageCode: 'pt-br',
      sampleRateHertz: 16000,
    },
  });

  return response;
};

export default toText;
