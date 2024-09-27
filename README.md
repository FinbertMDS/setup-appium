# `Appium` GitHub Action

This repository contains an action for use with GitHub Actions, which installs a specified version of  the `appium`.

## Requirements
This action requires the following dependencies to be installed as part of your workflow:
- `actions/setup-node`
## Usage

Install the latest version of the Appium:

```yaml
- name: Use Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 20
- name: Install Appium
  uses: FinbertMDS/setup-appium@latest
```

Install a specific version of the Appium:

```yaml
- name: Use Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 20
- name: Install Appium
  uses: FinbertMDS/setup-appium@latest
  with:
    appium-version: "1.20.2"
- run: |
    appium -v
    appium & # run appium in background
```
