# A basic gulp HTML5 project
This project aims to display how to create a basic HTML5 project using the following tools:
 * npm
 * gulp
 * less
 * uglify

This repository will contain the end result of following these instructions.

## Instructions (Windows)

### Installation
Begin by (https://nodejs.org/en/)[installing **node.js** if you haven't]. After that create a folder for the project which contains the following folders:
 - dist
 - src
 	- assets
 	- js
 	- style
  
After that open up a command prompt (preferably the power shell prompt if no custom one is available) and go to your project root directory. Initiate your project by running the following command:
```
npm init
npm install gulp -g 
```
This will trigger the **package.json** console wizard which will take you through the creation of the file. Fill in the answers as best you can and afterwards you will have a package file created for you.
After that you install gulp globally so that you get it into your PATH and can run it wherever you want.

Now you will have to create a gulpfile. A gulpfile is basically just a javascript file called **gulpfile.js** which contains your settings for what gulp should do once it's being run. Create it in your project root directory.


After that, install gulp and two extra packages by executing the following commands:
```
npm install gulp --save-dev
npm install gulp-less --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
```

These commands will install **gulp**, **gulp-less**, **gulp-concat** and **gulp-uglify**, three packages we'll use in order to build our HTML5 project. The `--save-dev` flag we're adding to the command adds the files to the `devDependencies` section in the **package.json** file. The devDependencies section will contain all packages required to install via npm when you run the `npm install`command but will not installed if you install for production (by running npm install with the --production flag), if you want information on that part please read (http://stackoverflow.com/a/22004559/844932)[the following answer on StackOverflow]. 
The packages you install through npm will be saved in the **node_modules** folder in your project root.


### Configuration
It's time to tell gulp what to do. Open up your **gulpfile.js** file and use nodes (https://nodejs.org/api/modules.html#modules_module_require_id)[require-function] to fetch the modules we've just installed:
```
var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
```
Now we have references to the gulp modules we want to use. We're saving them in variables but we could also just call require(id) whenever we needed to use them, it's a matter of taste and ignorance :).

We'll start by configuring the use of gulp-less. The point here is to turn .less files into .css files and convert the less code to css. So, in your **gulpfiles.js**, after what we added previously you add this:
```
gulp.task('css', function() {
	return gulp.src('src/style/*.less')	//Get all less files from src/style/
		.pipe(less({					//Pass them on to less
										//Options if you want, we'll make do with the defaults 
			}))
		.pipe(concat('style.css'))		//Concat all files to one big style.css-file
		.pipe(gulp.dest('dist/style'))	//Pass the less result to gulp so it can be moved to dist/style
});
```
Now you can run the command `gulp css` in your command prompt and it will go through all your less files *src/style*, merge them into one big files and convert the less to css. Swell!

But, there is more to do than just fix up the less files. There is javascript to fix as well! We'll do it in the same manner; create a task for it that fetches all relevant files, runs them through uglify, concats them and then moves them to the correct folder.
```
gulp.task('js', function(){
	return gulp.src('src/js/*.js')	//Get all the javascript files from src/js/
		.pipe(uglify())				//Pass them on to uglify
		.pipe(concat('all.js'))		//Concat all the files into one javascript file
		.pipe(gulp.dest('dist/js'))	//Pass the result to gulp so it can be moved to dist/js
});
``` 
The HTML and assets needs to be moved as well so we'll add two small tasks for moving them:

```
gulp.task('html', function(){
	return gulp.src('src/index.htm')
		.pipe(gulp.dest('dist'))
});

gulp.task('assets', function(){
	return gulp.src('src/assets/*')
		.pipe(gulp.dest('dist/assets'))
});
```

These tasks doesn't do anything else than move the files from A to B (or src/ to dist/) but we need them to get a full package. Now we can run ```gulp css```, ```gulp js```, ```gulp html```and ```gulp assets``` and we'll have a full package ready for deploy.
But running those commands over and over again is a tedious task and we can automate that too. We'll add them all to the default task, the one that runs when you just run ```gulp```:
```
gulp.task('default', ['css', 'js', 'html', 'assets']);
```

Now all you have to type is ```gulp``` and all your tasks will be run (in the order specified in *default*).

### Watching the files
If we want to automate things even more we can add a watch to our files to keep an eye out (as much as a computer can keep an eye, Terminator vibes....) for changes in the file structure. When changes occur it should run the task assigned to that file.
The **watch** function is built in to gulp, which is nice, so we don't have to install it. Instead, we just implement it in every task after we've located our files. This is a good opportunity to show the entire result of our **gulpfile.js** file:
```

```

## Instructions (Linux)
If you're using Linux you're bright enough to figure these things out by yourself.