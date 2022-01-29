## CHALLENGE3

Now that you have learnt about useContext API and how we can share data with multiple components let's create a simple application to check if a user is authenticated or not. If user is not "logged in" state then your challenge solution should be as in (image1) attached whereas when user is "logged in" state by press the button Login your challenge solution should be as in (image2) attached. This challenge you find under src map as below

```bash
src -> components -> Challenges -> challenge5 -> Challenge5.js
```

and where inside it will contain a map AuthContext map with two components

```bash
src -> components -> Challenges -> challenge5 -> AuthContext -> AuthContext.js
src -> components -> Challenges -> challenge5 -> AuthContext -> AuthProvider.js
```

where you will create the context and Provider and the logic if user is authenticated

Moreover, inside 'components' map you will find two components

```bash
src -> components -> Challenges -> challenge5 -> components -> Header.js
src -> components -> Challenges -> challenge5 -> components -> Page.js
```

Where you need to write logic for managing your context data created and then import those components inside Challenge5.js so they will look and work as in screenshot1 and screenshot2

HINT: In Challenge5.js do not forget to import the AuthProvider component and wrap the components that you want to give access to the context inside this provider.
