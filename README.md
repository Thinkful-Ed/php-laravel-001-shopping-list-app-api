# Shopping list app API with PHP and Laravel

A shopping list app API for Thinkful's PHP-LARAVEL-001 learning module.

This app implements [this API spec](https://documenter.getpostman.com/view/2364768/listful-app-api/RW1aJfDp#b082c957-558e-42aa-9ea0-f0bc22c24538), and in so doing, can support [this client app](https://github.com/Thinkful-Ed/listful-app-client).

## Requirements
* PHP >= 7.1.3
* Laravel 5.6
* Composer

## Getting Started
Clone this repository. 

Create a local database named `shopping_list` using PostgreSQL.

Rename `.env.example` file to `.env` inside your project root and fill the database information with the following

```
APP_NAME=Listful
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=shopping_list
DB_USERNAME=homestead
DB_PASSWORD=secret
```

Open the Terminal (Git Bash on Windows) and navigate to your project root directory.
Run the following commands

```
composer install

php artisan key:generate

php artisan migrate

php artisan db:seed

php artisan serve
```

## Live Server
A full-stack version of the application is live on [Heroku](https://list-ful.herokuapp.com/).

You can also find an API-only version live on Heroku at the following [link](https://list-ful-api.herokuapp.com/api/items).

# End Points

## Client
You may run this application with a frontend using the client found [here](https://github.com/Thinkful-Ed/listful-app-client).

## Postman
Request URL: `http://localhost:8000/api/items`

#### GET
Request URL: `http://localhost:8000/api/items/4`

#### POST
Request URL: `http://localhost:8000/api/items`

Content-Type: `application/json`

Body
```
{
  "name": "Hello World!"
}
```

#### PUT
Request URL: `http://localhost:8000/api/items/1`

Content-Type: `application/json`

Body
```
{
  "name": "Hello World!"
}
```

#### DELETE
Request URL: `http://localhost:8000/api/items/1`

## Command Line

#### GET
```
curl -X GET http://localhost:8000/api/items
```

or 

```
curl -X GET http://localhost:8000/api/items/2
```

#### POST
```
curl -X POST -H "Content-Type: application/json" -d '{"name":"I am New"}' http://localhost:8000/api/items/
```

#### PUT
```
curl -X PUT -H "Content-Type: application/json" -d '{"name":"New Name"}' http://localhost:8000/api/items/3
```

#### DELETE
```
curl -X DELETE http://localhost:8000/api/items/2
```
