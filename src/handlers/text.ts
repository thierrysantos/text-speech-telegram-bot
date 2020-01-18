/* eslint-disable camelcase */
import { ContextMessageUpdate } from 'telegraf';
import { fromTextToSpeech } from '../data/repositories';

function factory() {
	return async (ctx: ContextMessageUpdate) => {
		try {
			const source = await fromTextToSpeech(ctx.message?.text ?? '');
			await ctx.replyWithVoice(
				{ source },
				{
					caption: 'From audio to text',
					reply_to_message_id: ctx.message?.message_id,
				}
			);
		} catch (error) {
			return ctx.reply('An error ocurrs when try to convert text to audio');
		}
	};
}

export default { factory };