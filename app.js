// https://calculator.swiftutors.com/volumetric-flow-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumetricFlowRateRadio = document.getElementById('volumetricFlowRateRadio');
const velocityoftheFluidRadio = document.getElementById('velocityoftheFluidRadio');
const crossSectionalAreaRadio = document.getElementById('crossSectionalAreaRadio');

let volumetricFlowRate;
let velocityoftheFluid = v1;
let crossSectionalArea = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

volumetricFlowRateRadio.addEventListener('click', function() {
  variable1.textContent = '(v) Velocity of the Fluid (m/s)';
  variable2.textContent = '(A) Cross Sectional Area (m²)';
  velocityoftheFluid = v1;
  crossSectionalArea = v2;
  result.textContent = '';
});

velocityoftheFluidRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Volumetric Flow Rate (m³/s)';
  variable2.textContent = '(A) Cross Sectional Area (m²)';
  volumetricFlowRate = v1;
  crossSectionalArea = v2;
  result.textContent = '';
});

crossSectionalAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Volumetric Flow Rate (m³/s)';
  variable2.textContent = '(v) Velocity of the Fluid (m/s)';
  volumetricFlowRate = v1;
  velocityoftheFluid = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumetricFlowRateRadio.checked)
    result.textContent = `Volumetric Flow Rate = ${computeVolumetricFlowRate().toFixed(2)} m³/s`;

  else if(velocityoftheFluidRadio.checked)
    result.textContent = `Velocity of the Fluid = ${computeVelocityoftheFluid().toFixed(2)} m/s`;

  else if(crossSectionalAreaRadio.checked)
    result.textContent = `Cross Sectional Area = ${computeCrossSectionalArea().toFixed(2)} m²`;
})

// calculation

function computeVolumetricFlowRate() {
  return Number(velocityoftheFluid.value) * Number(crossSectionalArea.value);
}

function computeVelocityoftheFluid() {
  return Number(volumetricFlowRate.value) / Number(crossSectionalArea.value);
}

function computeCrossSectionalArea() {
  return Number(volumetricFlowRate.value) / Number(velocityoftheFluid.value);
}