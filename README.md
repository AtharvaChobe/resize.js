
# Image Resize using javascript

This is a simple NPM package to resize the images easily.


CDN : 
<script src="https://cdn.jsdelivr.net/gh/AtharvaChobe/resize.js/index.js"></script>



## Demo

Create a simple index.js file and paste the code code.
use the resizeImage function with the parameters.

### resizeImage(input image, output image, height, width)

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h2>Before</h2>
    <img src="/resize.js/IMG-20230429-WA0000.jpg" id="my-image1" alt="">

    <hr>

    <h2>After</h2>
    <img src="" id="my-image2" alt="">

    <script src="https://cdn.jsdelivr.net/gh/AtharvaChobe/resize.js/index.js"></script>
    <script>
        resizeImage(document.querySelector("#my-image1"), document.querySelector("#my-image2"), 100, 200)
    </script>
</body>

</html>
