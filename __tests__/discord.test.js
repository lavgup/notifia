import DiscordProvider from '../src/providers/discord';
import { discord } from './config.json';
import constants from '../src/util/constants';
import NotifiaError from '../src/util/NotifiaError';

const provider = new DiscordProvider();

describe('discord', () => {
	test('success', async () => {
		const resStatus = await provider.send('Test.', discord.url);
		expect(resStatus).toStrictEqual(204);
	});

	test('invalid webhook', async () => {
		await expect(provider.send('Test.', 'fakeurl')).rejects.toThrow(NotifiaError);
	});

	test('no webhook', async () => {
		const err = new NotifiaError(constants.discord.missing_url);
		await expect(provider.send('Test.')).rejects.toThrow(err);
	})
});