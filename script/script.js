// https://openapi.programming-hero.com/api/phones?search=${searchText}
// https://openapi.programming-hero.com/api/phones?search=iphone

// https://openapi.programming-hero.com/api/phone/${id}
// https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

const searchMobile = (searchText) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data))

}

searchMobile('iphone')

const showPhone = (phones) => {

    const container = document.getElementById('container')
    phones.forEach(phone => {
        console.log(phone);
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <div class="img">
         <img class="" src="${phone.image}">
        </div>
        <div class="detail">
          <h2>Brand: ${phone.brand}</h2>
          <p>Name: ${phone.phone_name}</p>
        </div>
        <button  onclick="moreDetails('${phone.slug}')">More Detail</button>
        
        `
        container.appendChild(div)
    });

}

const moreDetails = (slugs) => {
    console.log(slugs);
    const url = `https://openapi.programming-hero.com/api/phone/${slugs}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))

}