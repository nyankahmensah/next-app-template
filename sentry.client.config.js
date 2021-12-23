// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { Integrations } from "@sentry/tracing";
import config from "./src/config"
import { excludeGraphQLFetch } from 'apollo-link-sentry';

Sentry.init({
  dsn: config.sentry.dsn,
  integrations: [new Integrations.BrowserTracing({
    traceFetch: false
  })],
  beforeBreadcrumb: excludeGraphQLFetch,
  enabled: config.env === "production",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
