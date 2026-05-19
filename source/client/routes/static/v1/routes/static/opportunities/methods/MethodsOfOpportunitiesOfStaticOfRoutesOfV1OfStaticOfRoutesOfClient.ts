import {handleUnexpectedStatusCode} from "../../../../../../../../handling-unexpected-status-code/index.ts";
import type {ResponseOfClient} from "../../../../../../../../response/index.ts";
export class MethodsOfOpportunitiesOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient {
	public constructor(baseUrl: string, parameters: readonly []) {
		this.baseUrl = baseUrl;
		this.parameters = parameters;
	}
	private readonly baseUrl: string;
	private readonly parameters: readonly [];
	/**
	Endpoint to provide text base input for freight conversion. */
	public async post(
		file: null | Uint8Array<ArrayBuffer>,
		fileName: null | string,
		fileType: `Image` | `Pdf`,
		type: `Cmrs` | `Fines` | `Insurances` | `Invoices` | `Receipts`,
		metadata: null | {readonly [key: string]: null | string},
	): Promise<ResponseOfClient<string, 503>> {
		const response: Response = await fetch(`${this.baseUrl}/v1/opportunities`, {
			body: JSON.stringify(
				{
					file:
						file === null ? null : (
							file.toBase64({alphabet: `base64`, omitPadding: false})
						),
					fileName: fileName,
					fileType: fileType,
					metadata: metadata,
					type: type,
				},
				null,
				`	`,
			),
			headers: {"Content-Type": `application/json`},
			method: `POST`,
		});
		switch (response.status) {
			case 503: {
				const bodyOfResponse: string = await response.text();
				const bodyOfResponseOfClient: string = bodyOfResponse;
				const responseOfClient: ResponseOfClient<string, 503> = {
					body: bodyOfResponseOfClient,
					status: response.status,
				};
				return responseOfClient;
			}
			default: {
				handleUnexpectedStatusCode(response);
			}
		}
	}
}
