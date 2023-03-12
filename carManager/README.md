This a type script project, which helps the user to manage cars. It's front end is in Nextjs and backend is in Nestjs with Postgres database used. The backend is integrated to front end with Rest APIs.

## Tech Stack

`Typescript` `Nodejs` `NestJs` `JavaScript` `Postgres` `TypeOrm` `NextJs` `Reactjs`

## Getting Started

Go to both directories one by one and run
```bash
npm install
# or
yarn
````
This will install necessary packages
Provide information in both environment files 
Then, run the development server:

```bash
npm run start
# or
yarn start
```

Back-end will run on port 5000 i.e [http://localhost:5000](http://localhost:5000)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## test backend

_get_ *get all cards*

http://localhost:5000/car/{id}


_put_ *update a card*

http://localhost:5000/car/77ec1a88-9884-4128-bdf4-6a20f59f5e95

```
{
  "name":"Doll Car",
  "model":"Convertible",
  "color":"pink blue",
  "description":"model b"
}
```

_post_  *create car*

http://localhost:5000/car

```
{
  "name":"Doll Car 2",
  "model":"Convertible 2",
  "color":"pink blue 2",
  "description":"model c"
}
```


_delete_ *delete cards*

http://localhost:5000/car/{id}

```
onClick={() => {
router.push("/edit/" + task.id);
}}
```


--------
_put_  *asignar*

http://localhost:5000/user/asignar

```
{
"uuidUser":"e82cd519....",
"uuidCar":"ad034f8...."
}
```

result

{
  "nombre": "lenske",
  "edad": 12,
  "apellidoM": "parte",
  "apellidoP": "kion",
  "cardId": "250e39bf-40e2-49a3-8967-43b9de17e06e",
  "uuid": "e8daab2d-a227-4e45-a12a-a071cb96f6bd"
}s



---------

GETBYID

*http://localhost:5000/user/f3592cf8-d0a1-4f8b-8a6e-201b3a4a01e2*

----------

