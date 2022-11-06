const profile=document.getElementById('profile');
const pro_name=document.getElementById('pro_name');
const bio=document.getElementById('bio');
const des=document.getElementById('des');
const pro_btn=document.getElementById('pro_btn');


  fetch('https://api.github.com/users/raheel-cloud')
  .then(res => res.json())
  .then(data =>{
    profile.innerHTML = `<img src="${data.avatar_url}"/>`
    pro_name.innerHTML = `${data.name}`
    des.innerHTML = `${data.blog}`
    bio.innerHTML = `${data.bio}`

  })
  function click(){
    click="location.href='https://github.com/raheel-cloud.html';"
  }

