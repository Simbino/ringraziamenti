async function checkKey() {
    let key = document.getElementById("keyInput").value.trim();
    let messageBox = document.getElementById("message");

    if (key === "") {
        messageBox.textContent = "Inserisci una chiave valida.";
        return;
    }

    try {
        let response = await fetch("data.json");  // Carica il file JSON
        let data = await response.json();

        if (data[key]) {
            messageBox.textContent = data[key];  // Mostra il messaggio corrispondente
        } else {
            messageBox.textContent = "Chiave non trovata. Controlla e riprova.";
        }
    } catch (error) {
        messageBox.textContent = "Errore nel caricamento dei dati.";
    }
}
