import 'dotenv/config'
import { InstallGlobalCommands } from './utils.js';

async function getRegisteredCommands() {
    try {
      const response = await fetch(
        `https://discord.com/api/v10/applications/${process.env.APP_ID}/commands`,
        {
          headers: {
            Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
          },
        }
      );
  
      const commands = await response.json();
      console.log('Registered Commands:', commands);
    } catch (error) {
      console.error('Error fetching commands:', error);
    }
  }

const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const SUMMARIZE_COMMAND = {
  name: 'summarize',
  description: 'Create a summary of recent messages using AI',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
}

const ALL_COMMANDS = [TEST_COMMAND, SUMMARIZE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);

getRegisteredCommands();