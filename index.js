// index.js

function resizeImage(imgBefore, imgAfter, newHeight, newWidth) {
    // console.log("Inside resizeImage function");
    // console.log("Before image:", imgBefore);
    // console.log("After image:", imgAfter);

    imgBefore.addEventListener('load', () => {
        console.log("Before image loaded");

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(imgBefore, 0, 0, newWidth, newHeight);
        const dataURI = canvas.toDataURL();

        imgAfter.src = dataURI;
    });

    if (imgBefore.complete || imgBefore.readyState === 4) {
        // console.log("Before image already loaded");
        imgBefore.dispatchEvent(new Event('load'));
    }
}
window.resizeImage = resizeImage;
