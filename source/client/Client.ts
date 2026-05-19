import {MethodsOfClient} from "./methods/index.ts";
import {RoutesOfClient} from "./routes/index.ts";
export class Client {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.methods = new MethodsOfClient(baseUrl, parameters);
		this.routes = new RoutesOfClient(baseUrl, parameters);
	}
	public readonly methods: MethodsOfClient;
	public readonly routes: RoutesOfClient;
}
