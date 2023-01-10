
function impresionDeTarjetas() {
    for (let index = 0; index < 6; index++) {
        document.querySelector('.container').
            innerHTML = document.querySelector('.container').
                innerHTML + `<div class="card">
            <img
                src="https://api.lorem.space/image/fashion?w=640&h=480&r=998"
                alt="foto"
                class="product-image" />
            <div class="text-container">
                <h6>jallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h6>
                <p>$109.95</p>
            </div>
        </div>`
    }
}

window.onload(impresionDeTarjetas());