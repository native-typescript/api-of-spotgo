import {z} from "zod";
export const schemaOfBodyOfResponseToGetOfMethodsOfDynamicOfRoutesOfOrdersOfStaticOfRoutesOfV1OfStaticOfRoutesOfClient =
	z.strictObject({
		errorCode: z.literal(`input_not_freight`),
		message: z.string().nonempty(),
		sequenceId: z.number().nonnegative(),
		status: z.literal(`Failed`),
	});
