function converteMetroEmPes(m) {
    return m * 3.281;
}

function convertePesEmMetro(p) {
    return p / 3.281;
}

function converteKmEmMilha(km) {
    return km / 1.60934;
}

function converteMilhaEmKm(milha) {
    return milha * 1.60934;
}

function converteCmEmPolegada(cm) {
    return cm / 2.54;
}

function convertePolegadaEmCm(pol) {
    return pol * 2.54;
}

function converteKgEmLibra(kg) {
    return kg * 2.20462;
}

function converteLibraEmKg(lb) {
    return lb / 2.20462;
}

function converteFahrenheitEmCelsius(f) {
    return (f - 32) * 5 / 9;
}

function converteCelsiusEmFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function converteKelvinEmCelsius(k) {
    return k - 273.15;
}

function converteCelsiusEmKelvin(c) {
    return c + 273.15;
}

function converteRealEmDolar(brl) {
    return brl / 5.00;
}

function converteDolarEmReal(usd) {
    return usd * 5.00;
}

function converteRealEmEuro(brl) {
    return brl / 5.50;
}

function converteEuroEmReal(eur) {
    return eur * 5.50;
}

function converteRealEmWon(brl) {
    return brl * 270;
}

function converteWonEmReal(krw) {
    return krw / 270;
}

function converteHorasEmMs(horas) {
    return horas * 3600000;
}

function converteMsEmHoras(ms) {
    return ms / 3600000;
}

export { 
    converteMetroEmPes, convertePesEmMetro,
    converteKmEmMilha, converteMilhaEmKm,
    converteCmEmPolegada, convertePolegadaEmCm,
    converteKgEmLibra, converteLibraEmKg,
    converteFahrenheitEmCelsius, converteCelsiusEmFahrenheit,
    converteKelvinEmCelsius, converteCelsiusEmKelvin,
    converteRealEmDolar, converteDolarEmReal,
    converteRealEmEuro, converteEuroEmReal,
    converteRealEmWon, converteWonEmReal,
    converteHorasEmMs, converteMsEmHoras
};