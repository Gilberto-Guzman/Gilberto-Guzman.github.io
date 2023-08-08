# Comandos.

### Preconfiguración.

    npm create vite@latest .
    npm i
    npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material @mui/lab notistack @types/node -D
    npm install react-router-dom

    npm install react-material-ui-carousel --> website: https://learus.github.io/react-material-ui-carousel/

    npm install pdfjs-dist@3.4.120

### Ejecución.

    npm run dev
    npm run build
    npm run serve
    npm run preview

### Nota: Al ejecutar las rutas con `npm run dev` deberas de agragar un `\` extra.

    http://localhost:4173/about/

### Caso contrario, cuando uses `npm run serve`, este `\` ya o sera necesario.

    http://localhost:4173/about

### Github

    npm i gh-pages -D

    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/Gilberto-Guzman/gilberto-guzman.github.io.git
    git push -u origin main

    npm run build
    npm run deploy

### Nota: Antes de ejecutar `npm run deploy`, es necesario que agregues package.json, en el area de scrpits el siguiente cacho de codigo: `"deploy": "gh-pages -d dist"`
