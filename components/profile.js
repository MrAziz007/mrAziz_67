export function createProfile(obj) {
    let profileContainer = document.createElement('div');
    let profilTop = document.createElement('div');
    let profilAvatar = document.createElement('div');
    let avatarimg = document.createElement('img');
    let profilData = document.createElement('div');
    let profilData1 = document.createElement('div');
    let data1_nik = document.createElement('h1');
    let data1_edit = document.createElement('button');
    let data1_btn = document.createElement('button');
    let data1_btnImg = document.createElement('img');
    let profilData2 = document.createElement('div');
    let data2_1 = document.createElement('h4');
    let data2_2 = document.createElement('h4');
    let data2_3 = document.createElement('h4');
    let profilData3 = document.createElement('h3');
    let profilBody = document.createElement('div');
    let postsGrid = document.createElement('div');
    
    avatarimg.setAttribute('src', obj.imgprofile);
    data1_nik.textContent = obj.nikname;
    data1_edit.textContent = 'Edit Profile';
    data1_btnImg.setAttribute('src', '../img/nastroyki.png');
    data2_1.textContent = '12 posts';
    data2_2.textContent = '1200 followers';
    data2_3.textContent = '120 following';
    profilData3.textContent = obj.name + " " + obj.surname;
    
    for (const element of obj.posts) {
        let gridElemImg = document.createElement('img');
        gridElemImg.setAttribute('src', element.post);
        postsGrid.append(gridElemImg);
        gridElemImg.style.height = '90%';
    };

    profilTop.classList.add('profilTop');
    profilAvatar.classList.add('profilAvatar');
    data1_nik.classList.add('data1_nik');
    profilData1.classList.add('profilData1');
    data1_edit.classList.add('data1_edit');
    profilData2.classList.add('profilData1');
    postsGrid.classList.add('postsGrid');

    profilAvatar.append(avatarimg);
    data1_btn.append(data1_btnImg);
    profilData1.append(data1_nik, data1_edit, data1_btn);
    profilData2.append(data2_1, data2_2, data2_3);
    profilData.append(profilData1, profilData2, profilData3);
    profilTop.append(profilAvatar, profilData);
    profilBody.append(postsGrid);
    profileContainer.append(profilTop, profilBody);

    return profileContainer
}