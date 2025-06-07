function print1(x){
    for (let i = 0; i < x; i++) {
        let s = ''
        for (let j = 0; j < x; j++) {
            s += '* ';
        }
        console.log(s)
    }
}

// print1(5);

function print2(x){
    for (let i = 0; i < x; i++) {
        let s = ''
        for (let j = 0; j <= i; j++) {
        // for (let j = 0; j < i + 1; j++) {
            s += '* ';
        }
        console.log(s)
    }
}


// console.log(print2(4))


function print3(x){
    for (let i = 0; i < x; i++) {
        let row = ''
        for (let j = 0; j <= i; j++) {
            let n = j + 1;
            row += n;
        }
        console.log(row)
    }
}

// print3(5)

function print4(x){
    for (let i = 0; i < x; i++) {
        let row = ''
        for (let j = 0; j <= i; j++) {
            let n = i + 1;
            row += n;
        }
        console.log(row)
    }
}

// print4(5)


function print5(x){
    // for (let i = x; i > 0; i--) {
    //     let row = ''
    //     for (let j = 0; j < i; j++) {
    //         let n = j + 1;
    //         row += n;
    //     }
    //     console.log(row)
    // }

    for (let i = 0; i < x; i++) {
        let row = '';
        for (let j = 0; j < x - i; j++) {
            row += (j + 1)
        }
        console.log(row)
    }
}

// print5(5)

function print6(x){
    // for (let i = x; i > 0; i--) {
    //     let row = ''
    //     for (let j = 0; j < i; j++) {
    //         let n = j + 1;
    //         row += n;
    //     }
    //     console.log(row)
    // }

    for (let i = 0; i < x; i++) {
        let row = '';
        for (let j = 0; j < x - i; j++) {
            row += '* '
        }
        console.log(row)
    }
}

// print6(5)

function print7(x){
    for (let i = 0; i < x; i++) {
        let row = '';
        for (let j = 0; j < x - (i + 1); j++) {
            row += '_';
        }
        for (let k = 0; k < i + 1; k++) {
            row += '*'
        }
        console.log(row)
    }
}

// print7(5)


function print8(x){
    for (let i = 0; i < x; i++) {
        let row = '';
        let tog = 1;
        for (let j = 0; j < i + 1; j++) {
            row += tog;
            if(tog == 1) tog = 0;
            else tog = 1;
        }
        console.log(row)
    }
}

// print8(5)

function print9(x){
    let tog = 1;
    for (let i = 0; i < x; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row += tog;
            if(tog == 1) tog = 0;
            else tog = 1;
        }
        console.log(row)
    }
}

print9(5);