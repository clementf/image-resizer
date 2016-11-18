# image-resizer

## Description
Image resizer is a simple tool written using node.js that resizes an image based on a url. It relies on gm (GraphicsMagick for node.js). 

## Install 
* `git clone https://github.com/clementf/image-resizer`
* `cd image-resizer` 
* `npm install`

## Configure
Create a file called local.js to configure the path where your images are stored.
Add this to the local.js file:

`module.exports = {
    basePath: 'my/image/directory'
  };
`
## Run 

`node index.js`

Go to your brwoser and request something like: 
`localhost:4353/resize/WIDTHxHEIGHT/PATH_TO_IMAGE`
