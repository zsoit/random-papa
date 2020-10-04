const random_images_array = [
    'jan (1).jpg', 'jan (2).jpg', 'jan (3).jpg', 'jan (4).jpg', 'jan (5).jpg', 'jan (6).jpg', 'jan (7).jpg', 'jan (8).jpg', 'jan (9).jpg',

    'jan (10).jpg', 'jan (11).jpg', 'jan (12).jpg', 'jan (13).jpg', 'jan (14).jpg', 'jan (15).jpg', 'jan (16).jpg', 'jan (17).jpg', 'jan (18).jpg', 'jan (19).jpg',

    'jan (20).jpg', 'jan (21).jpg', 'jan (22).jpg', 'jan (23).jpg', 'jan (24).jpg', 'jan (25).jpg', 'jan (26).jpg', 'jan (27).jpg',

    'jan (1).png',






];

function getRandomPapa(imgAr, path) {
    path = path || '2137-img/';
    const num = Math.floor(Math.random() * imgAr.length);
    const img = imgAr[num];
    const imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr);
    document.close();
}