let compile_run = require('compile-run');
let path = require('path');
//runs file of .cpp,.c,.java,.py,.js
//input variable is for providing stdin to a program. Provide an empty string in case of no stdin, in this case input is set to 5\n2
compile_run.runFile(path.join(__dirname, 'add.cpp'), "5\n2", (stdout, stderr, err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(stdout, stderr);
    }
});

let code = `#include <iostream>
using namespace std;
int main()
{
    int a, b;
    cin >> a >> b;
    cout << a + b;
    return 0;
}`;

//It runs some provided source code, code is a variable containing source code.
compile_run.runCpp(code, '5\n2', (stdout, stderr, err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(stdout, stderr);
    }
});