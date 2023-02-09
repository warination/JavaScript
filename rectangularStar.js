function print_rectangle(n, m) {

    for (let i = 1; i <= n; i++) {
        let score = ""
        for (let j = 1; j <= m; j++) {
            if (i == 1 || i == n || j == 1 || j == m)
                score = score + "*";
            else
                score = score + " ";
        }
        console.log(score)
    }
}
print_rectangle(6, 6)


/* output

******
*    *
*    *
*    *
*    *
******

*/
