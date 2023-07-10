# Padrões de projeto de criação (creational)

Os padrões de projeto de criação são padrões que abstraem o processo de instanciação de objetos. Eles ajudam a tornar um sistema independente de como seus objetos são representados, criados e compostos. Geralmente, atigem este objetico delegando tarefas para outros objetos.

Esses padrões dão muita flexibilidade ao sistema, porque encapsulam o conhecimento sobre quais classes concretas são usadas. Além disso, ocultam o modo como as instâncias são criadas e compostas. O foco é eliminar conhecimento do cliente sobre o _QUE_, _COMO_ e _QUANDO_ está sendo criado e _QUEM_ faz parte do processo de criação.

## Padrões e inteções

Os padrões de projeto de criação originais da GoF são:

- **Abstract Factory** - Fornecer uma interface para criação da famílias de objetos relacionados ou dependentes sem especificar suas classes concretas;
- **Builder** - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações;
- **Factory Method** - Definir uma interface para criar um objeto, mas deixas as subclasses deciderem qual classa a ser instanciada. O Factory Method permite a uma classe postergar (defet) a instanciação às subclasses;
- **Prototype** - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo;
- **Singleton** - Garantir que uma class tenha somente uma instância e fornecer um ponto global de acesso para ela.