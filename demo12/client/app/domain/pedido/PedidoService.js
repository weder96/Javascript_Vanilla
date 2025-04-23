class PedidoService {

    obterPedidosDaSemana(cb) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:4000/pedidos');

        xhr.onreadystatechange = () => {
        
            if(xhr.readyState == 4) {

                if(xhr.status == 200) {                    
                    const pedidos = JSON
                        .parse(xhr.responseText)
                        .map(objeto => new Pedido(new Date(objeto.data), objeto.quantidade, objeto.valor));                        
                    cb(null, pedidos);

                } else {
                     console.log(xhr.responseText);
                     cb('Não foi possível obter nas Pedidos da semana', null);
                }
            }
        };

        xhr.send();
    }
}