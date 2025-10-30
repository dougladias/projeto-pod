<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizQuestionOption;
use App\Models\QuizCorrectAnswer;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Criar Categorias
        $categoriaComponentes = Category::create([
            'name' => 'Componentes do Vape',
            'slug' => 'componentes-vape',
            'description' => 'Aprenda sobre os componentes e funcionamento dos dispositivos de vaping',
        ]);

        $categoriaSaude = Category::create([
            'name' => 'Riscos à Saúde',
            'slug' => 'riscos-saude',
            'description' => 'Conheça os riscos e impactos do vaping na saúde',
        ]);

        $categoriaPrevencao = Category::create([
            'name' => 'Prevenção',
            'slug' => 'prevencao',
            'description' => 'Métodos de prevenção e conscientização sobre o vaping',
        ]);

        // Quiz 1: Componentes do Vape
        $quiz1 = Quiz::create([
            'category_id' => $categoriaComponentes->id,
            'title' => 'Componentes do Vape',
            'description' => 'Teste seus conhecimentos sobre as partes que compõem um dispositivo de vaping',
            'time_limit' => 15,
            'total_questions' => 20,
        ]);

        $this->createQuizQuestions($quiz1, [
            [
                'question' => 'Qual é o principal componente que aquece o líquido no vape?',
                'options' => ['Bateria', 'Resistência (coil)', 'Tanque', 'Bocal'],
                'correct' => 1,
                'explanation' => 'A resistência (coil) é o componente que aquece o e-líquido transformando-o em vapor.',
            ],
            [
                'question' => 'O que é o e-líquido usado no vape?',
                'options' => ['Água pura', 'Mistura de nicotina, glicerina e aromatizantes', 'Óleo essencial', 'Álcool'],
                'correct' => 1,
                'explanation' => 'O e-líquido é composto por nicotina, propilenoglicol, glicerina vegetal e aromatizantes.',
            ],
            [
                'question' => 'Qual componente armazena a energia no vape?',
                'options' => ['Resistência', 'Tanque', 'Bateria', 'Bocal'],
                'correct' => 2,
                'explanation' => 'A bateria fornece energia para aquecer a resistência e vaporizar o e-líquido.',
            ],
            [
                'question' => 'O que é o tanque no vape?',
                'options' => ['Onde fica a bateria', 'Reservatório do e-líquido', 'Sistema de aquecimento', 'Filtro de ar'],
                'correct' => 1,
                'explanation' => 'O tanque é o reservatório que armazena o e-líquido antes de ser vaporizado.',
            ],
            [
                'question' => 'Qual a função do bocal (drip tip)?',
                'options' => ['Aquecer o líquido', 'Armazenar nicotina', 'Servir como ponto de inalação', 'Carregar a bateria'],
                'correct' => 2,
                'explanation' => 'O bocal é a parte por onde o usuário inala o vapor produzido.',
            ],
            [
                'question' => 'O que é mod no contexto do vaping?',
                'options' => ['Tipo de sabor', 'Dispositivo que controla potência', 'Marca de vape', 'Tipo de nicotina'],
                'correct' => 1,
                'explanation' => 'Mod é o dispositivo que abriga a bateria e controla a potência enviada à resistência.',
            ],
            [
                'question' => 'Qual substância dá a sensação de "garganta" no vape?',
                'options' => ['Água', 'Glicerina', 'Nicotina', 'Açúcar'],
                'correct' => 2,
                'explanation' => 'A nicotina é responsável pela sensação de "hit" na garganta ao inalar.',
            ],
            [
                'question' => 'O que são pods descartáveis?',
                'options' => ['Vapes de uso único', 'Baterias recarregáveis', 'Líquidos especiais', 'Filtros de ar'],
                'correct' => 0,
                'explanation' => 'Pods descartáveis são dispositivos de vaping de uso único, pré-carregados e não recarregáveis.',
            ],
            [
                'question' => 'Qual componente pode ser trocado para mudar o sabor?',
                'options' => ['Bateria', 'Bocal', 'Resistência e e-líquido', 'Cabo USB'],
                'correct' => 2,
                'explanation' => 'Trocar a resistência e o e-líquido permite mudar o sabor do vapor.',
            ],
            [
                'question' => 'O que é airflow no vape?',
                'options' => ['Tipo de bateria', 'Sistema de entrada de ar', 'Marca de líquido', 'Tipo de resistência'],
                'correct' => 1,
                'explanation' => 'Airflow é o sistema que controla a entrada de ar, afetando a densidade do vapor.',
            ],
            [
                'question' => 'Quantos miligramas de nicotina podem ter os e-líquidos comuns?',
                'options' => ['0 a 50mg', '100 a 200mg', '500mg ou mais', 'Sempre 0mg'],
                'correct' => 0,
                'explanation' => 'E-líquidos comuns variam de 0mg (sem nicotina) até 50mg de nicotina por ml.',
            ],
            [
                'question' => 'O que é MTL no vaping?',
                'options' => ['Marca de vape', 'Mouth-to-Lung (boca-pulmão)', 'Tipo de bateria', 'Sabor mentolado'],
                'correct' => 1,
                'explanation' => 'MTL é um estilo de inalação onde o vapor primeiro vai à boca e depois ao pulmão.',
            ],
            [
                'question' => 'O que pode acontecer se a resistência queimar?',
                'options' => ['Melhora o sabor', 'Vapor com gosto queimado', 'Aumenta a bateria', 'Nada'],
                'correct' => 1,
                'explanation' => 'Uma resistência queimada produz um vapor com gosto desagradável e queimado.',
            ],
            [
                'question' => 'Qual o principal risco de usar vapes com bateria danificada?',
                'options' => ['Perder o sabor', 'Explosão ou incêndio', 'Gastar mais líquido', 'Não produzir vapor'],
                'correct' => 1,
                'explanation' => 'Baterias danificadas podem superaquecer, explodir ou pegar fogo.',
            ],
            [
                'question' => 'O que é VG no e-líquido?',
                'options' => ['Vitamina G', 'Glicerina Vegetal', 'Vapor Gelado', 'Vape Gold'],
                'correct' => 1,
                'explanation' => 'VG (Glicerina Vegetal) é um dos componentes base do e-líquido, responsável pela produção de vapor denso.',
            ],
            [
                'question' => 'O que é PG no e-líquido?',
                'options' => ['Propilenoglicol', 'Proteína G', 'Potência Grande', 'Pó de Gelo'],
                'correct' => 0,
                'explanation' => 'PG (Propilenoglicol) é outro componente base que carrega o sabor e dá o "hit" na garganta.',
            ],
            [
                'question' => 'Qual o risco de e-líquidos com sabores atrativos?',
                'options' => ['Nenhum', 'Atrair crianças e adolescentes', 'Melhorar a saúde', 'Durar menos'],
                'correct' => 1,
                'explanation' => 'Sabores doces e frutados tornam o vaping mais atrativo para jovens, aumentando o risco de dependência.',
            ],
            [
                'question' => 'O que são sais de nicotina?',
                'options' => ['Tempero para comida', 'Forma de nicotina de absorção rápida', 'Tipo de bateria', 'Cristais decorativos'],
                'correct' => 1,
                'explanation' => 'Sais de nicotina são uma forma química que permite maior concentração e absorção mais rápida.',
            ],
            [
                'question' => 'Por que vapes são considerados perigosos para jovens?',
                'options' => ['São caros', 'Nicotina afeta desenvolvimento cerebral', 'Pesam muito', 'Não têm cores'],
                'correct' => 1,
                'explanation' => 'A nicotina prejudica o desenvolvimento do cérebro adolescente, afetando memória e atenção.',
            ],
            [
                'question' => 'O que acontece quando o tanque fica vazio?',
                'options' => ['Melhora o sabor', 'Resistência pode queimar (dry hit)', 'Produz mais vapor', 'Bateria dura mais'],
                'correct' => 1,
                'explanation' => 'Vaping sem líquido queima a resistência (dry hit), causando gosto ruim e danificando o dispositivo.',
            ],
        ]);

        // Quiz 2: Riscos à Saúde
        $quiz2 = Quiz::create([
            'category_id' => $categoriaSaude->id,
            'title' => 'Riscos à Saúde do Vaping',
            'description' => 'Entenda os impactos do vaping no organismo e na saúde',
            'time_limit' => 20,
            'total_questions' => 20,
        ]);

        $this->createQuizQuestions($quiz2, [
            [
                'question' => 'Qual substância viciante está presente na maioria dos vapes?',
                'options' => ['Cafeína', 'Nicotina', 'Açúcar', 'Vitamina E'],
                'correct' => 1,
                'explanation' => 'A nicotina é a principal substância viciante presente nos e-líquidos.',
            ],
            [
                'question' => 'O vaping pode causar problemas respiratórios?',
                'options' => ['Não', 'Sim, incluindo danos pulmonares', 'Só em idosos', 'Só se fumar cigarro também'],
                'correct' => 1,
                'explanation' => 'O vaping pode causar danos pulmonares, inflamação e doenças respiratórias.',
            ],
            [
                'question' => 'Como a nicotina afeta o cérebro adolescente?',
                'options' => ['Melhora memória', 'Prejudica desenvolvimento cerebral', 'Não afeta', 'Aumenta inteligência'],
                'correct' => 1,
                'explanation' => 'A nicotina interfere no desenvolvimento cerebral de adolescentes, afetando aprendizado e memória.',
            ],
            [
                'question' => 'Qual doença pulmonar está associada ao vaping?',
                'options' => ['EVALI', 'Catapora', 'Dengue', 'Gripe'],
                'correct' => 0,
                'explanation' => 'EVALI (lesão pulmonar associada ao uso de produtos de vaping) é uma condição séria ligada ao vaping.',
            ],
            [
                'question' => 'O vapor do vape contém partículas prejudiciais?',
                'options' => ['Não, é só água', 'Sim, metais pesados e químicos', 'Só vitaminas', 'Só ar'],
                'correct' => 1,
                'explanation' => 'O vapor contém partículas ultrafinas, metais pesados (níquel, chumbo) e compostos químicos nocivos.',
            ],
            [
                'question' => 'Vaping pode causar dependência?',
                'options' => ['Não', 'Sim, devido à nicotina', 'Só em adultos', 'Só com sabor menta'],
                'correct' => 1,
                'explanation' => 'A nicotina no vape é altamente viciante e pode causar dependência rapidamente.',
            ],
            [
                'question' => 'Qual órgão é mais afetado pelo vaping?',
                'options' => ['Estômago', 'Pulmões', 'Fígado', 'Rins'],
                'correct' => 1,
                'explanation' => 'Os pulmões são os mais afetados, sofrendo inflamação, danos e redução de capacidade.',
            ],
            [
                'question' => 'Vaping aumenta o risco de doenças cardíacas?',
                'options' => ['Não', 'Sim', 'Só em fumantes', 'Só acima de 60 anos'],
                'correct' => 1,
                'explanation' => 'A nicotina aumenta pressão arterial e frequência cardíaca, elevando risco de doenças cardiovasculares.',
            ],
            [
                'question' => 'O que é popcorn lung?',
                'options' => ['Sabor de pipoca', 'Doença pulmonar grave', 'Tipo de vape', 'Marca de líquido'],
                'correct' => 1,
                'explanation' => 'Popcorn lung (bronquiolite obliterante) é uma doença pulmonar grave causada por diacetil presente em alguns e-líquidos.',
            ],
            [
                'question' => 'Gestantes podem usar vape sem riscos?',
                'options' => ['Sim', 'Não, prejudica o feto', 'Só com sabor menta', 'Só sem nicotina'],
                'correct' => 1,
                'explanation' => 'A nicotina no vape prejudica o desenvolvimento fetal, causando baixo peso e problemas cognitivos.',
            ],
            [
                'question' => 'Qual sintoma é comum em usuários de vape?',
                'options' => ['Tosse', 'Visão melhorada', 'Maior apetite', 'Crescimento capilar'],
                'correct' => 0,
                'explanation' => 'Tosse crônica é um sintoma comum causado pela irritação das vias respiratórias.',
            ],
            [
                'question' => 'Vaping pode afetar a saúde bucal?',
                'options' => ['Não', 'Sim, causa gengivite e cáries', 'Melhora os dentes', 'Só com sabor menta'],
                'correct' => 1,
                'explanation' => 'O vaping causa ressecamento bucal, gengivite, cáries e risco de câncer oral.',
            ],
            [
                'question' => 'Adolescentes que usam vape têm maior chance de:',
                'options' => ['Melhorar notas', 'Fumar cigarro tradicional', 'Praticar esportes', 'Ser mais saudáveis'],
                'correct' => 1,
                'explanation' => 'Estudos mostram que adolescentes que usam vape têm mais chance de migrar para o cigarro tradicional.',
            ],
            [
                'question' => 'O vapor do vape é prejudicial para quem está ao redor?',
                'options' => ['Não', 'Sim, vapor passivo é nocivo', 'Só em ambientes fechados', 'Só para crianças'],
                'correct' => 1,
                'explanation' => 'O vapor passivo contém nicotina e partículas nocivas que afetam quem está ao redor.',
            ],
            [
                'question' => 'Qual metal pesado pode ser encontrado no vapor do vape?',
                'options' => ['Ouro', 'Chumbo', 'Prata', 'Bronze'],
                'correct' => 1,
                'explanation' => 'Chumbo, níquel e cromo podem ser liberados no vapor devido ao aquecimento da resistência metálica.',
            ],
            [
                'question' => 'Vaping pode causar ansiedade?',
                'options' => ['Não', 'Sim, devido à nicotina', 'Só em idosos', 'Só com sabor frutas'],
                'correct' => 1,
                'explanation' => 'A nicotina afeta neurotransmissores, podendo causar e agravar ansiedade e depressão.',
            ],
            [
                'question' => 'Qual a principal diferença entre vape e cigarro tradicional?',
                'options' => ['Vape é 100% seguro', 'Vape não tem combustão, mas tem nicotina', 'Cigarro é mais saudável', 'Não há diferença'],
                'correct' => 1,
                'explanation' => 'Vapes não envolvem combustão, mas ainda entregam nicotina e substâncias nocivas.',
            ],
            [
                'question' => 'Quanto tempo leva para criar dependência de nicotina via vape?',
                'options' => ['Anos', 'Meses', 'Semanas ou até dias', 'Nunca cria dependência'],
                'correct' => 2,
                'explanation' => 'A dependência pode se desenvolver rapidamente, em questão de semanas ou até dias de uso regular.',
            ],
            [
                'question' => 'Vaping pode prejudicar o sistema imunológico?',
                'options' => ['Não', 'Sim', 'Só em fumantes', 'Só acima de 50 anos'],
                'correct' => 1,
                'explanation' => 'O vaping compromete o sistema imunológico, tornando o corpo mais vulnerável a infecções.',
            ],
            [
                'question' => 'Qual a idade mínima legal para comprar vapes no Brasil?',
                'options' => ['16 anos', '18 anos', '21 anos', 'Venda proibida pela ANVISA'],
                'correct' => 3,
                'explanation' => 'A venda de vapes é PROIBIDA no Brasil desde 2009 pela ANVISA, mas ainda ocorre ilegalmente.',
            ],
        ]);

        // Quiz 3: Prevenção e Conscientização
        $quiz3 = Quiz::create([
            'category_id' => $categoriaPrevencao->id,
            'title' => 'Prevenção ao Vaping',
            'description' => 'Aprenda sobre prevenção e alternativas ao uso de vapes',
            'time_limit' => 15,
            'total_questions' => 20,
        ]);

        $this->createQuizQuestions($quiz3, [
            [
                'question' => 'Qual é uma forma eficaz de prevenir o início do vaping?',
                'options' => ['Ignorar o assunto', 'Educação e conscientização', 'Facilitar o acesso', 'Oferecer sabores'],
                'correct' => 1,
                'explanation' => 'Educação sobre os riscos é fundamental para prevenir o início do uso de vapes.',
            ],
            [
                'question' => 'O que deve fazer alguém que quer parar de usar vape?',
                'options' => ['Parar sozinho', 'Buscar apoio profissional', 'Aumentar o uso', 'Trocar por cigarro'],
                'correct' => 1,
                'explanation' => 'Buscar ajuda médica e psicológica aumenta as chances de sucesso ao parar.',
            ],
            [
                'question' => 'Qual estratégia ajuda a resistir à pressão social para vaping?',
                'options' => ['Ceder à pressão', 'Dizer não com firmeza', 'Fingir usar', 'Isolar-se'],
                'correct' => 1,
                'explanation' => 'Desenvolver assertividade e saber dizer não é crucial para resistir à pressão dos pares.',
            ],
            [
                'question' => 'Atividades físicas podem ajudar a evitar o vaping?',
                'options' => ['Não', 'Sim, reduzem ansiedade', 'Só natação', 'Só musculação'],
                'correct' => 1,
                'explanation' => 'Exercícios físicos liberam endorfina, reduzindo ansiedade e a vontade de usar substâncias.',
            ],
            [
                'question' => 'Qual o papel da família na prevenção ao vaping?',
                'options' => ['Nenhum', 'Diálogo aberto e apoio', 'Punir sempre', 'Ignorar o tema'],
                'correct' => 1,
                'explanation' => 'Diálogo franco e apoio familiar são essenciais na prevenção ao uso de vapes.',
            ],
            [
                'question' => 'Escolas podem ajudar na prevenção ao vaping?',
                'options' => ['Não', 'Sim, com programas educativos', 'Só com punições', 'Oferecendo vapes'],
                'correct' => 1,
                'explanation' => 'Programas escolares de conscientização são eficazes na prevenção ao vaping entre jovens.',
            ],
            [
                'question' => 'Qual órgão brasileiro proíbe a venda de vapes?',
                'options' => ['IBGE', 'ANVISA', 'INSS', 'DETRAN'],
                'correct' => 1,
                'explanation' => 'A ANVISA (Agência Nacional de Vigilância Sanitária) proíbe a venda de vapes no Brasil desde 2009.',
            ],
            [
                'question' => 'O que é importante saber sobre influenciadores que promovem vapes?',
                'options' => ['Sempre dizem a verdade', 'Podem estar sendo pagos', 'São médicos', 'São cientistas'],
                'correct' => 1,
                'explanation' => 'Muitos influenciadores recebem patrocínio de marcas de vape para promover o produto.',
            ],
            [
                'question' => 'Qual alternativa saudável ao vaping para lidar com estresse?',
                'options' => ['Fumar cigarro', 'Meditação e exercícios', 'Beber álcool', 'Comer muito'],
                'correct' => 1,
                'explanation' => 'Meditação, exercícios e hobbies saudáveis são alternativas eficazes para gerenciar estresse.',
            ],
            [
                'question' => 'Por que é importante denunciar a venda ilegal de vapes?',
                'options' => ['Não é importante', 'Protege jovens e cumpre a lei', 'Para ganhar dinheiro', 'Para irritar vendedores'],
                'correct' => 1,
                'explanation' => 'Denunciar vendas ilegais protege jovens e ajuda a cumprir a legislação sanitária.',
            ],
            [
                'question' => 'Qual sintoma pode indicar dependência de nicotina?',
                'options' => ['Felicidade', 'Irritabilidade ao ficar sem', 'Maior energia', 'Melhor humor'],
                'correct' => 1,
                'explanation' => 'Irritabilidade, ansiedade e fissura ao ficar sem nicotina indicam dependência.',
            ],
            [
                'question' => 'O que são gatilhos no contexto do vaping?',
                'options' => ['Partes do vape', 'Situações que aumentam vontade de usar', 'Botões do dispositivo', 'Sabores'],
                'correct' => 1,
                'explanation' => 'Gatilhos são situações, emoções ou locais que despertam a vontade de usar vape.',
            ],
            [
                'question' => 'Como identificar sinais de uso de vape em adolescentes?',
                'options' => ['Impossível', 'Tosse, odores doces, dispositivos escondidos', 'Melhor desempenho escolar', 'Maior apetite'],
                'correct' => 1,
                'explanation' => 'Tosse persistente, odores adocicados nas roupas e dispositivos escondidos são sinais comuns.',
            ],
            [
                'question' => 'Qual abordagem é mais eficaz para falar com jovens sobre vaping?',
                'options' => ['Gritar', 'Diálogo respeitoso e informativo', 'Ameaças', 'Ignorar'],
                'correct' => 1,
                'explanation' => 'Conversas abertas, respeitosas e baseadas em fatos são mais eficazes que ameaças.',
            ],
            [
                'question' => 'Qual o impacto das redes sociais na popularização do vaping?',
                'options' => ['Nenhum', 'Normalizam e glamourizam o uso', 'Ajudam a prevenir', 'São neutras'],
                'correct' => 1,
                'explanation' => 'Redes sociais frequentemente mostram vaping de forma atraente, influenciando jovens.',
            ],
            [
                'question' => 'O que é importante ao ajudar alguém a parar de vaping?',
                'options' => ['Criticar sempre', 'Oferecer apoio sem julgamento', 'Ignorar a pessoa', 'Forçar parada imediata'],
                'correct' => 1,
                'explanation' => 'Apoio empático e sem julgamento aumenta as chances de a pessoa buscar ajuda e parar.',
            ],
            [
                'question' => 'Grupos de apoio podem ajudar na cessação do vaping?',
                'options' => ['Não', 'Sim', 'Só para idosos', 'Só para fumantes'],
                'correct' => 1,
                'explanation' => 'Grupos de apoio oferecem suporte emocional e estratégias eficazes para parar.',
            ],
            [
                'question' => 'Qual é o primeiro passo para parar de usar vape?',
                'options' => ['Comprar mais vapes', 'Reconhecer o problema', 'Trocar de sabor', 'Aumentar a dose'],
                'correct' => 1,
                'explanation' => 'Reconhecer que há um problema e desejar mudança é o primeiro passo essencial.',
            ],
            [
                'question' => 'Como lidar com fissura após parar de vaping?',
                'options' => ['Voltar a usar', 'Distrair-se e usar técnicas de relaxamento', 'Fumar cigarro', 'Comer muito'],
                'correct' => 1,
                'explanation' => 'Técnicas de relaxamento, distração e apoio ajudam a superar momentos de fissura.',
            ],
            [
                'question' => 'Qual mensagem é importante passar sobre vaping?',
                'options' => ['É seguro', 'Não é inofensivo e pode viciar', 'Todos devem experimentar', 'É só vapor de água'],
                'correct' => 1,
                'explanation' => 'É crucial desmistificar que vaping é seguro e conscientizar sobre riscos e dependência.',
            ],
        ]);

        // Quiz 4: Mitos e Verdades
        $quiz4 = Quiz::create([
            'category_id' => $categoriaPrevencao->id,
            'title' => 'Mitos e Verdades sobre Vaping',
            'description' => 'Descubra o que é mito e o que é verdade sobre os cigarros eletrônicos',
            'time_limit' => 18,
            'total_questions' => 20,
        ]);

        $this->createQuizQuestions($quiz4, [
            [
                'question' => 'Vaping é 100% seguro porque é só vapor de água?',
                'options' => ['Verdade', 'Mito - contém substâncias nocivas', 'Verdade apenas para menores de idade', 'Depende do sabor'],
                'correct' => 1,
                'explanation' => 'MITO. O vapor contém nicotina, metais pesados e compostos químicos prejudiciais.',
            ],
            [
                'question' => 'Vapes ajudam a parar de fumar cigarro?',
                'options' => ['Sempre', 'Não há evidência conclusiva', 'Só com sabor menta', 'Apenas para idosos'],
                'correct' => 1,
                'explanation' => 'Não há evidência científica conclusiva de que vapes são eficazes para cessação do tabagismo.',
            ],
            [
                'question' => 'Vaping não causa dependência?',
                'options' => ['Verdade', 'Mito - a nicotina é altamente viciante', 'Verdade se usar pouco', 'Depende da marca'],
                'correct' => 1,
                'explanation' => 'MITO. A nicotina nos vapes é tão viciante quanto no cigarro tradicional.',
            ],
            [
                'question' => 'Vapes sem nicotina são completamente seguros?',
                'options' => ['Verdade', 'Mito - ainda têm substâncias nocivas', 'Verdade para crianças', 'Verdade se orgânico'],
                'correct' => 1,
                'explanation' => 'MITO. Mesmo sem nicotina, o vapor contém químicos prejudiciais aos pulmões.',
            ],
            [
                'question' => 'É possível ter overdose de nicotina usando vape?',
                'options' => ['Impossível', 'Verdade - especialmente com líquidos concentrados', 'Só com cigarro', 'Só se ingerir o líquido'],
                'correct' => 1,
                'explanation' => 'VERDADE. Altas concentrações de nicotina podem causar intoxicação grave.',
            ],
            [
                'question' => 'Vaping não prejudica quem está ao redor?',
                'options' => ['Verdade', 'Mito - vapor passivo é nocivo', 'Verdade ao ar livre', 'Verdade se com sabor'],
                'correct' => 1,
                'explanation' => 'MITO. O vapor passivo contém nicotina e partículas que afetam a saúde alheia.',
            ],
            [
                'question' => 'Todos os vapes são regulamentados e seguros?',
                'options' => ['Verdade', 'Mito - muitos são ilegais e sem controle', 'Verdade no Brasil', 'Verdade se importados'],
                'correct' => 1,
                'explanation' => 'MITO. No Brasil a venda é proibida; vapes vendidos ilegalmente não têm controle de qualidade.',
            ],
            [
                'question' => 'Vaping pode explodir?',
                'options' => ['Impossível', 'Verdade - baterias podem explodir', 'Só se molhar', 'Só em aviões'],
                'correct' => 1,
                'explanation' => 'VERDADE. Baterias defeituosas ou mal utilizadas podem superaquecer e explodir.',
            ],
            [
                'question' => 'Vapes são uma alternativa saudável ao cigarro?',
                'options' => ['Verdade', 'Mito - ambos são prejudiciais', 'Verdade se orgânico', 'Verdade com moderação'],
                'correct' => 1,
                'explanation' => 'MITO. Vapes não são alternativas saudáveis; ainda causam danos à saúde.',
            ],
            [
                'question' => 'Crianças podem ingerir acidentalmente e-líquido?',
                'options' => ['Impossível', 'Verdade - é um risco grave', 'Só se deixar aberto', 'Líquido é amargo, evita ingestão'],
                'correct' => 1,
                'explanation' => 'VERDADE. E-líquidos com sabores doces atraem crianças; ingestão pode ser fatal.',
            ],
            [
                'question' => 'Vaping melhora o desempenho atlético?',
                'options' => ['Verdade', 'Mito - prejudica capacidade respiratória', 'Verdade se com sabor menta', 'Verdade antes de treinar'],
                'correct' => 1,
                'explanation' => 'MITO. Vaping prejudica a função pulmonar e reduz capacidade atlética.',
            ],
            [
                'question' => 'É fácil esconder o uso de vape dos pais?',
                'options' => ['Impossível', 'Verdade - mas há sinais detectáveis', 'Verdade sem sabor', 'Verdade com vape pequeno'],
                'correct' => 1,
                'explanation' => 'Embora alguns tentem esconder, há sinais como tosse, odores e dispositivos escondidos.',
            ],
            [
                'question' => 'Vaping é uma moda passageira?',
                'options' => ['Verdade', 'Mito - pode criar dependência duradoura', 'Verdade após 6 meses', 'Verdade se experimentar uma vez'],
                'correct' => 1,
                'explanation' => 'MITO. A dependência de nicotina pode durar anos e ser difícil de superar.',
            ],
            [
                'question' => 'Vapes são mais baratos que cigarros?',
                'options' => ['Sempre', 'Depende - custo acumulado é alto', 'Verdade só no início', 'Verdade se caseiro'],
                'correct' => 1,
                'explanation' => 'No longo prazo, o custo com vapes e recargas pode ser tão alto ou maior que cigarros.',
            ],
            [
                'question' => 'Vaping não mancha os dentes?',
                'options' => ['Verdade', 'Mito - pode manchar e causar cáries', 'Verdade com escova', 'Verdade sem nicotina'],
                'correct' => 1,
                'explanation' => 'MITO. A nicotina e outros compostos podem manchar dentes e causar problemas bucais.',
            ],
            [
                'question' => 'Celebridades usam vapes, então é seguro?',
                'options' => ['Verdade', 'Mito - influência não equivale a segurança', 'Verdade se for famoso', 'Verdade em eventos'],
                'correct' => 1,
                'explanation' => 'MITO. O fato de celebridades usarem não torna o vaping seguro ou recomendável.',
            ],
            [
                'question' => 'Vaping ajuda a controlar o peso?',
                'options' => ['Verdade', 'Mito - não é método seguro de controle de peso', 'Verdade com sabor frutas', 'Verdade sem nicotina'],
                'correct' => 1,
                'explanation' => 'MITO. Usar vaping para controlar peso é perigoso e ineficaz.',
            ],
            [
                'question' => 'É possível usar vape em qualquer lugar?',
                'options' => ['Verdade', 'Mito - há restrições legais', 'Verdade ao ar livre', 'Verdade se ninguém ver'],
                'correct' => 1,
                'explanation' => 'MITO. Muitos locais proíbem vaping, assim como cigarros tradicionais.',
            ],
            [
                'question' => 'Vaping não afeta o paladar e olfato?',
                'options' => ['Verdade', 'Mito - pode reduzir sensibilidade', 'Verdade com sabor', 'Verdade por pouco tempo'],
                'correct' => 1,
                'explanation' => 'MITO. O uso de vape pode diminuir a sensibilidade do paladar e olfato.',
            ],
            [
                'question' => 'Parar de usar vape é fácil?',
                'options' => ['Verdade', 'Mito - dependência dificulta', 'Verdade após uma semana', 'Verdade se usar pouco'],
                'correct' => 1,
                'explanation' => 'MITO. A dependência de nicotina torna difícil parar; muitos precisam de ajuda profissional.',
            ],
        ]);

        // Quiz 5: Legislação e Sociedade
        $quiz5 = Quiz::create([
            'category_id' => $categoriaPrevencao->id,
            'title' => 'Vaping: Legislação e Impacto Social',
            'description' => 'Conheça as leis e o impacto do vaping na sociedade',
            'time_limit' => 15,
            'total_questions' => 20,
        ]);

        $this->createQuizQuestions($quiz5, [
            [
                'question' => 'Desde quando a venda de vapes é proibida no Brasil?',
                'options' => ['2015', '2009', '2020', 'Nunca foi proibida'],
                'correct' => 1,
                'explanation' => 'A ANVISA proibiu a comercialização de cigarros eletrônicos no Brasil em 2009.',
            ],
            [
                'question' => 'Por que a ANVISA proibiu vapes no Brasil?',
                'options' => ['Falta de evidência de segurança', 'São caros', 'Por impostos', 'Pressão de tabacarias'],
                'correct' => 0,
                'explanation' => 'A proibição se baseia na falta de comprovação de segurança e nos riscos à saúde.',
            ],
            [
                'question' => 'É legal importar vapes para uso pessoal no Brasil?',
                'options' => ['Sim', 'Não', 'Sim com receita', 'Depende da quantidade'],
                'correct' => 1,
                'explanation' => 'A importação de vapes para qualquer finalidade é proibida pela legislação brasileira.',
            ],
            [
                'question' => 'Qual a punição para quem vende vapes ilegalmente?',
                'options' => ['Nenhuma', 'Multa e apreensão de produtos', 'Apenas advertência', 'Prisão automática'],
                'correct' => 1,
                'explanation' => 'Vendas ilegais podem resultar em multas, apreensão de produtos e outras sanções legais.',
            ],
            [
                'question' => 'Escolas podem proibir vapes em suas dependências?',
                'options' => ['Não', 'Sim', 'Só durante aulas', 'Só para menores de 16'],
                'correct' => 1,
                'explanation' => 'Escolas têm autonomia para proibir o uso de vapes, protegendo a saúde dos estudantes.',
            ],
            [
                'question' => 'Qual o papel das redes sociais na fiscalização de vapes?',
                'options' => ['Nenhum', 'Devem remover publicidade ilegal', 'Promover vendas', 'Facilitar importação'],
                'correct' => 1,
                'explanation' => 'Redes sociais devem colaborar removendo anúncios e vendas ilegais de vapes.',
            ],
            [
                'question' => 'Vaping em ambientes fechados pode ser proibido?',
                'options' => ['Não', 'Sim, como cigarro tradicional', 'Só em hospitais', 'Só em escolas'],
                'correct' => 1,
                'explanation' => 'Leis antitabaco se aplicam também a vapes em muitos locais públicos.',
            ],
            [
                'question' => 'Qual o impacto econômico do mercado ilegal de vapes?',
                'options' => ['Nenhum', 'Perda de arrecadação e falta de controle', 'Aumenta empregos', 'Melhora economia'],
                'correct' => 1,
                'explanation' => 'O mercado ilegal gera perda de arrecadação fiscal e produtos sem controle de qualidade.',
            ],
            [
                'question' => 'Qual a responsabilidade dos influenciadores que promovem vapes?',
                'options' => ['Nenhuma', 'Ética e legal de não promover produto ilegal', 'Apenas lucrar', 'Aumentar seguidores'],
                'correct' => 1,
                'explanation' => 'Influenciadores têm responsabilidade ética e legal de não promover produtos proibidos.',
            ],
            [
                'question' => 'Como denunciar a venda ilegal de vapes?',
                'options' => ['Impossível', 'Vigilância Sanitária ou ANVISA', 'Redes sociais', 'Não precisa denunciar'],
                'correct' => 1,
                'explanation' => 'Denúncias podem ser feitas à Vigilância Sanitária local ou à ANVISA.',
            ],
            [
                'question' => 'Qual o impacto do vaping no sistema de saúde?',
                'options' => ['Nenhum', 'Aumento de custos com tratamentos', 'Reduz custos', 'Melhora sistema'],
                'correct' => 1,
                'explanation' => 'O vaping gera custos com tratamento de doenças respiratórias e dependência.',
            ],
            [
                'question' => 'Empresas podem proibir vaping no local de trabalho?',
                'options' => ['Não', 'Sim', 'Só ao ar livre', 'Só para cargos específicos'],
                'correct' => 1,
                'explanation' => 'Empresas têm autonomia para proibir vaping, protegendo a saúde dos funcionários.',
            ],
            [
                'question' => 'Qual a importância de campanhas educativas sobre vaping?',
                'options' => ['Nenhuma', 'Prevenir uso e conscientizar riscos', 'Promover vendas', 'Confundir população'],
                'correct' => 1,
                'explanation' => 'Campanhas educativas são essenciais para prevenir uso, especialmente entre jovens.',
            ],
            [
                'question' => 'Como a indústria do tabaco está relacionada aos vapes?',
                'options' => ['Não há relação', 'Muitas marcas são da indústria tabagista', 'São concorrentes', 'Odeiam vapes'],
                'correct' => 1,
                'explanation' => 'Grandes empresas de tabaco investem em marcas de vapes para manter lucros.',
            ],
            [
                'question' => 'Vapes são considerados dispositivos médicos?',
                'options' => ['Sim', 'Não', 'Só com receita', 'Só para tratamento'],
                'correct' => 1,
                'explanation' => 'Vapes não são reconhecidos como dispositivos médicos para cessação do tabagismo.',
            ],
            [
                'question' => 'Qual o papel da OMS em relação ao vaping?',
                'options' => ['Promove uso', 'Alerta sobre riscos', 'Vende vapes', 'Ignora o tema'],
                'correct' => 1,
                'explanation' => 'A OMS alerta sobre os riscos do vaping e recomenda regulamentação rigorosa.',
            ],
            [
                'question' => 'Pais podem ser responsabilizados se menores usam vapes?',
                'options' => ['Não', 'Sim, em certos casos', 'Só se venderem', 'Nunca'],
                'correct' => 1,
                'explanation' => 'Pais podem ser responsabilizados por negligência se não fiscalizarem o uso de substâncias pelos filhos.',
            ],
            [
                'question' => 'Qual a importância de envolver a comunidade na prevenção?',
                'options' => ['Nenhuma', 'Esforço coletivo é mais eficaz', 'Atrapalha', 'Só governo deve atuar'],
                'correct' => 1,
                'explanation' => 'Envolver escolas, famílias e comunidade torna a prevenção mais abrangente e eficaz.',
            ],
            [
                'question' => 'Vaping entre jovens é considerado epidemia?',
                'options' => ['Não', 'Sim, por autoridades de saúde', 'Só nos EUA', 'Só em países ricos'],
                'correct' => 1,
                'explanation' => 'O uso crescente de vapes entre jovens é considerado epidêmico por órgãos de saúde.',
            ],
            [
                'question' => 'Qual a mensagem principal sobre vaping e sociedade?',
                'options' => ['É tendência', 'Proteção coletiva à saúde', 'Liberdade individual', 'Modernidade'],
                'correct' => 1,
                'explanation' => 'A prioridade deve ser proteger a saúde pública, especialmente de jovens e crianças.',
            ],
        ]);

        // Quiz 6: Química e Composição
        $quiz6 = Quiz::create([
            'category_id' => $categoriaComponentes->id,
            'title' => 'Química dos E-Líquidos',
            'description' => 'Entenda a composição química dos líquidos usados em vapes',
            'time_limit' => 18,
            'total_questions' => 20,
        ]);

        $this->createQuizQuestions($quiz6, [
            [
                'question' => 'Qual a função da glicerina vegetal (VG) no e-líquido?',
                'options' => ['Dar sabor', 'Produzir vapor denso', 'Viciar', 'Colorir'],
                'correct' => 1,
                'explanation' => 'A glicerina vegetal é responsável por produzir a quantidade de vapor visível.',
            ],
            [
                'question' => 'O que o propilenoglicol (PG) faz no e-líquido?',
                'options' => ['Produz vapor', 'Carrega sabor e dá "hit"', 'Vicia', 'Conserva'],
                'correct' => 1,
                'explanation' => 'O PG é responsável por carregar o sabor e proporcionar a sensação na garganta.',
            ],
            [
                'question' => 'Qual substância foi encontrada causando "popcorn lung"?',
                'options' => ['Nicotina', 'Diacetil', 'Água', 'Açúcar'],
                'correct' => 1,
                'explanation' => 'O diacetil, usado para dar sabor de manteiga, está associado à bronquiolite obliterante.',
            ],
            [
                'question' => 'Sais de nicotina permitem:',
                'options' => ['Maior concentração tolerável', 'Sabor melhor', 'Menos vapor', 'Cores vibrantes'],
                'correct' => 0,
                'explanation' => 'Sais de nicotina permitem concentrações mais altas com menor irritação na garganta.',
            ],
            [
                'question' => 'Qual metal pode contaminar o e-líquido pelo aquecimento?',
                'options' => ['Ouro', 'Níquel', 'Prata', 'Alumínio'],
                'correct' => 1,
                'explanation' => 'Níquel, chumbo e cromo podem ser liberados pelo aquecimento da resistência metálica.',
            ],
            [
                'question' => 'O que são aldeídos no vapor do vape?',
                'options' => ['Sabores', 'Compostos tóxicos como formaldeído', 'Vitaminas', 'Cores'],
                'correct' => 1,
                'explanation' => 'Aldeídos como formaldeído e acetaldeído são formados no aquecimento e são cancerígenos.',
            ],
            [
                'question' => 'Qual a temperatura de vaporização nos vapes?',
                'options' => ['50-100°C', '200-300°C', '500-600°C', '1000°C'],
                'correct' => 1,
                'explanation' => 'Vapes operam entre 200-300°C, temperatura que pode gerar compostos tóxicos.',
            ],
            [
                'question' => 'O que é acetato de vitamina E?',
                'options' => ['Vitamina benéfica', 'Aditivo perigoso em alguns líquidos', 'Sabor', 'Conservante seguro'],
                'correct' => 1,
                'explanation' => 'Acetato de vitamina E em vapes foi associado a casos graves de lesão pulmonar (EVALI).',
            ],
            [
                'question' => 'Aromas artificiais nos e-líquidos são seguros para inalar?',
                'options' => ['Sempre', 'Não, podem ser tóxicos ao inalar', 'Sim se doces', 'Só orgânicos'],
                'correct' => 1,
                'explanation' => 'Aromas seguros para ingestão podem ser tóxicos quando inalados nos pulmões.',
            ],
            [
                'question' => 'Qual a concentração típica de nicotina em pods descartáveis?',
                'options' => ['0mg', '50mg/ml', '200mg/ml', 'Nunca têm nicotina'],
                'correct' => 1,
                'explanation' => 'Pods descartáveis geralmente contêm altas concentrações, cerca de 50mg/ml de nicotina.',
            ],
            [
                'question' => 'Por que e-líquidos doces atraem jovens?',
                'options' => ['São saudáveis', 'Mascaram gosto da nicotina', 'Não atraem', 'São educativos'],
                'correct' => 1,
                'explanation' => 'Sabores doces mascaram o amargor da nicotina, tornando o uso mais atraente para jovens.',
            ],
            [
                'question' => 'O que acontece se e-líquido for ingerido?',
                'options' => ['Nada', 'Intoxicação grave, pode ser fatal', 'Faz bem', 'Melhora digestão'],
                'correct' => 1,
                'explanation' => 'A ingestão de e-líquido, especialmente por crianças, pode causar intoxicação grave e até morte.',
            ],
            [
                'question' => 'Qual o pH típico dos e-líquidos?',
                'options' => ['Neutro (7)', 'Levemente ácido (5-6)', 'Muito ácido (1-2)', 'Alcalino (10-12)'],
                'correct' => 1,
                'explanation' => 'E-líquidos tendem a ser levemente ácidos, o que pode irritar as vias respiratórias.',
            ],
            [
                'question' => 'Partículas ultrafinas no vapor podem:',
                'options' => ['Fazer bem', 'Penetrar profundamente nos pulmões', 'Ser filtradas naturalmente', 'Melhorar respiração'],
                'correct' => 1,
                'explanation' => 'Partículas ultrafinas penetram profundamente nos pulmões, causando inflamação.',
            ],
            [
                'question' => 'O que é THC em alguns vapes ilegais?',
                'options' => ['Vitamina', 'Composto psicoativo da maconha', 'Sabor', 'Conservante'],
                'correct' => 1,
                'explanation' => 'THC é o composto psicoativo da maconha, presente em alguns vapes ilegais, aumentando os riscos.',
            ],
            [
                'question' => 'Por que rotulagem de e-líquidos é importante?',
                'options' => ['Decoração', 'Informar composição e riscos', 'Marketing', 'Obrigatório por lei em todo lugar'],
                'correct' => 1,
                'explanation' => 'Rotulagem adequada informa consumidores sobre ingredientes e concentrações perigosas.',
            ],
            [
                'question' => 'E-líquidos "naturais" ou "orgânicos" são seguros?',
                'options' => ['Sim', 'Não, inalação ainda é nociva', 'Só se certificados', 'Sempre'],
                'correct' => 1,
                'explanation' => 'Mesmo produtos "naturais" podem ser tóxicos quando aquecidos e inalados.',
            ],
            [
                'question' => 'Qual a validade típica de um e-líquido?',
                'options' => ['Nunca vence', '1-2 anos', '10 anos', '1 mês'],
                'correct' => 1,
                'explanation' => 'E-líquidos têm validade de 1-2 anos; após isso, podem degradar e ficar mais tóxicos.',
            ],
            [
                'question' => 'O que é oxidação no contexto dos e-líquidos?',
                'options' => ['Melhora', 'Degradação química que aumenta toxicidade', 'Sabor novo', 'Nada'],
                'correct' => 1,
                'explanation' => 'A oxidação degrada componentes do e-líquido, formando compostos potencialmente mais tóxicos.',
            ],
            [
                'question' => 'Por que controle de qualidade é crucial em e-líquidos?',
                'options' => ['Marketing', 'Evitar contaminações e concentrações perigosas', 'Estética', 'Preço'],
                'correct' => 1,
                'explanation' => 'Controle de qualidade evita contaminações (bactérias, metais) e concentrações incorretas de nicotina.',
            ],
        ]);
    }

    /**
     * Helper para criar perguntas com opções e resposta correta
     */
    private function createQuizQuestions($quiz, $questionsData)
    {
        foreach ($questionsData as $index => $data) {
            $question = QuizQuestion::create([
                'quiz_id' => $quiz->id,
                'question_text' => $data['question'],
                'question_type' => 'multiple_choice',
                'points' => 1,
                'order' => $index + 1,
            ]);

            $options = [];
            foreach ($data['options'] as $optionIndex => $optionText) {
                $option = QuizQuestionOption::create([
                    'question_id' => $question->id,
                    'option_text' => $optionText,
                    'order' => $optionIndex + 1,
                ]);
                $options[] = $option;
            }

            // Criar resposta correta
            QuizCorrectAnswer::create([
                'question_id' => $question->id,
                'correct_option_id' => $options[$data['correct']]->id,
                'explanation' => $data['explanation'] ?? null,
            ]);
        }
    }
}

