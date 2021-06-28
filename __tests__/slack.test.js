import SlackProvider from '../src/providers/slack';
import { slack } from './config.json';
import constants from '../src/util/constants';
import NotifiaError from '../src/util/NotifiaError';

const provider = new SlackProvider();

describe('slack', () => {
	test('success', async () => {
		const resStatus = await provider.send('Test.', slack.url);
		expect(resStatus).toStrictEqual(200);
	});

	test('invalid webhook', async () => {
		await expect(provider.send('Test.', 'fakeurl')).toThrow(NotifiaError);
	});

	test('missing webhook', async () => {
		const err = new NotifiaError(constants.slack.missing_url);
		await expect(provider.send('Test.')).toThrow(err);
	});
});