function showOneSponsor(elem, url, imgsrc, alt, width, target="_blank") {
    var link = document.createElement("a");
    link.target = target;
    link.href = url;

    var img = document.createElement("img");
    img.src = imgsrc;
    img.width = width;
    img.alt = alt;

    elem.appendChild(link).appendChild(img);
}

function br(elem) {
    elem.appendChild(document.createElement("br"));
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
    switch (num) {
        case 0:
            showOneSponsor(elem, "https://yoyoexpert.com/", "sponsors/yoyoexpert.png", "Yoyoexpert", 380*scale);
            break;

        case 1:
            showOneSponsor(elem, "https://a-rt.ca/", "sponsors/art.png", "Alternate Return Tops", 380*scale);
            break;

        case 2:
            showOneSponsor(elem, "https://www.c3yoyodesign.com/", "sponsors/C3.png", "C3 Yoyodesign", 430*scale);
            break;
            
        case 3:
            showOneSponsor(elem, "https://clyw.ca/", "sponsors/clyw.png", "Caribou Lodge Return Tops", 240*scale);
            break;
            
        case 4:
            showOneSponsor(elem, "https://mfdyoyo.com/", "sponsors/mfd.png", "MonkeyfingeR", 290*scale);
            break;
            
        case 5:
            showOneSponsor(elem, "https://www.instagram.com/ych_yoyo/", "sponsors/Yichenghao.png", "Yichenghao", 300*scale);
            break;
            
        case 6:
            showOneSponsor(elem, "https://www.44emporium.com/", "sponsors/44emporium.png", "44 Emporium", 500*scale);
            break;

    }
}

function loadGoldSponsors(id, scale) {
    var elem = document.getElementById(id);
 //   showOneSponsor(elem, "https://polyformyoyos.com/", "sponsors/polyform.jpg", "Polyform", 1000*scale);
    br(elem);

    numSponsors = 7;
    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneGoldSponsor(order[i], elem, scale);
        if (((i + 1) % 3) == 0) {
            br(elem);
            br(elem);
        }
    }
}

function loadOneSilverSponsor(num, elem, scale) {
    switch (num) {
        case 0:
            showOneSponsor(elem, "https://onedropyoyos.com/", "sponsors/onedrop.png", "One Drop YoYos", 250*scale);
            break;
        case 1:
            showOneSponsor(elem, "https://duncantoys.com/", "sponsors/duncan.png", "Duncan", 240*scale);
            break;
        case 2:
            showOneSponsor(elem, "https://www.layerinfinity.com/", "sponsors/layerinfinity.png", "Layer Infinity", 210*scale);
            break;
        case 3:
            showOneSponsor(elem, "https://www.gomagicyoyo.com/", "sponsors/magicyoyo.png", "MagicYoyo", 240*scale);
            break;
        case 4:
            showOneSponsor(elem, "https://raincityskills.com/", "sponsors/raincity.png", "Rain City Skills", 180*scale);
            break;
        case 5:
            showOneSponsor(elem, "http://generalyo.com/", "sponsors/generalyo.png", "GeneralYo", 250*scale);
            break;
        case 6:
            showOneSponsor(elem, "https://www.lathedbackdesign.com/", "sponsors/lathedbackdesign.png", "Lathed Back Design", 180*scale);
            break;

    }
}

function loadOtherSponsors(id, scale) {
    var elem = document.getElementById(id);
    numSilverSponsors = 7;
    order = genRandArray(numSilverSponsors);
    for (i = 0; i < numSilverSponsors; i++) {
        loadOneSilverSponsor(order[i], elem, scale);
        if (((i + 1) % 4) == 0) {
            br(elem);
        }
    }

    /* Bronzes */
    br(elem);
    showOneSponsor(elem, "https://mk1yoyos.com/", "sponsors/mk1.png", "MK1 yoyos", 100*scale);
    showOneSponsor(elem, "https://www.motionyoyo.com/", "sponsors/motionyoyo.png", "Motion YoYo", 120*scale);
//    showOneSponsor(elem, "https://www.lathedbackdesign.com/", "sponsors/lathedbackdesign.png", "Lathed Back Design", 115*scale);
}

// function loadOtherSponsorsStatic(id, scale) {
//     var elem = document.getElementById(id);
//     showOneSponsor(elem, "https://onedropyoyos.com/", "sponsors/onedrop.png", "One Drop YoYos", 240*scale);
//     showOneSponsor(elem, "https://raincityskills.com/", "sponsors/raincity.png", "Rain City Skills", 140*scale);
//     showOneSponsor(elem, "https://www.layerinfinity.com/", "sponsors/layerinfinity.png", "Layer Infinity", 180*scale);
//     showOneSponsor(elem, "https://www.instagram.com/j.dye_.ca/", "sponsors/jdye.png", "J-Dye", 140*scale);
//     br(elem);
//     showOneSponsor(elem, "https://www.motionyoyo.com/", "sponsors/motionyoyo.png", "Motion YoYo", 200*scale);
//     showOneSponsor(elem, "https://www.yoyosam.com/", "sponsors/yoyosam.png", "YoYoSam", 200*scale);
//     showOneSponsor(elem, "https://www.zgrt.ca/", "sponsors/zerogravity.png", "Zero Gravity Return Tops", 210*scale);
//     br(elem);
//     showOneSponsor(elem, "https://treasureislandtoys.ca/", "sponsors/treasureislandtoys.png", "Treasure Island Toys", 200*scale);
//     showOneSponsor(elem, "https://mk1yoyos.com/", "sponsors/mk1.png", "MK1 yoyos", 150*scale);
//     showOneSponsor(elem, "http://generalyo.com/", "sponsors/generalyo.png", "General Yo", 190*scale);
//     showOneSponsor(elem, "https://www.lathedbackdesign.com/", "sponsors/lathedbackdesign.png", "Lathed Back Design", 115*scale);
// }

function loadVendors(id, scale) {
    var elem = document.getElementById(id);
    showOneSponsor(elem, "https://raincityskills.com/", "sponsors/raincity.png", "Rain City Skills", 140*scale);
    showOneSponsor(elem, "https://a-rt.ca/", "sponsors/art.png", "Alternate Return Tops", 240*scale);
    showOneSponsor(elem, "http://www.canadayoyo.ca/", "sponsors/canya_logo.png", "CANYA", 110*scale);

}
