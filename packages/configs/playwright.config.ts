/*

	@openmath/configs/playwright.config.ts

	This is used as the main 
	configuration file for Playwright.

	Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	}
};

module.exports = config;