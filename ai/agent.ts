export async function generateSteps(requirement: string): Promise<string[]> {

  const prompt = `
Return ONLY a JSON array of steps.
No explanation.

Requirement: ${requirement}
`;

  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'mistral',
      prompt,
      stream: false
    })
  });

  const data = await res.json();
  const text = data.response.trim();

  console.log("AI RAW:", text);

  const match = text.match(/\[.*\]/s);

  if (!match) throw new Error("No JSON found in AI output");

  return JSON.parse(match[0]);
}