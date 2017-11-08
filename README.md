# Azure Function using Application Insights

There's not much here. This is a small project I threw together to investigate an issue I was seeing with application insights.

## Setup

1. Create an App Insights instance
1. Grab the instrumentation key
1. Add the instrumentation key to your `local.settings.json` (for local development) and to the Application Settings of your Azure Functions app
1. You're done

## What's here?

When you run this locally, you can then see events and metrics being captured by Application Insights within the Azure Portal

## The Functions

There are a number of functions within this app:

- `FirstFunction` returns a 200, and a message. It should show up as a "successful request" in app insights.
- `SecondFunction` returns a 200, and a message. It should show up as a "successful request" in app insights.
- `FailFunction` returns a 400, and a message. It should show up as a "failed request" in app insights.

## Useful links

- A Node.js function, using app insights: <https://github.com/christopheranderson/azure-functions-app-insights-sample/blob/master/process-item/index.js>

- using App Insights with Azure Functions: <https://github.com/Azure/Azure-Functions/wiki/App-Insights>

