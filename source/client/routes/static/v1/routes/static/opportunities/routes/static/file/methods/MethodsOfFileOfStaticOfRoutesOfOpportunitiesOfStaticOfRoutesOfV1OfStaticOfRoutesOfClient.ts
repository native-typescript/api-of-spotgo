export class MethodsOfFileOfStaticOfRoutesOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	/**
	Endpoint to provide file based inputs it's also accepts images, pdf, excels. */
	public async post(body: unknown, apiKey: string): Promise<unknown> {
		const response: Response = await fetch(
			`${this.baseUrl}/v1/opportunities/file`,
			{
				body: JSON.stringify(body, null, `	`),
				headers: {"Content-Type": `application/json`, "X-Api-Key": apiKey},
				method: `POST`,
			},
		);
		const bodyOfResponse: unknown = await response.json();
		return bodyOfResponse;
	}
}
