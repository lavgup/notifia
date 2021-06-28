import got from 'got';
import constants from '../../util/constants.js';
import NotifiaError from '../../util/NotifiaError.js';

class DiscordProvider {
	constructor(url) {
		this.url = url;
	}

	async send(content, url = undefined) {
		const webhookUrl = url ?? this.url;

		if (!webhookUrl) {
			throw new NotifiaError(constants.discord.missing_url);
		}

		try {
			const res = await got.post(webhookUrl, {
				headers: {
					'Content-Type': 'application/json'
				},
				responseType: 'json',
				body: JSON.stringify({
					content
				})
			});

			return res.statusCode;
		} catch (err) {
			throw new NotifiaError(err.message);
		}
	}
}

export default DiscordProvider;