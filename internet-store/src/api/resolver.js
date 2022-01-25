const resolve = async (promise) => {
    const resolved = {
        data: null,
        error: null,
    };

    try {
        const response = await promise;

        resolved.data = await response.data;
    } catch (e) {
        resolved.error = e;
    }

    return resolved;
};

export default resolve;
