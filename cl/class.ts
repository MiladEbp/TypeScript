 interface int {
    x:number,
    y:number,
    z:(a:number , b:number)=>number
}

class  Cls{
    add(x , y): int{
        return x+y;
    }
}
 export {Cls};

