<h1 align="center">Desafio - Dígito Único</h1>

## :pencil: Tarefa

Dado um número não decimal, precisamos encontrar o dígito único deste número.
- Se `x` temapenas um dígito, então seu dígito único é `x`.
- Caso contrário, o dígito único de `x` é igual ao dígito único da soma dos dígitos de `x`.

Exemplo, o dígito **9875** será calculado como:
```
digitoUnico(9875) 9 + 8 + 7 + 5 = 29
digitoUnico(29) 2 + 9 = 11
digitoUnico(11) 1 + 1 = 2
```

A partir de dois números `n` e `k`, `p` deverá ser criado da concatenação da string `n` * `k`.

Exemplo:
```
n = 9875 e  k = 4 -> p = 9875987598759875
9 + 8 + 7 + 5 + 9 + 8 + 7 + 5 + 9 + 8 + 7 + 5 + 9 + 8 + 7 + 5 = 116
digitoUnico(116) = 8
```

## :hammer: Como executar

1. Faça download do repositório
2. Navegue até os arquivos
3. Abra o console e execute o comando `npm install` ou `yarn`
4. Execute o comando `npm run start` ou `yarn start`
5. O servidor ficará aberto na porta 3030, ou seja: `http://localhost:3030`
6. Acesse a url passando os valores desejados. Ex: `http://localhost:3030/9875/4`

OBS: caso queria rodar os testes, execute o comando `npm run test` ou `yarn test`

## :construction: Testes e resultados

| URL                          | Result | Log                                                                          |
|------------------------------|-------:|------------------------------------------------------------------------------|
| http://localhost:3030/9785   |      2 | log: digitoUnico(9785) = 29 ->  digitoUnico(29) = 11 ->  digitoUnico(11) = 2 |
| http://localhost:3030/9785/4 |      8 | log: digitoUnico(9785978597859785) = 116 ->  digitoUnico(116) = 8            |
| http://localhost:3030/8142/6 |      9 | log: digitoUnico(814281428142814281428142) = 90 ->  digitoUnico(90) = 9      |
