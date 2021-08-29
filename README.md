# Felvin Search - Instant Apps

> Your search box is now an app store! 🎉 - [Felvin](https://felvin.com)

<!-- Concern: Does this convey that these apps are running on a website? Gif is  -->

|                                                                                                                                                                                             |                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<img  alt="snippetApp" src="https://raw.githubusercontent.com/felvin-search/instant-apps/master/.github/assets/readme/currency-example.png">](https://felvin.com/search?q=500+usd+to+inr)  | [<img  alt="snippetApp" src="https://raw.githubusercontent.com/felvin-search/instant-apps/master/.github/assets/readme/json-example.png">](https://felvin.com/search?q=format+json)       |
| [<img  alt="snippetApp" src="https://raw.githubusercontent.com/felvin-search/instant-apps/master/.github/assets/readme/dictionary-example.png">](https://felvin.com/search?q=gonzo+meaning) | [<img  alt="snippetApp" src="https://raw.githubusercontent.com/felvin-search/instant-apps/master/.github/assets/readme/timer-example.png">](https://felvin.com/search?q=10+minutes+timer) |

## How to use?

[felvin.com](https://felvin.com)

## What are instant apps?

Instant apps are the small interactive cards which you get for your search queries.

We can build instant apps for all kinds of use cases like dictionary, checking football scores, stock prices or notes from your notion or even search history from company slack or anything!

Try them out live - [felvin.com](https://sandbox.felvin.com/search?q=gonzo%20meaning)

## Contributing

There are many ways in which you can contribute to the project

- Try creating a new app, it's fun and it's a new kind of superpower. 😎
- Take a look at [existing suggestions](https://github.com/felvin-search/instant-apps/issues?q=is%3Aopen+is%3Aissue+label%3Aproposal) of new apps and implement one!
- [Suggest a new instant app](https://github.com/felvin-search/instant-apps/issues/new/choose), anything useful for you is a valid suggestion.
- Add features to existing apps. See all [open issues](https://github.com/felvin-search/instant-apps/issues?q=is%3Aopen+is%3Aissue).

<!--
```sh
git clone ....
cd something
```
 -->

## How to create a new app?

Anyone can create an instant app! Felvin Search is a platform - create apps for yourself, as well as others.

- Fork the repository
- Run `./utils/create_sample_app.sh`.
- Update your new app, commit and send a pull request!

<!--- Insert a minute explainer --->

Checkout our [CONTRIBUTING](./CONTRIBUTING.md) guide for more details.

## Anatomy of Snippet App

A snippet app is a Javascript object with following schema:

- `name`
- `description`
- `queryToData`: A function which takes a search query and converts into any data which could be displayed.
- `Component`: The React component of the app. The data from `queryToData` is passed as a prop.

Read more about the [architecture](https://github.com/felvin-search/docs/blob/master/rfcs/001_snippet_apps.md).

## Available Apps

<!-- Expand this with screenshots and example queries, as well as author(s). Write a script to generate this section automatically. -->

See [src/apps/](src/apps).

## Community

- [Discord chatroom](https://discord.gg/2W8PgyaxHA) - Join us on Discord to engage.
- Give us a star ⭐️ - if you appreciate what we are doing, we would love a star on GitHub ❤️
