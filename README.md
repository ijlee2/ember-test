[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/ember-testem/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/ember-testem/actions/workflows/ci.yml)

# ember-testem

_Backward- and forward-compatible testing for Ember projects_


## Why?

Until now, testing Ember apps and addons required `ember-cli`, a monolith package that is written in JavaScript and has less relevance in v2 apps and v2 addons. Production projects may be at risk because tools like `ember-exam` and `@percy/ember` are built on `ember-cli`.

`ember-testem` aims to show that:

- The fix is minimal, backward-, and forward-compatible (apps with strict resolver, apps without `ember-cli`).
- We can keep using `qunit` and `testem`. No need to switch to another test framework and rewrite tests.
- It works with battle-tested packages like `@embroider/try`, `@percy/ember`, `ember-a11y-testing`, `ember-qunit`, `ember-test-selectors`, `miragejs`, and `qunit-dom`.


## Quickstart

From the root of your Ember app or addon, run `install-ember-testem` to set up `ember-testem`.

```sh
pnpx install-ember-testem
```


## Package overview

- [ember-testem](./packages/ember-testem/README.md)
- [install-ember-testem](./packages/install-ember-testem/README.md)


## Compatibility

- Node.js v22 or above


## Contributing

See the [Contributing](./CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](./LICENSE.md).
