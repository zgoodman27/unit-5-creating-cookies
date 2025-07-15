# Creating Cookies

## Welcome!

The purpose of this exercise is to get more practice sending data from the server to the browser in the form of a cookie. [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) are a a text only data format that allows us to keep track of persistent data, and send it between the server and the client side of our application. Cookies are an older part of the internet, and since they are accessible client side they are not terribly secure, but they are fully compatible with all browsers, and are a good way to communicate between the client and the server. They are often used to track non-sensitive data on a site, such as theme preferences, items in a shopping cart, and other such things.

In this exercise we will be creating a site that uses the power of delicious baked goods (whoops! wrong kind of cookie) to set a color theme for the site, and have it persist across sessions.


## Create the Theme Picker

We will be using DOM Scripting to toggle between some light and dark themes and we will use cookies to store the selected theme so it will persist across sessions.

- You will have to set up CSS rule sets for both, and we will be conditionally applying the class:

```css
body.dark-mode {
    background-color:#000;
    color: #fff;
}

body.light-mode {
    background-color: #fff;
    color: #000;
}
```

To Toggle between, set up some Buttons elements in your `index.html` file, inside the `public` directory to target in your JS file so we can add event listeners to them.

```html
<button type="button" name="dark" title="Toggle dark mode">Dark Theme</button>
```

```html
<button type="button" name="light" title="Toggle light mode">Light Theme</button>
```

The event listeners will need to do several things:

- Change the `className` of the `body` element to `dark-mode` or `light-mode`
- Depending on which button was clicked:
    - Send a `get` request to the server
        - on the path `"/light-mode"` for the `light` button
        - on the path `"/dark-mode"` for the `dark` button
        - You can send a `get` request from JavaScript by using the `fetch` function

## Setting the Cookie on the Server

- [ ] Install the project's dependencies using `npm install`
- [ ] Install cookie-parser using `npm install cookie-parser`
- [ ] Import and use `cookie-parser` as a middleware in `index.js`
- [ ] Start the server by running `index.js` using `npm run dev`.

In Express setting a cookie is as simple as calling a method! The `response.cookie` method allows us to set a cookie, and send it to our client. It takes two arguments (both strings); the name of the cookie, and the cookie's content.

When we get a request to either `/light-mode` or `/dark-mode` we will want to create a new cookie with a name of `"theme"` and a value telling us which mode we're in. Then we'll want to redirect back to the homepage.

```js
response.cookie("theme", "light-mode")
```

Setting a cookie with the name that has already been set previously will overwrite that cookie's value, which is exactly what we want in this case.

## Accessing Cookies Client Side

In our client side JavaScript we can access any cookies set on our site with the `document.cookie` property. This evaluates to a string that represents all the cookies on your site as a string in the format: `"cookieName=cookie-value; nextCookie=a%20different%20value"`

Go ahead and `console.log` your cookies to see what is avaiexercisele to you in `index.html`

Add some DOM scripting so that when the `index.html` page first loads in you read the cookies, and if a "theme" cookie exists apply the appropriate class name to your `body` element.

## Celebrate!

Now your chosen theme will persist even across page refreshes, or closing the page, and opening it again! You can learn more about how express handles cookies [here](https://expressjs.com/en/api.html#res.cookie)