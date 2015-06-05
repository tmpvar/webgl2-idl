# webgl2-idl

fetch and parse the webgl2 idl

## install

`npm install webgl2-idl`

## use 

```javascript

var getWebGL2AST = require('webgl2-idl');
getWebGL2AST(function(e, r) {
  console.log(r)
})

/* outputs:

[ { type: 'typedef',
    typeExtAttrs: [],
    idlType:
     { sequence: false,
       generic: null,
       nullable: false,
       array: false,
       union: false,
       idlType: 'long long' },
    name: 'GLint64',
    extAttrs: [] },
  { type: 'typedef',
    typeExtAttrs: [],
    idlType:
     { sequence: false,
       generic: null,
       nullable: false,
       array: false,
       union: false,
       idlType: 'unsigned long long' },
    name: 'GLuint64',
    extAttrs: [] },
  { type: 'interface',
    name: 'WebGLQuery',
    partial: false,
    members: [],
    inheritance: 'WebGLObject',
    extAttrs: [] },
  { type: 'interface',
    name: 'WebGLSampler',
...
*/
```
## license 

[MIT](LICENSE.txt)
