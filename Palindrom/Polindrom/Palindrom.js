
    
    function palindrome(){

        kelimeninTersi ="";
        kelime = document.getElementById("text").value;
      
        i=kelime.length;
     
        if(kelime==""){

            alert("Kelime Giriniz.")
        }

        else
        {
            for(var j=i; j>=0;j--)
            {
                kelimeninTersi=kelimeninTersi+ kelime.charAt(j);   
            }
             
             if(kelime==kelimeninTersi)
             {
                alert(kelime+ "  Kelimesi Polindrom Bir Kelimedir.")
             }
    
             else {
                  alert(kelime+"  Kelimesi Polindrom Bir Kelime Değildir.")
                  }    
        }
       

    }

    function palindrome1(){

        kelimeninTersi ="";
        kelime = document.getElementById("text1").value;
      
        i=kelime.length;
     
        if(kelime==""){

            alert("Kelime Giriniz.")
        }

        else
        {
            for(var j=i; j>=0;j--)
            {
                kelimeninTersi=kelimeninTersi+ kelime.charAt(j);   
            }
             
             if(kelime==kelimeninTersi)
             {
                alert(kelime+ "  Kelimesi Polindrom Bir Kelimedir.")
             }
    
             else {
                  alert(kelime+"  Kelimesi Polindrom Bir Kelime Değildir.")
                  }    
        }
       

    }

    function palindrome2(){

        kelimeninTersi ="";
        kelime = document.getElementById("text2").value;
      
        i=kelime.length;
     
        if(kelime==""){

            alert("Kelime Giriniz.")
        }

        else
        {
            for(var j=i; j>=0;j--)
            {
                kelimeninTersi=kelimeninTersi+ kelime.charAt(j);   
            }
             
             if(kelime==kelimeninTersi)
             {
                alert(kelime+ "  Kelimesi Polindrom Bir Kelimedir.")
             }
    
             else {
                  alert(kelime+"  Kelimesi Polindrom Bir Kelime Değildir.")
                  }    
        }
       

    }




    function Temizle() {

        document.getElementById("text").value = "";
        
   }
   function Temizle1() {

    document.getElementById("text1").value = "";
    
}
function Temizle2() {

    document.getElementById("text2").value = "";
    
}
    
    
     
    
    
 