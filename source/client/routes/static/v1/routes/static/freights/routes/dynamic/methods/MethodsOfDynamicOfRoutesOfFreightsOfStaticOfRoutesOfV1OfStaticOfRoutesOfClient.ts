export class MethodsOfDynamicOfRoutesOfFreightsOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(
		baseUrl: string,
		parameters: readonly [freightId: string],
	) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	/**
	 */
	public async delete(body: unknown, apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/freights/${this.parameters[0]}`,
			{
				body: JSON.stringify(body, null, `	`),
				headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
				method: `DELETE`,
			},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	/**
	 */
	public async get(apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/freights/${this.parameters[0]}`,
			{headers: {"X-Api-Key": apiKey}, method: `GET`},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
	private readonly parameters: readonly [freightId: string];
	/**
	 */
	public async put(body: unknown, apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/freights/${this.parameters[0]}`,
			{
				body: JSON.stringify(body, null, `	`),
				headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
				method: `PUT`,
			},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
