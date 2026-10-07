function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function doFlip(n1, n2) {
    // head 1 / tails 0
    return Math.random() < 0.5 ? n1 : n2;
}