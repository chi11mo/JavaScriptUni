

var m = 3;
var n = 12;
console.log(stackermann(m, n));

function ackerman(m, n) {
    const stack = [];
    for (; ;) {
        if (m === 0) {
            //𝐴(0,𝑛)=𝑛+1
            n++;
            if (stack.length === 0)
                return n;

            const r = stack[stack.length - 1];

            if (r[1] === 1)
                stack.length--;
            else
                r[1]--;
            m = r[0];

        } else if (n === 0) {
            //𝐴(𝑚,0)=𝐴(𝑚−1,1)
            m--;
            n = 1;
        } else {
            //𝐴(𝑚,𝑛)=𝐴(𝑚−1,𝐴(𝑚,𝑛−1))
            m--
            stack.push([m, n]);
            n = 1;
        }
    }
}