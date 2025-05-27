function showOneSponsor(elem, url, imgsrc, alt, width, target="_blank") {
    // load sponsor logo
    const image = document.createElement("img");
    image.src = imgsrc;
    image.width = width;
    image.alt = alt;

    // create sponsor hyperlink
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = target;

    // wrap image with hyperlink
    anchor.appendChild(image);

    // append sponsor to the container element
    elem.appendChild(anchor);
}
    
function genRandArray(max) {
    array = new Array();
    for (i = 0; i < max; i++) {
        do {
            num = Math.floor(Math.random() * max);
        } while (array.includes(num));
        array.push(num);
    }
    
    return array;
}

function loadOneGoldSponsor(num, elem, scale) {
    /*switch (num) {           
        case 0:
            showOneSponsor(elem, "https://www.layerinfinity.com/", "sponsors/layerinfinity.png", "Layer Infinity", 300*scale);
            break;
        case 1:
            showOneSponsor(elem, "https://www.44emporium.com/", "sponsors/44emporium.png", "44 Emporium", 450*scale);
            break;
        case 2:
            showOneSponsor(elem, "https://mfdyoyo.com/", "sponsors/monkeyfinger.png", "MonkeyfingeR", 290*scale);
            break;
        case 3:
            showOneSponsor(elem, "https://www.c3yoyodesign.com/", "sponsors/c3yoyodesign.png", "C3yoyodesign", 400*scale);
            break;
        case 4:
            showOneSponsor(elem, "https://www.yoyosam.com/", "sponsors/yoyosam.png", "YoYoSam", 300*scale);
            break;
        case 5:
            showOneSponsor(elem, "https://truearcreturntops.ca/", "sponsors/TrueArc.png", "True Arc Return Tops", 300*scale);
            break;
        case 6:
            showOneSponsor(elem, "https://www.gsquaredyoyos.com/", "sponsors/GSquared.png", "G Squared", 240*scale);
            break;
        case 7:
            showOneSponsor(elem, "https://onedropyoyos.com/", "sponsors/onedrop.png", "OneDrop Yoyos", 410*scale);
            break;
        case 8:
            showOneSponsor(elem, "https://spintektoys.com", "sponsors/spintek.png", "SpinTek Toys", 320*scale);
            break;
    }*/
}

function loadGoldSponsors(id, scale) {
    const elem = document.getElementById(id);
    if (!elem) { return; }
    
    numSponsors = 9;

    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneGoldSponsor(order[i], elem, scale);
    }
    
    if (scale > 0.5) {
        elem.children('a').children().css('margin', '15px 20px');
    }
}

function loadSilverSponsors(id, scale) {
    const elem = document.getElementById(id);
    if (!elem) { return; }
    
    //showOneSponsor(elem, "https://duncantoys.com/", "sponsors/duncan.png", "Duncan Toys", 230*scale);
}

