
fetch("http://localhost:3000/Reserva")
.then((response) => response.json())
.then((json) => console.log(json));

    $.get("http://localhost:3000/Reserva", function(data, status) {
        for (i = 0; i < data.length; i++) {
            $('#news').append("<ul><li>" + data[i].nome + " - " + data[i].DataDeEntrada  + " - " +
               data[i].Observação + " - " + data[i].email + " - " + data[i].Criancas + " - " + 
               data[i].Adultos + " - " + data[i].DataDeSaida +  "</li></ul>");

        }
    });

$(document).ready(function() {
    $.get("http://localhost:3000/Reserva", function(data, status) {
        $('#tabela tbody').empty();

        for (let i = 0; i < data.length; i++) {
            $('#tabela tbody').append(
                '<tr>' +
                    '<td>' + data[i].nome + '</td>' +
                    '<td>' + data[i].dataDeEntrada + '</td>' +
                    '<td>' + data[i].Observação + '</td>' +
                    '<td>' + data[i].email + '</td>' +
                    '<td>' + data[i].Criancas + '</td>' +
                    '<td>' + data[i].Adultos + '</td>' +
                    '<td>' + data[i].dataDeSaida + '</td>' +
                '</tr>'
            );
        }

        var rows = $('#tabela tbody tr').length;

        for (var i = 0; i < rows; i++) {
            if (i % 2 === 0) {
                $('#tabela tbody tr:eq(' + i + ')').css('background-color', 'Aquamarine');
                   $('#tabela tbody tr:eq(' + i + ')').css('color', 'SlateGray');
            } else {
                // Se for ímpar, define a cor de fundo para 'black'
                $('#tabela tbody tr:eq(' + i + ')').css('background-color', 'MediumSpringGreen');
            }
        }

        console.log(rows);  // Exibe o número de linhas no console
    });
});




