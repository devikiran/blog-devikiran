---
slug: chrome-browser
title: Google Deprecating 3rd Party Cookies
authors: devi
date: 2023-11-23
tags: [cookie, google]
---

Google has announced it will begin phasing out support for third-party cookies in Chrome by disabling them for 1% of users starting in Q1 2024.

This initial deprecation comes ahead of a broader phase-out for all Chrome users by Q3 2024.

There are many blog posts which talks about how the above decision will impact Advertisers and Publishers, however in this post we will talk about how it will impact a normal software developer like me.

So 3rd Party Cookies are the cookies that are sent for sites other than the one you are currently in. 

Say you went to facebook dot com and logged in. Your browser stores a cookie for the facebook domain such that if you visited it again it sends the cookie to the server (over http request) so you are auto-logged in (given that HTTP is stateless and we need to transfer the state with every request, the ST in REST)

But the question is when should the browser send the cookie? The web consists of pages and each page has resources referenced by other domains. 

Imagine you visited thepiratebay and in that site there is a javascript that makes a POST request to facebook to update your status. Given that you have a cookie with facebook, should the browser send the cookie along side the POST request? If that happens the piratebay will be able to post on your behalf to your facebook profile by just visiting it.

Now this is extreme and it’s practically solved with CORS, however sometimes you need to enable CORS in some situations (think of an API gateway) but prevent sending cookies from the cross site. 

That is why Chome came up with the SameSite property back in 2020 which I covered in a video. The samesite cookie property controls when the browser should send the cookie if it belongs to another domain than the one you are currently In (the one that appears at the top of your browser address) here are the 3 different values for samesite. 

samesite=lax (default) means only send the cookie when a user clicks a link and causes a top level navigation. So if you are on the piratebay and there is a link to facebook, clicking that link will take you to facebook and facebook will recognize you, because the cookie was sent. 

samesite=strict: never send the cookie unless you are on the same site. So if you are on the piratebay and there is a link to facebook, clicking that link will take you to facebook but facebook will not recognize you. it will be as if you went incongito 

samesite=none: this always sends the cookie as long as CORS allows it. So if you are on the piratebay and there is a link to facebook, clicking that link will take you to facebook and facebook will recognize you. Also if you have referenced an image from your private facebook album in the piratebay, visiting the piratebay will view that image as long as you are logged in to facebook. 

The last one is the definition of 3rd party cookies. Those are getting deprecated by Google. So you can easily know if your website uses 3rd party cookies by looking for samesite=none and replace them by lax, of course things might break so you need to rewrite some code, or find another way to achieve the functionality. 

Of course like CORS, third party cookie make no sense in non browser environments so curl or other CLI’s and backends aren’t affected by this.
