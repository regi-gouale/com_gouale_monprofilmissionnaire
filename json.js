const choices = [
    { value: 4, text: 'Tout à fait' },
    { value: 3, text: 'Assez bien' },
    { value: 2, text: 'Je ne sais pas' },
    { value: 1, text: 'Un peu' },
    { value: 0, text: 'Pas du tout' },
];

const questionType = 'radiogroup';

let profiles = {
    transformateurAmes: {
        points: 0,
        nbQuestions: 30,
        name: "Transformateur des âmes",
        description: "Le profil « missionnaire de la transformation des âmes » ne se borne pas à la conversion. Il œuvre à la construction des âmes. Il privilégie la relation d’aide, la consécration. Il veille à enseigner, à contribuer par l’assistance du Saint Esprit à la restauration des âmes. Pour lui, le chrétien doit être ferme et grandit dans la foi afin d’être un véritable témoin. Son focus premier c’est la stabilité, la construction des âmes. Son focus secondaire c’est la conquête.",
        strength: [
            "Disciple par excellence, il fait preuve d’une grande fidélité => 1 Corinthiens 4.17 « enfant bien aimé et fidèle dans le Seigneur » / 1 Timothée 1.2 « véritable enfant dans la foi » 2 Timothée 4.9 et 21.",
            "Capacité à reproduire, à comprendre et à traduire les préoccupations de son mentor => 2Timothée3.10 / Philippiens 2.20",
            "Capacité à enseigner, cherche à connaître de la Parole => 1 Timothée 1.3",
            "Intercesseur fervent en faveur des âmes => Philippiens 2.25",
            "Persévérant, faire preuve de patience dans la gestion des âmes => Philémon 1.23",
            "Faire preuve d’habileté et de savoir-faire dans la gestion des âmes=> 2 Corinthiens 8.6-16 / 1 Thessaloniciens 3.2",
            "Personnalité énergique et ferme dans ses convictions => Tite 3.12"
        ],
        weakness: [
            "A un défi lié à la timidité, il préfère rester dans l’ombre et peut avoir l’air effacé dans un groupe => 1 Corinthiens 16.10-11 / 2 Timothée 1.6-7",
            "La croissance numéraire n’est pas sa préoccupation",
            "Il peut parfois donner l'impression d'être centré sur « les âmes », plutôt que sur la mission d’expansion. ",
            "Le missionnaire « transformation des âmes » est préoccupé par la croissance des âmes, il peut volontairement ou involontairement décider de ne pas communiquer aux bonnes personnes les défis des âmes qui lui sont confiées."
        ]
    },
    manifestateurCompassion: {
        points: 0,
        nbQuestions: 25,
        name: "Manifestation de la compassion",
        description: "Le profil « missionnaire de la compassion » est celui qui manifeste la générosité. Pour lui la conquête passe par les actes de compassion. Il est orienté vers la résolution des besoins primaires des âmes. Sa stratégie de conquête repose sur la démonstration de l’amour par des actes de générosité. Ce profil considère l’église comme un lieu de refuge.",
        strength: [
            "Le premier à croire en la puissance de la résurrection, son message est fondé sur l’amour et la puissance de la croix => Jean 20",
            "Caractère mêlé de douceur, d’humilité, de paix, d’amour, de bonté => 1 Jean 2.7-11 /  2 Jean 1.10",
            "N’est pas dans le jugement (il connaissait le passé de Paul, mais n’a pas hésité à obéir à l’instruction divine), fervent partisan de la miséricorde => Actes 9.10-19",
            "Manifeste l’hospitalité. Il est même capable ouvrir sa maison aux réunions de l’église et la prière => Actes 12.12 / Actes 9.36-43",
            "Elle considère sa maison, l’église comme lieu d’asile, de refuge => Actes 12.17",
            "Témoigne de ce que le Seigneur a fait pour elle => Luc 2.8",
            "Elle soutient la mission avec ses biens => Luc 8.3 / Marc 16.1",
            "Il est ouvert à toutes les missions caritatives",
            "Il est disponible à rendre service dans le « back office » des activités d'évangélisation",
            "Il s’engage dans les missions d'écoute, de consolation, d'accompagnement."
        ],
        weakness: [
            "Peut avoir du mal à s’imposer, se faire respecter ",
            "S’attache émotionnellement aux âmes",
            "Ne pas s'enfermer dans cet unique style et s'efforcer de regarder autre chose (Marthe)",
            "Servir avec les mains de Marthe et le cœur de Marie (équilibre dans le service)"
        ]
    },
    coordinateurMission: {
        points: 0,
        nbQuestions: 26,
        name: "Coordinateur de missions",
        description: "Le profil « missionnaire coordinateur » est un profil capable de mener des stratégies efficaces de prise de territoire. Il organise les missions de terrain dans les moindres détails. Il s’assure de la bonne communication avec les parties prenantes (pasteur – champ missionnaire – équipe de la coordination…). Il surveille l’avancement des objectifs. Il suit le budget. Il documente les processus clés. Il veille à la résolution des problématiques qui empêchent l’équipe de progresser, etc. C’est un artisan dans la gestion efficace de la mission.",
        strength: [
            "Par définition, Il est plutôt quelqu’un d’analytique, de rationnel dans sa pensée",
            "Il a une capacité à exposer les choses sur la base d’une documentation poussée => Jean 1.44-46 ",
            "Capacité à être précis, méticuleux, organisé => Jean 6.7 « Philippe lui répondit : Les pains qu’on aurait pour deux cents deniers ne suffiraient pas pour que chacun en reçoive un peu. »",
            "C’est une personne qui s’attache aux faits « Viens et vois ». Il est peu bavard, discret…",
            "Il fait preuve de grandes qualités pratiques d’organisation => Jean 6.5-7",
            "C’est un facilitateur hors pair. Par exemple, les Grecs désireux de voir Jésus sont passer par Philippe Jean 12.21",
            "Il a une connaissance poussée du mode d’implantation et de fonctionnement (administratif et financier) des églises => Actes 15.40-41",
            "Il est capable de rédiger, de communiquer des instructions claires et précises => 1 Pierre 5.12 « Je vous écris par Silvain »",
            "Personnalité énergique et ferme dans ses convictions => Tite 3.12 ",
            "Il fait preuve d’une capacité décisionnelle, pragmatique et fort utile dans le ministère => 2 Timothée 4.11",
            "Il est logique, organisé, clair, intellectuel, cohérent, structuré. Il fait preuve de Sagesse divine.",
            "Il a un esprit curieux. C’est aussi un enquêteur qui recherche les arguments les plus convaincants",
            "Sa préférence dans l’évangélisation se situe donc davantage au niveau de la pensée que du cœur : ainsi, il se soucie plus de ce que les gens pensent que de ce qu’ils ressentent."
        ],
        weakness: [
            "Il peut facilement s’enfermer dans les procédures afin de ne pas élargir ses perspectives.",
            "Sa communication peut paraitre trop directive, sans explication des détails",
            "Il peut basculer vers de l’obstination, à ne pas vouloir céder ni rien lâcher ",
            "Il a tendance à se braquer ou se décourager devant les avis contraires (Il doit comprendre et accepter que le fer aiguise le fer) ",
            "Il a tendance à être sûr de ses choix et très souvent il ne tient pas compte de l’avis des autres (difficilement). Cela peut lui donner une approche arrogante et favoriser une sorte de condescendance ou de suffisance.",
            "Il peut donner l’impression d’être supérieur aux autres. ",
            "S’il met trop d’acharnement, d’insistance, à convaincre, il peut donner l'impression de manquer de respect et de ne pas écouter le cœur des autres. ",
            "Attention à l’arrogance car le fait d’organiser les choses peut laisser penser que sans lui personne n’y arrivera"
        ]
    },
    gagneurAmes: {
        points: 0,
        nbQuestions: 25,
        name: "Gagneur d'âmes",
        description: "Le profil « gagneur d’âmes » est un profil de type conquérant. Il est engagé dans la prise de territoire. Il évangélise et cherche à rassembler tous les croyants et les incroyants sous la bannière de Christ. Ce profil n’aime pas la routine. Son focus premier c’est la conquête du territoire, l’expansion et l’implantation des églises. Son focus secondaire c’est la stabilité des âmes.",
        strength: [
            "Il a tendance à s’affirmer, à être au-devant de la scène par son caractère de fonceur. Ce qui lui donne une forme d’ascendance morale dans le groupe => Actes 1.15 / Actes 2.14 / Actes 4.8 / Actes 5.29",
            "C’est un homme d’action et de terrain=> Actes11.26 / Actes 13.13 /Actes 13.14 /Actes 14.6",
            "Veut la conversion rapide des âmes => Mathieu 3.6",
            "Accorde un attachement particulier aux rituels, aux symboles, aux pratiques du jeûne, faire preuve d’une rigueur sainte => Luc 5.33",
            "Il dit les choses telles qu’il les pense / il fait usage d’un langage franc => Marc 6.17-18",
            "Pour lui, annoncer la Parole est le cœur de sa vocation => 1 Corinthiens 1.17 – 1Corinthiens 9.16-17",
            "Il n’aime pas les tergiversations, peut couper facilement les ponts avec ceux qui ne veulent pas aller de l’avant => Actes 15.39",
            "Il préfère aller là où personne n’est encore allé => 2 Corinthiens 10.16 ; Romains 15.20",
            "Obéissant - Possède le don de la foi => Luc 5.5 -8 / Jean 6.68",
            "C’est un précurseur, un ouvreur de brèche, un véritable visionnaire.",
            "Il peut être excessif par moments et forcer le trait pour faire percevoir l’enjeu des situations,",
            "Il discerne le potentiel des gens.",
            "Il est fortement ancré dans la Parole et il voit qu’elle s'accomplit. Souvent, il est touché au plus profond de lui-même et vit dans sa chair ce qu'il annonce, Parfois fragile, sensible, il peut être déstabilisé jusqu’à avoir des scrupules, ",
            "Il est alerte comme une sentinelle : il est donc très ouvert à ce qui se passe dans le monde et est toujours à l’affut des nouveautés où il sait discerner ce qui constitue des prémisses des modifications importantes, voire des dangers pour l’homme."
        ],
        weakness: [
            "A un défi lié à la confusion, au doute => Matthieu 19.27",
            "Refuse souvent d’être servi => Jean 13.6-9 (refuse à deux reprises de se faire laver les pieds)",
            "Caractère présomptueux, réagit beaucoup sous l’impulsion des émotions => Luc 22.31-34 / Jean 18.10",
            "Il fait preuve d’un détachement émotionnel. ",
            "Apprendre à écouter et comprendre les autres lui sera d’une grande aide car on ne réussit pas seule.  Il doit apprendre à rendre compte « avec humilité et respect »",
            "Il doit rester centré sur le message recommandé.",
            "Avoir une attitude humble, ne pas tomber dans l'arrogance ou la supériorité, Développer l'aspect relationnel pour compenser le volet-enseignant : illustrer par ses propos avec des faits vécus.",
            "Le missionnaire « gagneur d’âme » est préoccupé par l’urgence de mettre en garde. Il peut s'attacher davantage à dénoncer les choses qu'à annoncer réellement l’Evangile.",
            "Il peut parfois donner l'impression d'être centré sur « la mission », plutôt que sur les âmes.",
            "Doit apprendre à déléguer et à s'appuyer sur le discernement de personnes bienveillantes placées autour de lui.",
            "Doit- être patient dans son rapport avec les autres (Paul et Marc)",
            "Doit avoir un langage d’encouragement plus que motivationnel",
            "Doit prendre le temps de laisser les personnes comprendre ce qu’il a compris (Apprendre à ne pas s’étonner de ce que beaucoup ne perçoivent pas ce qu’il voit comme une évidence : il doit donc travailler à être pédagogue et aider son auditoire à comprendre pourquoi il dit ceci ou cela, Garder comme priorité d’attester du Salut, certes après avoir dénoncé le péché si nécessaire)"
        ]
    },
}

let profileTypes = {
    itinerant: {
        points: 0,
        nbQuestions: 5,
    },
    sedentaire: {
        points: 0,
        nbQuestions: 5,
    },
}


const firstPage = {
    elements: [{
        type: 'html',
        html: 'Veuillez répondre aux questions suivantes en vous basant sur votre expérience personnelle. <br/> <br/> <b>Attention:</b> Vous aurez 15 secondes pour répondre à chaque question.'
    }, {
        type: 'text',
        name: 'username',
        title: { fr: 'Vos prénoms et nom' },
        isRequired: true,
    }, {
        type: 'text',
        name: 'email',
        title: { fr: 'Votre adresse email' },
        isRequired: true,
        validators: [{
            type: 'email',
        }],
    }],
};

const questions = [
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-1',
            title: { fr: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.' },
            isRequired: true,
            choices: choices,
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-2',
            title: { fr: 'Lorsque je participe à une évangélisation, il n\'est pas rare que je sois témoin de "signes et prodiges" de Dieu dans la vie de ceux qui sont présents.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-3',
            title: { fr: 'Lorsque je me retrouve "seul contre tous", je me sens particulièrement stimulé dans l\'évangélisation.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-4',
            title: { fr: 'Quand j\'évangélise, je suis saisi, voire enflammé, je m\'exprime avec enthousiasme.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-5',
            title: { fr: 'Dans l\'évangélisation, je prends du temps avec les personnes pour les écouter, échanger, relire, discuter, accompagner, etc.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-6',
            title: { fr: 'J’aime accueillir ceux qui viennent et participer aux temps fraternels avec eux.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-7',
            title: { fr: 'Je me sers des difficultés rencontrées par les gens pour leur présenter Jésus.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-8',
            title: { fr: 'J\'annonce le Christ sans trop tourner longtemps autour du pot.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-9',
            title: { fr: 'J\'annonce en priorité le pardon et la miséricorde de Dieu parce que j\'en ai été moi-même bouleversé et transformé.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-10',
            title: { fr: 'J’aime avoir une vision dynamique des choses.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-11',
            title: { fr: 'Je suis sensible à l’urgence des choses. Nous n’avons pas le temps à perdre. Il faut y aller !' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-12',
            title: { fr: 'Je n\'hésite pas à annoncer la Vérité dérangeante du Christ au risque d\'être incompris.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-13',
            title: { fr: 'J\'évangélise également pour confondre le monde, dénoncer sa tromperie et déjouer ses mensonges et ses mirages.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-14',
            title: { fr: 'Lors de l’évangélisation, je suis prêt à aborder des questions délicates et en débattre si nécessaire.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-15',
            title: { fr: 'J\'évangélise avant tout en annonçant le Salut du Christ : Jésus nous sauve et nous libère.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-16',
            title: { fr: 'J\'annonce la parole dans le but de conduire les gens à la repentance.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-17',
            title: { fr: 'Avant d\'évangéliser, j’aime persister dans la prière pour que les personnes soient gagnées à Christ.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-18',
            title: { fr: 'La multiplication des âmes est la première action que je privilégie.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-19',
            title: { fr: 'Lorsque j\'arrive sur un champ missionnaire, je veux que les âmes comprennent qu\'elles sont mon focus premier.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-20',
            title: { fr: 'Après m\'avoir écouté, certains me disent être frappés par ce qu\'ils ont entendu, comme stupéfaits.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-21',
            title: { fr: 'Je reste constamment en quête de stratégies d’évangélisation.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-22',
            title: { fr: 'Sur le champ missionnaire, je préfère aller évangéliser qu’animer des ateliers de formation.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-23',
            title: { fr: 'Pour moi, le terme conquête signifie le rassemblement de tous les assoiffés de Christ.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-24',
            title: { fr: 'Les temps de prière sont généralement orientés sur la réconciliation des âmes avec le Seigneur.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-25',
            title: { fr: 'Dans le cadre de la mission, je préfère d’abord gagner les âmes.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-1',
            title: { fr: 'Lorsque j\'évangélise, j\'aime rapporter comment Dieu a totalement changé mon histoire, pour montrer que la transformation commence par une rencontre d\'amour avec Dieu.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-2',
            title: { fr: 'Je suis sensible à ceux qui souffrent à cause de leur péché, je désire les conduire au pardon de Dieu.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-3',
            title: { fr: 'Je ne crains pas de témoigner de mes faiblesses que Jésus vient porter, guérir, transformer ou sauver.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-4',
            title: { fr: 'Ma communication est orientée sur la vie des âmes.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-5',
            title: { fr: 'J\'utilise des arguments forts, pertinents et logiques dans mon évangélisation.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-6',
            title: { fr: 'Je rapporte des histoires vécues ou actuelles pour montrer que l\'Evangile est vrai, que Jésus agit dans nos vies.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-7',
            title: { fr: 'J\'ai besoin de bien assimiler les contenus de la Foi et de la Révélation pour évangéliser.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-8',
            title: { fr: 'Je propose volontiers à mon entourage de m\'accompagner à des rencontres pour écouter des témoins ou des prédicateurs : le réveil de la foi s\'opère souvent dans ce type d\'occasion.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-9',
            title: { fr: 'Je suis sensible aux enjeux spirituels et existentiels des situations, des personnes ou des évènements auxquels je suis confronté.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-10',
            title: { fr: 'J\'ai besoin de temps pour expliquer et donner les raisons de croire.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-11',
            title: { fr: 'Je propose facilement des livres, des enregistrements ou des vidéos de témoins à mon entourage.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-12',
            title: { fr: 'Ceux qui m\'écoutent estiment que je suis un bon pédagogue pour expliquer le cœur de la Révélation chrétienne.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-13',
            title: { fr: 'Après m\'avoir entendu parler de Dieu, louer ou prier, certains me disent qu\'ils sont profondément touchés par ma joie et mon amour de Dieu. ' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-14',
            title: { fr: 'Je m\'appuie sur la Parole de Dieu, le témoignage des apôtres - pour évangéliser.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-15',
            title: { fr: 'Pour moi, le terme conquête signifie une armée de témoins qui manifeste le caractère de Christ.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-16',
            title: { fr: 'Je prends soin d\'établir une relation d’estime et de confiance avec les personnes, avant de leur parler clairement de Dieu.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-17',
            title: { fr: 'J\'aime les gens, je m\'intéresse naturellement à leur vie, ils se confient souvent. Grâce à cette relation, il y a toujours de bonnes occasions pour leur parler du Seigneur.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-18',
            title: { fr: 'Ma communication est orientée sur des sujets d’édification, la manifestation de la foi, la persévérance, etc.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-19',
            title: { fr: 'Je recherche constamment des programmes, ateliers thématiques d’édification spirituelle' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-20',
            title: { fr: 'Sur le champ missionnaire, l’affermissement des âmes est ma priorité. J’aime voir les âmes grandir dans le Seigneur.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-21',
            title: { fr: 'Lorsque j\'arrive sur un champ missionnaire, je m\'attends à ce que les âmes soient sensibles au(x) programme(s) mis en place en vue de leur édification.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-22',
            title: { fr: 'Sur le champ missionnaire, j’éprouve une frustration lorsque la croissance des âmes est très lente.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-23',
            title: { fr: 'Ma plus grande satisfaction c’est de voir les âmes guérir de leurs blessures.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-24',
            title: { fr: 'Je me sens à l’aise à enseigner, encourager, à animer un groupe.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-25',
            title: { fr: 'Les temps de prière sont généralement orientés sur la libération des âmes.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-26',
            title: { fr: 'Quand c\'est nécessaire, je n\'hésite pas dans ma prédication à interpeller assez vivement et "évangéliquement" ceux qui m\'écoutent.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-27',
            title: { fr: 'Lorsque j\'arrive sur un champ missionnaire, j\'aime que les âmes aient le même niveau d\'engagement que moi.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-28',
            title: { fr: 'En évangélisation, je témoigne surtout des évènements de ma propre histoire pour illustrer combien Dieu transforme une vie et conduit au bonheur.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-29',
            title: { fr: 'Durant une évangélisation, il n\'est pas rare que je perçoive les besoins spirituels des personnes avec qui j’ai un échange.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-30',
            title: { fr: 'Lorsque je raconte comment j\'ai rencontré le Christ et ce qu\'il a fait dans ma vie, les gens sont interpellés.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-1',
            title: { fr: 'Dans le cadre de la mission, je souhaite avoir des fonctions bien déterminées en vue de mettre à l’épreuve de nouvelles idées.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-2',
            title: { fr: 'En évangélisation, j\'utilise des formules, des images et des exemples qui percutent.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-3',
            title: { fr: 'J\'évangélise avant tout les personnes de mon entourage : collègues, amis, voisins ou famille.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-4',
            title: { fr: 'Ma manière d\'évangéliser, c\'est de me mettre au service des évangélisateurs, par la prière, le service ou l\'organisation.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-5',
            title: { fr: 'Je veille à ce que les choses pratiques soient bien organisées pour évangéliser : sinon je trouve que l\'on n\'est pas crédible, ni respectueux des gens.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-6',
            title: { fr: 'J\'aime convier mon entourage à venir participer avec moi à de belles célébrations qui présente un beau visage de l\'Eglise.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-7',
            title: { fr: 'Je m\'investis pour soigner \'atmosphère d\'accueil, la beauté des lieux, etc. et pour que les personnes se sentent bien et disponibles pour écouter la Parole.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-8',
            title: { fr: 'S\'il y a un concert d\'un groupe chrétien dans la région, j\'y invite ou j\'y emmène les jeunes de mon entourage.' },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-9',
            title: { fr: `Lors du passage à la maison d'un frère dans la foi ou d'un prédicateur, j'invite des amis ou des voisins à le rencontrer chez moi.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-10',
            title: { fr: `Plusieurs personnes ont été gagnées au Seigneur au travers de leur amitié avec moi.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-11',
            title: { fr: `Je me tiens au courant des nouveautés missionnaires (rassemblements, livres, témoignages, vidéo ou prédication sur Internet, etc.), puis j'essaye de voir à qui je pourrais les proposer.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-12',
            title: { fr: `Je m'attache à démontrer que la foi chrétienne et la Révélation apportent des réponses pertinentes aux dérives et aux besoins du monde moderne.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-13',
            title: { fr: `L’organisation et la planification sont des activités que j’apprécie énormément dans la mission.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-14',
            title: { fr: `Lorsque j'arrive sur un champ missionnaire, j'apprécie qu'il y ait une organisation déjà établie.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-15',
            title: { fr: `Dans le cadre de la mission, je préfère trouver des solutions face aux défis organisationnels.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-16',
            title: { fr: `Je me sens à l’aise dans la formulation de remarques constructives et utiles.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-17',
            title: { fr: `Je me sens plus à l’aise à travailler avec des concepts, des stratégies à développer.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-18',
            title: { fr: `Ma communication est orientée sur les objectifs à atteindre, le statut des églises, le territoire.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-19',
            title: { fr: `Pour moi le terme conquête signifie multiplication des églises dans une zone déterminée.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-20',
            title: { fr: `Les temps de prière sont généralement orientés sur la prise de territoires.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-21',
            title: { fr: `J’aime que la mission soit une réussite, je m’assure que toute l’organisation soit conforme à la vision du pasteur.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-22',
            title: { fr: `J’éprouve une frustration lorsque la dynamique d’évangélisation n’est pas suivie.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-23',
            title: { fr: `Le respect de l’heure, du timing est déterminant pour moi lors de nos réunions.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-24',
            title: { fr: `Je suis très regardant sur le bon déroulement du programme.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-25',
            title: { fr: `Je m’assure que le budget est respecté.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-26',
            title: { fr: `Je reste fortement sensible au changement et à l’innovation.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-1',
            title: { fr: `J'aime évangéliser les personnes blessées ou éloignées de Dieu pour leur annoncer Son amour et Sa compassion pour chacun.` },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-2',
            title: { fr: `Je veille à ce que les non-croyants et les personnes extérieures à la communauté chrétienne soient très bien accueillies.` },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-3',
            title: { fr: `Quand je rencontre des personnes vivant le type de galères ou d'épreuves que je vivais avant de rencontrer Jésus, je leur témoigne de ce qui m'est arrivé grâce à Lui.` },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-4',
            title: { fr: `Je me reconnais bien dans la figure de la Samaritaine : après avoir rencontré et écouté Jésus, elle invite tout le village à faire de même.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-5',
            title: { fr: `Je ne peux évangéliser que si je me sens bien dans ma relation avec le Seigneur, autrement j’ai du mal.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-6',
            title: { fr: `Je suis émerveillé par la façon dont Jésus m'a conduit à Lui ; je suis poussé à le partager aux autres pour qu'ils perçoivent combien Jésus est vivant aujourd'hui.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-7',
            title: { fr: `Je suis profondément bouleversé par la détresse des hommes qui ne connaissent pas le Christ et par les mensonges de ce monde.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-8',
            title: { fr: `J'ai un caractère liant, sympathique et spontané avec les personnes inconnues ou éloignées de la communauté chrétienne.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-9',
            title: { fr: `J’aime prendre soin des âmes, les mettre à l’aise et connaitre leurs besoins.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-10',
            title: { fr: `Lorsque j'évangélise, je parle d'abord de l'immense amour de Dieu pour chacun.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-11',
            title: { fr: `Je partage aisément aux autres ma joie d'avoir participé à un évènement où se sont manifestés clairement la grâce et l'amour de Dieu.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-12',
            title: { fr: `J'annonce avant tout l'amour de Dieu afin de rejoindre le besoin de chacun d'aimer et d'être aimé.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-13',
            title: { fr: `Pour évangéliser quelqu'un, je cherche d'abord à comprendre les raisons de ses doutes, de son indifférence ou de son refus de croire.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-14',
            title: { fr: `J’ai une facilité à donner, donc je privilégie tout ce qui est lié aux actes de compassion.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-15',
            title: { fr: `Je mets l’accent sur des programmes destinés à rendre visite aux personnes en difficultés.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-16',
            title: { fr: `Je suis plus sensible à la mobilisation des ressources en vue de venir en aide aux personnes en difficulté.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-17',
            title: { fr: `Ma communication est orientée sur la communion fraternelle, les dons, les appels à l’aide.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-18',
            title: { fr: `Pour moi le terme conquête signifie manifestation massive des actes de compassion.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-19',
            title: { fr: `Les temps de prière sont généralement orientés sur la dimension du Dieu Pourvoyeur et du Dieu Amour.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-20',
            title: { fr: `Les personnes me disent qu'elles sont touchées par mon attention à elles et par les services que je leur rends.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-21',
            title: { fr: `Quand je rencontre une personne qui souffre, je m'attache à la rejoindre par des gestes d'attention, de consolation ou d'affection.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-22',
            title: { fr: `J'accepte facilement d'être dérangé pour me mettre au service et à l'écoute de ceux qui font appel à moi.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-23',
            title: { fr: `Je suis étreint par la tristesse ou l'angoisse de ceux qui ne vivent pas de la grâce de Dieu.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-24',
            title: { fr: `Je ne peux pas concevoir qu’il y ait parmi nous des personnes qui rencontrent des difficultés.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-25',
            title: { fr: `Sur le champ missionnaire, je me concentre sur les besoins des âmes.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'itinerant-1',
            title: { fr: `Je préfère aller sur le terrain.` },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'itinerant-2',
            title: { fr: `J’aime découvrir de nouveaux territoires, voyager, être sur les routes.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'itinerant-3',
            title: { fr: `Je privilégie le contact direct avec les âmes.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'itinerant-4',
            title: { fr: `Je peux partir d’un champ missionnaire vers un autre sans souci.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'itinerant-5',
            title: { fr: `J’aime me déplacer très souvent` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'sedentaire-1',
            title: { fr: `Je préfère piloter les activités à distance.` },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'sedentaire-2',
            title: { fr: `J’aime plutôt effectuer des tâches administratives en rapport avec la mission.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'sedentaire-3',
            title: { fr: `Je me sens à l’aise lorsque le contact se fait à distance.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'sedentaire-4',
            title: { fr: `Je préfère finir sur un champ missionnaire avant d’être déployé ailleurs.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'sedentaire-5',
            title: { fr: `J’apprécie réduit au maximum mes déplacements.` },
            isRequired: true,
            choices: choices,
            
        }]
    },
];

shuffle(questions);

const pages = [firstPage, ...questions];

const surveyJson = {
    title: { fr: `Découvrez votre profil missionnaire` },

    showQuestionNumbers: 'off',
    showProgressBar: 'top',
    showTimerPanel: 'bottom',
    showTimerPanelMode: 'all',
    showCompletedPage: false,

    firstPageIsStarted: true,
    startSurveyText: { fr: 'Découvrir mon profil' },
    completeText: { fr: 'Terminer' },

    goNextPageAutomatic: true,
    showNavigationButtons: true,
    showPrevButton: false,

    maxTimeToFinishPage: 15,
    maxTimeToFinish: 15 * questions.length,
    pages: pages,
};

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
