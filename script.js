
    function resultado(tipo, valor) {
      if (tipo === 'acao') {
        if (valor == 'c') {
          document.getElementById('resultado').value = ''
        }
        if (valor === '+' || valor === '-' || valor === '/' || valor === '*') {
          document.getElementById('resultado').value += valor
        }
      } else if (valor === '=') {
        try {
          document.getElementById('resultado').value = eval(document.getElementById('resultado').value);
        } catch (e) {
          document.getElementById('resultado').value = 'Erro'; 
        }
      } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
      }
    }
          function resultado(tipo, valor) {  
              const resultadoInput = document.getElementById('resultado');  
              if (tipo === 'acao') {  
                  if (valor === 'c') {  
                      resultadoInput.value = '';  
                  } else if (['+', '-', '/', '*'].includes(valor)) {  
                      resultadoInput.value += valor;  
                  } else if (valor == '=') {  
                      try {  
                          resultadoInput.value = eval(resultadoInput.value);
                      } catch (e) {  
                          resultadoInput.value = 'Erro: ' + e.message; 
                      }  
                  }  
              } else if (tipo === 'valor') {  
                  resultadoInput.value += valor;  
              }  
          }  
          
          document.addEventListener('keydown', function(event) {  
              const key = event.key;  
              if ('0123456789.'.includes(key)) {  
                  resultado('valor', key);  
              } else if (key === 'Enter') {  
                  resultado('acao', '=');  
              } else if (key === 'Backspace' || key === 'Escape') {  
                  resultado('acao', 'c');  
              } else if (['+', '-', '*', '/'].includes(key)) {  
                  resultado('acao', key);  
              }  
          }); 
 