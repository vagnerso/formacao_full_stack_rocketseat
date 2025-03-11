// seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// seleciona os elementos da lista
const expenseList = document.querySelector("ul")

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

       // Adiciona as informações no item
      expenseItem.append(expenseIcon, expenseInfo)

       // Adiciona as informações no item
       //expenseItem.append(expenseIcon)

       // Adiciona o item da lista
       expenseList.append(expenseItem)
       
    } catch (error) {
       alert("Não foi possível atualizar a lista de despesas.") 
       console.log(error)
    }
}
