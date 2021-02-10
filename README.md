# Service Consulta Pendientes Confirmacion

rest-app
## Proyect package / librarys

- [Typescript](https://www.typescriptlang.org/) - Typescript is a typed superset of JavaScript that compiles to plain JavaScript
- [Express.js](https://www.expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js
- [Pino](https://github.com/pinojs/pino) - Extremely fast node.js logger, inspired by Bunyan. It also includes a shell utility to pretty-print its log files
- [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env for nodejs projects
- [Swagger](http://swagger.io/) - is a simple yet powerful representation of your RESTful API.
- [SwaggerUI](http://swagger.io/) - dynamically generate beautiful documentation and sandbox from a Swagger-compliant API
- [Request-Promise](https://github.com/request/request-promise) - The simplified HTTP request client 'request' with Promise support. Powered by Bluebird.



## Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```

## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

### DOCKER BUILD
Docker build to GCP.-
docker build -t api.rest.stx.ts.{api-name}:desa1 . 
docker tag  api.rest.stx.ts.{api-name}:desa1 gcr.io/{PROJECT-ID}/api.rest.stx.ts.{api-name}:desa1
docker push gcr.io/{PROJECT-ID}/gcr.io/{PROJECT-ID}/api.rest.stx.ts.{api-name}:desa1


### DOCKER COMMAND

#DOCKER RUN
docker run -d -it -p 0.0.0.0:3000:3000 --name api.rest.stx.ts.{api-name}:desa1 api.rest.stx.ts.{api-name}:desa1

#GCP RUN
docker run -d -it -p 0.0.0.0:3000:3000 -v /opt/docker/services/properties:/opt/services --name api.rest.stx.ts.{api-name}.desa1 gcr.io/{PROJECT-ID}/api.rest.stx.ts.{api-name}:desa1 --restart=always

### npm targets

| Target               | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| `npm run dev`        | Run in _development_ mode                                                |
| `npm run dev:debug`  | Debug in _development_ mode                                              |
| `npm run test`       | Run tests                                                                |
| `npm run test:debug` | Debug tests                                                              |
| `npm run compile`    | Transpile source code for production use                                 |
| `npm start`          | Run the in _production_ mode. \*Requires running `npm run compile` first |

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file

Folder Structure Conventions
============================



### Directory layout keep your code clean.
> Folder structure options and naming conventions for software projects

    .
    ├── public                         # Folder contents static files,  swagger public configuration (swagger-ui)
    ├── server                         # Folder contents the structure of the api service.
    │   ├── api                        #
    │      └─── controllers            #  Defines your app routes and their logic  
    │           └─── controller.ts     # Contollers - take request object, pull out data from request, validate, then send to service(s)
    │           └─── router.ts         # Routes - handle the HTTP requests that hits the API and route them to appropriate controller(s)
    │      └─── middlewares            #    
    │      └─── model                  # Models are the files where you interact with your database. They contain all the methods and functions which will handle your data.
    │           └─── error.handler.ts  #
    │      └─── services               # Contains the business logic, derived from business and technical requirements, as well as how we access our data stores* 
    │           └─── zenta.service.ts #
    ├── test                           # Source files Mocha is a feature-rich JavaScript test framework
    ├── common                         # Source files (alternatively `lib` or `app`)
    │   └─────────────── api.yml       # Define 
    │   └─────────────── env.ts        # Storing configuration in the environment
    │   └─────────────── logger.ts     # express middleware to log (https://github.com/pinojs/pino)
    │   └─────────────── server.ts     #
    │   └─────────────── swagger.ts    #
    │ 
    └───────────────────── .cfignore     #
    └───────────────────── .dockerignore # Docker ignore files
    └───────────────────── .Dockerfile   # Document that contains all the commands a user could call on the command line to assemble an image
    └───────────────────── .env          # Global Variables (https://www.npmjs.com/package/dotenv)
    └───────────────────── .gitignore    # Git ignore files 
    └───────────────────── package.json  # packages that your app depends on and their versions
    └──────────────────── tsconfig.json  # 

#### Architecture diagram
![Architecture diagram](Express-REST-API-Struc.png)

### Actuator 

The url /info, /metrics, /health is used from "https://www.npmjs.com/package/express-actuator" to check the pod status in Kubernetes
    
### Observations
This proyects is get from YEOMAN "https://github.com/cdimascio/generator-express-no-stress-typescript", modify by Miguel Acevedo