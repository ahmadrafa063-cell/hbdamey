// Default Configuration
const defaultConfig = {
    name: 'Amey Cantik 💖',
    message: 'Semoga harimu indah seperti senyummu! ✨',
    wish: 'Selalu sehat, bahagia, dan semua usahamu tercapai! 💫',
    background_color: '#ffecd2',
    title_color: '#e75480',
    name_color: '#c2185b',
    message_color: '#6d4c41',
    font_family: 'Quicksand',
    font_size: 18
};

// DOM Elements
const elements = {
    app: document.getElementById('app'),
    title: document.getElementById('title'),
    nameText: document.getElementById('name-text'),
    messageText: document.getElementById('message-text'),
    wishText: document.getElementById('wish-text'),
    confettiContainer: document.getElementById('confetti-container')
};

// Create Confetti
function createConfetti() {
    const colors = ['#e75480', '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
    
    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 3 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        elements.confettiContainer.appendChild(piece);
    }
}

// Apply Configuration
function applyConfig(config = defaultConfig) {
    // Update text
    elements.nameText.textContent = config.name || defaultConfig.name;
    elements.messageText.textContent = config.message || defaultConfig.message;
    elements.wishText.textContent = config.wish || defaultConfig.wish;
    
    // Update background
    elements.app.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color}, #fcb69f)`;
    
    // Update colors
    elements.title.style.color = config.title_color || defaultConfig.title_color;
    elements.nameText.style.color = config.name_color || defaultConfig.name_color;
    elements.messageText.style.color = config.message_color || defaultConfig.message_color;
    elements.wishText.style.color = config.name_color || '#d81b60';
    
    // Update fonts
    const font = config.font_family || defaultConfig.font_family;
    const size = config.font_size || defaultConfig.font_size;
    
    [elements.nameText, elements.messageText, elements.wishText].forEach(el => {
        el.style.fontFamily = `${font}, sans-serif`;
    });
    
    elements.messageText.style.fontSize = `${size}px`;
    elements.wishText.style.fontSize = `${size * 0.8}px`;
    elements.nameText.style.fontSize = `${size * 1.8}px`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    applyConfig();
    
    // Show elements with delay
    setTimeout(() => {
        elements.nameText.style.opacity = '1';
        elements.messageText.style.opacity = '1';
        elements.wishText.style.opacity = '1';
    }, 100);
});

// Element SDK (Optional - for editor platforms)
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange: applyConfig,
        mapToCapabilities: (config) => ({
            recolorables: [
                { get: () => config.background_color, set: (v) => window.elementSdk.setConfig({ background_color: v }) },
                { get: () => config.title_color, set: (v) => window.elementSdk.setConfig({ title_color: v }) },
                { get: () => config.name_color, set: (v) => window.elementSdk.setConfig({ name_color: v }) },
                { get: () => config.message_color, set: (v) => window.elementSdk.setConfig({ message_color: v }) }
            ],
            fontEditable: { get: () => config.font_family, set: (v) => window.elementSdk.setConfig({ font_family: v }) },
            fontSizeable: { get: () => config.font_size, set: (v) => window.elementSdk.setConfig({ font_size: v }) }
        }),
        mapToEditPanelValues: (config) => new Map([
            ['name', config.name],
            ['message', config.message],
            ['wish', config.wish]
        ])
    });
}