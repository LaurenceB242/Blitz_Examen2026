# SASS installation
installer node.js en version LTS

https://nodejs.org/en

dans un terminal 
```
npm install -g sass
```

si erreur 

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

vérifier si sass est installé
```
sass --version
```

## SASS dans VScode

```
sass ./assets/css/style.scss ./build/css/style.css --watch
```