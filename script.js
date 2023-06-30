const driverSelect = document.getElementById("driver-select");

function showNote() {
  const driverSelect = document.getElementById("driver-select");
  const note = document.getElementById("note");
  const rsSelect = document.getElementById("rs-select");

  note.textContent = "";
  rsSelect.style.display = "none";

  if (driverSelect.value === "A4988") {
    note.textContent = "De acuerdo con la documentación de REPRAP, existen tres tipos de RS para Drivers A4988 (RS=0.05Ω | RS=0.1Ω | RS=0.2Ω)";
    rsSelect.style.display = "block";
  }
}


function calculate() {

  const rsSelect = document.getElementById("rs");
  const securityPercentage = document.getElementById("security-percentage").value;
  const motorCurrent = document.getElementById("motor-current").value;
  const driverSelected = document.getElementById("driver-selected");
  const rsValue = document.getElementById("rs-value");
  const vref = document.getElementById("vref");
  const driverCurrent = document.getElementById("driver-current");
  const iMaxMotor = document.getElementById("I-maxMotor");
  const irmsContainer = document.getElementById("irms-container");
  const iRMS = document.getElementById("irms");

  driverSelected.textContent = driverSelect.value;

  if (driverSelect.value === "A4988") {
    rsValue.textContent = rsSelect.value + "Ω";
    vref.textContent = (motorCurrent * 8 * rsSelect.value * securityPercentage / 100).toFixed(2) + "V";
    driverCurrent.textContent = "2A";
    iMaxMotor.textContent = (motorCurrent * (securityPercentage / 100)) + "A";
    irmsContainer.style.display = "none";

  } else if (driverSelect.value === "DRV8825") {
    rsValue.textContent = "0.1Ω";
    vref.textContent = (motorCurrent / 2 * securityPercentage / 100).toFixed(2) + "V";
    driverCurrent.textContent = "2A";
    iMaxMotor.textContent = (motorCurrent * (securityPercentage / 100)) + "A";
    irmsContainer.style.display = "none";

  } else if (driverSelect.value === "TMC2208") {
    rsValue.textContent = "0.11Ω";
    driverCurrent.textContent = "1.2A";
    vref.textContent = (((motorCurrent / 1.41)*(securityPercentage / 100)* 2.5 ) / 1.7).toFixed(2) + "V";
    iMaxMotor.textContent = (motorCurrent * (securityPercentage / 100)) + "A";
    iRMS.textContent = ((motorCurrent / 1.41)*(securityPercentage / 100)).toFixed(2) + "A";
    irmsContainer.style.display = "block";

  
  } else if (driverSelect.value === "TMC2209") {
    rsValue.textContent = "0.11Ω";
    driverCurrent.textContent = "1.7A";
    vref.textContent = (((motorCurrent / 1.41)*(securityPercentage / 100)* 2.5 ) / 1.7).toFixed(2) + "V";
    iMaxMotor.textContent = (motorCurrent * (securityPercentage / 100)) + "A";
    iRMS.textContent = ((motorCurrent / 1.41)*(securityPercentage / 100)).toFixed(2) + "A";
    irmsContainer.style.display = "block";

  } else if (driverSelect.value === "TMC2XXX") {

    rsValue.textContent = "0.11Ω";
    driverCurrent.textContent = "Consultar DataSheet";
    vref.textContent = (((motorCurrent / 1.41)*(securityPercentage / 100)* 2.5 ) / 1.7).toFixed(2) + "V";
    iMaxMotor.textContent = (motorCurrent * (securityPercentage / 100)) + "A";
    iRMS.textContent = ((motorCurrent / 1.41)*(securityPercentage / 100)).toFixed(2) + "A";
    irmsContainer.style.display = "block";
  }
}


function mostrarDriver() {
  var imagenDriver = document.getElementById("imagen-driver");

  if (driverSelect.value === "--Seleccione--" || driverSelect.value === "TMC2XXX")  {
    imagenDriver.style.display = "none";
  } else if (driverSelect.value === "A4988") {
    imagenDriver.style.display = "block";
    imagenDriver.src = ".img/driver_ a4988.png";
  } else if (driverSelect.value === "DRV8825") {
    imagenDriver.style.display = "block";
    imagenDriver.src = ".img/driver_drv8825.png";
  } else if (driverSelect.value === "TMC2208") {
    imagenDriver.style.display = "block";
    imagenDriver.src = ".img/driver_tmc2208.png";
  } else if (driverSelect.value === "TMC2209") {
    imagenDriver.style.display = "block";
    imagenDriver.src = ".img/driver_tmc2209.png";
  }
}
