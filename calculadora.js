document.getElementById('calculateButton').addEventListener('click', calculateHealth);

function calculateHealth() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convertendo para metros
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    console.log('Weight:', weight);
    console.log('Height:', height);
    console.log('Age:', age);
    console.log('Gender:', gender);

    // Calculando o IMC
    const bmi = weight / (height * height);
    console.log('BMI:', bmi);

    // Calculando a quantidade necessária de água (aproximadamente 35ml por kg de peso corporal)
    const waterIntake = weight * 35;
    console.log('Water Intake:', waterIntake);

    // Calculando o metabolismo basal (usando a fórmula de Harris-Benedict)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * (height * 100)) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * (height * 100)) - (4.330 * age);
    }
    console.log('BMR:', bmr);

    // Definindo os intervalos de IMC
    let weightStatus = "";
    let weightToObesity = null;
    if (bmi < 18.5) {
        weightStatus = "Desnutrido";
    } else if (bmi < 24.9) {
        weightStatus = "Peso Normal";
    } else if (bmi < 29.9) {
        weightStatus = "Sobrepeso";
    } else {
        weightStatus = "Obeso";
    }
    console.log('Weight Status:', weightStatus);

    // Calculando os kg faltantes para obesidade se não for obeso
    if (bmi < 29.9) {
        const obesityThreshold = 29.9 * (height * height);
        weightToObesity = (obesityThreshold - weight).toFixed(2);
    }
    console.log('Weight to Obesity:', weightToObesity);

    // Redirecionando para a página de resultados com os parâmetros na URL
    window.location.href = `results.html?bmi=${bmi.toFixed(2)}&weightStatus=${weightStatus}&waterIntake=${waterIntake.toFixed(2)}&bmr=${bmr.toFixed(2)}&weightToObesity=${weightToObesity}`;
}
