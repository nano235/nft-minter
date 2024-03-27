export default function errorHandler(error: any) {
	try {
		const msg = getErrorDetails(error?.cause || error?.message);
		if (msg) return msg;

		if (error?.name === "TransactionExecutionError")
			return "User Rejected Transaction";
	} catch (error) {
		return "An error occurred performing operation";
	}
}

function getErrorDetails(errorMessage: string) {
	if (!errorMessage) return null;
	const messageRegex = /Message: (.*)/i;
	const detailsRegex = /Details: (.*)/i;
	const reasonRegex = /Reason: (.*)/i;

    let match = messageRegex.exec(errorMessage);
    if (match && match.length > 1) {
        return match[1];
    }

    match = detailsRegex.exec(errorMessage);
    if (match && match.length > 1) {
        return match[1];
    }

	match = reasonRegex.exec(errorMessage);
	if (match && match.length > 1) {
		return match[1];
	}


	return null;
}
