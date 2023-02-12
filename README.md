# Digital Ocean Function in Typescript

## Introduction

This repository contains a function written in Typescript. You can deploy it on DigitalOcean's App Platform as a Serverless Function component.


### Requirements

* You need a DigitalOcean account. If you don't already have one, you can sign up at [https://cloud.digitalocean.com/registrations/new](https://cloud.digitalocean.com/registrations/new).

## Deploying the Function

Clone the repo. Make sure `doctl` is setup in your system.You can get it installed from [here](https://docs.digitalocean.com/reference/doctl/how-to/install/). Once doct is setup, run the commant `doctl serverless deploy gh-app-serverless`

## Using the Function
Go to DigitalOceanFunction, under function settings, 
1. Increase the timeout - 20000ms
2. Increase the memory - 512MB
3. Set environment variables. App will look for these required variables-PRIVATE_KEY,OWNER,APP_ID,INSTALLATION_ID. Optional variable-COMMENT

## Registering the Github App

Checkout [these](https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app) and follow. You will find APP_ID, INSTALLTION_ID and be able to generate a PRIVATE_KEY once the app is created.