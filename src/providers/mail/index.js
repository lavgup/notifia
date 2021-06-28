import { createTransport } from 'nodemailer';
import NotifiaError from '../../util/NotifiaError.js';

class MailProvider {
	constructor(host, port, secure, auth) {
		this.host = host;
		this.port = port;
		this.secure = secure;
		this.auth = auth;
	}

	init() {
		this.transport = createTransport({
			host: this.host,
			port: this.port,
			secure: this.secure,
			auth: this.auth
		});

		return this;
	}

	send(options) {
		try {
			return this.transport?.sendMail({
				from: options.from,
				to: options.to,
				cc: options.cc,
				bcc: options.bcc,
				subject: options.subject,
				text: options.text,
				html: options.html
			});
		} catch (err) {
			throw new NotifiaError(err.message);
		}
	}
}

export default MailProvider;