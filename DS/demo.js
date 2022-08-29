function memSiz(process, m){
    let maxMem = Number.NEGATIVE_INFINITY;

    let j= 0, sum= 0;

    for (let i = 0; i < process.length; i++) {
        sum += process[i]
        console.log(sum)

        if (i >= m -1) {
            maxMem = Math.max(maxMem, sum)
            sum -= process[j]
            j+= 1
            console.log(sum, maxMem)
        }
    }
    console.log(process.reduce(function(a, b) { return a + b; }, 0))
    return process.reduce(function(a, b) { return a + b; }, 0) - maxMem
}
    
    
console.log(memSiz([10, 4, 8, 1], 2))
console.log('---')
console.log(memSiz([4,6,10,8,2,1], 3))