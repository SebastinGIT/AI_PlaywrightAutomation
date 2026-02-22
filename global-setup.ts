import { exec } from 'child_process';

export default async function globalSetup() {
  console.log('Starting Ollama server...');

  exec('ollama serve');

  // wait few seconds for server boot
  await new Promise(r => setTimeout(r, 4000));

  console.log('Pulling mistral model...');
  exec('ollama pull mistral');
}