// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let a = (h,b,c) => {
    const p = (h+b+c)/2;
    const pole = Math.sqrt(p * (p-h) * (p-b) * (p-c));

    return `Pole trókąta o bokach ${h}, ${b} oraz ${c} wynosi ${pole}`;
};

console.log( a(b,c,h) );