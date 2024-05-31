function thevenin_voltage(R1, R2, Vcc) {
    return Vcc*Rb2/(Rb2+Rb1);
}
function thevenin_resistance(R1, R2)    {
    return 1/(1/R1 + 1/R2);
}
function calc() {
    rbb = parseFloat(document.getElementById("rbb").value); rce = parseFloat(document.getElementById("rce").value);
    Vt = parseFloat(document.getElementById("Vt").value);
    RL = parseFloat(document.getElementById("RL").value);
    beta = parseFloat(document.getElementById("beta").value);
    Vbe = parseFloat(document.getElementById("Vbe").value);
    Rb1 = parseFloat(document.getElementById("Rb1").value);
    Rb2 = parseFloat(document.getElementById("Rb2").value);
    Vcc = parseFloat(document.getElementById("vcc").value);
    Rc = parseFloat(document.getElementById("Rc").value);
    Re = parseFloat(document.getElementById("Re").value);
    if (Rb2 != 0)   {
        Vth = thevenin_voltage(Rb1, Rb2, Vcc);
        
        Rb = thevenin_resistance(parseFloat(Rb1), parseFloat(Rb2));
        Ib = (Vth - Vbe) / (Rb + beta * Re);
    }   else    {
        Rb = parseFloat(Rb1);
        Ib = (Vcc - Vbe) / (Rb + beta * Re);
    }
    
    
    
    
    Ic = Ie = beta * Ib;
    Vc = Vcc - Ic*Rc;
    Ve = Ie*Re;
    Vb = Vbe + Ie*Re;
    Vce = Vcc - Ic*Rc - Ie*Re;

    re = Vt/Ie;
    rpi = beta*re;

    Zin = 1/(1/Rb + 1/(rbb+rpi));
    Zout = 1/(1/rce + 1/Rc + 1/RL);
    
    document.getElementById("Ib_value").innerHTML = Ib + "A";
    document.getElementById("Ic_value").innerHTML = Ic + "A";
    document.getElementById("Ie_value").innerHTML = Ie + "A";
    
    document.getElementById("Vb_value").innerHTML = Vb + "V";
    document.getElementById("Vc_value").innerHTML = Vc + "V";
    document.getElementById("Ve_value").innerHTML = Ve + "V";
    document.getElementById("Vce_value").innerHTML = Vce + "V";

}