#Tipos de Erros

## ECMAScript Error
-- Erros que ocorrem em tempo de execução
-- Composto por:
--- Mensagem
--- Nome
--- Linha
--- Call Stack -- Pilha de chamadas chamada no js onde gerou o erro

## DomException
-- Erros relacionados ao Document Object Model (DOM)
-- São erros da arvore do elemento HTML QUE É O DOM


# Tratando Erros

-- Throw

# Try Catch

-- Try - Executar - tente
-- catch captura o erro
-- finaly executa indepente de ter ocorrido erro ou não

# Objeto error

-- new Error(message, filename, lineNumber)
# Todos os parametros são opcionais, alguns browsers nao suporta alguns parametros. Por padrao é a mensnagem mais usada
-- O erro pode ter um nome, add com error.name

#Instace of para filtrar os erros junto ao if