function xor_header(a1){
    var v4 = 0x117;
    for (let i = 0; i != 26; ++i )
    {
        a1[i+6] ^= v4 >> 11;
        v4 += 0x19F26D04;
    }
    for (let i = 0; i != 16; ++i ) // at least the first 16
    {
        a1[i+32] ^= 0xb9; 
    }
}