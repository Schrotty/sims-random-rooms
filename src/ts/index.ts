function f() {
    const min = parseInt((<HTMLInputElement>document.getElementById("min-x")).value)
    const max = parseFloat((<HTMLInputElement>document.getElementById("max-x")).value)

    const x_value = Math.floor(Math.random() * (max - min + 1)) + min
    const y_value = Math.floor(Math.random() * (max - min + 1)) + min

    alert(String("Your room has the size: " + x_value + "x" + y_value));
}

