import MailProvider from '../src/providers/mail';
import { mail } from './config.json';

const provider = new MailProvider(mail.smtp, mail.port, mail.secure, mail.auth);

// These tests should be improved
// Good first issue
describe('mail', () => {
	test('init() returns class', () => {
		expect(provider.init()).toBeInstanceOf(MailProvider);
	});
});