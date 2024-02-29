# Image Resize using JavaScript

This is a simple npm package for resizing images easily.

## CDN

You can use the following CDN link to include the package:

```html
<script src="https://cdn.jsdelivr.net/gh/AtharvaChobe/resize.js/index.js"></script>

Demo
To see a demonstration, create a simple index.js file and paste the following code. Then, use the resizeImage function with the specified parameters.

resizeImage(inputImage, outputImage, height, width)

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h2>Before</h2>
    <img src="sample.jpg" id="my-image1" alt="">

    <hr>

    <h2>After</h2>
    <img src="" id="my-image2" alt="">

    <script src="https://cdn.jsdelivr.net/gh/AtharvaChobe/resize.js/index.js"></script>
    <script>
        resizeImage(document.querySelector("#my-image1"), document.querySelector("#my-image2"), 100, 200)
    </script>
</body>

</html>

Replace sample.jpg with the path to your input image and adjust the height and width parameters accordingly.