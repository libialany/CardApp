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

_delete_ *delete cards*

http://localhost:5000/car/{id}

