```css
/* ResponsiveCard.module.css - CSS Modules dengan Media Queries */

.container {
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 6px;
}

.title {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 8px;
    font-size: 12px;
}

.card {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border-radius: 6px;
    padding: 12px;
    color: white;
}

.cardHeader {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
}

.cardContent {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 6px;
}

.infoItem {
    margin-bottom: 5px;
    font-size: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.label {
    font-weight: bold;
    min-width: 60px;
}

.badge {
    display: inline-block;
    background-color: #ffd700;
    color: #333;
    padding: 4px 8px;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 6px;
    text-align: center;
    font-size: 9px;
}

/* Media Query untuk Desktop (layar besar) */
@media (min-width: 768px) {
    .card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .title::after {
        content: " 💻";
        color: #667eea;
    }
}

/* Media Query untuk Mobile (layar kecil) */
@media (max-width: 767px) {
    .card {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }

    .infoItem {
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }

    .label {
        min-width: auto;
    }

    .title::after {
        content: " 📱";
        color: #f5576c;
    }
}
