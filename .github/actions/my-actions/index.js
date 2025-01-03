const core = require('@actions/core');

try {
  // Get the input value
  const name = core.getInput('name');

  // Output a message
  console.log(`Hello, ${name}!`);

  // Set the output variable
  core.setOutput('greeting', `Hello, ${name}!`);
} catch (error) {
  core.setFailed(error.message);
}
