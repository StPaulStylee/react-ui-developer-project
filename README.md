## React UI Developer Project

I'll say this right off the bat - this app is in no way representative of production ready code. It is fragile and only has minimal error handling. A more robust system for handling exceptions and capturing exception data would be required. Also, this app is hideous - no style points here. With that said I think this application does indicate my fundamental knowledge in React, TS/JS, unit testing, and CSS. I took a compositional approach in an effort to avoid any prop drilling and the use of the Context API.

With all of that said, I feel confident that this small code sample exhibits my skill set and fundamental knowledge in JS/TS and React.

Other things of note...
* The fetch calls have the API key hard-coded right into the URL which is obviously a no-no. Typically I would use a some sort of environment configuration to store these types of values
* I would utilize a linter like esLint to assure proper code standards
* This app only utilizes the `useState` hook and since all of the hooks are initialized in the app root, it causes the entire application to rerender after every state update. In this instance it is not an issue because the application is very simple... But in other applications that are more complex this would need to be addressed using other fancy-schmancy hooks.
* There are opportunities to make more components - the data in the `SelectedStockItem` component could be componentized. For example, the symbol data could be given to a `Symbol` component via props and the display value of the symbol could be defaulted in the symbol is `undefined`
* I prefer to have an apps unit tests saved off into their own directory away from the source code
* There is no indication to the user when their search query has returned no results
* There is no safe guarding that all of our data mapping actually sets a value - no default values or "unavailable" values (See next bullet point)
* There appears to be a bug when "remove" is clicked but their are multiple selected stocks that have an id of "undefined". This would lend itself to the need to ensure unique ids for all selected stocks.
* Some sort of user feedback when the fetch call is still in process after a stock selection would be required



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
