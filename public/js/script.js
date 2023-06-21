// Seleciona todas as tabelas com a classe "data-table"
var tables = document.querySelectorAll(".data-table");

// Loop através de cada tabela
tables.forEach(function(table) {

  // Seleciona todas as linhas de dados da tabela
  var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

  // Define a altura máxima da tabela para exibir 10 registros
  var maxTableHeight = 10 * rows[0].offsetHeight + "px";
  table.style.maxHeight = maxTableHeight;

  // Adiciona a barra de rolagem à tabela
  table.style.overflowY = "scroll";
  
});

