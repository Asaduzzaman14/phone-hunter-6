

const spinner = (spinnerStyle) => {
    // document.querySelector('.spinner-border').style.display = spinnerStyle
    document.getElementById('spinner').style.display = spinnerStyle
}
// spinner('none')




const searchMobile = () => {


    document.getElementById('detail').textContent = ''
    document.getElementById('container').textContent = ''
    spinner('block')
    const inputValue = document.getElementById('input-fild').value;
    if (!inputValue) {
        alert('input fild empty')
        spinner('none')
    } else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => showPhone(data.data))

    }
    document.getElementById('input-fild').value = ''

}



const showPhone = (phones) => {
    if (phones.length == 0) {
        alert('phone 00')
        spinner('none')
    }
    // spinner('none')
    else {
        const phone = phones.slice(0, 20)

        const container = document.getElementById('container')
        phone.forEach(phone => {
            // if (phones.length == 0) {
            //     alert('phone 007')
            //     // spinner('none')
            // }


            // console.log(phone);
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
            <button class='btn-style'  onclick="moreDetails('${phone.slug}')">More Detail</button>
            
            `
            container.appendChild(div)
            spinner('none')
        });
    }


}

const moreDetails = (slugs) => {
    console.log(slugs);
    const url = `https://openapi.programming-hero.com/api/phone/${slugs}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))

}
const showDetails = (details) => {

    // console.log(details);
    document.getElementById('detail').textContent = ''

    const detail = document.getElementById('detail')

    let div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `
    <div class="img">
         <img class="" src="${details.image}">
    </div>

    <div class="detail">
         <h2>Brand: ${details.brand}</h2>
         <p>Name: ${details.name}</p>
         <p>releaseDate: ${details.releaseDate}</p>
         <p>memory: ${details.mainFeatures.memory}</p>
         <p>sensors: ${details.mainFeatures.sensors[5]}</p>
        

    </div>
     
    `
    detail.appendChild(div)




} 