function calcularFresnel() {
    let d = document.getElementById('distancia').value;
    let f = document.getElementById('frecuencia').value;

    if (d === '' || f === '') {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    d = parseFloat(d);
    f = parseFloat(f);



    let fresnel = 17.32 * Math.sqrt((d / 4) / f);

    document.getElementById('resultado').innerText = 
        `La zona de Fresnel es: ${fresnel.toFixed(2)} metros`;
}
