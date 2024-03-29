# Recharge Theme Starter
This file is meant to be purely a starter for any future Recharge project.

** Note ** 
This starter is based on Legacy Novum. Please confirm within Recharge this is suitable for your needs. 

## Files We Use
Within this starter we do not use every file. 
Recharge's setup requires everything to be it's own `HTML` file and they include them. 
We only use a few primary pages:
1. `subscriptions.html` → home page for account portal
2. `subscription.html` → individual subscription
3. `orders.html` → past and upcoming orders
4. `addresses.html` → account management

## How Our Files Interact With Recharge
Since Recharge requires a bunch of HTML files we don't overwrite many. Use the ones listed above (to start).
We also purposely do not build a single-page application as that would become overbearing to manage in Recharge's medicore admin.
Instead we initialize an individual Vue `app` on each page. From there we have boilerplate default functions to use within each page. 
Additionally, we have a helper config object within the `base.html` which will grow over time with functional helpers. 

## Config setup
Config namespace is `__theme`. The intention here is to keep it vague but also attempt to not overwrite existing namespaces.

Properties within the `__theme` space:

`settings`
Outputs `json` object from Recharge.

`headers`
Default headers for any `ajax` requests.

`token`
Token for any `ajax` requests. Function used is provided by Recharge

`endpoints`
Helpful endpoints that we often use. Recharge has a version of this within each theme but ours is more generic.

`customer`
Customer object provided by Recharge

`credit`
Credit card object with key/value properties provided by Recharge

`helpers`
Functions for generic help.

`sideBars`
This object powers the text for the sidebar title, subtitle and additional.
While it's not required it may be easiest to keep all here so its importing automatically for each page.

`states`
Pulls in all United States for shipping and billing forms.


##Tailwind Config
This is the so fucking cool. Tailwind allows us to import the configuration object directly and can be used and consumsed within our code. 
Read more about it here: [https://tailwindcss.com/docs/installation/play-cdn](https://tailwindcss.com/docs/installation/play-cdn)
