import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    reporter: [['html'],
    ['json', { outputFile: 'test-results.json' }], //necesario para que se cree el payload en dry run - comentar
    ['playwright-xray',
        {
            jira: {
                url: 'https://your-jira-url',
                type: 'cloud',
                apiVersion: '1.0',
            },
            cloud: {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                // Optional: xrayUrl: '' if the xray region needs to be specified
            },
            projectKey: process.env.JIRA_PROJECT_KEY || 'JIRA_CODE',
            testPlan: process.env.JIRA_TEST_PLAN || 'JIRA_CODEXXXXX',
            // runResult: true,
            debug: false,
            dryRun: true,
        },
    ],
    ],
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        baseURL: 'http://localhost:3000',

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