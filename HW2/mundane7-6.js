function perimtr(A) {
    let P = 0;
    let B = A.map(function(str) {
        return str.split('');
    });

    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < B[i].length; j++) {
            if (B[i][j] === 'X') {
                if (i + 1 >= B.length || B[i + 1][j] !== 'X') P += 1;
                if (j + 1 >= B[i].length || B[i][j + 1] !== 'X') P += 1;
                if (i - 1 < 0 || B[i - 1][j] !== 'X') P += 1;
                if (j - 1 < 0 || B[i][j - 1] !== 'X') P += 1;
            }
        }
    }
    return P;
}

console.log(perimtr(['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO']));