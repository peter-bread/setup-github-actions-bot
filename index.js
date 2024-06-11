const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  try {
    await exec.exec("git", [
      "config",
      "--global",
      "user.name",
      "github-actions[bot]",
    ]);
    await exec.exec("git", [
      "config",
      "--global",
      "user.email",
      "41898282+github-actions[bot]@users.noreply.github.com",
    ]);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
