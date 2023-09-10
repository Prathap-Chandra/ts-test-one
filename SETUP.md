### Steps to setup this repo

- Make sure you're using latest NodeJs LTS version
- Create package.json

```
npm init -y
```

- Install express and typescript

```
npm install typescript express @types/node @types/express
```

- Create tsconfig and update the required config like outDir etc.,

```
npx tsc --init
```

- Create a src file and create the main file index.js or name it whatever you want
- Write the basic express routes in that file and test your server

```
"build": "rimraf dist && npx tsc",
"prestart": "npm run build",
"start": "node dist/index.js",
"predev": "npm run build",
"dev": "nodemon dist/index.js"
```

- The build command will remove the existing build folder and compile typescript to javascript
- prestart command is nothing but a command which starts before start same goes for predev
- In dev script, we're using nodemon to restart whenever we changing something, where as we're not doing the same for start script which is for prod environment
- We can add watch flag if needed

### Prettier

- Execute the below commands

```
npm install --save-dev --save-exact prettier
```

- Add the below script in your package.json to add run prettier on the desired files or all the files

```
"format": "prettier --write \"src/**/*.ts\""
```

- Create a .vscode folder and create settings.json and install the below extension
  https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Add the below settings in settings.json file

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### lint stage and husky

```
npm i lint-staged
```

### ESLint
