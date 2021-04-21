import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as os from "os";

async function run(): Promise<void> {
  try {
    const platforms = {
        linux: 'linux',
        darwin: 'darwin',
        win32: 'windows',
    };

    const runnerPlatform = os.platform();

    if (!(runnerPlatform in platforms)) {
      throw new Error(
        "Unsupported operating system - Appium is only released for Darwin, Linux and Windows"
      );
    }
    const version: string = core.getInput("appium-version");
    if (version) {
      core.info(`Installing appium ${version}...`);
      await exec.exec(`npm install -g appium@${version} --unsafe-perm=true --allow-root`);
    } else {
      core.info('Installing appium...');
      await exec.exec('npm install -g appium --unsafe-perm=true --allow-root');
    }
    core.info('appium has been installed.');
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
