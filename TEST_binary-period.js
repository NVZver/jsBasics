// Need to fix the code.
/**
 * Example: 995 is 1110111011
 * Its binary perion: 4 because of 1110.length
 * 1110 repeats and it's a binary period,
 * so we return its length
 */
function solution(n) {
    d = new Array(30);
    l = 0;
    while (n > 0) {
        d[l] = n % 2;
        n = Math.floor(n / 2);
        l += 1;
    }
    console.log('l = ', l);
    console.log('d = ', d);
    for (p = 1; p < 1 + l; ++p) {
        ok = true;
        for (i = 0; i < l - p; ++i) {
            if (d[i] != d[i + p]) {
                ok = false;
                break;
            }
        }
        if (ok) {
            return p;
        }
    }
    return -1;
}

console.log('995 => 4: ', solution(995));