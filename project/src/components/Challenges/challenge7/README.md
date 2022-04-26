## CHALLENGE7

Now that you have learnt about useMemo () hook, in this challenge there is an app that contains a text input, a button that can change the theme color, and a ChildComponent which contains a function called alterText. Inside this function has a console.log("this is triggered") and it alters the text by adding "I like" in front the text. Then the app will show the alteredText.

As now the console.log in the alterText functions gets triggered every time the user clicks on the button to change the theme, so in order to improve the app's performance, your challenge is to make sure this console.log only gets triggered when the text changes.

Find challenge under src map as below:

```bash
src -> components -> Challenges -> challenge7 -> Challenge7.js
```
