// Olivier

const opdracht = new Opdracht(1, "Code Begrijpen", "Leer kennis maken met de nieuwe Capture The Flag", 10, "Introductie", localStorage.getItem("token"), localStorage.getItem("uid"));


async function getFlag() {
    const flag = await opdracht.getFlag();
    if (flag == null) {
        document.getElementById("flag").innerHTML = "Ververs de pagina om de flag te zien.";
        return null;
    }
    return flag;
}

function generateEncryptedCode(flagValue) {
    const s = Math.floor(Math.random() * 25) + 1;
    
    const eC = (str, shift) => str.split('').map(c => 
        (cc = c.charCodeAt(0), cc >= 97 && cc <= 122 ? String.fromCharCode(((cc - 97 + shift) % 26) + 97) : c)
    ).join('');
    
    const eB64 = btoa(eC(flagValue, s));
    const rS = eB64.split('').reverse().join('');

  const dScript = `
  !function() {
      const z = "OlivierHoudVanJavaScript";
      const dB64 = s => atob(s.split('').reverse().join(''));
      
      const dC = (s, shift) => s.split('').map(c => {
          const cc = c.charCodeAt(0);
          return cc >= 97 && cc <= 122 ? String.fromCharCode(((cc - 97 - shift + 26) % 26) + 97) : c;
      }).join('');
      
      const randomVariable = Math.random();
      const tF = dB64("${rS}");
      const _ = [1, 2, 3].map(n => n * randomVariable);
      
      console.log(dC(tF, ${s}));
  }();
  `;
  

    return dScript;
}

function randomstring(){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 15;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }

    return randomstring;
}
//const flag = getFlag();
const flag = " hi"
const encryptedCode = generateEncryptedCode(flag);
const encryptedFlag = randomstring();
document.getElementById("encryptedFlag").textContent = encryptedFlag;
document.getElementById('codeblock').textContent = encryptedCode;