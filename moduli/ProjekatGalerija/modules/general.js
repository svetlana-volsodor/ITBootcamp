let generateImage = src => {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', 'Image failed loading');
    img.style.height ='300px';
    img.style.width ='250px';
    return img;
};

//export{generateImage};
export default generateImage; //kad eksportujemo samo jedan element mozemo koristiti default, pise se bez zagrada
