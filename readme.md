#clt-road-closures-vue

PHP + VueJS powered version of [clt-road-closures](https://github.com/AndrewNatoli/clt-road-closures).

This demonstrates how you can build a VueJS project using Vueify _without_ webpack or binding yourself to a pre-built Vue template. _Those methods don't suit my needs nicely so I figured out a way around them_.

There's a Gruntfile set up to build JS files (and include any additional libraries you don't explicitly call in your Vue components), handle LESS files, and copy static assets into the dist directory.

## Run it

I started building this using PHP's internal server but switched to ExpressJS because it provides the proper headers for JSON files out of the box.

```
git clone
npm install
node express.js
```

Access at localhost:8080

## Learn from it

With the pace the Vue ecosystem is evolving at it can be a challenge to find the right information for what you're trying to do. Hopefully this will serve as a useful example to someone looking to figure out a similar setup to this.

This was my biggest time-waster: note how in `app.js` I put 

```
template: '<closure-feed></closure-feed>'
```

rather than putting the `<closure-feed>` tags in `index.html`. I started with the latter and that was preventing Vue from binding properly... or something. My lists weren't displaying on data updates, click events weren't working, etc. etc.

## Contribute to it

Pull requests are welcome if you want to build up the Express server to pull real-time data from [Charlotte's open data portal](http://clt-charlotte.opendata.arcgis.com/) or throw in an feature you have in mind.

### Building with grunt

Grunt watch is supported for maximum awesome but you can also run tasks individually.

`grunt` - Runs all of the tasks
  
`grunt css` - Assembles LESS from `/src/less/main.less` and minifies it.

`grunt js` - Uses browserify + Vueify to assemble `src/app.js` and your Vue components in `src/components` into `build/vue.js`. Then it merges that with any extra files you specify in the Gruntfile's `jsFiles` array and sends it to the `/dist` directory.

`grunt static` - Copies `src/index.html` and the `src/data` directory over to `/dist`. 
