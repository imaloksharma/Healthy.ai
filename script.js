
function detectSymptoms() {
    const symptom = document.getElementById('symptomInput').value.toLowerCase();
    let resultText = '';

    if (symptom.includes('fever') && symptom.includes('cough')) {
        resultText = '<strong>Prediction:</strong> You may have flu or a viral infection.<br>' +
            '<strong>Precautions:</strong> Stay hydrated, rest well, and consult a doctor if symptoms persist. Wear a mask and avoid close contact with others.<br>' +
            '<strong>Suggested Medicines:</strong> Paracetamol, Cough Syrup (e.g., Benadryl), Vitamin C supplements.';
    } else if (symptom.includes('headache')) {
        resultText = '<strong>Prediction:</strong> Possible migraine or stress-induced headache.<br>' +
            '<strong>Precautions:</strong> Rest in a quiet, dark room. Stay hydrated and avoid screen time. Consult a physician if headaches are frequent.<br>' +
            '<strong>Suggested Medicines:</strong> Ibuprofen, Acetaminophen (Tylenol).';
    } else if (symptom.includes('sore throat')) {
        resultText = '<strong>Prediction:</strong> Likely throat infection or cold.<br>' +
            '<strong>Precautions:</strong> Gargle with warm salt water, drink warm fluids, and avoid cold drinks. Visit a doctor if pain increases.<br>' +
            '<strong>Suggested Medicines:</strong> Lozenges (e.g., Strepsils), Warm herbal teas, Paracetamol.';
    } else {
        resultText = '<strong>Note:</strong> Please enter common symptoms such as fever, cough, headache, sore throat for a prediction. For serious issues, consult a healthcare provider immediately.';
    }

    document.getElementById('result').innerHTML = resultText;
}
