function showOneSponsor(elem, url, imgsrc, alt, width) {
    var link = document.createElement("a");
    link.target = "_blank";
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
            showOneSponsor(elem, "https://www.yoyoexpert.com/", "sponsors/yoyoexpert.png", "YoYoExpert", 380*scale);
            break;
        case 1:
            showOneSponsor(elem, "https://www.yo-yo.com/", "sponsors/duncan.png", "Duncan", 380*scale);
            break;
        case 2:
        	showOneSponsor(elem, "http://magicyoyo.cn/", "sponsors/magicyoyo.png", "MagicYoYo", 450*scale);
            break;
        case 3:
        	showOneSponsor(elem, "https://www.44emporium.com/", "sponsors/44emporium.png", "44 Emporium", 530*scale);
            break;
        case 4:
        	showOneSponsor(elem, "https://www.aroundsquare.com/", "sponsors/ao2.png", "Aroundsquare", 420*scale);
            break;
    }
}

function loadGoldSponsors(id, scale) {
    var elem = document.getElementById(id);
    showOneSponsor(elem, "https://polyformyoyos.com/", "sponsors/polyform.jpg", "Polyform", 1000*scale);
    br(elem);

    numSponsors = 5;
    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneGoldSponsor(order[i], elem, scale);
        if (((i + 1) % 2) == 0) {
            br(elem);
            br(elem);
        }
    }
}

function loadOneSilverSponsor(num, elem, scale) {
    switch (num) {
        case 0:
            showOneSponsor(elem, "https://onedropyoyos.com/", "sponsors/onedrop.png", "One Drop YoYos", 240*scale);
            break;
        case 1:
            showOneSponsor(elem, "https://raincityskills.com/", "sponsors/raincity.png", "Rain City Skills", 140*scale);
            break;
        case 2:
            showOneSponsor(elem, "https://www.layerinfinity.com/", "sponsors/layerinfinity.png", "Layer Infinity", 180*scale);
            break;
        case 3:
            showOneSponsor(elem, "https://www.instagram.com/j.dye_.ca/", "sponsors/jdye.png", "J-Dye", 140*scale);
            break;
        case 4:
            showOneSponsor(elem, "https://www.motionyoyo.com/", "sponsors/motionyoyo.png", "Motion YoYo", 200*scale);
            break;
        case 5:
            showOneSponsor(elem, "https://www.yoyosam.com/", "sponsors/yoyosam.png", "YoYoSam", 200*scale);
            break;
        case 6:
            showOneSponsor(elem, "https://www.zgrt.ca/", "sponsors/zerogravity.png", "Zero Gravity Return Tops", 210*scale);
            break;
        case 7:
            showOneSponsor(elem, "https://mfdyoyo.com/", "sponsors/mfd.png", "Monkeyfinger Design", 160*scale);
            break;
        case 8:
            showOneSponsor(elem, "https://yomega.com/", "sponsors/yomega.png", "Yomega", 220*scale);
            break;
    }
}

function loadOtherSponsors(id, scale) {
    var elem = document.getElementById(id);
    numSilverSponsors = 9;
    order = genRandArray(numSilverSponsors);
    for (i = 0; i < numSilverSponsors; i++) {
        loadOneSilverSponsor(order[i], elem, scale);
        if (((i + 1) % 3) == 0) {
            br(elem);
        }
    }

    /* Bronzes */
    br(elem);
    showOneSponsor(elem, "https://treasureislandtoys.ca/", "sponsors/treasureislandtoys.png", "Treasure Island Toys", 200*scale);
    showOneSponsor(elem, "https://mk1yoyos.com/", "sponsors/mk1.png", "MK1 yoyos", 150*scale);
    showOneSponsor(elem, "http://generalyo.com/", "sponsors/generalyo.png", "General Yo", 190*scale);
    showOneSponsor(elem, "https://www.lathedbackdesign.com/", "sponsors/lathedbackdesign.png", "Lathed Back Design", 115*scale);
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
    showOneSponsor(elem, "https://www.instagram.com/j.dye_.ca/", "sponsors/jdye.png", "J-Dye", 140*scale);
    showOneSponsor(elem, "https://polyformyoyos.com/", "sponsors/polyform_round.png", "Polyform", 140*scale);
    showOneSponsor(elem, "https://www.yo-yo.com/", "sponsors/duncan.png", "Duncan", 200*scale);
}
