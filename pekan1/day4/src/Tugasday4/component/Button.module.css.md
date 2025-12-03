```css
/* Button.module.css - CSS Modules untuk komponen Button */

/* Style untuk button default */
.button {
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 3px;
}

/* Variant default (abu-abu) */
.default {
    background-color: #95a5a6;
    color: white;
}

/* Variant primary (biru) */
.primary {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
}

/* Variant success (hijau) */
.success {
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    color: white;
}

/* Variant danger (merah) */
.danger {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
}

/* Container untuk buttons */
.buttonContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 6px;
}
