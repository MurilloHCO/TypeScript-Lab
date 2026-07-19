# 📆 Day 01
## História
Você acabou de entrar numa empresa.  
O Tech Lead chega em você e fala:  
> "Vamos começar simples."  
"Todo módulo do nosso sistema gera logs diferentes."  
"Queremos padronizar isto."
## Sua tarefa
### Criar um módulo chamado:
`logger`  
Ele NÃO depende de Discord.js,  
Ele NÃO depende de banco.  
Ele funciona em qualquer projeto.  
***
## Requisitos  
Você deve conseguir fazer algo assim:
```ts
logger.info("Bot iniciado");
logger.warn("Pouca memória");
logger.error("Falha ao conectar");
```
Saída:
```
[Info] Bot iniciado
[WARN] Pouca memória
[Error] Falha ao conectar
```
***
## Depois...
O Tech Lead fala:  
> "Agora queremos saber quando aconteceu."

Então:  
```
[12:35:18] [Info] Bot iniciado
[12:35:20] [WARN] Pouca memória
[12:35:30] [Error] Falha ao conectar
```
***
## Depois...
Ele fala:
> "Agora queremos saber qual módulo veio."

Resultado:
```
[12:35:18] [Ticket] [Info] Ticekt criado
[12:35:20] [Database] [WARN] Mongo caiu
[12:35:30] [Comands] [Error] Comando desativado
```
***
## Regras
Você pode usar:
- Interface
- type
- class
- enum  
O que achar melhor.
***
## Objetivo.
O objetivo é pensar:  
> como eu organizo isso?  
Precisa de classe?  
Interface?  
Enum?  
Type?

Esse é o treino.

## Solução  
### Aruqivos:  
`src/logger/index.ts`

## O que Aprendi?
> ### Processo:  
> Bom de começo acabei dando uma quebrada na cabeça de como eu poderia fazer isto, logo de cara pensei em um **enum** para poder criar uma **inteface** depois, mas isso não seria util já que ele fucnionaria igual um console (ou seja uma função), mas depois fiz apenas uma **interface** que tinham 3 funções (**info, warn e error**) ambas retornavam void e tinha um **parametro texto (string)**, após isso fiquei pensando muito "ta mas como vou fazer isso funcionar...", depois de muito tempo pensei em uma **classe** (tenho serio problema com classes no momento). mas após criar as coisas fluiram, apageui o interface acho que não era necessário já que eram só funções que eu podia criar dentro da classe direto, após isso exportei um `export const logger = new Logger();` e quando eu quiser usar em qualquer lugar o logger  eu apenas importo o logger e escrevo `logger.OpçãoEscolhida("Texto aqui dentro");`
> ### O que aprendi:
> - Classes  
> - Métodos  
> - Tipagem
> - Export