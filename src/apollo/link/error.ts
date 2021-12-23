import { onError } from "@apollo/client/link/error";
import { SentryLink } from 'apollo-link-sentry';
import * as Sentry from "@sentry/react";
import config from "config";


const sentryMiddleware = new SentryLink({
  uri: config.apollo.uri,
  setTransaction: true,
  setFingerprint: true,
})

const errorMiddleware = onError((errors) => {
  if (errors.graphQLErrors)
    errors.graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (errors.networkError) console.log(`[Network error]: ${errors.networkError}`);
  Sentry.captureException(errors)
}).split(
  () => config.env === "production",
  sentryMiddleware
)

export default errorMiddleware;