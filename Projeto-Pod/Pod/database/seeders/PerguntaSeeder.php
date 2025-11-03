<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PerguntaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // TODAS AS PARTES - Perguntas 1 a 100
        DB::table('perguntas')->insert([
            ['id_pergunta' => 1, 'texto_pergunta' => 'Qual das seguintes substâncias é mais comumente encontrada em vapes e causa dependência?', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 2, 'texto_pergunta' => 'O uso de vape por adolescentes pode prejudicar o desenvolvimento de qual órgão/estrutura?', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 3, 'texto_pergunta' => 'Qual dos seguintes problemas respiratórios tem sido associado ao uso de vape?', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 4, 'texto_pergunta' => 'Qual alegação sobre vapes é verdadeira segundo autoridades de saúde?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 5, 'texto_pergunta' => 'O aerossol exalado por um vape contém:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 6, 'texto_pergunta' => 'Qual químico associado ao vape foi ligado à lesão pulmonar grave (EVALI)?', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 7, 'texto_pergunta' => 'O uso de vape durante a gravidez pode levar a:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 8, 'texto_pergunta' => 'Qual destas afirmativas sobre nicotina é correta?', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 9, 'texto_pergunta' => 'O uso simultâneo de cigarro convencional + vape ("dual use") pode:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 10, 'texto_pergunta' => 'Os líquidos para vape podem conter metais pesados como:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 11, 'texto_pergunta' => 'Qual dos seguintes efeitos está associado ao uso de vape?', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 12, 'texto_pergunta' => 'Em adolescentes, a exposição à nicotina por vapes pode:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 13, 'texto_pergunta' => 'Qual das seguintes é uma consequência cardiovascular potencial do uso de vape?', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 14, 'texto_pergunta' => 'O uso de vape entre pessoas que não fumavam anteriormente pode:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 15, 'texto_pergunta' => 'Qual aditivo de sabor em e-liquids foi associado a danos do pulmão?', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 16, 'texto_pergunta' => 'A irritação da garganta após uso de vape pode ser explicada por:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 17, 'texto_pergunta' => 'O que se afirma sobre a segurança dos vapes para gestantes?', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 18, 'texto_pergunta' => 'Quanto à oralidade (boca e gengivas), o vape pode:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 19, 'texto_pergunta' => 'Qual das opções relaciona-se a risco aumentadíssimo no uso de vapes descartáveis ou modificados?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 20, 'texto_pergunta' => 'O que se sabe sobre a segunda-mão do vapor (a inalação involuntária por outra pessoa)?', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 21, 'texto_pergunta' => 'Qual das afirmativas abaixo é verdadeira sobre crianças menores de 5 anos e líquidos de vape?', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 22, 'texto_pergunta' => 'O que é "EVALI"?', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 23, 'texto_pergunta' => 'Qual afirmação é correta sobre o uso de vapes para parar de fumar?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 24, 'texto_pergunta' => 'O que o aquecimento dos líquidos de vape pode produzir?', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 25, 'texto_pergunta' => 'O que o uso de vape pode fazer com a frequência cardíaca?', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 26, 'texto_pergunta' => 'Qual dos seguintes NÃO é um efeito conhecido do vape?', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 27, 'texto_pergunta' => 'O uso de vapes com frequência em adolescentes pode alterar:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 28, 'texto_pergunta' => 'Qual dos itens a seguir representa um risco futuro incerto, mas possível, do uso prolongado de vapes?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 29, 'texto_pergunta' => 'O uso de vapes pode afetar o sistema imunológico?', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 30, 'texto_pergunta' => 'Sobre a comparação entre cigarros comuns e vapes:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 31, 'texto_pergunta' => 'O que acontece ao cérebro de quem está em abstinência de nicotina?', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 32, 'texto_pergunta' => 'Qual das afirmativas abaixo é verdadeira sobre o uso de cápsulas/pods de vape com sabores atractivos para jovens?', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 33, 'texto_pergunta' => 'Qual pode ser uma consequência de longo prazo do uso de vape no pulmão?', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 34, 'texto_pergunta' => 'Sobre a pele e unhas, o uso de vape pode:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 35, 'texto_pergunta' => 'Em relação ao custo/efeito social, usar vape pode:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 36, 'texto_pergunta' => 'Qual das afirmações abaixo sobre os vapes descartáveis é correta?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 37, 'texto_pergunta' => 'O uso de vape entre jovens faz com que:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 38, 'texto_pergunta' => 'Qual das opções abaixo pode ocorrer se o dispositivo ou bateria do vape for danificado ou mal carregado?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 39, 'texto_pergunta' => 'O que podemos afirmar sobre a regulação de sabores de vapes no Brasil ou globalmente?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 40, 'texto_pergunta' => 'Para pessoas que nunca fumaram, o uso de vape:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 41, 'texto_pergunta' => 'Qual dos seguintes sintomas agudos pode ser provocado por uso de vape?', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 42, 'texto_pergunta' => 'O uso de vape por fumantes com doenças cardíacas pré-existentes:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 43, 'texto_pergunta' => 'Qual é uma medida de prevenção para reduzir risco de acidentalmente ingerir líquido de vape por crianças?', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 44, 'texto_pergunta' => 'O que a evidência indica sobre o uso de vape para pessoas que nunca fumaram?', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 45, 'texto_pergunta' => 'Qual dos fatores abaixo torna o risco de vape especialmente alto em adolescentes?', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 46, 'texto_pergunta' => 'O que dizem as autoridades de saúde sobre "vapor de água" como desculpa para uso de vape?', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 47, 'texto_pergunta' => 'Qual das seguintes afirmações sobre o tempo de uso do vape é verdadeira?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 48, 'texto_pergunta' => 'A longo prazo, o que ainda está sendo investigado com relação ao uso de vapes?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 49, 'texto_pergunta' => 'Qual das seguintes estratégias é adequada para quem quer parar de usar vape?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 50, 'texto_pergunta' => 'Qual mensagem principal se extrai das instituições de saúde sobre o uso de vape?', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 51, 'texto_pergunta' => 'O principal componente do vape responsável pela dependência química é:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 52, 'texto_pergunta' => 'A nicotina do vape atua no cérebro liberando:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 53, 'texto_pergunta' => 'O cérebro de adolescentes é mais vulnerável ao vape porque:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 54, 'texto_pergunta' => 'O uso de vape pode causar sintomas de abstinência semelhantes aos do cigarro comum, como:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 55, 'texto_pergunta' => 'Um dos efeitos imediatos da nicotina é:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 56, 'texto_pergunta' => 'Quanto mais jovem o usuário inicia o uso do vape:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 57, 'texto_pergunta' => 'A nicotina é considerada uma droga:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 58, 'texto_pergunta' => 'A interrupção abrupta do uso do vape pode causar:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 59, 'texto_pergunta' => 'Qual das opções é falsa?', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 60, 'texto_pergunta' => 'Segundo a OMS, o uso de vape:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 61, 'texto_pergunta' => 'A inflamação pulmonar causada por vapes pode resultar em:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 62, 'texto_pergunta' => 'A doença chamada EVALI está relacionada a:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 63, 'texto_pergunta' => 'Qual componente do vape foi associado a lesões pulmonares graves?', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 64, 'texto_pergunta' => 'O aerossol do vape contém:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 65, 'texto_pergunta' => 'Entre os efeitos respiratórios mais comuns do vape estão:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 66, 'texto_pergunta' => 'A exposição passiva (inalar o vapor de outra pessoa) pode:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 67, 'texto_pergunta' => 'O uso constante de vape pode causar irritação porque:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 68, 'texto_pergunta' => 'Um possível dano irreversível ao pulmão causado por vape é:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 69, 'texto_pergunta' => 'O aquecimento dos líquidos do vape gera:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 70, 'texto_pergunta' => 'O uso de vape junto com cigarro tradicional:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 71, 'texto_pergunta' => 'O uso de vape pode causar:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 72, 'texto_pergunta' => 'A nicotina tem efeito direto sobre:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 73, 'texto_pergunta' => 'O risco de infarto entre usuários de vape é:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 74, 'texto_pergunta' => 'Os metais encontrados em alguns dispositivos de vape podem afetar:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 75, 'texto_pergunta' => 'Entre os metais pesados detectados em vapes estão:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 76, 'texto_pergunta' => 'A exposição crônica à nicotina pode alterar:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 77, 'texto_pergunta' => 'Em grávidas, o uso de vape pode resultar em:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 78, 'texto_pergunta' => 'A nicotina atravessa:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 79, 'texto_pergunta' => 'Em relação ao olfato e paladar, o vape:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 80, 'texto_pergunta' => 'Um risco mecânico associado ao uso de vapes é:', 'categoria' => 'Efeitos Respiratórios e Pulmonares'],
            ['id_pergunta' => 81, 'texto_pergunta' => 'No Brasil, os cigarros eletrônicos são:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 82, 'texto_pergunta' => 'Apesar da proibição, seu uso entre jovens:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 83, 'texto_pergunta' => 'Um dos motivos do aumento do uso entre jovens é:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 84, 'texto_pergunta' => 'A OMS recomenda que governos:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 85, 'texto_pergunta' => 'Segundo a ANVISA, o vape é classificado como:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 86, 'texto_pergunta' => 'Uma das razões pelas quais o vape é perigoso é que:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 87, 'texto_pergunta' => 'Os líquidos saborizados podem conter compostos:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 88, 'texto_pergunta' => 'Um argumento enganoso sobre o vape é que:', 'categoria' => 'Composição e Substâncias Químicas'],
            ['id_pergunta' => 89, 'texto_pergunta' => 'A OMS alerta que o vape não deve ser usado por:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 90, 'texto_pergunta' => 'O descarte inadequado de vapes descartáveis:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
            ['id_pergunta' => 91, 'texto_pergunta' => 'O uso de vape pode afetar o desempenho escolar por:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 92, 'texto_pergunta' => 'A dependência de vape pode levar a:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 93, 'texto_pergunta' => 'Em redes sociais, a glamorização do vape:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 94, 'texto_pergunta' => 'O uso de vape pode afetar a autoestima por:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 95, 'texto_pergunta' => 'O uso compartilhado de dispositivos de vape pode:', 'categoria' => 'Efeitos Cardiovasculares e Sistêmicos'],
            ['id_pergunta' => 96, 'texto_pergunta' => 'O uso de vape entre jovens tende a:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 97, 'texto_pergunta' => 'O marketing de vapes geralmente apela para:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 98, 'texto_pergunta' => 'Um mito comum sobre o vape é que:', 'categoria' => 'Dependência e Nicotina'],
            ['id_pergunta' => 99, 'texto_pergunta' => 'O principal objetivo das campanhas de conscientização sobre vapes é:', 'categoria' => 'Riscos para Grupos Vulneráveis'],
            ['id_pergunta' => 100, 'texto_pergunta' => 'A conclusão mais aceita pelas agências de saúde é:', 'categoria' => 'Aspectos Legais, Sociais e Prevenção'],
        ]);

        // Respostas Pergunta 1
        DB::table('respostas')->insert([
            ['id_pergunta' => 1, 'texto_resposta' => 'Água destilada', 'correta' => false],
            ['id_pergunta' => 1, 'texto_resposta' => 'Cafeína', 'correta' => false],
            ['id_pergunta' => 1, 'texto_resposta' => 'Nicotine', 'correta' => true],
            ['id_pergunta' => 1, 'texto_resposta' => 'Vitamina C', 'correta' => false],
        ]);

        // Respostas Pergunta 2
        DB::table('respostas')->insert([
            ['id_pergunta' => 2, 'texto_resposta' => 'Ossos longos', 'correta' => false],
            ['id_pergunta' => 2, 'texto_resposta' => 'Fígado', 'correta' => false],
            ['id_pergunta' => 2, 'texto_resposta' => 'Cérebro jovem (até ~25 anos)', 'correta' => true],
            ['id_pergunta' => 2, 'texto_resposta' => 'Córnea', 'correta' => false],
        ]);

        // Respostas Pergunta 3
        DB::table('respostas')->insert([
            ['id_pergunta' => 3, 'texto_resposta' => 'Doença hepática gordurosa', 'correta' => false],
            ['id_pergunta' => 3, 'texto_resposta' => 'Osteoporose', 'correta' => false],
            ['id_pergunta' => 3, 'texto_resposta' => 'Bronquiolite obliterante ("popcorn lung")', 'correta' => true],
            ['id_pergunta' => 3, 'texto_resposta' => 'Glaucoma', 'correta' => false],
        ]);

        // Respostas Pergunta 4
        DB::table('respostas')->insert([
            ['id_pergunta' => 4, 'texto_resposta' => 'São completamente seguros', 'correta' => false],
            ['id_pergunta' => 4, 'texto_resposta' => 'Não contêm nicotina', 'correta' => false],
            ['id_pergunta' => 4, 'texto_resposta' => 'Não se sabe ainda todos os efeitos a longo prazo, mas já apresentam riscos.', 'correta' => true],
            ['id_pergunta' => 4, 'texto_resposta' => 'São melhores para crianças do que o tabaco', 'correta' => false],
        ]);

        // Respostas Pergunta 5
        DB::table('respostas')->insert([
            ['id_pergunta' => 5, 'texto_resposta' => 'Apenas vapor de água', 'correta' => false],
            ['id_pergunta' => 5, 'texto_resposta' => 'Apenas ar filtrado', 'correta' => false],
            ['id_pergunta' => 5, 'texto_resposta' => 'Partículas ultrafinas e várias substâncias químicas potencialmente nocivas', 'correta' => true],
            ['id_pergunta' => 5, 'texto_resposta' => 'Apenas glicerina vegetal', 'correta' => false],
        ]);

        // Respostas Pergunta 6
        DB::table('respostas')->insert([
            ['id_pergunta' => 6, 'texto_resposta' => 'Ácido ascórbico', 'correta' => false],
            ['id_pergunta' => 6, 'texto_resposta' => 'Glicerina de farmácia', 'correta' => false],
            ['id_pergunta' => 6, 'texto_resposta' => 'Acetato de vitamina E', 'correta' => true],
            ['id_pergunta' => 6, 'texto_resposta' => 'Cafeína concentrada', 'correta' => false],
        ]);

        // Respostas Pergunta 7
        DB::table('respostas')->insert([
            ['id_pergunta' => 7, 'texto_resposta' => 'Aumento da altura do bebê', 'correta' => false],
            ['id_pergunta' => 7, 'texto_resposta' => 'Peso fetal elevado', 'correta' => false],
            ['id_pergunta' => 7, 'texto_resposta' => 'Baixo peso ao nascer ou parto prematuro', 'correta' => true],
            ['id_pergunta' => 7, 'texto_resposta' => 'Melhor desenvolvimento neurológico', 'correta' => false],
        ]);

        // Respostas Pergunta 8
        DB::table('respostas')->insert([
            ['id_pergunta' => 8, 'texto_resposta' => 'Não causa dependência', 'correta' => false],
            ['id_pergunta' => 8, 'texto_resposta' => 'É inofensiva em crescimento cerebral', 'correta' => false],
            ['id_pergunta' => 8, 'texto_resposta' => 'Pode prejudicar a aprendizagem, atenção e controle de impulsos em jovens', 'correta' => true],
            ['id_pergunta' => 8, 'texto_resposta' => 'Só afeta pessoas acima de 50 anos', 'correta' => false],
        ]);

        // Respostas Pergunta 9
        DB::table('respostas')->insert([
            ['id_pergunta' => 9, 'texto_resposta' => 'Cancelar os riscos', 'correta' => false],
            ['id_pergunta' => 9, 'texto_resposta' => 'Reduzir toxinas para zero', 'correta' => false],
            ['id_pergunta' => 9, 'texto_resposta' => 'Levar a maior exposição a toxinas e pior função respiratória', 'correta' => true],
            ['id_pergunta' => 9, 'texto_resposta' => 'Proteger o coração', 'correta' => false],
        ]);

        // Respostas Pergunta 10
        DB::table('respostas')->insert([
            ['id_pergunta' => 10, 'texto_resposta' => 'Ouro', 'correta' => false],
            ['id_pergunta' => 10, 'texto_resposta' => 'Chumbo, níquel, estanho', 'correta' => true],
            ['id_pergunta' => 10, 'texto_resposta' => 'Cobre puro', 'correta' => false],
            ['id_pergunta' => 10, 'texto_resposta' => 'Platina', 'correta' => false],
        ]);

        // Respostas Pergunta 11
        DB::table('respostas')->insert([
            ['id_pergunta' => 11, 'texto_resposta' => 'Fortalecimento do sistema imunológico', 'correta' => false],
            ['id_pergunta' => 11, 'texto_resposta' => 'Irritação de olhos, nariz e garganta', 'correta' => true],
            ['id_pergunta' => 11, 'texto_resposta' => 'Crescimento acelerado dos cabelos', 'correta' => false],
            ['id_pergunta' => 11, 'texto_resposta' => 'Aumento expressivo da visão', 'correta' => false],
        ]);

        // Respostas Pergunta 12
        DB::table('respostas')->insert([
            ['id_pergunta' => 12, 'texto_resposta' => 'Reduzir a chance de depressão', 'correta' => false],
            ['id_pergunta' => 12, 'texto_resposta' => 'Aumentar risco de ansiedade e depressão', 'correta' => true],
            ['id_pergunta' => 12, 'texto_resposta' => 'Melhorar o humor permanentemente', 'correta' => false],
            ['id_pergunta' => 12, 'texto_resposta' => 'Ter efeito neutro', 'correta' => false],
        ]);

        // Respostas Pergunta 13
        DB::table('respostas')->insert([
            ['id_pergunta' => 13, 'texto_resposta' => 'Redução da pressão arterial', 'correta' => false],
            ['id_pergunta' => 13, 'texto_resposta' => 'Fortalecimento vascular', 'correta' => false],
            ['id_pergunta' => 13, 'texto_resposta' => 'Dano ao endotélio e endurecimento das artérias', 'correta' => true],
            ['id_pergunta' => 13, 'texto_resposta' => 'Proteção contra infarto', 'correta' => false],
        ]);

        // Respostas Pergunta 14
        DB::table('respostas')->insert([
            ['id_pergunta' => 14, 'texto_resposta' => 'Não gerar dependência', 'correta' => false],
            ['id_pergunta' => 14, 'texto_resposta' => 'Levar ao uso subsequente de cigarros tradicionais', 'correta' => true],
            ['id_pergunta' => 14, 'texto_resposta' => 'Garantir saúde melhor que não uso', 'correta' => false],
            ['id_pergunta' => 14, 'texto_resposta' => 'Ser menos viciante que álcool', 'correta' => false],
        ]);

        // Respostas Pergunta 15
        DB::table('respostas')->insert([
            ['id_pergunta' => 15, 'texto_resposta' => 'Sucralose', 'correta' => false],
            ['id_pergunta' => 15, 'texto_resposta' => 'Ácido cítrico', 'correta' => false],
            ['id_pergunta' => 15, 'texto_resposta' => 'Diacetil', 'correta' => true],
            ['id_pergunta' => 15, 'texto_resposta' => 'Ácido ascórbico', 'correta' => false],
        ]);

        // Respostas Pergunta 16
        DB::table('respostas')->insert([
            ['id_pergunta' => 16, 'texto_resposta' => 'Baixa temperatura do vapor', 'correta' => false],
            ['id_pergunta' => 16, 'texto_resposta' => 'Uso de mentol apenas', 'correta' => false],
            ['id_pergunta' => 16, 'texto_resposta' => 'Exposição ao aerossol e compostos tóxicos', 'correta' => true],
            ['id_pergunta' => 16, 'texto_resposta' => 'Falta de nicotina', 'correta' => false],
        ]);

        // Respostas Pergunta 17
        DB::table('respostas')->insert([
            ['id_pergunta' => 17, 'texto_resposta' => 'São recomendados', 'correta' => false],
            ['id_pergunta' => 17, 'texto_resposta' => 'Sem risco algum', 'correta' => false],
            ['id_pergunta' => 17, 'texto_resposta' => 'Não são seguros e contêm nicotina tóxica para feto', 'correta' => true],
            ['id_pergunta' => 17, 'texto_resposta' => 'Substituem vitaminas', 'correta' => false],
        ]);

        // Respostas Pergunta 18
        DB::table('respostas')->insert([
            ['id_pergunta' => 18, 'texto_resposta' => 'Melhorar a saúde dental', 'correta' => false],
            ['id_pergunta' => 18, 'texto_resposta' => 'Ser neutro', 'correta' => false],
            ['id_pergunta' => 18, 'texto_resposta' => 'Aumentar risco de doença gengival e perda de dente', 'correta' => true],
            ['id_pergunta' => 18, 'texto_resposta' => 'Clarear os dentes', 'correta' => false],
        ]);

        // Respostas Pergunta 19
        DB::table('respostas')->insert([
            ['id_pergunta' => 19, 'texto_resposta' => 'Menor risco', 'correta' => false],
            ['id_pergunta' => 19, 'texto_resposta' => 'Explosões de baterias e ferimentos graves', 'correta' => true],
            ['id_pergunta' => 19, 'texto_resposta' => 'Melhor desempenho pulmonar', 'correta' => false],
            ['id_pergunta' => 19, 'texto_resposta' => 'Nenhum risco elétrico', 'correta' => false],
        ]);

        // Respostas Pergunta 20
        DB::table('respostas')->insert([
            ['id_pergunta' => 20, 'texto_resposta' => 'É completamente inofensiva', 'correta' => false],
            ['id_pergunta' => 20, 'texto_resposta' => 'Só contém água', 'correta' => false],
            ['id_pergunta' => 20, 'texto_resposta' => 'Contém nicotina, partículas ultrafinas e substâncias químicas perigosas', 'correta' => true],
            ['id_pergunta' => 20, 'texto_resposta' => 'Protege contra gripe', 'correta' => false],
        ]);

        // Respostas Pergunta 21
        DB::table('respostas')->insert([
            ['id_pergunta' => 21, 'texto_resposta' => 'Líquidos são seguros', 'correta' => false],
            ['id_pergunta' => 21, 'texto_resposta' => 'Zero casos de envenenamento', 'correta' => false],
            ['id_pergunta' => 21, 'texto_resposta' => 'Mais de 80% das chamadas para centros de envenenamento são de crianças <5 anos', 'correta' => true],
            ['id_pergunta' => 21, 'texto_resposta' => 'Não existe registro algum', 'correta' => false],
        ]);

        // Respostas Pergunta 22
        DB::table('respostas')->insert([
            ['id_pergunta' => 22, 'texto_resposta' => 'Um tipo de batom', 'correta' => false],
            ['id_pergunta' => 22, 'texto_resposta' => 'Um suplemento legal', 'correta' => false],
            ['id_pergunta' => 22, 'texto_resposta' => 'Lesão pulmonar associada ao uso de cigarro eletrônico/vape', 'correta' => true],
            ['id_pergunta' => 22, 'texto_resposta' => 'Um exercício físico', 'correta' => false],
        ]);

        // Respostas Pergunta 23
        DB::table('respostas')->insert([
            ['id_pergunta' => 23, 'texto_resposta' => 'É completamente aprovado para esse fim', 'correta' => false],
            ['id_pergunta' => 23, 'texto_resposta' => 'Garante sucesso de 100%', 'correta' => false],
            ['id_pergunta' => 23, 'texto_resposta' => 'Nenhum vape foi aprovado como seguro e eficaz para cessação do tabaco', 'correta' => true],
            ['id_pergunta' => 23, 'texto_resposta' => 'É gratuito em todos os países', 'correta' => false],
        ]);

        // Respostas Pergunta 24
        DB::table('respostas')->insert([
            ['id_pergunta' => 24, 'texto_resposta' => 'Apenas vapor de água', 'correta' => false],
            ['id_pergunta' => 24, 'texto_resposta' => 'Só oxigênio puro', 'correta' => false],
            ['id_pergunta' => 24, 'texto_resposta' => 'Compostos como formaldeído, acroleína e outros carbonilos tóxicos', 'correta' => true],
            ['id_pergunta' => 24, 'texto_resposta' => 'Apenas sabores naturais', 'correta' => false],
        ]);

        // Respostas Pergunta 25
        DB::table('respostas')->insert([
            ['id_pergunta' => 25, 'texto_resposta' => 'Diminuir drasticamente', 'correta' => false],
            ['id_pergunta' => 25, 'texto_resposta' => 'Manter constante', 'correta' => false],
            ['id_pergunta' => 25, 'texto_resposta' => 'Aumentar rapidamente', 'correta' => true],
            ['id_pergunta' => 25, 'texto_resposta' => 'Parar o coração instantaneamente', 'correta' => false],
        ]);

        // Respostas Pergunta 26
        DB::table('respostas')->insert([
            ['id_pergunta' => 26, 'texto_resposta' => 'Dependência de nicotina', 'correta' => false],
            ['id_pergunta' => 26, 'texto_resposta' => 'Danos pulmonares', 'correta' => false],
            ['id_pergunta' => 26, 'texto_resposta' => 'Melhora da capacidade pulmonar', 'correta' => true],
            ['id_pergunta' => 26, 'texto_resposta' => 'Irritação da garganta', 'correta' => false],
        ]);

        // Respostas Pergunta 27
        DB::table('respostas')->insert([
            ['id_pergunta' => 27, 'texto_resposta' => 'O tamanho dos pés', 'correta' => false],
            ['id_pergunta' => 27, 'texto_resposta' => 'A estrutura do cérebro, afetando atenção e aprendizado', 'correta' => true],
            ['id_pergunta' => 27, 'texto_resposta' => 'A cor da pele apenas', 'correta' => false],
            ['id_pergunta' => 27, 'texto_resposta' => 'O tipo sanguíneo', 'correta' => false],
        ]);

        // Respostas Pergunta 28
        DB::table('respostas')->insert([
            ['id_pergunta' => 28, 'texto_resposta' => 'Aumento da altura corporal', 'correta' => false],
            ['id_pergunta' => 28, 'texto_resposta' => 'Câncer de pulmão ou outras neoplasias', 'correta' => true],
            ['id_pergunta' => 28, 'texto_resposta' => 'Imunidade a vírus', 'correta' => false],
            ['id_pergunta' => 28, 'texto_resposta' => 'Memória fotográfica', 'correta' => false],
        ]);

        // Respostas Pergunta 29
        DB::table('respostas')->insert([
            ['id_pergunta' => 29, 'texto_resposta' => 'Aumentar drasticamente a imunidade', 'correta' => false],
            ['id_pergunta' => 29, 'texto_resposta' => 'Nenhum efeito', 'correta' => false],
            ['id_pergunta' => 29, 'texto_resposta' => 'Pode enfraquecer a função dos glóbulos brancos', 'correta' => true],
            ['id_pergunta' => 29, 'texto_resposta' => 'Curar doenças autoimunes', 'correta' => false],
        ]);

        // Respostas Pergunta 30
        DB::table('respostas')->insert([
            ['id_pergunta' => 30, 'texto_resposta' => 'Vapes são completamente inofensivos', 'correta' => false],
            ['id_pergunta' => 30, 'texto_resposta' => 'Cigarros não causam câncer', 'correta' => false],
            ['id_pergunta' => 30, 'texto_resposta' => 'Ambos apresentam riscos à saúde', 'correta' => true],
            ['id_pergunta' => 30, 'texto_resposta' => 'Vapes são mais saudáveis que brócolis', 'correta' => false],
        ]);

        // Respostas Pergunta 31
        DB::table('respostas')->insert([
            ['id_pergunta' => 31, 'texto_resposta' => 'Melhora imediata na atenção', 'correta' => false],
            ['id_pergunta' => 31, 'texto_resposta' => 'Nenhum sintoma', 'correta' => false],
            ['id_pergunta' => 31, 'texto_resposta' => 'Irritabilidade, ansiedade, alteração do sono', 'correta' => true],
            ['id_pergunta' => 31, 'texto_resposta' => 'Crescimento do cabelo mais rápido', 'correta' => false],
        ]);

        // Respostas Pergunta 32
        DB::table('respostas')->insert([
            ['id_pergunta' => 32, 'texto_resposta' => 'Não existem sabores direcionados a jovens', 'correta' => false],
            ['id_pergunta' => 32, 'texto_resposta' => 'Não causam dependência', 'correta' => false],
            ['id_pergunta' => 32, 'texto_resposta' => 'Frequentemente atraem jovens e facilitam início de uso de nicotina', 'correta' => true],
            ['id_pergunta' => 32, 'texto_resposta' => 'São uma ferramenta pedagógica', 'correta' => false],
        ]);

        // Respostas Pergunta 33
        DB::table('respostas')->insert([
            ['id_pergunta' => 33, 'texto_resposta' => 'Melhora da função pulmonar', 'correta' => false],
            ['id_pergunta' => 33, 'texto_resposta' => 'Redução da função pulmonar e risco aumentado de doenças respiratórias', 'correta' => true],
            ['id_pergunta' => 33, 'texto_resposta' => 'Aumento da capacidade vital', 'correta' => false],
            ['id_pergunta' => 33, 'texto_resposta' => 'Nenhum efeito', 'correta' => false],
        ]);

        // Respostas Pergunta 34
        DB::table('respostas')->insert([
            ['id_pergunta' => 34, 'texto_resposta' => 'Clarear a pele', 'correta' => false],
            ['id_pergunta' => 34, 'texto_resposta' => 'Fortalecer as unhas', 'correta' => false],
            ['id_pergunta' => 34, 'texto_resposta' => 'Provocar vermelhidão, envelhecimento e cicatrização reduzida', 'correta' => true],
            ['id_pergunta' => 34, 'texto_resposta' => 'Curar acne', 'correta' => false],
        ]);

        // Respostas Pergunta 35
        DB::table('respostas')->insert([
            ['id_pergunta' => 35, 'texto_resposta' => 'Ser gratuito sempre', 'correta' => false],
            ['id_pergunta' => 35, 'texto_resposta' => 'Ter impacto apenas positivo', 'correta' => false],
            ['id_pergunta' => 35, 'texto_resposta' => 'Levar à dependência, com consumo contínuo e consequências sociais/financeiras', 'correta' => true],
            ['id_pergunta' => 35, 'texto_resposta' => 'Garantir promoção no trabalho', 'correta' => false],
        ]);

        // Respostas Pergunta 36
        DB::table('respostas')->insert([
            ['id_pergunta' => 36, 'texto_resposta' => 'São sempre mais seguros que os recarregáveis', 'correta' => false],
            ['id_pergunta' => 36, 'texto_resposta' => 'Não contêm nicotina', 'correta' => false],
            ['id_pergunta' => 36, 'texto_resposta' => 'Têm risco elevado de acidentes com bateria e contêm doses de nicotina muitas vezes altas', 'correta' => true],
            ['id_pergunta' => 36, 'texto_resposta' => 'Podem ser usados com crianças', 'correta' => false],
        ]);

        // Respostas Pergunta 37
        DB::table('respostas')->insert([
            ['id_pergunta' => 37, 'texto_resposta' => 'Eles durmam mais horas', 'correta' => false],
            ['id_pergunta' => 37, 'texto_resposta' => 'Melhor desempenho escolar', 'correta' => false],
            ['id_pergunta' => 37, 'texto_resposta' => 'Maior probabilidade de experimentarem outras substâncias de tabaco ou drogas', 'correta' => true],
            ['id_pergunta' => 37, 'texto_resposta' => 'Aumento de memória vívida', 'correta' => false],
        ]);

        // Respostas Pergunta 38
        DB::table('respostas')->insert([
            ['id_pergunta' => 38, 'texto_resposta' => 'Aumento de energia corporal', 'correta' => false],
            ['id_pergunta' => 38, 'texto_resposta' => 'Carregamento mais rápido de sono', 'correta' => false],
            ['id_pergunta' => 38, 'texto_resposta' => 'Explosão ou fogo causando queimaduras graves', 'correta' => true],
            ['id_pergunta' => 38, 'texto_resposta' => 'Proteção contra raios UV', 'correta' => false],
        ]);

        // Respostas Pergunta 39
        DB::table('respostas')->insert([
            ['id_pergunta' => 39, 'texto_resposta' => 'Não existe sabor algum', 'correta' => false],
            ['id_pergunta' => 39, 'texto_resposta' => 'Todos os sabores são seguros para inalação', 'correta' => false],
            ['id_pergunta' => 39, 'texto_resposta' => 'Há crescente atenção regulatória porque sabores atraem jovens e há riscos desconhecidos', 'correta' => true],
            ['id_pergunta' => 39, 'texto_resposta' => 'Sabores aumentam a função pulmonar', 'correta' => false],
        ]);

        // Respostas Pergunta 40
        DB::table('respostas')->insert([
            ['id_pergunta' => 40, 'texto_resposta' => 'Ajuda a prevenir doenças', 'correta' => false],
            ['id_pergunta' => 40, 'texto_resposta' => 'É completamente neutro', 'correta' => false],
            ['id_pergunta' => 40, 'texto_resposta' => 'Pode iniciar uma nova dependência e risco de doenças', 'correta' => true],
            ['id_pergunta' => 40, 'texto_resposta' => 'Serve como suplemento vitamínico', 'correta' => false],
        ]);

        // Respostas Pergunta 41
        DB::table('respostas')->insert([
            ['id_pergunta' => 41, 'texto_resposta' => 'Visão de raio-X', 'correta' => false],
            ['id_pergunta' => 41, 'texto_resposta' => 'Aumento súbito da audição', 'correta' => false],
            ['id_pergunta' => 41, 'texto_resposta' => 'Tontura, náusea, dor de garganta', 'correta' => true],
            ['id_pergunta' => 41, 'texto_resposta' => 'Crescimento de pelos faciais', 'correta' => false],
        ]);

        // Respostas Pergunta 42
        DB::table('respostas')->insert([
            ['id_pergunta' => 42, 'texto_resposta' => 'É recomendado', 'correta' => false],
            ['id_pergunta' => 42, 'texto_resposta' => 'Não apresenta risco adicional', 'correta' => false],
            ['id_pergunta' => 42, 'texto_resposta' => 'Pode agravar o problema cardiovascular', 'correta' => true],
            ['id_pergunta' => 42, 'texto_resposta' => 'Cura doenças cardíacas', 'correta' => false],
        ]);

        // Respostas Pergunta 43
        DB::table('respostas')->insert([
            ['id_pergunta' => 43, 'texto_resposta' => 'Deixar ao alcance', 'correta' => false],
            ['id_pergunta' => 43, 'texto_resposta' => 'Jamais avisar as crianças', 'correta' => false],
            ['id_pergunta' => 43, 'texto_resposta' => 'Guardar o líquido em local seguro, fora do alcance de crianças', 'correta' => true],
            ['id_pergunta' => 43, 'texto_resposta' => 'Incentivar-las a cheirar', 'correta' => false],
        ]);

        // Respostas Pergunta 44
        DB::table('respostas')->insert([
            ['id_pergunta' => 44, 'texto_resposta' => 'É um recurso terapêutico', 'correta' => false],
            ['id_pergunta' => 44, 'texto_resposta' => 'Nunca causa dependência', 'correta' => false],
            ['id_pergunta' => 44, 'texto_resposta' => 'Pode levar a dependência de nicotina e a uso de cigarro', 'correta' => true],
            ['id_pergunta' => 44, 'texto_resposta' => 'Ajuda no rendimento escolar', 'correta' => false],
        ]);

        // Respostas Pergunta 45
        DB::table('respostas')->insert([
            ['id_pergunta' => 45, 'texto_resposta' => 'O cérebro já maduro', 'correta' => false],
            ['id_pergunta' => 45, 'texto_resposta' => 'Uso de vitaminas', 'correta' => false],
            ['id_pergunta' => 45, 'texto_resposta' => 'O cérebro ainda em desenvolvimento, maior vulnerabilidade à nicotina', 'correta' => true],
            ['id_pergunta' => 45, 'texto_resposta' => 'Sono excessivo', 'correta' => false],
        ]);

        // Respostas Pergunta 46
        DB::table('respostas')->insert([
            ['id_pergunta' => 46, 'texto_resposta' => 'É totalmente verdadeiro', 'correta' => false],
            ['id_pergunta' => 46, 'texto_resposta' => 'Vapor de água não existe', 'correta' => false],
            ['id_pergunta' => 46, 'texto_resposta' => 'O aerossol contém muitas substâncias além de água, portanto não é inofensivo', 'correta' => true],
            ['id_pergunta' => 46, 'texto_resposta' => 'Apenas água e oxigênio', 'correta' => false],
        ]);

        // Respostas Pergunta 47
        DB::table('respostas')->insert([
            ['id_pergunta' => 47, 'texto_resposta' => 'Efeitos demoram décadas para começar', 'correta' => false],
            ['id_pergunta' => 47, 'texto_resposta' => 'Não provocam efeitos imediatos', 'correta' => false],
            ['id_pergunta' => 47, 'texto_resposta' => 'Podem ocorrer irritação, tosse e redução da função pulmonar mesmo em uso recente', 'correta' => true],
            ['id_pergunta' => 47, 'texto_resposta' => 'Aumentam a produção de hormônios do crescimento', 'correta' => false],
        ]);

        // Respostas Pergunta 48
        DB::table('respostas')->insert([
            ['id_pergunta' => 48, 'texto_resposta' => 'Se promovem crescimento muscular', 'correta' => false],
            ['id_pergunta' => 48, 'texto_resposta' => 'Se fazem as unhas mais fortes', 'correta' => false],
            ['id_pergunta' => 48, 'texto_resposta' => 'Seu papel completo no câncer, doenças crônicas e mortalidade', 'correta' => true],
            ['id_pergunta' => 48, 'texto_resposta' => 'Se curam insônia', 'correta' => false],
        ]);

        // Respostas Pergunta 49
        DB::table('respostas')->insert([
            ['id_pergunta' => 49, 'texto_resposta' => 'Continuar usando para "reduzir" depois', 'correta' => false],
            ['id_pergunta' => 49, 'texto_resposta' => 'Ignorar sintomas de abstinência', 'correta' => false],
            ['id_pergunta' => 49, 'texto_resposta' => 'Buscar ajuda profissional ou programa de cessação de tabaco/vape', 'correta' => true],
            ['id_pergunta' => 49, 'texto_resposta' => 'Apostar em sabores mais leves eternamente', 'correta' => false],
        ]);

        // Respostas Pergunta 50
        DB::table('respostas')->insert([
            ['id_pergunta' => 50, 'texto_resposta' => 'É totalmente seguro', 'correta' => false],
            ['id_pergunta' => 50, 'texto_resposta' => 'É recomendado para todos', 'correta' => false],
            ['id_pergunta' => 50, 'texto_resposta' => 'Não é seguro, especialmente para jovens, grávidas e não-fumantes', 'correta' => true],
            ['id_pergunta' => 50, 'texto_resposta' => 'É melhor que exercícios físicos', 'correta' => false],
        ]);

        // Respostas Pergunta 51
        DB::table('respostas')->insert([
            ['id_pergunta' => 51, 'texto_resposta' => 'Propilenoglicol', 'correta' => false],
            ['id_pergunta' => 51, 'texto_resposta' => 'Glicerina vegetal', 'correta' => false],
            ['id_pergunta' => 51, 'texto_resposta' => 'Nicotina', 'correta' => true],
            ['id_pergunta' => 51, 'texto_resposta' => 'Saborizante', 'correta' => false],
        ]);

        // Respostas Pergunta 52
        DB::table('respostas')->insert([
            ['id_pergunta' => 52, 'texto_resposta' => 'Melatonina', 'correta' => false],
            ['id_pergunta' => 52, 'texto_resposta' => 'Dopamina', 'correta' => true],
            ['id_pergunta' => 52, 'texto_resposta' => 'Serotonina pura', 'correta' => false],
            ['id_pergunta' => 52, 'texto_resposta' => 'Cortisol', 'correta' => false],
        ]);

        // Respostas Pergunta 53
        DB::table('respostas')->insert([
            ['id_pergunta' => 53, 'texto_resposta' => 'Está completamente desenvolvido', 'correta' => false],
            ['id_pergunta' => 53, 'texto_resposta' => 'Ainda está em formação até cerca dos 25 anos', 'correta' => true],
            ['id_pergunta' => 53, 'texto_resposta' => 'É mais resistente à nicotina', 'correta' => false],
            ['id_pergunta' => 53, 'texto_resposta' => 'Tem menos receptores neurais', 'correta' => false],
        ]);

        // Respostas Pergunta 54
        DB::table('respostas')->insert([
            ['id_pergunta' => 54, 'texto_resposta' => 'Fome excessiva e riso fácil', 'correta' => false],
            ['id_pergunta' => 54, 'texto_resposta' => 'Irritabilidade, ansiedade e dificuldade de concentração', 'correta' => true],
            ['id_pergunta' => 54, 'texto_resposta' => 'Sono profundo e relaxamento', 'correta' => false],
            ['id_pergunta' => 54, 'texto_resposta' => 'Aumento da paciência', 'correta' => false],
        ]);

        // Respostas Pergunta 55
        DB::table('respostas')->insert([
            ['id_pergunta' => 55, 'texto_resposta' => 'Redução da frequência cardíaca', 'correta' => false],
            ['id_pergunta' => 55, 'texto_resposta' => 'Relaxamento muscular total', 'correta' => false],
            ['id_pergunta' => 55, 'texto_resposta' => 'Aumento da pressão arterial e da frequência cardíaca', 'correta' => true],
            ['id_pergunta' => 55, 'texto_resposta' => 'Melhora da respiração', 'correta' => false],
        ]);

        // Respostas Pergunta 56
        DB::table('respostas')->insert([
            ['id_pergunta' => 56, 'texto_resposta' => 'Menor será o risco de dependência', 'correta' => false],
            ['id_pergunta' => 56, 'texto_resposta' => 'Maior será o risco de dependência', 'correta' => true],
            ['id_pergunta' => 56, 'texto_resposta' => 'Não há relação com dependência', 'correta' => false],
            ['id_pergunta' => 56, 'texto_resposta' => 'Pode evitar tabagismo', 'correta' => false],
        ]);

        // Respostas Pergunta 57
        DB::table('respostas')->insert([
            ['id_pergunta' => 57, 'texto_resposta' => 'Leve e sem riscos', 'correta' => false],
            ['id_pergunta' => 57, 'texto_resposta' => 'Altamente viciante e neurotóxica', 'correta' => true],
            ['id_pergunta' => 57, 'texto_resposta' => 'Estimulante benigna', 'correta' => false],
            ['id_pergunta' => 57, 'texto_resposta' => 'Natural e segura', 'correta' => false],
        ]);

        // Respostas Pergunta 58
        DB::table('respostas')->insert([
            ['id_pergunta' => 58, 'texto_resposta' => 'Nenhum efeito', 'correta' => false],
            ['id_pergunta' => 58, 'texto_resposta' => 'Sintomas de abstinência', 'correta' => true],
            ['id_pergunta' => 58, 'texto_resposta' => 'Aumento de energia', 'correta' => false],
            ['id_pergunta' => 58, 'texto_resposta' => 'Sonolência extrema', 'correta' => false],
        ]);

        // Respostas Pergunta 59
        DB::table('respostas')->insert([
            ['id_pergunta' => 59, 'texto_resposta' => 'O vape contém nicotina', 'correta' => false],
            ['id_pergunta' => 59, 'texto_resposta' => 'Pode causar dependência', 'correta' => false],
            ['id_pergunta' => 59, 'texto_resposta' => 'É seguro e sem toxinas', 'correta' => true],
            ['id_pergunta' => 59, 'texto_resposta' => 'Pode afetar o cérebro jovem', 'correta' => false],
        ]);

        // Respostas Pergunta 60
        DB::table('respostas')->insert([
            ['id_pergunta' => 60, 'texto_resposta' => 'É aprovado como método de relaxamento', 'correta' => false],
            ['id_pergunta' => 60, 'texto_resposta' => 'Não é considerado seguro e deve ser evitado', 'correta' => true],
            ['id_pergunta' => 60, 'texto_resposta' => 'É recomendado para todos os fumantes', 'correta' => false],
            ['id_pergunta' => 60, 'texto_resposta' => 'É inofensivo para jovens', 'correta' => false],
        ]);

        // Respostas Pergunta 61
        DB::table('respostas')->insert([
            ['id_pergunta' => 61, 'texto_resposta' => 'Hipotermia', 'correta' => false],
            ['id_pergunta' => 61, 'texto_resposta' => 'Tosse, falta de ar e dor no peito', 'correta' => true],
            ['id_pergunta' => 61, 'texto_resposta' => 'Perda de apetite', 'correta' => false],
            ['id_pergunta' => 61, 'texto_resposta' => 'Visão turva', 'correta' => false],
        ]);

        // Respostas Pergunta 62
        DB::table('respostas')->insert([
            ['id_pergunta' => 62, 'texto_resposta' => 'Água contaminada', 'correta' => false],
            ['id_pergunta' => 62, 'texto_resposta' => 'Uso de cigarros eletrônicos', 'correta' => true],
            ['id_pergunta' => 62, 'texto_resposta' => 'Exercícios intensos', 'correta' => false],
            ['id_pergunta' => 62, 'texto_resposta' => 'Falta de vitamina D', 'correta' => false],
        ]);

        // Respostas Pergunta 63
        DB::table('respostas')->insert([
            ['id_pergunta' => 63, 'texto_resposta' => 'Açúcar', 'correta' => false],
            ['id_pergunta' => 63, 'texto_resposta' => 'Acetato de vitamina E', 'correta' => true],
            ['id_pergunta' => 63, 'texto_resposta' => 'Cloreto de sódio', 'correta' => false],
            ['id_pergunta' => 63, 'texto_resposta' => 'Cafeína', 'correta' => false],
        ]);

        // Respostas Pergunta 64
        DB::table('respostas')->insert([
            ['id_pergunta' => 64, 'texto_resposta' => 'Somente vapor de água', 'correta' => false],
            ['id_pergunta' => 64, 'texto_resposta' => 'Partículas finas e substâncias químicas nocivas', 'correta' => true],
            ['id_pergunta' => 64, 'texto_resposta' => 'Apenas oxigênio e nitrogênio', 'correta' => false],
            ['id_pergunta' => 64, 'texto_resposta' => 'Óleo essencial', 'correta' => false],
        ]);

        // Respostas Pergunta 65
        DB::table('respostas')->insert([
            ['id_pergunta' => 65, 'texto_resposta' => 'Melhora da capacidade pulmonar', 'correta' => false],
            ['id_pergunta' => 65, 'texto_resposta' => 'Tosse crônica e chiado', 'correta' => true],
            ['id_pergunta' => 65, 'texto_resposta' => 'Diminuição de alergias', 'correta' => false],
            ['id_pergunta' => 65, 'texto_resposta' => 'Redução de secreção nasal', 'correta' => false],
        ]);

        // Respostas Pergunta 66
        DB::table('respostas')->insert([
            ['id_pergunta' => 66, 'texto_resposta' => 'Ser inofensiva', 'correta' => false],
            ['id_pergunta' => 66, 'texto_resposta' => 'Expor a nicotina e partículas tóxicas', 'correta' => true],
            ['id_pergunta' => 66, 'texto_resposta' => 'Servir de aromaterapia', 'correta' => false],
            ['id_pergunta' => 66, 'texto_resposta' => 'Fortalecer os pulmões', 'correta' => false],
        ]);

        // Respostas Pergunta 67
        DB::table('respostas')->insert([
            ['id_pergunta' => 67, 'texto_resposta' => 'O vapor é gelado', 'correta' => false],
            ['id_pergunta' => 67, 'texto_resposta' => 'O aerossol contém aldeídos irritantes', 'correta' => true],
            ['id_pergunta' => 67, 'texto_resposta' => 'O aparelho vibra muito', 'correta' => false],
            ['id_pergunta' => 67, 'texto_resposta' => 'Gera ozônio', 'correta' => false],
        ]);

        // Respostas Pergunta 68
        DB::table('respostas')->insert([
            ['id_pergunta' => 68, 'texto_resposta' => 'Asma', 'correta' => false],
            ['id_pergunta' => 68, 'texto_resposta' => 'Bronquiolite obliterante ("pulmão de pipoca")', 'correta' => true],
            ['id_pergunta' => 68, 'texto_resposta' => 'Enfisema apenas em idosos', 'correta' => false],
            ['id_pergunta' => 68, 'texto_resposta' => 'Aumento da respiração', 'correta' => false],
        ]);

        // Respostas Pergunta 69
        DB::table('respostas')->insert([
            ['id_pergunta' => 69, 'texto_resposta' => 'Água e oxigênio', 'correta' => false],
            ['id_pergunta' => 69, 'texto_resposta' => 'Formaldeído e acroleína, substâncias cancerígenas', 'correta' => true],
            ['id_pergunta' => 69, 'texto_resposta' => 'Cloro e amônia', 'correta' => false],
            ['id_pergunta' => 69, 'texto_resposta' => 'Álcool puro', 'correta' => false],
        ]);

        // Respostas Pergunta 70
        DB::table('respostas')->insert([
            ['id_pergunta' => 70, 'texto_resposta' => 'Reduz os riscos', 'correta' => false],
            ['id_pergunta' => 70, 'texto_resposta' => 'Aumenta a exposição a toxinas e danos pulmonares', 'correta' => true],
            ['id_pergunta' => 70, 'texto_resposta' => 'Neutraliza a nicotina', 'correta' => false],
            ['id_pergunta' => 70, 'texto_resposta' => 'É recomendado', 'correta' => false],
        ]);

        // Respostas Pergunta 71
        DB::table('respostas')->insert([
            ['id_pergunta' => 71, 'texto_resposta' => 'Diminuição da pressão arterial', 'correta' => false],
            ['id_pergunta' => 71, 'texto_resposta' => 'Aumento da frequência cardíaca e risco de arritmias', 'correta' => true],
            ['id_pergunta' => 71, 'texto_resposta' => 'Regulação do colesterol', 'correta' => false],
            ['id_pergunta' => 71, 'texto_resposta' => 'Redução de coágulos', 'correta' => false],
        ]);

        // Respostas Pergunta 72
        DB::table('respostas')->insert([
            ['id_pergunta' => 72, 'texto_resposta' => 'Fígado', 'correta' => false],
            ['id_pergunta' => 72, 'texto_resposta' => 'Sistema nervoso central e coração', 'correta' => true],
            ['id_pergunta' => 72, 'texto_resposta' => 'Músculos dos pés', 'correta' => false],
            ['id_pergunta' => 72, 'texto_resposta' => 'Estômago', 'correta' => false],
        ]);

        // Respostas Pergunta 73
        DB::table('respostas')->insert([
            ['id_pergunta' => 73, 'texto_resposta' => 'Nulo', 'correta' => false],
            ['id_pergunta' => 73, 'texto_resposta' => 'Maior que em não usuários', 'correta' => true],
            ['id_pergunta' => 73, 'texto_resposta' => 'Menor que em atletas', 'correta' => false],
            ['id_pergunta' => 73, 'texto_resposta' => 'Zero comprovado', 'correta' => false],
        ]);

        // Respostas Pergunta 74
        DB::table('respostas')->insert([
            ['id_pergunta' => 74, 'texto_resposta' => 'Apenas os cabelos', 'correta' => false],
            ['id_pergunta' => 74, 'texto_resposta' => 'Sangue e rins', 'correta' => true],
            ['id_pergunta' => 74, 'texto_resposta' => 'Músculos', 'correta' => false],
            ['id_pergunta' => 74, 'texto_resposta' => 'Unhas', 'correta' => false],
        ]);

        // Respostas Pergunta 75
        DB::table('respostas')->insert([
            ['id_pergunta' => 75, 'texto_resposta' => 'Chumbo, níquel e estanho', 'correta' => true],
            ['id_pergunta' => 75, 'texto_resposta' => 'Cobre e alumínio', 'correta' => false],
            ['id_pergunta' => 75, 'texto_resposta' => 'Ouro e prata', 'correta' => false],
            ['id_pergunta' => 75, 'texto_resposta' => 'Zinco puro', 'correta' => false],
        ]);

        // Respostas Pergunta 76
        DB::table('respostas')->insert([
            ['id_pergunta' => 76, 'texto_resposta' => 'Coloração da pele', 'correta' => false],
            ['id_pergunta' => 76, 'texto_resposta' => 'Fluxo sanguíneo e pressão arterial', 'correta' => true],
            ['id_pergunta' => 76, 'texto_resposta' => 'Digestão', 'correta' => false],
            ['id_pergunta' => 76, 'texto_resposta' => 'Visão', 'correta' => false],
        ]);

        // Respostas Pergunta 77
        DB::table('respostas')->insert([
            ['id_pergunta' => 77, 'texto_resposta' => 'Ganho de peso fetal saudável', 'correta' => false],
            ['id_pergunta' => 77, 'texto_resposta' => 'Parto prematuro e baixo peso do bebê', 'correta' => true],
            ['id_pergunta' => 77, 'texto_resposta' => 'Melhora do apetite', 'correta' => false],
            ['id_pergunta' => 77, 'texto_resposta' => 'Redução de enjoo', 'correta' => false],
        ]);

        // Respostas Pergunta 78
        DB::table('respostas')->insert([
            ['id_pergunta' => 78, 'texto_resposta' => 'Apenas o sistema digestivo', 'correta' => false],
            ['id_pergunta' => 78, 'texto_resposta' => 'A barreira placentária e o leite materno', 'correta' => true],
            ['id_pergunta' => 78, 'texto_resposta' => 'Somente o cabelo', 'correta' => false],
            ['id_pergunta' => 78, 'texto_resposta' => 'As unhas', 'correta' => false],
        ]);

        // Respostas Pergunta 79
        DB::table('respostas')->insert([
            ['id_pergunta' => 79, 'texto_resposta' => 'Melhora a percepção de sabores', 'correta' => false],
            ['id_pergunta' => 79, 'texto_resposta' => 'Pode causar perda temporária ou alteração de paladar', 'correta' => true],
            ['id_pergunta' => 79, 'texto_resposta' => 'Não interfere', 'correta' => false],
            ['id_pergunta' => 79, 'texto_resposta' => 'Melhora o olfato', 'correta' => false],
        ]);

        // Respostas Pergunta 80
        DB::table('respostas')->insert([
            ['id_pergunta' => 80, 'texto_resposta' => 'Nenhum', 'correta' => false],
            ['id_pergunta' => 80, 'texto_resposta' => 'Explosão de bateria e queimaduras', 'correta' => true],
            ['id_pergunta' => 80, 'texto_resposta' => 'Câimbra', 'correta' => false],
            ['id_pergunta' => 80, 'texto_resposta' => 'Alergia ao metal', 'correta' => false],
        ]);

        // Respostas Pergunta 81
        DB::table('respostas')->insert([
            ['id_pergunta' => 81, 'texto_resposta' => 'Liberados pela ANVISA', 'correta' => false],
            ['id_pergunta' => 81, 'texto_resposta' => 'Proibidos para comercialização e importação', 'correta' => true],
            ['id_pergunta' => 81, 'texto_resposta' => 'Recomendados para parar de fumar', 'correta' => false],
            ['id_pergunta' => 81, 'texto_resposta' => 'Regulamentados como medicamentos', 'correta' => false],
        ]);

        // Respostas Pergunta 82
        DB::table('respostas')->insert([
            ['id_pergunta' => 82, 'texto_resposta' => 'Está diminuindo', 'correta' => false],
            ['id_pergunta' => 82, 'texto_resposta' => 'Tem aumentado segundo o Ministério da Saúde', 'correta' => true],
            ['id_pergunta' => 82, 'texto_resposta' => 'É inexistente', 'correta' => false],
            ['id_pergunta' => 82, 'texto_resposta' => 'Está controlado', 'correta' => false],
        ]);

        // Respostas Pergunta 83
        DB::table('respostas')->insert([
            ['id_pergunta' => 83, 'texto_resposta' => 'Falta de acesso à internet', 'correta' => false],
            ['id_pergunta' => 83, 'texto_resposta' => 'Propagandas disfarçadas e sabores atrativos', 'correta' => true],
            ['id_pergunta' => 83, 'texto_resposta' => 'Campanhas escolares', 'correta' => false],
            ['id_pergunta' => 83, 'texto_resposta' => 'Aumento de preços', 'correta' => false],
        ]);

        // Respostas Pergunta 84
        DB::table('respostas')->insert([
            ['id_pergunta' => 84, 'texto_resposta' => 'Estimulem o uso recreativo', 'correta' => false],
            ['id_pergunta' => 84, 'texto_resposta' => 'Proíbam propaganda e venda a menores', 'correta' => true],
            ['id_pergunta' => 84, 'texto_resposta' => 'Distribuam em escolas', 'correta' => false],
            ['id_pergunta' => 84, 'texto_resposta' => 'Incentivem o uso terapêutico', 'correta' => false],
        ]);

        // Respostas Pergunta 85
        DB::table('respostas')->insert([
            ['id_pergunta' => 85, 'texto_resposta' => 'Alimento', 'correta' => false],
            ['id_pergunta' => 85, 'texto_resposta' => 'Cosmético', 'correta' => false],
            ['id_pergunta' => 85, 'texto_resposta' => 'Produto fumígeno derivado do tabaco', 'correta' => true],
            ['id_pergunta' => 85, 'texto_resposta' => 'Remédio natural', 'correta' => false],
        ]);

        // Respostas Pergunta 86
        DB::table('respostas')->insert([
            ['id_pergunta' => 86, 'texto_resposta' => 'Muitos usuários desconhecem o teor real de nicotina', 'correta' => true],
            ['id_pergunta' => 86, 'texto_resposta' => 'Só libera ar puro', 'correta' => false],
            ['id_pergunta' => 86, 'texto_resposta' => 'É controlado por lei internacional', 'correta' => false],
            ['id_pergunta' => 86, 'texto_resposta' => 'Não contém químicos', 'correta' => false],
        ]);

        // Respostas Pergunta 87
        DB::table('respostas')->insert([
            ['id_pergunta' => 87, 'texto_resposta' => 'Seguros para inalação', 'correta' => false],
            ['id_pergunta' => 87, 'texto_resposta' => 'Seguros apenas para ingestão, não para inalar', 'correta' => true],
            ['id_pergunta' => 87, 'texto_resposta' => 'Naturais e medicinais', 'correta' => false],
            ['id_pergunta' => 87, 'texto_resposta' => 'Inofensivos', 'correta' => false],
        ]);

        // Respostas Pergunta 88
        DB::table('respostas')->insert([
            ['id_pergunta' => 88, 'texto_resposta' => 'Ajuda a parar de fumar', 'correta' => false],
            ['id_pergunta' => 88, 'texto_resposta' => 'É totalmente seguro e "limpo"', 'correta' => true],
            ['id_pergunta' => 88, 'texto_resposta' => 'Tem menos odor', 'correta' => false],
            ['id_pergunta' => 88, 'texto_resposta' => 'É portátil', 'correta' => false],
        ]);

        // Respostas Pergunta 89
        DB::table('respostas')->insert([
            ['id_pergunta' => 89, 'texto_resposta' => 'Fumantes adultos', 'correta' => false],
            ['id_pergunta' => 89, 'texto_resposta' => 'Jovens, grávidas e não fumantes', 'correta' => true],
            ['id_pergunta' => 89, 'texto_resposta' => 'Médicos', 'correta' => false],
            ['id_pergunta' => 89, 'texto_resposta' => 'Idosos', 'correta' => false],
        ]);

        // Respostas Pergunta 90
        DB::table('respostas')->insert([
            ['id_pergunta' => 90, 'texto_resposta' => 'É sustentável', 'correta' => false],
            ['id_pergunta' => 90, 'texto_resposta' => 'Polui o meio ambiente e libera metais pesados', 'correta' => true],
            ['id_pergunta' => 90, 'texto_resposta' => 'Recicla automaticamente', 'correta' => false],
            ['id_pergunta' => 90, 'texto_resposta' => 'É inofensivo', 'correta' => false],
        ]);

        // Respostas Pergunta 91
        DB::table('respostas')->insert([
            ['id_pergunta' => 91, 'texto_resposta' => 'Melhorar a concentração', 'correta' => false],
            ['id_pergunta' => 91, 'texto_resposta' => 'Prejudicar memória e foco', 'correta' => true],
            ['id_pergunta' => 91, 'texto_resposta' => 'Aumentar notas', 'correta' => false],
            ['id_pergunta' => 91, 'texto_resposta' => 'Diminuir ansiedade', 'correta' => false],
        ]);

        // Respostas Pergunta 92
        DB::table('respostas')->insert([
            ['id_pergunta' => 92, 'texto_resposta' => 'Isolamento e ansiedade', 'correta' => false],
            ['id_pergunta' => 92, 'texto_resposta' => 'Irritabilidade e perda de controle do uso', 'correta' => true],
            ['id_pergunta' => 92, 'texto_resposta' => 'Foco e calma', 'correta' => false],
            ['id_pergunta' => 92, 'texto_resposta' => 'Aumento da empatia', 'correta' => false],
        ]);

        // Respostas Pergunta 93
        DB::table('respostas')->insert([
            ['id_pergunta' => 93, 'texto_resposta' => 'Diminui seu consumo', 'correta' => false],
            ['id_pergunta' => 93, 'texto_resposta' => 'Aumenta a curiosidade e o uso entre jovens', 'correta' => true],
            ['id_pergunta' => 93, 'texto_resposta' => 'Desestimula adolescentes', 'correta' => false],
            ['id_pergunta' => 93, 'texto_resposta' => 'É proibida em todo o mundo', 'correta' => false],
        ]);

        // Respostas Pergunta 94
        DB::table('respostas')->insert([
            ['id_pergunta' => 94, 'texto_resposta' => 'Causar bem-estar contínuo', 'correta' => false],
            ['id_pergunta' => 94, 'texto_resposta' => 'Gerar dependência e arrependimento', 'correta' => true],
            ['id_pergunta' => 94, 'texto_resposta' => 'Melhorar saúde bucal', 'correta' => false],
            ['id_pergunta' => 94, 'texto_resposta' => 'Reduzir ansiedade', 'correta' => false],
        ]);

        // Respostas Pergunta 95
        DB::table('respostas')->insert([
            ['id_pergunta' => 95, 'texto_resposta' => 'Transmitir doenças infecciosas', 'correta' => true],
            ['id_pergunta' => 95, 'texto_resposta' => 'Ser mais seguro', 'correta' => false],
            ['id_pergunta' => 95, 'texto_resposta' => 'Melhorar o sabor', 'correta' => false],
            ['id_pergunta' => 95, 'texto_resposta' => 'Esterilizar o aparelho', 'correta' => false],
        ]);

        // Respostas Pergunta 96
        DB::table('respostas')->insert([
            ['id_pergunta' => 96, 'texto_resposta' => 'Aumentar engajamento escolar', 'correta' => false],
            ['id_pergunta' => 96, 'texto_resposta' => 'Levar ao uso de outras drogas', 'correta' => true],
            ['id_pergunta' => 96, 'texto_resposta' => 'Reduzir curiosidade', 'correta' => false],
            ['id_pergunta' => 96, 'texto_resposta' => 'Diminuir estresse', 'correta' => false],
        ]);

        // Respostas Pergunta 97
        DB::table('respostas')->insert([
            ['id_pergunta' => 97, 'texto_resposta' => 'Design moderno e sabores doces', 'correta' => true],
            ['id_pergunta' => 97, 'texto_resposta' => 'Informação científica', 'correta' => false],
            ['id_pergunta' => 97, 'texto_resposta' => 'Campanhas de saúde', 'correta' => false],
            ['id_pergunta' => 97, 'texto_resposta' => 'Prevenção de doenças', 'correta' => false],
        ]);

        // Respostas Pergunta 98
        DB::table('respostas')->insert([
            ['id_pergunta' => 98, 'texto_resposta' => 'Contém nicotina', 'correta' => false],
            ['id_pergunta' => 98, 'texto_resposta' => 'Ajuda a relaxar sem causar dependência', 'correta' => true],
            ['id_pergunta' => 98, 'texto_resposta' => 'Pode causar doenças', 'correta' => false],
            ['id_pergunta' => 98, 'texto_resposta' => 'É prejudicial à saúde', 'correta' => false],
        ]);

        // Respostas Pergunta 99
        DB::table('respostas')->insert([
            ['id_pergunta' => 99, 'texto_resposta' => 'Incentivar o consumo', 'correta' => false],
            ['id_pergunta' => 99, 'texto_resposta' => 'Prevenir o início do uso entre jovens', 'correta' => true],
            ['id_pergunta' => 99, 'texto_resposta' => 'Divulgar novos modelos', 'correta' => false],
            ['id_pergunta' => 99, 'texto_resposta' => 'Estimular vendas', 'correta' => false],
        ]);

        // Respostas Pergunta 100
        DB::table('respostas')->insert([
            ['id_pergunta' => 100, 'texto_resposta' => 'Vape é seguro para todos', 'correta' => false],
            ['id_pergunta' => 100, 'texto_resposta' => 'É isento de riscos', 'correta' => false],
            ['id_pergunta' => 100, 'texto_resposta' => 'O vape não é seguro e pode causar dependência e doenças graves', 'correta' => true],
            ['id_pergunta' => 100, 'texto_resposta' => 'Pode substituir o ar puro', 'correta' => false],
        ]);
    }
}
