// AI brain (mock for now)
// Later you can integrate OpenAI API

export async function generateSteps(requirement: string): Promise<string[]> {

  console.log("Requirement:", requirement);

  return [
    "goto login",
    "type username",
    "type password",
    "click login",
    "verify dashboard"
  ];
}
