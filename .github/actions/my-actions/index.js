const core = require('@actions/core');
const exec = require('@actions/exec');
const path = require('path');

async function run() {
  try {
    // Get inputs from the action.yml file
    const nodeVersion = core.getInput('node_version');
    const angularCommand = core.getInput('angular_command');
    const projectDirectory = core.getInput('project_directory') || '.';

    // Set up the environment
    core.info(`Setting up Node.js version: ${nodeVersion}`);
    await exec.exec(`nvm install ${nodeVersion}`);
    await exec.exec(`nvm use ${nodeVersion}`);

    // Install dependencies
    core.info(`Installing dependencies in ${projectDirectory}`);
    await exec.exec('npm install', [], { cwd: projectDirectory });

    // Run the Angular command
    core.info(`Running Angular command: ng ${angularCommand}`);
    const result = await exec.exec(`ng ${angularCommand}`, [], { cwd: projectDirectory });

    if (result === 0) {
      core.setOutput('success', 'true');
    } else {
      core.setOutput('success', 'false');
      core.setFailed('Angular command failed');
    }
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
