var item = ['1 Poção de cura média (1d8+2).', '1 Poção contra o sono.', '1 Antidoto contra todos os tipos de venenos.']
var img = document.createElement('img');

function abrir() {
    loja.innerHTML = `
    <p>Bem vindos a loja de Fondole, aqui temos das mais variadas coisas para as suas aventuras!</p>
    <p><input type="button" id="ver" onclick="ver()" value="Ver"></p>
    `
}

function ver() {
    loja.innerHTML = `
        <p>Aqui temos 3 itens de muito interesse para qualquer aventureiro, porém você só poderar obter um!</p>
        <p>Os itens que temos custam 100 PO se você escolher e 50 PO se for aleatório e são:</p>
        <p>1 Poção de cura média (1d8+2).</p>
        <p>1 Poção contra o sono.</p>
        <p>1 Antidoto contra venenos.</p>
        <p>Teste a sua sorte ou escolha o seu destino!</p>
        <p><input type="button" id="testar" onclick="testar()" value="Testar"> <input type="button" id="escolher" onclick="escolher()" value="Escolher"></p>
        `
}

function testar() {
    let numero = Math.floor(Math.random() * item.length);
    if (numero == 0) {
        loja.innerHTML = `
        <p>Você recebeu :</p>
        <p>1 Poção de cura média (1d8+2).</p>
        <p><img id= "imagem" src="poçãocura.jpg" alt="Foto do dia"></p>
        `
        compras.innerHTML = `
        <input type="button" id="tentar" onclick="tentar()" value="Teste novamente">
        `
        document.body.style.backgroundColor = "red"
    } else if (numero == 1) {
        loja.innerHTML = `
        <p>Você recebeu :</p>
        <p>1 Poção contra o sono.</p>
        <p><img id= "imagem" src="poçãosono.png" alt="Foto do dia"></p>
        `
        compras.innerHTML = `
        <input type="button" id="tentar" onclick="tentar()" value="Teste novamente">
        `
        document.body.style.backgroundColor = "blue"
    } else {
        loja.innerHTML = `
        <p>Você recebeu :</p>
        <p>1 Antidoto contra venenos.</p>
        <p><img id= "imagem" src="poçãoveneno.jpg" alt="Foto do dia"></p>
        `
        compras.innerHTML = `
        <input type="button" id="tentar" onclick="tentar()" value="Teste novamente">
        `
        document.body.style.backgroundColor = "green"
    }
}

function tentar() {
    loja.innerHTML = `
        <p>Aqui temos 3 itens de muito interesse para qualquer aventureiro, porém você só poderar obter um!</p>
        <p>Os itens que temos custam 100 PO se você escolher e 50 PO se for aleatório e são:</p>
        <p>1 Poção de cura média (1d8+2).</p>
        <p>1 Poção contra o sono.</p>
        <p>1 Antidoto contra venenos.</p>
        <p>Teste a sua sorte ou escolha o seu destino!</p>
        <p><input type="button" id="testar" onclick="testar()" value="Testar"> <input type="button" id="escolher" onclick="escolher()" value="Escolher"></p>
        `
    compras.innerHTML = ""
    document.body.style.backgroundColor = '#00CED1'
    
}

const itens = [
    {
        id: 0,
        nome: 'Poção de cura média (1d8+2)',
        img: 'poçãocura.jpg',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'Poção contra o sono',
        img: 'poçãosono.png',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Antidoto contra venenos',
        img: 'poçãoveneno.jpg',
        quantidade: 0
    }
]

function escolher() {
    document.getElementById('secti').style.width ="90%"
    loja.innerHTML=""
    function incializarLoja() {
        let containerProdutos = document.getElementById('lolja');
        itens.map((val)=>{
            containerProdutos.innerHTML += ` 
            
            <div class="produto-single">
                <img src= ${val.img} />
                <p>${val.nome}</p>
                <a key=${val.id} href="#">Adicionar a bolsa!<a/>
            </div>
            
            `;
        })

        function atualizarCarrinho() {
            var containerCarrinho = document.getElementById('bolsa');
            containerCarrinho.innerHTML = ""
            itens.map((val)=>{
                if (val.quantidade > 0)
                containerCarrinho.innerHTML += ` 
            <div class="info-single-checkout">
                <p style="float:left;"> ${val.nome}</p>
                <p style="float:right;"> Quantidade ${val.quantidade}</p>
                <div style="clear:both;"></div>
            </div>    
                `;
            })
        }

        function comprar() {
            var containerComprar = document.getElementById('loja');
            containerComprar.innerHTML = ""
            itens.map((val)=>{
                let it0 = val.quantidade*100
                if (val.quantidade > 0 && val.id == 0){
                containerComprar.innerHTML += ` 
                <div class="info-single-ct">
                <p>Você adicionou ${val.quantidade} ${val.nome} que custa ${it0} PO</p>
                <div style="clear:both;"></div>
                </div>    
                `;} else if (val.quantidade > 0 && val.id == 1) {
                    containerComprar.innerHTML += ` 
                <div class="info-single-ct">
                <p>Você adicionou ${val.quantidade} ${val.nome} que custa ${it0} PO</p>
                <div style="clear:both;"></div>
                </div>`
                } else if (val.quantidade > 0 && val.id == 2) {
                    containerComprar.innerHTML += ` 
                <div class="info-single-ct">
                <p>Você adicionou ${val.quantidade} ${val.nome} que custa ${it0} PO</p>
                <div style="clear:both;"></div>
                </div>`
                }
            })
        }

            var links = document.getElementsByTagName('a'); /*pode também utilizar a classe para pegar o produto*/
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener("click",function(){
                    let key = this.getAttribute('key');
                    itens[key].quantidade++;
                    atualizarCarrinho();
                    comprar();
                    return false;
                })
            }
            
    }

   

    incializarLoja();
}

function carregar() {

    var ho = new Date();
    var h = ho.getHours();
    var m = ho.getMinutes();
    var d = ho.getDate();
    var y = ho.getFullYear();
    var me = ho.getMonth();
    var s = ho.getSeconds();

    switch(m) {
        case 0:
            m = `0${m}`
            break
        case 1:
            m = `0${m}`
            break
        case 2:
            m = `0${m}`
            break
        case 3:
            m = `0${m}`
            break
        case 4:
            m = `0${m}`
            break
        case 5:
            m = `0${m}`
            break
        case 6:
            m = `0${m}`
            break
        case 7:
            m = `0${m}`
            break
        case 8: 
            m = `0${m}`
            break
        case 9:
            m = `0${m}`
            break
    };

    switch(s) {
        case 0:
            s = `0${s}`
            break
        case 1:
            s = `0${s}`
            break
        case 2:
            s = `0${s}`
            break
        case 3:
            s = `0${s}`
            break
        case 4:
            s = `0${s}`
            break
        case 5:
            s = `0${s}`
            break
        case 6:
            s = `0${s}`
            break
        case 7:
            s = `0${s}`
            break
        case 8: 
            s = `0${s}`
            break
        case 9:
            s = `0${s}`
            break
    };

    switch(me) {
        case 0:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de janeiro de ${y}.`
            break
        case 1:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de fevereiro de ${y}.`
            break
        case 2:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de março de ${y}.`
            break
        case 3:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de abril de ${y}.`
            break
        case 4:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de maio de ${y}.`
            break
        case 5:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de junho de ${y}.`
            break
        case 6:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de julho de ${y}.`
            break
        case 7:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de agosto de ${y}.`
            break
        case 8: 
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de setembro de ${y}.`
            break
        case 9:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de outubro de ${y}.`
            break
        case 10:
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de novembro de ${y}.`
            break
        case 11: 
            hora.innerHTML = `Agora são ${h}:${m}:${s} do dia ${d} de dezembro de ${y}.`
            break
        };


    };

    const createClock = setInterval(carregar, 1000);