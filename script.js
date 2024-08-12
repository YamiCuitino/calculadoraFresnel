function calcularFresnel() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const frecuencia = parseFloat(document.getElementById('frecuencia').value);

    if (isNaN(distancia) || isNaN(frecuencia) || distancia <= 0 || frecuencia <= 0) {
        document.getElementById('resultado').textContent = "Por favor, ingrese valores válidos para la distancia y la frecuencia.";
        return;
    }

    // Formula Zona de Fresnel
    const fresnelZone = 17.32 * Math.sqrt((distancia / 4) / frecuencia);

    // Mostrar resultado
    document.getElementById('resultado').textContent = `La Zona de Fresnel es de ${fresnelZone.toFixed(2)} metros.`;
}
