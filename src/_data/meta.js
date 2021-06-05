/* Låt bli */
const colors = require('nice-color-palettes');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const color = colors && colors[getRandomIntInclusive(0, colors.length)];
const pick = color && color[getRandomIntInclusive(0, color.length)];

/* Här nedanför kan du ändra */
module.exports = {
    // NOTE: `process.env.URL` is provided by Netlify, and may need
    // adjusted pending your host
    url: process.env.URL || 'http://localhost:8080',
    // page language
    language: 'sv',
   // Sidans namn, måste överrensstämma med src/index.md title front matter
    siteName: 'Ämnestitel',
    themeColor: pick, // pick or color string '#ff4e50'
    siteDescription:
        'Instruktionssida för siteskaparen för Tema Område Del, TOD.',
    author: {
        name: 'Jens Andreasson',
        email: 'jensandreasson77@gmail.com',
        url: 'https://jensa.xyz'
    }
};
