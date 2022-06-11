# Table of Contents

* [Overview](https://github.com/claytonkreisel/poke-react-exercise#overview)
* [Getting Started](https://github.com/claytonkreisel/poke-react-exercise#getting-started)
* [Codebase Documentation](https://github.com/claytonkreisel/poke-react-exercise#codebase-documentation)
* [Design Components](https://github.com/claytonkreisel/poke-react-exercise#design-components)
* [End Product Requirements](https://github.com/claytonkreisel/poke-react-exercise#end-product-requirements)

# Overview

The purpose of this repo is to help you prepare for a technical coding interview. Typically this is done online while a tech interviewer watches in and you are "timeboxed." You are given a requirements doc (which is at the bottom of this readme) and told to work your way through it. In an ideal situation you are provided with the link to the repo and the requirements doc a little before the interview. Usually this is somewhere in the realm of 2-24 hours and you are told to become familiar with the project to get your environment setup and ready to go. This is also a good opportunity for you to start working out any technical desing or architecture using flowcharts and/or task lists.

In this exercise you are interviewing for a software engineer position and you have elected to do your interview in ReactJS. You are expected to meet the be able to show off your skills and complete the work in a window of 3 hours from the time you start writing your first line of code. You have been given the link to this repo 4 hours before your interview. In order to best simulate this inverview it is best to STOP reading here, unless you are ready to commit the next 7 hours (although 3 is all that is needed once you are comfortable with the scope of the ask) or so to complete this exercise. If you are simply wanting to exercise in a more casual and less simulated manner then you can proceed at your leisure.

An acceptable branch commit can be found on the `excercise-clayton_kreisel` branch. On that branch you will be able to find a link in the top of the README.md file that will show you how I completed the exercise and will also give you some tips on how to rock your technical interview. NOTE: This should only be used after you have completed the exercise to learn from, DO NOT look at it before the end of your exercise.

Also a working example of the app can be found here. Once again you should attempt to complete the exercise before you look at this example, although seeing the MVP prior to the end of your exercise is not going to keep you from learning from this exercise.

Good luck and happy coding...

# Getting Started

In order to setup the exercise you will need to clone this project to your local machine. You will need to have `npm` installed in order for this app to function correctly. If you have not installed `npm` please do so [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

After you have cloned this repo you will need to create a branch with your unique exercise name. Please use the following convention: `exercise-<firstname>_<lastname>`. You will use this branch to submit your work by pushing it to the repo after you have made your final commit locally. You **WILL NOT** be submitting a feature MR and **ARE NOT** permitted to push to the `main` branch.

After creating your local branch console into the project `root` directory and run the following commands:

```
npm install
npm start
```

You will now be able to begin developing the react app in the `src` folder and you will have a console message telling you where to view the app in browser. NOTE: For the purposes of this exercise the `tests` folder is located inside of the `src` folder and all tests are stored and executed from there.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

NOTE: If you get stuck in an infinite loop on a test you will need to kill that instance of node in your activity monitor on your machine in order to truly kill the test. Ctr + c does not end the node instance.

# Codebase Documentation

### Folder Structure

This project is a typical `create-react-app` folder structure where the root folder contains your `npm` package and `git` repo information and `node_modules` as well as this `README.md` files. You will also see the standard `public` and `src` folders. For this exercise you will only need to work out of the `src` folder.

Inside of that folder will see the following structure

```
src
|__components
|__providers   
|__tests
|__views
|__index.js
```

For the purposes of this exercise you can ignore the `index.js` and `setupTests.js` files as well as the `views` directory.

#### The `components` Directory

This directory is where you will put any newly created components for your app. You will also be able to edit existing components here.

#### The `providers` Directory

This directory is where you will house any helper functions or objects that you create for your app.

This directory already contains a sub-directory named `poke-tools` which contains a `pokeTools.js` file that houses our fetching functions ([documented below](https://github.com/claytonkreisel/poke-react-exercise#helper-functions)) for the main dataset for this app which is found in the `pokemon.json` file also in this subdirectory. There is no need to edit any code in the `poke-tools` directory. Though as part of this exercise you will need to fix the unit tests that are failing for these functions you will not need to edit these functions yourself.

#### The `tests` Directory

This directory contains files that follow the naming convention of `*.test.js`. These files contain `test` methods that will be run using the `npm test` script in the console. These tests are used to test the code in your providers folder. Jest is used by react's testing script and more info on that can be found [here](https://jestjs.io/docs/getting-started).

### Helper Functions

#### `getPokemon(number?:int|null):Pokemon[]`

This function exists to return an array of `Pokemon` objects. It can return all pokémon in the dataset or a single pokémon with a given `number` parameter.

The parameter of `number` is optional and is a reference to the pokémon's pokédex number (like a PK or ID). It is not required. If provided an array with a single pokémon is returned.

#### `getRandomPokemon(count?:int, allowDuplicate?:boolean):Pokemon[]`

This function exists to return an array of random `Pokemon` objects. If not provided with a `count` parameter then the function returns a single random pokémon from the dataset wrapped in an array. If provided a `count` parameter that number of randomly selected `Pokemon` objects will be returned in an array. By default duplicates are not allowed. In order to change this functionality to allow for duplicates of the same `Pokemon` to be returned simply provide a value of `true` for the `allowDuplicates` parameter. NOTE: `count` is maxed at 100. If a number larger than 100 is provided then only 100 `Pokemon` objects will be returned in the array.

# Design Components

### Ant Design

This project uses the Ant Design Component UI Kit. Documentation for these components can be found [here](https://ant.design/components/overview/). There are examples of how to use the needed components already in the starting codebase. You are not required to use any additional elements that are not already used, but you are welcome to if you see good reason to for the purposes of your project.

# End Product Requirements

## Simulated Scenario

The following exercise is to help you prepare and think through functional programming. This exercise is written in ReactJS and will mildly test your understanding of the framework, but the hope is to help you think through data handling and manipulation more than anything.

In this excercise you have been assigned an MVP from a supervisor. The as is to create a view that facilitates the loading, filtering and comparing of pokémon from a provided dataset. The end-product will have you displaying the overlap of two lists of pokémon in a third list. List 1 will have pokémon filtered by their type. List 2 will have pokémon filtered by their generation. And finally list three will display pokémon that exists in both list 1 and list 2.

Below this there will be a section that will allow the end-user to select two pokémon from the pokémon that exist inside of list 3 and compare them by their fighting stats (attack, defense, special defense, special attack and total). The comparision will display where each pokémon possesses the advantage over the other. This will be done by bolding the appropriate state for the pokémon with the higher number (in the case of a tie both numbers should be highlighted). When no pokémon is loaded the stat boxes should show "--" inplace of the number and have a white background until loaded.

There is also a *reset* button at the bottom of the page. When this button is clicked it will need to clear all the lists in the filtering section and also clear the comparison tables as well.

Your technical lead also has some requiremets you need to meet. The tech lead is requiring for you to provide passing unit tests on all functions and object methods written in the providers folder (although not on react components). Some of the tests in the `Pokedex.test.js` file are passing and others are failing. You will need to figure out how to get those unit tests to pass by fixing the broken tests. For the purposes of this exercise we will assert that the functions being tested are sound and that the tests are actually what are broken and need to be fixed.

## Feature List and Development Tests Required for Acceptable MVP

1. All functions that are provided in the `providers` folder must have an accompanying unit test defined and passing in the `tests` folder. React components are NOT required to be tested. This will require you to fix broken tests currently present in the project and to write your own tests for any additional helper functions or object methods you add in the `providers` folder.
2. All broken tests in the `PokeTools.test.js` need to be corrected in order to pass but still be effective at testing the expected behavior. Descriptions of what each test is trying to achieve is provided in the comments in the test suite. You will also be asked to write another test at the bottom of that file.
3. You will notice that on `npm start` there are errors thrown in the browser. Please find and debug these errors.
4. The `FilteringSection` component must contain three columns each containing a label and list. The first two columns will also contain a select dropdown box that will possess possible filter values for the attribute that list is intended to be filtered by.
    * List 1 - Must contain a list of pokémon and a dropdown box that `onChange` will sort the list of pokémon based on the pokémons `type1` property. The dropdown must only contain valid options that exist for `type1` dynamically loaded from the pokémon dataset.
    * List 2 - Must contain a list of pokémon and a dropdown box that `onChange` will sort the list of pokémon based on the pokémons `generation` property. The dropdown must only contain valid options that exist for `generation` dynamically loaded from the pokémon dataset.
    * List 3 - This list will be loaded `onChange` of both the dropboxes in list 1 and list 2. It will show the pokémon that exist in both list 1 and list 2.
5. The `ComparativeSection` component must contain two columns. Each of these columns will contain a select dropdown at the top of each column. These dropdowns will be populated with the values from the list in list 3 from the filtering section above. `onChange` on these select boxes will load that pokémon's stats into the comparison table below. When both comparison tables are loaded the stats on those comparisons tables will need to be highlighted with a light green (`#8cbf74`) background for the higher of the two numbers between the two pokémon and a light red (`#ffa7a8`) background for the lower of the two numbers (stat box backgrounds remain white if tied). The stats that are message are the properties on each `Pokemon` object and those are `attack`, `defense`, `specialAttack`, `specialDefense` and `total`. Stat boxes shall display a "--" in place of the number with a white background while not loaded.
6. There is a reset button in the bottom right hand corner of the page. You will need to use the `antd` ui `Button` component in order to change the design of this button to have a red background with red letters. Please refer to the documentation for the ant design component kit for the best way to do this. `onClick` this button must clear all the lists in the `FilteringSection` component as well as the two comparison tables in the `ComparativeSection`.
7. All design components used are part of the `antd` UI kit. If you choose to use any additional components in this excercise they must be part of the `antd` UI kit which can be [found here](https://ant.design/components/overview/).
8. You are not allowed to add any additional `npm` packages. All you need to meet the requirements of this excercise is included in this project already. The only additional `npm` package added to this project that is not in `create-react-app` is `antd` for React components.