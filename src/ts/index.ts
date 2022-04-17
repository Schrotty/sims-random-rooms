function random_room() {
    const measurements = <HTMLSpanElement>document.getElementById("measurements")
    const cheatcode = <HTMLSpanElement>document.getElementById("cheatcode")
    const money = <HTMLSpanElement>document.getElementById("money")

    // room size values
    const s_min = parseInt((<HTMLInputElement>document.getElementById("min-x")).value)
    const s_max = parseFloat((<HTMLInputElement>document.getElementById("max-x")).value)

    // money values
    const m_min = parseInt((<HTMLInputElement>document.getElementById("money-min")).value)
    const m_max = parseInt((<HTMLInputElement>document.getElementById("money-max")).value)

    // calc room size & money
    const x_value = Math.floor(Math.random() * (s_max - s_min + 1)) + s_min
    const y_value = Math.floor(Math.random() * (s_max - s_min + 1)) + s_min
    const m = Math.floor(Math.random() * (m_max - m_min + 1)) + m_min

    measurements.textContent = String(x_value + "x" + y_value + "m")
    money.textContent = String(m + "§")
    cheatcode.textContent = String("Money " + m)
}

