# install-ember-testem

_Codemod to install `ember-testem`_


## Usage

Step 1. Run codemod.

```sh
cd <path/to/your/project>
pnpx install-ember-testem
```

Step 2. Review the `build:test` and `test` scripts.


### Limitations

The codemod is designed to cover typical cases. It is not designed to cover one-off cases.

To better meet your needs, consider cloning the repo and running the codemod locally.

```sh
cd <path/to/cloned/repo>

# Compile TypeScript
pnpm build

# Run codemod
./dist/bin/install-ember-testem.js --root <path/to/your/project>
```


## Compatibility

- Node.js v22 or above


## Contributing

See the [Contributing](../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](./LICENSE.md).
