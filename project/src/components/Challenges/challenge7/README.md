## CHALLENGE7

Now that you have learnt about useMemo () hook to avoid expensive value rendering by returning a memorized value in a function.

In this challenge there is an app that contains a text input, a button that can toggle the theme color, and a ChildComponent which contains a function called alterText. This function alters the text by adding "I like" in the text. Then the app will show the alteredText.

As now the console.log message ("Challenge7 - this is triggered") gets triggered every time the user clicks on the button to change the theme. Therefore, in order to improve the app's performance, your challenge is to make sure this console.log only gets triggered when the text changes.

Find challenge under src map as below:

```bash
src -> components -> Challenges -> challenge7 -> Challenge7.js
```
