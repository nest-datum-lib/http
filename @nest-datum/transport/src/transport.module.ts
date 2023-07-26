
export class TransportModule {
	static async listen(Module, callback = () => {}) {
		return Module;
	}
}
