interface A1 {
    readonly a: string,
    b: string,
    c?: string,
    [propName: string]: any;
}

interface A1Func {
    (A: string, B: string, C?: string): void
}

function test1(A1: A1): void {
    // A1.a = 'hello';  只读无法被修改
    console.log(A1)
}

test1({ a: '哈喽', b: 'world', c: '!!!', d: 'aaa' });

let test1Func: A1Func = function (A: string, B:string, C:string): void
{
    console.log(A, B, C)
}

test1Func('asd', 'bbb');