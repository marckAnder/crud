const API_KEY = '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';
const URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function getCompletion(prompt) {
    const res = await fetch ('https://api.openai.com/v1/engines/davinci-codex/completions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer" + API_KEY
        },
        body: JSON.stringify({
            model: "gpt_3.5_turbo",
            messages: [
                {"role": "user", "content": prompt}
            ]
            //max_tokens: 150,
            //temperature: 0.9,
        }),
    });

    return await response.json();

}

const prompt = document.querySelector("#prompt")
const button = document.querySelector("#traducir")
const output = document.querySelector("#output")

button.addEventListener("click", async () => {
    if(!prompt.value) return
    
    const response = await getCompletion(prompt.value)
    output.innertHTML = response.choise[0].message.content
})
