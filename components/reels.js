export function createReels(arr) {
    let reals = document.createElement('div');
    let user = document.createElement('div');
    let reelsImg = document.createElement('img');
    let userNik = document.createElement('p');

    reelsImg.setAttribute('src', arr.img);
    userNik.textContent = arr.userNamae;

    reals.classList.add('swiper-slide');
    user.classList.add('user');
    userNik.classList.add('userNik');

    user.append(reelsImg);
    reals.append(user, userNik);

    return reals
}