no_angkot = 1;
jml_angkot = 10;
angkot_oprasi = 6;

for(no_angkot;no_angkot <=10; no_angkot++){
    if(no_angkot <=6 && no_angkot != 5 ){
        console.log('angkot no ' + no_angkot +' ' +'sedang beroprasi');
    }
    else if(no_angkot == 8 || no_angkot === 10 || no_angkot === 5){
        console.log('angkot no '+ no_angkot + ' ' + 'sedang lembur');
    }
    else {
        console.log('angkot no ' + no_angkot +' ' + 'sedang tidak beroprasi')
    }
}
        
    
