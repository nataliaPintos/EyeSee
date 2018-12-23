![](https://github.com/paduanton/EyeSee-API/blob/master/public/png/eyesee.png?raw=true)


# Overview

EyeSee is an open source mobile app developed in partnership with [Antonio](http://github.com/paduanton/)
and it is written in React Native. This project is the frontend app only. The backend REST API is developed in Laravel Framework and can be found here:

[EyeSee Backend (REST API)](https://github.com/paduanton/EyeSee-API)

## Features
EyeSee contains several features for an app to help blind people. There is two types of users, the blind ones and the no blind ones. The user type is definied by the "deficiente" bool attribute. The features the app proposes for both of them are:

* Basic authentication (login, logout, update user information etc...)
* Custom profiles
#### - Blind ones
*  Make a call to volunteers (not blind users) and the first one to click on the app notification you answer the call and start a videoconference with the visually impaired
*  Text reader with the smartphone camera

#### - Not blind ones
* Answer the calls
## Getting Started - Quickstart
Inside the directory src/config/, create a file named url.js with the same content that is in a sample file named url.example.js and just set the IP address that you set on development server of the REST API.

- Assuming that you have Node installed, follow the steps bellow:

First install all the necessary dependencies:
```
> npm install
```

Start the development server (changes will now update live in the smartphone if you are using expo):
```
> npm run start
```


To view the application, go to: [http://localhost:19002/](http://localhost:19002) and scan the QR Code.

## UI Preview

**Login and signup**
![](...)

**Home Screen**
visually impaired | volunteer
![](...)

**Text reader**
![](...)


## Links

<!-- - [API Docs](http://vataxia.net/) -->
- [Backend (GitHub)](https://github.com/paduanton/EyeSee-API)
- [Antonio (Github)](https://github.com/paduanton)