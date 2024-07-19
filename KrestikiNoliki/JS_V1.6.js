
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let doska = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

function pechatDoski() {
    console.log('  0 1 2');
    for (let i = 0; i < 3; i++) {
        console.log(i + ' ' + doska[i].join('|'));
        if (i < 2) console.log('  -----');
    }
}

function etoPobeda(igrok) {
    for (let i = 0; i < 3; i++) {
        if (doska[i][0] === igrok && doska[i][1] === igrok && doska[i][2] === igrok) return true;
        if (doska[0][i] === igrok && doska[1][i] === igrok && doska[2][i] === igrok) return true;
    }
    if (doska[0][0] === igrok && doska[1][1] === igrok && doska[2][2] === igrok) return true;
    if (doska[0][2] === igrok && doska[1][1] === igrok && doska[2][0] === igrok) return true;
    return false;
}

function etoNichya() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (doska[i][j] === ' ') return false;
        }
    }
    return true;
}

function sdelatHod(igrok) {
    rl.question(`Igrok ${igrok}, vvedite svoy hod (ryad i stolbets): `, (input) => {
        const [ryad, stolbets] = input.split(' ').map(Number);
        if (ryad >= 0 && ryad < 3 && stolbets >= 0 && stolbets < 3 && doska[ryad][stolbets] === ' ') {
            doska[ryad][stolbets] = igrok;
            pechatDoski();
            if (etoPobeda(igrok)) {
                console.log(`Igrok ${igrok} pobezhdaet!`);
                rl.close();
            } else if (etoNichya()) {
                console.log('Igra zakonchilas v nichyu!');
                rl.close();
            } else {
                sdelatHod(igrok === 'X' ? 'O' : 'X');
            }
        } else {
            console.log('Nepravilny hod, poprobuyte snova.');
            sdelatHod(igrok);
        }
    });
}

pechatDoski();
sdelatHod('X');