# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Running With Nginx
This simulates the behaviour with our reverse proxy servers on dev and prod
```shell
#install dependencies
sudo apt update
sudo apt install nginx
sudo apt install docker

#start services
sudo service docker start
sudo service nginx start

#apply nginx config
sudo cp default /etc/nginx/sites-enabled
sudo service nginx restart

#build and run container
docker build -t angular:test .
docker run --rm -it -p 6003:6003 angular:test
```

The application would be accessible through http://localhost:6003.

To access application through nginx http://localhost:81/visits-alpha.
