class NotifiaError extends Error {
	constructor(message) {
		super(message);
	}

	get name() {
		return 'NotifiaError';
	}
}

export default NotifiaError;