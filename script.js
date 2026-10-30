/* =========================================================
   ANA VARIEDADES
   SCRIPT PRINCIPAL
   ========================================================= */

/* =========================
   CONFIGURAÇÕES
   ========================= */

const CONFIG = {
    nomeLoja: "ANA VARIEDADES",

    whatsapp: "5591989009001",

    whatsappFormatado: "+55 (91) 98900-9001",

    moeda: "R$",

    mensagemInicial:
        "Olá! 🌷 Vim pelo site da ANA VARIEDADES e gostaria de fazer um pedido."
};


/* =========================
   PRODUTOS
   ========================= */

const produtos = [

    /* ---------- COLCHAS ---------- */

    {
        id: "colcha-01",
        nome: "Colcha Elegance",
        categoria: "colchas",
        categoriaNome: "Colchas",
        descricao: "Uma peça delicada para deixar o quarto ainda mais acolhedor.",
        imagem: "imagens/colchas/colchas1.jpg"
    },

    {
        id: "colcha-02",
        nome: "Colcha Encanto",
        categoria: "colchas",
        categoriaNome: "Colchas",
        descricao: "Elegância e conforto para transformar o ambiente.",
        imagem: "imagens/colchas/colchas2.jpg"
    },

    {
        id: "colcha-03",
        nome: "Colcha Jardim",
        categoria: "colchas",
        categoriaNome: "Colchas",
        descricao: "Um toque delicado e sofisticado para sua decoração.",
        imagem: "imagens/colchas/colchas3.jpg"
    },

    {
        id: "colcha-04",
        nome: "Colcha Imperial",
        categoria: "colchas",
        categoriaNome: "Colchas",
        descricao: "Um modelo marcante para uma decoração elegante.",
        imagem: "imagens/colchas/colchas4.jpg"
    },

    {
        id: "colcha-05",
        nome: "Colcha Romance",
        categoria: "colchas",
        categoriaNome: "Colchas",
        descricao: "Conforto e charme em uma peça especial.",
        imagem: "imagens/colchas/colchas5.jpg"
    },


    /* ---------- TOALHAS ---------- */

    {
        id: "toalha-01",
        nome: "Kit de Toalhas Delicadas",
        categoria: "toalhas",
        categoriaNome: "Kit de Toalhas",
        descricao: "Kit pensado para trazer conforto e beleza ao seu dia a dia.",
        imagem: "imagens/toalhas/toalhas1.jpg"
    },

    {
        id: "toalha-02",
        nome: "Kit de Toalhas Elegance",
        categoria: "toalhas",
        categoriaNome: "Kit de Toalhas",
        descricao: "Maciez e elegância para seu banheiro.",
        imagem: "imagens/toalhas/toalhas2.jpg"
    },

    {
        id: "toalha-03",
        nome: "Kit de Toalhas Encanto",
        categoria: "toalhas",
        categoriaNome: "Kit de Toalhas",
        descricao: "Uma combinação delicada para sua casa.",
        imagem: "imagens/toalhas/toalhas3.jpg"
    },

    {
        id: "toalha-04",
        nome: "Kit de Toalhas Clássico",
        categoria: "toalhas",
        categoriaNome: "Kit de Toalhas",
        descricao: "Um estilo clássico que combina com diferentes ambientes.",
        imagem: "imagens/toalhas/toalhas4.jpg"
    },

    {
        id: "toalha-05",
        nome: "Kit de Toalhas Premium",
        categoria: "toalhas",
        categoriaNome: "Kit de Toalhas",
        descricao: "Um toque sofisticado para sua rotina.",
        imagem: "imagens/toalhas/toalhas5.jpg"
    },


    /* ---------- PERFUMES ---------- */

    {
        id: "perfume-01",
        nome: "Perfume Essência",
        categoria: "perfumes",
        categoriaNome: "Perfumes",
        descricao: "Uma fragrância marcante para momentos especiais.",
        imagem: "imagens/perfumes/perfumes1.jpg"
    },

    {
        id: "perfume-02",
        nome: "Perfume Encanto",
        categoria: "perfumes",
        categoriaNome: "Perfumes",
        descricao: "Uma fragrância delicada e envolvente.",
        imagem: "imagens/perfumes/perfumes2.jpg"
    },

    {
        id: "perfume-03",
        nome: "Perfume Elegance",
        categoria: "perfumes",
        categoriaNome: "Perfumes",
        descricao: "Aquele toque sofisticado para completar seu estilo.",
        imagem: "imagens/perfumes/perfumes3.jpg"
    },

    {
        id: "perfume-04",
        nome: "Perfume Romance",
        categoria: "perfumes",
        categoriaNome: "Perfumes",
        descricao: "Uma opção delicada para quem ama fragrâncias especiais.",
        imagem: "imagens/perfumes/perfumes4.jpg"
    },

    {
        id: "perfume-05",
        nome: "Perfume Clássico",
        categoria: "perfumes",
        categoriaNome: "Perfumes",
        descricao: "Uma fragrância elegante e atemporal.",
        imagem: "imagens/perfumes/perfumes5.jpg"
    },


    /* ---------- LINGERIE ---------- */

    {
        id: "lingerie-01",
        nome: "Lingerie Delicada",
        categoria: "lingerie",
        categoriaNome: "Lingerie",
        descricao: "Uma peça delicada e confortável.",
        imagem: "imagens/lingerie/lingerie1.jpg"
    },

    {
        id: "lingerie-02",
        nome: "Lingerie Elegance",
        categoria: "lingerie",
        categoriaNome: "Lingerie",
        descricao: "Detalhes sofisticados em uma peça especial.",
        imagem: "imagens/lingerie/lingerie2.jpg"
    },

    {
        id: "lingerie-03",
        nome: "Lingerie Romance",
        categoria: "lingerie",
        categoriaNome: "Lingerie",
        descricao: "Um modelo delicado com acabamento elegante.",
        imagem: "imagens/lingerie/lingerie3.jpg"
    },

    {
        id: "lingerie-04",
        nome: "Lingerie Encanto",
        categoria: "lingerie",
        categoriaNome: "Lingerie",
        descricao: "Conforto e delicadeza para o dia a dia.",
        imagem: "imagens/lingerie/lingerie4.jpg"
    },

    {
        id: "lingerie-05",
        nome: "Lingerie Premium",
        categoria: "lingerie",
        categoriaNome: "Lingerie",
        descricao: "Uma peça especial para sua coleção.",
        imagem: "imagens/lingerie/lingerie5.jpg"
    },


    /* ---------- JOIAS ---------- */

    {
        id: "joia-01",
        nome: "Joia Encanto",
        categoria: "joias",
        categoriaNome: "Joias",
        descricao: "Um detalhe delicado para completar seu visual.",
        imagem: "imagens/joias/joias1.jpg"
    },

    {
        id: "joia-02",
        nome: "Joia Elegance",
        categoria: "joias",
        categoriaNome: "Joias",
        descricao: "Elegância em cada detalhe.",
        imagem: "imagens/joias/joias2.jpg"
    },

    {
        id: "joia-03",
        nome: "Joia Clássica",
        categoria: "joias",
        categoriaNome: "Joias",
        descricao: "Um modelo atemporal para diferentes ocasiões.",
        imagem: "imagens/joias/joias3.jpg"
    },

    {
        id: "joia-04",
        nome: "Joia Romance",
        categoria: "joias",
        categoriaNome: "Joias",
        descricao: "Delicadeza e charme em uma única peça.",
        imagem: "imagens/joias/joias4.jpg"
    },

    {
        id: "joia-05",
        nome: "Joia Premium",
        categoria: "joias",
        categoriaNome: "Joias",
        descricao: "Um toque sofisticado para sua coleção.",
        imagem: "imagens/joias/joias5.jpg"
    }
];


/* =========================
   ESTADO DA LOJA
   ========================= */

let categoriaAtual = "todos";

let pesquisaAtual = "";

let carrinho = JSON.parse(
    localStorage.getItem("anaVariedadesCarrinho")
) || [];


/* =========================
   ELEMENTOS
   ========================= */

const elementos = {

    produtos:
        document.querySelector("#products-container"),

    pesquisa:
        document.querySelector("#product-search"),

    pesquisaPrincipal:
        document.querySelector("#search-input"),

    contadorCarrinho:
        document.querySelector("#cart-count"),

    itensCarrinho:
        document.querySelector("#cart-items"),

    totalCarrinho:
        document.querySelector("#cart-total"),

    modalCarrinho:
        document.querySelector("#cart-modal"),

    modalCheckout:
        document.querySelector("#checkout-modal"),

    formularioCheckout:
        document.querySelector("#checkout-form"),

    nomeCliente:
        document.querySelector("#customer-name"),

    pagamento:
        document.querySelector("#payment-method"),

    observacao:
        document.querySelector("#customer-observation"),

    toast:
        document.querySelector("#toast")
};


/* =========================
   FUNÇÃO PARA ESCAPAR HTML
   ========================= */

function escaparHTML(texto) {

    const div = document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;
}


/* =========================
   RENDERIZAR PRODUTOS
   ========================= */

function renderizarProdutos() {

    if (!elementos.produtos) return;

    let lista = produtos.filter(produto => {

        const pertenceCategoria =
            categoriaAtual === "todos" ||
            produto.categoria === categoriaAtual;

        const textoPesquisa =
            `${produto.nome} ${produto.categoriaNome} ${produto.descricao}`
                .toLowerCase();

        const correspondePesquisa =
            textoPesquisa.includes(
                pesquisaAtual.toLowerCase()
            );

        return pertenceCategoria && correspondePesquisa;
    });


    if (lista.length === 0) {

        elementos.produtos.innerHTML = `
            <div class="empty-products">
                <span>✦</span>
                <h3>Nenhum encanto encontrado</h3>
                <p>
                    Não encontramos produtos com essa busca.
                    Tente outra categoria ou palavra.
                </p>
            </div>
        `;

        return;
    }


    elementos.produtos.innerHTML = lista.map(produto => {

        return `
            <article
                class="product-card"
                data-product="${produto.id}"
            >

                <div class="product-image">

                    <img
                        src="${produto.imagem}"
                        alt="${escaparHTML(produto.nome)}"
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');"
                    >

                    <span class="product-category">
                        ${escaparHTML(produto.categoriaNome)}
                    </span>

                </div>


                <div class="product-content">

                    <span class="product-small-title">
                        ANA VARIEDADES
                    </span>

                    <h3>
                        ${escaparHTML(produto.nome)}
                    </h3>

                    <p>
                        ${escaparHTML(produto.descricao)}
                    </p>


                    <div class="product-footer">

                        <span class="consult-price">
                            Consultar valor
                        </span>

                        <button
                            class="add-cart"
                            type="button"
                            onclick="adicionarCarrinho('${produto.id}')"
                            aria-label="Adicionar ${escaparHTML(produto.nome)} ao carrinho"
                        >
                            <span>+</span>
                            Adicionar
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");
}


/* =========================
   CATEGORIAS
   ========================= */

function selecionarCategoria(categoria) {

    categoriaAtual = categoria;

    renderizarProdutos();

    const areaProdutos =
        document.querySelector("#produtos");

    if (areaProdutos) {

        areaProdutos.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* =========================
   PESQUISA
   ========================= */

function realizarPesquisa(valor) {

    pesquisaAtual = valor.trim();

    renderizarProdutos();
}


if (elementos.pesquisa) {

    elementos.pesquisa.addEventListener(
        "input",
        event => {
            realizarPesquisa(event.target.value);
        }
    );

}


if (elementos.pesquisaPrincipal) {

    elementos.pesquisaPrincipal.addEventListener(
        "input",
        event => {
            realizarPesquisa(event.target.value);

            if (elementos.pesquisa) {
                elementos.pesquisa.value =
                    event.target.value;
            }

        }
    );

}


/* =========================
   CARRINHO
   ========================= */

function adicionarCarrinho(id) {

    const produto =
        produtos.find(item => item.id === id);

    if (!produto) return;


    const existente =
        carrinho.find(item => item.id === id);


    if (existente) {

        existente.quantidade++;

    } else {

        carrinho.push({

            id: produto.id,

            nome: produto.nome,

            categoria: produto.categoriaNome,

            quantidade: 1

        });

    }


    salvarCarrinho();

    atualizarCarrinho();

    mostrarToast(
        `${produto.nome} foi adicionado ao carrinho ✨`
    );
}


function removerCarrinho(id) {

    carrinho =
        carrinho.filter(item => item.id !== id);

    salvarCarrinho();

    atualizarCarrinho();
}


function alterarQuantidade(id, quantidade) {

    const item =
        carrinho.find(produto => produto.id === id);

    if (!item) return;


    item.quantidade += quantidade;


    if (item.quantidade <= 0) {

        removerCarrinho(id);

        return;
    }


    salvarCarrinho();

    atualizarCarrinho();
}


function limparCarrinho() {

    carrinho = [];

    salvarCarrinho();

    atualizarCarrinho();

    mostrarToast("Carrinho limpo ✨");
}


function salvarCarrinho() {

    localStorage.setItem(
        "anaVariedadesCarrinho",
        JSON.stringify(carrinho)
    );
}


/* =========================
   ATUALIZAR CARRINHO
   ========================= */

function atualizarCarrinho() {

    if (elementos.contadorCarrinho) {

        const quantidadeTotal =
            carrinho.reduce(
                (total, item) =>
                    total + item.quantidade,
                0
            );

        elementos.contadorCarrinho.textContent =
            quantidadeTotal;

    }


    if (!elementos.itensCarrinho) return;


    if (carrinho.length === 0) {

        elementos.itensCarrinho.innerHTML = `
            <div class="empty-cart">

                <span class="empty-cart-icon">
                    ✦
                </span>

                <h3>
                    Seu carrinho está vazio
                </h3>

                <p>
                    Escolha alguma peça especial
                    para começar seu pedido.
                </p>

            </div>
        `;

        if (elementos.totalCarrinho) {
            elementos.totalCarrinho.textContent = "Consultar";
        }

        return;
    }


    elementos.itensCarrinho.innerHTML =
        carrinho.map(item => {

            return `
                <div class="cart-item">

                    <div class="cart-item-info">

                        <span>
                            ${escaparHTML(item.categoria)}
                        </span>

                        <h4>
                            ${escaparHTML(item.nome)}
                        </h4>

                    </div>


                    <div class="cart-controls">

                        <button
                            type="button"
                            onclick="alterarQuantidade('${item.id}', -1)"
                            aria-label="Diminuir quantidade"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantidade}
                        </strong>

                        <button
                            type="button"
                            onclick="alterarQuantidade('${item.id}', 1)"
                            aria-label="Aumentar quantidade"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove-item"
                        type="button"
                        onclick="removerCarrinho('${item.id}')"
                        aria-label="Remover produto"
                    >
                        ×
                    </button>

                </div>
            `;

        }).join("");


    if (elementos.totalCarrinho) {

        elementos.totalCarrinho.textContent =
            "Consultar valor";

    }
}


/* =========================
   MODAIS
   ========================= */

function abrirCarrinho() {

    if (!elementos.modalCarrinho) return;

    elementos.modalCarrinho.classList.add("active");

    document.body.classList.add("modal-open");
}


function fecharCarrinho() {

    if (!elementos.modalCarrinho) return;

    elementos.modalCarrinho.classList.remove("active");

    document.body.classList.remove("modal-open");
}


function abrirCheckout() {

    if (carrinho.length === 0) {

        mostrarToast(
            "Adicione algum produto antes de continuar."
        );

        return;
    }


    fecharCarrinho();


    if (elementos.modalCheckout) {

        elementos.modalCheckout.classList.add("active");

        document.body.classList.add("modal-open");

    }
}


function fecharCheckout() {

    if (!elementos.modalCheckout) return;

    elementos.modalCheckout.classList.remove("active");

    document.body.classList.remove("modal-open");
}


/* =========================
   FECHAR MODAL CLICANDO FORA
   ========================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.classList.contains("modal-overlay")
        ) {

            event.target.classList.remove("active");

            document.body.classList.remove(
                "modal-open"
            );

        }

    }
);


/* =========================
   ESC
   ========================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            fecharCarrinho();

            fecharCheckout();

        }

    }
);


/* =========================
   CHECKOUT / WHATSAPP
   ========================= */

function finalizarPedido() {

    if (carrinho.length === 0) {

        mostrarToast(
            "Seu carrinho está vazio."
        );

        return;
    }


    const nome =
        elementos.nomeCliente
            ? elementos.nomeCliente.value.trim()
            : "";


    const pagamento =
        elementos.pagamento
            ? elementos.pagamento.value
            : "";


    const observacao =
        elementos.observacao
            ? elementos.observacao.value.trim()
            : "";


    if (!nome) {

        mostrarToast(
            "Digite seu nome para continuar."
        );

        elementos.nomeCliente?.focus();

        return;
    }


    if (!pagamento) {

        mostrarToast(
            "Escolha uma forma de pagamento."
        );

        elementos.pagamento?.focus();

        return;
    }


    let mensagem =
        `Olá! 🌷 Vim pelo site da ${CONFIG.nomeLoja} e gostaria de fazer um pedido.\n\n`;


    mensagem +=
        `👤 *Nome:* ${nome}\n`;


    mensagem +=
        `💳 *Pagamento:* ${pagamento}\n\n`;


    mensagem +=
        `🛍️ *Meu pedido:*\n`;


    carrinho.forEach(item => {

        mensagem +=
            `• ${item.nome} — ${item.quantidade}x\n`;

    });


    if (observacao) {

        mensagem +=
            `\n📝 *Observação:* ${observacao}\n`;

    }


    mensagem +=
        `\n✨ Gostaria de consultar os valores e a disponibilidade dos produtos.`;


    const url =
        `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;


    mostrarToast(
        "Abrindo o WhatsApp da ANA VARIEDADES... 💬"
    );


    setTimeout(() => {

        window.location.href = url;

    }, 600);
}


/* =========================
   FORMULÁRIO
   ========================= */

if (elementos.formularioCheckout) {

    elementos.formularioCheckout.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            finalizarPedido();

        }
    );

}


/* =========================
   BOTÃO WHATSAPP
   ========================= */

function abrirWhatsApp() {

    const mensagem =
        encodeURIComponent(
            CONFIG.mensagemInicial
        );


    const url =
        `https://wa.me/${CONFIG.whatsapp}?text=${mensagem}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================
   TOAST
   ========================= */

let toastTimer;


function mostrarToast(mensagem) {

    if (!elementos.toast) return;


    elementos.toast.textContent =
        mensagem;


    elementos.toast.classList.add(
        "show"
    );


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        elementos.toast.classList.remove(
            "show"
        );

    }, 3200);
}


/* =========================
   LINKS DE WHATSAPP
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll("[data-whatsapp]")
            .forEach(botao => {

                botao.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        abrirWhatsApp();

                    }
                );

            });

    }
);


/* =========================
   ANIMAÇÃO AO APARECER
   ========================= */

function prepararAnimacoes() {

    const elementosAnimados =
        document.querySelectorAll(
            ".reveal, .product-card, .category-card"
        );


    if (!("IntersectionObserver" in window)) {

        elementosAnimados.forEach(
            elemento => {
                elemento.classList.add(
                    "visible"
                );
            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            entradas => {

                entradas.forEach(
                    entrada => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.08
            }
        );


    elementosAnimados.forEach(
        elemento => observer.observe(elemento)
    );
}


/* =========================
   LINKS DE CATEGORIA
   ========================= */

document.addEventListener(
    "click",
    event => {

        const categoria =
            event.target.closest(
                "[data-category]"
            );


        if (!categoria) return;


        const valor =
            categoria.dataset.category;


        selecionarCategoria(valor);

    }
);


/* =========================
   BOTÃO "VER TODOS"
   ========================= */

document.addEventListener(
    "click",
    event => {

        const botao =
            event.target.closest(
                "[data-show-all]"
            );


        if (!botao) return;


        selecionarCategoria("todos");

    }
);


/* =========================
   INICIALIZAÇÃO
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderizarProdutos();

        atualizarCarrinho();

        prepararAnimacoes();

        console.log(
            `%c${CONFIG.nomeLoja}`,
            "font-size: 20px; font-weight: bold;"
        );

        console.log(
            `WhatsApp: ${CONFIG.whatsappFormatado}`
        );

    }
);