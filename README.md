Hapi Assets
=================

A Hapi plugin to load assets in your views based on the node environment.

## Goal:
Have access to the proper assets based on the node environment being run.

## How it works:
You pass into the plugin options an object with the assets you are wanting to be used, and those assets have to be attached to an environment name space. It uses the `process.env.NODE_ENV` to choose which assets you have access to in the view layer. The default is 'development'.


Example:
```

server.register({
    register: require('hapi-assets'),
    options: {
        development: {
            js: ['js/one.js', 'js/two.js'],
            css: ['css/one.css', 'css/two.css']
        },
        production: {
            js: ['js/scripts.js'],
            css: ['css/styles.css']
        }
    }
}, function (err) {
    if(err){
        console.log('Failed loading plugin hapi-assets');
    }
});


```

Handlebars:
```
{{#each assets.js}}
    <script src="{{this}}"></script>
{{/each}}
```

Jade:
```
each item in assets.js
    script(src='#{item}')

```

### Other
You can see this being used in the Hapi Ninja boilerplate example. [https://github.com/poeticninja/hapi-ninja](https://github.com/poeticninja/hapi-ninja)