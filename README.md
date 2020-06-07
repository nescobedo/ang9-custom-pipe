<p align="center">
  <img src="http://gh-images.futurebutterflies.net/2020_fb.png">
</p>

<h1 align="center">Ang9CustomPipe</h1>

I was working on another project that needed a custom pipe.  Tried using one from a previous project and couldn't get Angular to recognize the pipe. I created this repo to get things working.  

So I had created the custom pipe (filter). Imported and added it to my modules declarations. Imported and added it to my components providers and it still would not work.  

As it turns out I just needed to include the FormsModule in my main module (app.module).   It is not necessary to add the filter directly to the component you are using it in.  

Learn from my mistakes - I won't make this one again.  Happy coding. 

<h4>View the live site here: http://ang9-custom-pipes.futurebutterflies.net/</h4>

## ❯ Resources

* Thanks to Marton Borlay for the animals array: https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a

![divider](http://gh-images.futurebutterflies.net/divider.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
