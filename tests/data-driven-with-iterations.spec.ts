import { expect, test } from '@playwright/test';
import { setXrayMetadata } from 'playwright-xray';


test.describe('Data driven test example with iterations', () => {
  for (const name of ['Bob', 'George', 'Linda']) {
    test(`XRAYTEST-123 | greet ${name}`, async ({ }, testInfo) => {
      setXrayMetadata(testInfo, { parameters: { name } });
      expect(name).toEqual(name);
    });
  }
});