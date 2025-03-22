// seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// seleciona os elementos da lista
const expenseList = document.querySelector("ul")
const expensesQuantity = document.querySelector("aside header p span")
const expensesTotal = document.querySelector("aside header h2")

// captura o evento do input para formatar o valor
amount.oninput = () => {
    //obtem o valor atual do input e remove os caracteres não numéricos
    let value = amount.value.replace(/\D/g,"")

    // trasnforma o valor em centavos
    value = Number(value) / 100

    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
    // formata o valor no padrão BRL (Real Brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return value
}

// captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) =>{
    // previne o comportamento padrão de recarregar a página
    event.preventDefault()

    // cria um objeto com os detalhes da nova despesa
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    expenseAdd(newExpense)

}

// Adiciona um novo item na lista
function expenseAdd(newExpense){
    try {
       // cria o elemento para adicionar o item (li) na lista (ul)
       const expenseItem = document.createElement("li")
       expenseItem.classList.add("expense")

       // cria o icone da categoria
       const expenseIcon = document.createElement("img")
       expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
       expenseIcon.setAttribute("alt", newExpense.category_name)

       // cria a info da despesa
       const expenseInfo = document.createElement("div")
       expenseInfo.classList.add("expense-info")

       // cria o nome da despesa
       const expenseName = document.createElement("strong")
       expenseName.textContent = newExpense.expense

       // cria a categoria da despesa
       const expenseCategory = document.createElement("span")
       expenseCategory.textContent = newExpense.category_name

       // Adiciona nome e categoria na div das informações da despesa
       expenseInfo.append(expenseName, expenseCategory)

       // cria o valor da despesa
       const expenseAmount = document.createElement("span")
       expenseAmount.classList.add("expense-amount")
       expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
        .toUpperCase()
        .replace("R$", "")
       }`

       // cria o icone de remover
       const removeIcon = document.createElement("img")
       removeIcon.classList.add("remove-icon")
       removeIcon.setAttribute("src", "img/remove.svg")
       removeIcon.setAttribute("alt", "remover")

       // Adiciona as informações no item
      expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

       // Adiciona as informações no item
       //expenseItem.append(expenseIcon)

       // Adiciona o item da lista
       expenseList.append(expenseItem)

       // Atualiza os totais
       updateTotals()

       // limpa o form
       formClear()
       
    } catch (error) {
       alert("Não foi possível atualizar a lista de despesas.") 
       console.log(error)
    }
}

// atualizar os totais
function updateTotals(){
    try {
        // recupera todos os itens (li) da lista (ul)
        const items = expenseList.children
        // atualiza a quantidade de itens da lista
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

        // variavel para incrementar o total
        let total = 0

        // percorre cada item (li) da lista (ul)
        for (let item = 0; item < items.length; item++){
            const itemAmount = items[item].querySelector(".expense-amount")

            // remove caracteres não numéricos e substitui a vírgula por ponto
            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",",".")

            // converte o valor para float
            value = parseFloat(value)

           // verifica se é um número válido
           if (isNaN(value)){            
             return alert("Não foi possível calculuar o total. O valor não parece ser um número.")
           } 

           total += Number(value)
           
        }

        // cria a span para adicionar o R$ formatado
        const symbolBRL = document.createElement("small")
        symbolBRL.textContent = "R$"

        // formata o valor e remove o R$ que será exibido pela small com um estilo customzido
        total = formatCurrencyBRL(total).toUpperCase().replace("R$", "")

        // limpa o conteúdo do elemento
        expensesTotal.innerHTML = ""

        // adiciona o simbolo de moeda e o valor total formatado
        expensesTotal.append(symbolBRL, total)

    } catch (error) {
        console.log(error)
        alert("Não foi possível atualizar os totais.")
    }
}

// evento que captura o clique nos itens da lista
expenseList.addEventListener("click", function (event){
    // verifica se o elemento clicado é o icone de remover
    if (event.target.classList.contains("remove-icon")){
        // obtem a li pai do elemento clicado
        const item = event.target.closest(".expense")
        item.remove()
    }

    updateTotals()
})

// função para limpar os elementos do form
function formClear() {
    expense.value = ""
    category.value = ""
    amount.value = ""

    // coloca o foco no input de amount
    expense.focus()
}