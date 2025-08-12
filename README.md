# Xray-Playright-Integration-TS
# Playwright + Xray Integration Example

This project demonstrates how to integrate **Playwright** automated tests with **Xray** for Jira, using the `playwright-xray` reporter.

## 📌 Features
- End-to-end testing with Playwright
- Automatic test result upload to Xray via API
- Environment variables for secure credentials
- Example test cases for quick start

---

## 🚀 Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/playwright-xray-integration.git
cd playwright-xray-integration

2️⃣ Install dependencies

npm install

3️⃣ Configure environment variables
Create a .env file based on .env.example:

CLIENT_ID=your_xray_client_id             //
CLIENT_SECRET=your_xray_client_secret    // <--These credentials are created on Github Actions settings, 
                                        //    for more info please see https://docs.github.com/es/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets -->
JIRA_URL=https://your-jira-url
PROJECT_KEY=JIRA_CODE
TEST_PLAN=JIRA_CODEXXXXX

4️⃣ Run tests

npx playwright test


📊 Running with Xray Integration
The playwright-xray reporter will:

Authenticate with Xray

Upload test results linked to the given Test Plan

Optionally run in dryRun mode for debugging

Example config in playwright.config.ts:

reporter: [
  ['dot'],
  ['playwright-xray', {
    jira: { url: process.env.JIRA_URL, type: 'cloud', apiVersion: '1.0' },
    cloud: { client_id: process.env.CLIENT_ID, client_secret: process.env.CLIENT_SECRET },
    projectKey: process.env.PROJECT_KEY,
    testPlan: process.env.TEST_PLAN,
    runResult: true,
    debug: true,
    dryRun: false
  }]
]

📂 Project Structure

tests/
  example.spec.ts    # Passing test
  login.spec.ts      # Example with assertions
utils/
  xray-helper.ts     # Optional: helper for custom payloads
.env.example
playwright.config.ts

🛠 Troubleshooting
No payload is generated → ensure dryRun: false in config.

Invalid credentials → check .env matches your Xray API credentials.

No tests appear in Xray → verify testPlan and projectKey.