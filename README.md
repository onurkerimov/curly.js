
# curly.js

**curly.js** converts text to tree hierarchy. Indentation level of each line (whitespace before each line) is used as depth of the nodes in the tree. This plugin is initially created as the first half of **[Bizon.js](https://github.com/onurkerimov/Bizon.js)**, a template engine that creates HTML elements out of text with indentation.


With **curly.js**, this input:
```js
curly([
    'Preprocessors',
    '  CSS',
    '    SASS',
    '    LESS',
    '    Stylus',
    '  HTML',
    '    HAML',
    '    Slim',
    '    Pug',
    '  JS',
    '    Babel',
    '    CoffeeScript',
    '    TypeScript'
])
```
returns this string:
```
Preprocessors{CSS{SASS,LESS,Stylus}HTML{HAML,Slim,Pug}JS{Babel,CoffeeScript,TypeScript}}
```
SCSS-like prettyprinting is applied to the same string for ease of seeing:
```css
Preprocessors {
    CSS {
        SASS,
        LESS,
        Stylus
    }
    HTML {
        HAML,
        Slim,
        Pug
    }
    JS {
        Babel,
        CoffeeScript,
        TypeScript
    }
}
```
There is also a setting which child nodes are interpreted just like parent nodes, which can be used by providing `true` as the second argument.
```js
curly([
    'Preprocessors',
    '  CSS',
    '    SASS',
    '    LESS',
    '    Stylus'
], true)
```
which gives:
```
Preprocessors{CSS{SASS{}LESS{}Stylus{}}
```
## Specifications
Both tab and space characters can be used to represent indentation, however, usage of spaces is advised, since some text editors automatically convert tabs to spaces. In the following example, 2 spaces represent 1 level indentation, however, you can use as many space characters as you want, as long as the rest of the lines are consistent with your initial choice. This plugin automatically detects *'number of spaces used as 1 level indentation'* of your choice.

## License

Licensed under the MIT license.
