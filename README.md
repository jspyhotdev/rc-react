# Resilient Coders React Challenge 1 - The Counter ⏰

## Getting Started

### Install Node & npm if you haven't already
Make sure you have Node and npm installed. You can check by typing `node -v` into your terminal. If a number pops up, anything over v4, you're good to go. If "command not found" pops up, then you'll need to install it.

I recommend using [Node version manager](https://github.com/creationix/nvm#installation). You can copy and paste the snippet below into your terminal.

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
nvm install v8
nvm alias default v8
```

### Clone and install the project

You can copy and paste this into your terminal.

```sh
git clone https://github.com/lourd/rc-react-1
cd rc-react-1
npm install
npm start
```

This will start a live development server. It will open a new tab in your browser at localhost:3000. Open up the new `rc-react-1` folder in Atom, or whatever text editor, and take a look at `src/App.js` and `src/App.css`. These are the only files you'll need to edit to accomplish this challenge.

There is **a lot** going on behind the scenes with that simple `npm start` command. The project is using [Webpack](https://webpack.js.org/) & [Babel](https://babeljs.io/) under the hood to make a really nice development experience. You can and should ignore all that for now. Don't worry about how `import` and `export` work. We'll teach you about all of that tooling later on.

## Challenges
The app starts out with a number and a button. Clicking the button will increment the number. Lets add some features:

1. Add another button that will decrement the number. Put it to the right of the "Up" button, and put the word "Down" inside of it. You should be able to read and copy what's done for the Up button to work to accomplish this.
2. Add an input to the right of the buttons. The input should be of type `number`, with a default value of 1. When changing that number, clicking the Up and Down buttons should change the count by that much. For example, if I put 5 in the input and press "Up", the number should now go up by 5. You'll need to figure out how to get the value from the input when it changes. [You can read about how to do that using the `onChange` event here.](https://facebook.github.io/react/docs/forms.html#controlled-components)
3. Make the color of the number change based on whether it's even or odd. If it's even, it should be purple. If it's odd, it should be orange. You'll need to use the `className` attribute for this, and add some CSS to `src/App.css`. [You can read about the `className` attribute in React here.](https://facebook.github.io/react/docs/dom-elements.html)

## Extra Credit
- Install the [React Developer tools chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en). After installing them, open up `localhost:3000` while running this project, open up the Chrome developer tools, and find the new "React" tab. Select it, and then click on the `<App>` node in what looks like an HTML tree. Observe what happens when clicking the button. Try changing the `count` state directly through the developer tools and see what happens.

## Solutions
After completing all 3 challenges, the [final result should look something like this.](https://lourd.github.io/rc-react-1/) You can find a reference solutions for each challenge on branches named `solution-1`, `solution-2` and `solution-3`. Don't look until you absolutely need to! ✊🏽
