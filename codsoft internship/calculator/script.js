function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function calculate() {
    const expression = document.getElementById("display").value;
    try {
      const result = eval(expression); // Note: eval can be dangerous, use with caution!
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = 'Error';
    }
  }
  