# I Do Not Consent
Whenever I open a private tab and open any site owned by Google, I get annoyed with the “Do you consent?” pop-up. While there are many addons that automatically click Accept, this addon instead clicks on Customize, disagrees to everything possible and confirms that.

## Requirements
+ Firefox 48.0 or higher. Tested in:
	+ `89.0.2 (64-bit)`
	+ `90.0.2 (64-bit)`

## Installation
Head over to https://github.com/TrojanerHD/i-do-not-consent/releases and click on the .xpi file of the newest release. There should be a popup asking whether you allow the addon to be installed. Click “Add”.

## Enabling/disabling in private tabs
During the installation, Firefox should offer you to enable the addon in private tabs. If you want to change it after the installation, head to your Extensions page by pressing `Ctrl + Shift + A` or using the menu bar (Tools → Add-ons and Themes), find this Addon, click on it and change the “Run in Private Windows” option accordingly

## Development
### Prerequesites
+ TypeScript
+ Git
+ Editor/IDE

### Compiling
Run `tsc -p .` in the root directory of this project

## Limitations / Additional Notes
+ This plugin will not update automatically. If it does not work for you, check the [releases](https://github.com/TrojanerHD/i-do-not-consent/releases) page to check if there is a new version
+ I do not guarantee to update this addon
+ Currently, this plugin only works for specifically domains ending with `.com`. Other countries's domains (like `.de`) are not supported

However, feel free to open [issues](https://github.com/TrojanerHD/i-do-not-consent/issues/new) if the extension does not work for you (make sure you have the newest version installed before reporting an issue) or if you have a suggestion