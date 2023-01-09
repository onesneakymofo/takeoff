# Takeoff 🚀
### Headless Component Library

Takeoff is a set of reusable, portable components.

* [Installing](#installing)
    + [About](#about)
    + [Packaging](#packaging)
    + [Changelogs and versioning](#changelogs-and-versioning)
    + [Component Design](#component-design)
* [Writing a new component](#writing-a-new-component)
* [Creating a Changeset](#creating-a-changeset)
* [Publishing a package](#publishing-a-package)
* [Resources](#resources)

## Installing

To install Takeoff and all of its components, simply run 
```
$ yarn add @onesneakymofo/test-system @emotion/react@^11 @emotion/styled@^11 twin.macro
```

Or if you want to install just a single component, run
```
$ yarn add @onesneakymofo/test-button @emotion/react@^11 @emotion/styled@^11 twin.macro
```

### About

Takeoff is a multi-package (monorepo) library. Its infrastructure is primarily composed from `preconstruct` and `yarn workspaces` for packaging, `changesets` for changelog creation, and `tailwind`, `emotion` and `twin.macro` for component design.

### Packaging
Using `preconstruct` and `yarn worksapces`, we are able to write a top-level `package.json` that holds two pieces of configuration which converts the library to a multi-package library:

```javascript
// package.json
{
  ...
  "workspaces": {
    "packages": [
      "packages/*"
    ]
  },
  ...
  "preconstruct": {
    "packages": [
      "packages/*"
    ]
  },
  ...
}
```

This gives us the ability to write individual packages underneath our `/packages` folder. Running a few simple commands keeps everything nice and tidy for publishing. To learn more, please visit https://preconstruct.tools/

### Changelogs and versioning
`Changesets` gives us the ability to maintain versioning through all of the packages that we create and update. It even knows to update the `test-system` `package.json` once you change an individual package.  To learn more, please visit https://github.com/changesets/changesets

### Component Design
`Tailwind`, `emotion`, and `twin.macro` are at the heart of our components. To learn more, please visit https://tailwindcss.com/, https://emotion.sh/docs/styled, and https://github.com/ben-rogerson/twin.macro

## Writing a new component
To write a new component, create a folder under `/packages`. Let's use `ProgressBar` as an example. You're going to need to create a new folder called `ProgressBar` and run `yarn init`. Make sure the name is @onesneakymofo/test-progress-bar, index.js is your entry point, and version is 0.0.0:
```
$ cd packages
$ mkdir ProgressBar
$ cd ProgressBar
$ yarn init
> question name (ProgressBar): @onesneakymofo/test-progress-bar
> question version (1.0.0): 0.0.0
> question description: Progress Bar
> question entry point (index.js):
> question repository url:
> question author: Chris Autwell
> question license (MIT):
> question private:
```
At this point, walk through the steps that are provided - make sure to set your version to `0.0.0`. Next, you will need to do some setup to get ready for package building
```
touch index.js
mkdir src
cd src
touch index.js
```

You should now have enough in place to run `preconstruct`:

```
preconstruct fix && preconstruct dev
```

Lastly, under `src/index.js`, you will need to export / import for bubbling:
```
import { ProgressBar } from './ProgressBar';

export { ProgressBar };
```
Once done, you can add the code necessary to create a `ProgressBar` component under `src/ProgressBar.js`

The last piece of the puzzle is to add your new package to the `test-system` package. Open `./packages/System/src/index.js` and add your new package:

```
export * from "@onesneakymofo/test-progress-bar";
```

## Creating a Changeset

After you have created or updated a component, you will need need to add a changelog. 

```
$ yarn changeset
🦋  Which packages would you like to include? …
✔ changed packages
  ✔ @onesneakymofo/test-badge
  ✔ @onesneakymofo/test-button
  ✔ @onesneakymofo/test-load-spinner
  ✔ @onesneakymofo/test-system
✔ unchanged packages
  ✔ @onesneakymofo/test-progress-bar
```

Following our `ProgressBar` example in creating a component, select both `@onesneakymofo/test-system` and `@onesneakymofo/test-progress-bar` using your arrow keys and hitting spacebar. The checkmark will turn green meaning you selected it. Hit `enter` to continue

At this point, `changeset` will ask you if this was a `major`, `minor`, or `patch` release.  Skip both `major` and `minor` by hitting enter. 
```
🦋  Which packages should have a major bump? · No items were selected
🦋  Which packages should have a minor bump? · No items were selected
🦋  The following packages will be patch bumped:
🦋  @onesneakymofo/test-system@0.0.2, @onesneakymofo/test-progress-bar@0.0.0
```
This will automatically select a `patch` release for you where you will be prompted to type a Summary. Type `Created ProgressBar component.` :
```
🦋  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor
🦋  Summary › Created ProgressBar component
```
`changeset` will then finally give you a "Are you sure prompt?"
```
🦋  === Releasing the following packages ===
🦋  [Patch]
🦋    @onesneakymofo/test-system
🦋    @onesneakymofo/test-progress-bar
🦋  ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
🦋  ║                                                      ========= NOTE ========                                                       ║
🦋  ║All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.║
🦋  ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
🦋  Is this your desired changeset? (Y/n) › true
```
Hit enter to continue. Now we have all of the steps necessary to publishing our package to npm.

You can individually write changesets instead of lumping if you prefer as well. See https://github.com/changesets/changesets for more information.

## Publishing a package 
Once a package has been created or updated and it has a changeset, a Github action will detect the changeset and update the version accordingly.

Once the changeset has been updated, a new pull request will be created called `Version Packages`. Once this pull request is merged, it will automatically publish your new created or recently updated component to https://www.npmjs.com/package/@onesneakymofo

Once your package has been published, you can freely use it wherever you want.


## Resources
* https://preconstruct.tools/
* https://github.com/changesets/changesets
* https://tailwindcss.com/
* https://emotion.sh/docs/styled
* https://github.com/ben-rogerson/twin.macro




