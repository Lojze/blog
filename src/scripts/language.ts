export async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/SnypzZz/Llama2-13b-Language-translate",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}