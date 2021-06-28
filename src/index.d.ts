// <reference types="node" />
declare module 'notifia' {
	interface Auth {
		user: string;
		pass: string;
	}

	interface EmailOptions {
		from: string;
		to: string;
		cc: string;
		bcc: string;
		subject: string;
		text: string;
		html: string;
	}

	export class DiscordProvider {
		url: string | undefined;

		constructor(url?: string);
		send(content: string, url?: string);
	}

	export class SlackProvider {
		url: string | undefined;

		constructor(url?: string);
		send(content: string, url?: string);
	}

	export class MailProvider {
		host: string;
		port: number;
		secure: boolean;
		auth: Auth;

		constructor(host: string, port: number, secure: boolean, auth: Auth);

		init();
		send(options: EmailOptions);
	}
}