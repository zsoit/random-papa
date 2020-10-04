const random_images_array = [
    'jan (1).jpg', 'jan (2).jpg', 'jan (3).jpg', 'jan (4).jpg', 'jan (5).jpg', 'jan (6).jpg', 'jan (7).jpg', 'jan (8).jpg', 'jan (9).jpg',

    'jan (1).gif', 'jan (2).gif', 'jan (3).gif', 'jan (4).gif', 'jan (5).gif', 'jan (6).gif', 'jan (7).gif', 'jan (8).gif', 'jan (9).gif',

    'jan (10).gif', 'jan (11).gif', 'jan (12).gif', 'jan (13).gif', 'jan (14).gif', 'jan (15).gif', 'jan (16).gif', 'jan (17).gif', 'jan (18).gif', 'jan (19).gif',

    'jan (20).gif', 'jan (21).gif', 'jan (22).gif', 'jan (23).gif', 'jan (24).gif', 'jan (25).gif', 'jan (26).gif', 'jan (27).gif', 'jan (28).gif', 'jan (29).gif',

    'jan (30).gif',





];

function getRandomPapa(imgAr, path) {
    path = path || 'angry-img/';
    const num = Math.floor(Math.random() * imgAr.length);
    const img = imgAr[num];
    const imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr);
    document.close();
}