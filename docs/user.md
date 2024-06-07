# User API Spec

## Signup User API
Endpoint : POST /auth/signup

Request Body :

    "username" : "user1",
    "email" : "user1@example.com",
    "password" : "password123"

Response Body Success :

    "data" : {
        "username" : "user1",
        "email" : "user1@example.com"
    }

Response Body Error :

    "errors" : "Username already registered"

## Login User API
Endpoint : POST /auth/login

Request Body :

    "email" : "user1@example.com",
    "password" : "password123"

Response Body Success :

    "data" : {
        "token" : "unique-token"
    }

Response Body Error :

    "errors" : "Username or password wrong"

## Update User API
Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :

    "username" : "user1",
    "email" : "user1@example.com",
    "password" : "password123"

Response Body Success :

    "data" : {
        "username" : "user1",
        "email" : "user1@example.com"
    }

Response Body Error :

    "errors" : "Name length max 100"

## Get User API
Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success :

    "data" : {
        "username" : "user1",
        "email" : "user1@example.com"
    }

Response Body Error :

    "errors" : "Unauthorized"

## Logout User API
Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success :

    "data" : "OK"

Response Body Error :

    "errors" : "Unauthorized"