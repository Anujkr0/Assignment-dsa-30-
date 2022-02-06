function gcd(x , y){
    while(x!=y){
        if(x>y){
            return gcd(x-y , y);
        }else{
            return gcd(x,y-x);
        }
    }
    return x;
}
console.log('gcd of two no is ' + gcd(2,6))