// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  timeout: 60000,

  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: 2,

  reporter: [['html'], ['list']],

  use: {

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    navigationTimeout: 60000,

  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});