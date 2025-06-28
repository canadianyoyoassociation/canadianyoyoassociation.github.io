function showOneSponsor(elem, url, imgsrc, alt, width, target="_blank") {
    img = "<a href='" + url + "' target='" + target + "'><img src='" + imgsrc + "' width='" + width + "px' alt='" + alt + "'>";
    elem.append(img);
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

function loadOneSilverSponsor(num, elem, scale) {
    switch (num) { 
        case 0:
            showOneSponsor(elem, "https://www.gsquaredyoyos.com/", "sponsors/gsquared.png", "G Squared", 240*scale);
            break;
        case 1:
            showOneSponsor(elem, "https://onedropyoyos.com/", "sponsors/onedrop.png", "OneDrop Yoyos", 390*scale);
            break;
        case 2:
            showOneSponsor(elem, "https://www.layerinfinity.com/", "sponsors/layerinfinity.png", "Layer Infinity", 300*scale);
            break;
        case 3:
            showOneSponsor(elem, "https://en.yoyostorerewind.com/", "sponsors/rewind.png", "REWIND", 300*scale);
            break;
        case 4:
            showOneSponsor(elem, "https://www.instagram.com/julyyoyo_official/?hl=en", "sponsors/julyyoyo.png", "JulyYoYo", 370*scale);
            break;
        case 5:
            showOneSponsor(elem, "https://mk1yoyos.com/", "sponsors/mk1.png", "Mk1 Yoyos", 270*scale);
            break;
        case 6:
            showOneSponsor(elem, "https://www.motionyoyo.com/", "sponsors/motionyoyo.png", "Motion Yoyo", 290*scale);
            break;
        case 7:
            showOneSponsor(elem, "https://altyoyo.com/", "sponsors/altyoyo.png", "alternatives", 370*scale);
            break;
    }
}
    

function loadOneGoldSponsor(num, elem, scale) {
    switch (num) {
        case 0:
            showOneSponsor(elem, "https://www.44emporium.com/", "sponsors/44emporium.png", "44 Emporium", 450*scale);
            break;
        case 1:
            showOneSponsor(elem, "https://mfdyoyo.com/", "sponsors/monkeyfinger.png", "MonkeyfingeR", 290*scale);
            break;
        case 2:
            showOneSponsor(elem, "https://www.yoyoexpert.com/", "sponsors/yoyoexpert.png", "YoYoExpert", 400*scale);
            break;
        case 3:
            showOneSponsor(elem, "https://cariboulodge.store/", "sponsors/clyw.png", "Caribou Lodge", 220*scale);
            break;
        case 4:
            showOneSponsor(elem, "http://magicyoyo.cn/", "sponsors/magicyoyo.png", "MagicYoYo", 400*scale);
            break;
        case 5:
            showOneSponsor(elem, "https://www.yoyosam.com/", "sponsors/yoyosam.png", "YoYoSam", 310*scale);
            break;
        case 6:
            showOneSponsor(elem, "https://www.c3yoyodesign.com/", "sponsors/c3yoyodesign.png", "C3yoyodesign", 400*scale);
            break;
        case 7:
            showOneSponsor(elem, "https://truearcreturntops.ca/", "sponsors/TrueArc.png", "True Arc Return Tops", 300*scale);
            break;
        case 8:
            showOneSponsor(elem, "https://spintektoys.com", "sponsors/spintek.png", "SpinTek Toys", 340*scale);
            break;
        case 9:
            showOneSponsor(elem, "https://www.instagram.com/yoyo.calgary/", "sponsors/yoyocalgary.png", "Calgary Yoyo Club", 280*scale);
            break;
        case 10:
            showOneSponsor(elem, "https://www.newbalance.ca/", "sponsors/newbalance.png", "New Balance", 320*scale);
            break;
    }
}

function loadSilverSponsors(id, scale) {
    elem = $("#"+id);
    
    numSponsors = 8;

    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneSilverSponsor(order[i], elem, scale);
    }
    
    if (scale > 0.5) {
        elem.children('a').children().css('margin', '15px 20px');
    }
}
    
    
function loadGoldSponsors(id, scale) {
    elem = $("#"+id);
    
    numSponsors = 11;

    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneGoldSponsor(order[i], elem, scale);
    }
    
    if (scale > 0.5) {
        elem.children('a').children().css('margin', '15px 20px');
    }
}