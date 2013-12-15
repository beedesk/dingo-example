# dingo-example

Dingo is a Django inspired web development framework on NodeJS.
 
This project is an example to demonstrate how it is used.

## Starting the server

```bash
node apps/manage.js runserver 5000
```

## Hiting the server

### GET

```bash
curl http://localhost:5000/blogs
```

### POST

```bash
curl -X POST http://localhost:5000/blogs
```

## Running Tests (mocha)

```bash
node apps/manage.js test
```

