# Getting Captain working with Playwright

Starting from a [simple workflow that runs Playwright][workflow-before-captain], we want to

1. 🧪 Ensure Playwright produces JSON output

`npx playwright test --reporter=json` will produce Captain-compatible JSON output.
In addition, we tell playwright where to generate the results by setting the `PLAYWRIGHT_JSON_OUTPUT_NAME` environment variable.

```sh
PLAYWRIGHT_JSON_OUTPUT_NAME=tmp/results.json npx playwright test --reporter=json
```

2. 🔐 Create an Access Token

Create an Access Token for your organization within [Captain][captain] ([more documentation here][create-access-token]).

Add the new token as an action secret to your repository. Conventionally, we call this secret `RWX_ACCESS_TOKEN`.

3. 💌 Install the Captain CLI, and then call it when running tests

See the [full documentation on test suite integration][test-suite-integration].

```yaml
  - name: Run Playwright tests
    run: |
      captain run \
        --suite-id captain-examples-playwright \
        --test-results $PLAYWRIGHT_JSON_OUTPUT_NAME \
        -- \
        npx playwright test --reporter=json
    env:
      PLAYWRIGHT_JSON_OUTPUT_NAME: tmp/results.json
      RWX_ACCESS_TOKEN: ${{ secrets.RWX_ACCESS_TOKEN }}
```

4. 🎉 See your test results in Captain!

Take a look at the [final workflow!][workflow-with-captain]

[workflow-before-captain]: https://github.com/captain-examples/playwright/blob/basic-workflow/.github/workflows/playwright.yml
[captain]: https://account.rwx.com/deep_link/manage/access_tokens
[create-access-token]: https://www.rwx.com/docs/access-tokens
[workflow-with-captain]: https://github.com/captain-examples/playwright/blob/main/.github/workflows/ci.yml
[test-suite-integration]: https://www.rwx.com/captain/docs/test-suite-integration
