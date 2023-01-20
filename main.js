data = [
	{church: "Belém", day: "2ª sexta-feira do mês", hour:"19:30"},
	{church: 'Bom Retiro', day: 'todo o domingo', hour: '09:10 às 09:50'},
    {church: 'Caraguatá', day: '1º sábado do mês <b>(final do GEM)</b>', hour: '15:30 às 17:00'},
    {church: 'Jabaquara', day: '3º sábado do mês', hour: '09:30'},
    {church: 'Jardim Elba', day: '4º sábado do mês', hour: '15:30'},
    {church: 'Jardim Maria Estela', day: '3º sábado do mês', hour: '16:00'},
    {church: 'Jardim Mimar', day: '3ª terça-feira do mês', hour: '20:00'},
    {church: 'Jardim Panorama', day: '3º sábado do mês', hour: '14:30'},
    {church: 'Jardim Planalto', day: '3ª sexta-feira do mês', hour: '20:00'},
    {church: 'Jardim Santo Eduardo', day: '3ª sexta-feira do mês', hour: '19:30'},
    {church: 'Jardim São Savério', day: '1º sábado do mês <b>(final do GEM)</b>', hour: '10:30 às 12:00'},
    {church: 'Parque Santa Madalena', day: 'última quinta-feira do mês', hour: '20:00'},
    {church: 'Parque São Lucas', day: 'última quarta-feira do mês', hour: '19:30'},
    {church: 'Ponte Pequena', day: '1º sábado do mês', hour: '15:00'},
    {church: 'Vila Alpina', day: '3ª sexta-feira do mês', hour: '19:30'},
    {church: 'Vila California', day: 'última quarta-feira do mês', hour: '20:00'},
    {church: 'Vila Carioca', day: '1ª segunda-feira do mês', hour: '19:30'},
    {church: 'Vila Diva', day: 'todo o sábado <b>(final do GEM)</b>', hour: '16:00'},
    {church: 'Vila Ema', day: 'última terça-feira do mês', hour: '19:30'},
    {church: 'Vila Formosa', day: 'último domingo do mês', hour: '09:00'},
    {church: 'Vila Guarani', day: 'todo o sábado <b>(final do GEM)</b> </br> <span class="red">2º Sábado ensaio local às 17:00 h</span>', hour: '16:30 às 17:00'},
    {church: 'Vila Livieiro', day: '3ª segunda-feira do mês', hour: '19:30'},
    {church: 'Vila Prudente', day: 'última segunda-feira do mês', hour: '19:30'},
    {church: 'Vila Rio Branco', day: 'toda a segunda-feira <b>(final do GEM)</b>', hour: '20:30 às 21:25'},
]

overall_church = document.getElementById("overall_church")
overall_church.innerText = data.length

data.forEach(element => {
    church = 
    `<tr>
        <td>
            ${element.church}
        </td>
        <td>
            ${element.day}
        </td>
        <td>
            ${element.hour}
        </td>
    </tr>`

    $("#tb_gem").append(church)
});