let container = document.querySelector('.container')

const fetchUserDetails = async () => {
    const response = await fetch('./_data.json');
    const data = await response.json();
    data.forEach(user => {
        container.innerHTML += `
        <div class="card">
            <div class="imgBox">
                <img src=${user.image} class="avatar">
            </div>
            <div class="details">
                <h2>${user.name}</h2>
                <p><i class="fas fa-home fa-2x"></i> ${user.hometown}</p>
                <div><i class="fas fa-envelope-square fa-2x"></i> ${user.email}</div> 
                <p><i class="fas fa-wrench fa-2x"></i> ${user.skills}</p>
                <p><i class="fab fa-angellist fa-2x"></i> ${user.hobby}</p>
                <p><i class="far fa-smile-wink fa-2x"></i> ${user.romanChar}</p>
            </div>
       </div>
        `
    })
}

fetchUserDetails();