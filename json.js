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
        description: `Il œuvre à la construction des âmes. Il privilégie la relation d’aide, la consécration. Il veille à enseigner, à contribuer par l’assistance du Saint Esprit à la restauration des âmes. Pour lui, le chrétien doit être ferme et grandit dans la foi afin d’être un véritable témoin. Son focus premier c’est la stabilité, la construction des âmes. Son focus secondaire c’est la conquête.`,
        strength: [
            `Disciple par excellence, il fait preuve d’une grande fidélité`,
            `Il est capable de se reproduire, de comprendre et de traduire les préoccupations de son mentor`,
            `C’est un enseignant. Il aime la formation. Pour cela, il cherche à connaître la Parole`,
            `C’est un intercesseur fervent en faveur des âmes`,
            `Persévérant, il démontre une grande patience dans la gestion des âmes`,
            `Il fait preuve d’habileté et de savoir-faire dans la gestion des âmes`,
            `Il est ferme dans ses convictions`,
        ],
        weakness: [
            `Il doit occuper sa place au sein d’un groupe (vaincre la timidité, rester dans son coin) afin de partager ses idées, ses observations, apporter sa contribution à la construction de l’œuvre`,
            `Il doit comprendre que l’expansion va de pair avec la construction des âmes. Pour cela, il peut travailler sa stratégie sur la base d’objectifs SMART pour constamment évaluer la croissance qualitative et quantitative de l’église (la croissance numéraire n’est pas sa préoccupation + l’expansion viendra après)`,
            `Préoccupé par la croissance des âmes, il doit davantage apprendre à communiquer et à partager ses bonnes pratiques`,
        ]
    },
    manifestateurCompassion: {
        points: 0,
        nbQuestions: 25,
        name: "Manifestation de la compassion",
        description: `Il manifeste la générosité. Pour lui la conquête passe par les actes de compassion. Il est orienté vers la résolution des besoins primaires des âmes. Sa stratégie de conquête repose sur la démonstration de l’amour par des actes de générosité. Ce profil considère l’église comme un lieu de refuge.`,
        strength: [
            `Son message est fondé sur l’amour et la puissance de la croix`,
            `Son caractère est mêlé de douceur, d’humilité, de paix, d’amour, de bonté`,
            `N’est pas dans le jugement, fervent partisan de la miséricorde`,
            `Manifeste l’hospitalité. Il est même capable ouvrir sa maison aux réunions de l’église et la prière car il considère sa maison, l’église comme un lieu d’asile, de refuge`,
            `Il témoigne de ce que le Seigneur a fait pour lui`,
            `Il soutient la mission avec ses biens et reste disponible à toutes les missions caritatives`,
            `Il est disponible à rendre service dans le « back office » des activités d'évangélisation`,
            `Il s’engage dans les missions d'écoute, de consolation, d'accompagnement`,
        ],
        weakness: [
            `Il est important de travailler sa communication, sa posture, pour asseoir son « autorité » et se faire respecter`,
            `Ce type de profil doit garder un focus sur la mission et éviter de trop s’attacher émotionnellement aux âmes`,
            `Il peut perfectionner son style en s’inspirant d’autre style. Ainsi, il ne risque pas s'enfermer dans son style traditionnel`,
            `Trouver l’équilibre dans le service va lui permettre d’être plus efficace (Servir avec les mains de Marthe et le cœur de Marie)`,
        ]
    },
    coordinateurMission: {
        points: 0,
        nbQuestions: 26,
        name: "Coordinateur de missions",
        description: `C’est un profil capable de mener des stratégies efficaces de prise de territoire. Il organise les missions de terrain dans les moindres détails. Il s’assure de la bonne communication avec les parties prenantes (pasteur – champ missionnaire – équipe de la coordination…). Il surveille l’avancement des objectifs. Il suit le budget. Il documente les processus clés. Il veille à la résolution des problématiques qui empêchent l’équipe de progresser, etc. C’est un artisan habile et efficace dans la gestion de la mission.`,
        strength: [
            `Par définition, Il est plutôt quelqu’un d’analytique, de rationnel dans sa pensée`,
            `Il fait preuve d’une capacité décisionnelle utile dans le ministère`,
            `Il a une capacité à exposer les choses sur la base d’une documentation poussée`,
            `Doté d’une personnalité énergétique, il est précis, méticuleux, organisé, pragmatique, logique, clair, intellectuel, cohérent, structuré. Il fait preuve de Sagesse divine`,
            `C’est un facilitateur hors pair. Il est peu bavard, discret`,
            `Il est attaché aux faits et aux procédures`,
            `Il a une connaissance poussée du mode d’implantation et de fonctionnement (administratif et financier) des églises`,
            `Il est capable de rédiger, de communiquer des instructions claires et précises`,
            `Il est curieux. C’est aussi un enquêteur qui recherche les arguments convaincants et factuels`,
            `Sa préférence dans l’évangélisation se situe davantage au niveau de la pensée que du cœur : il se soucie plus de ce que les gens pensent que de ce qu’ils ressentent`,
        ],
        weakness: [
            `Il doit davantage travailler l’humilité, car le fait d’organiser les choses peut laisser penser que sans lui personne n’y arrivera`,
            `Il doit veiller à ne pas s’enfermer dans les procédures afin d’élargir ses perspectives`,
            `Pour être plus efficace, il devra adopter une communication bienveillante (pour ne pas paraître directif) en prenant le soin d’expliquer les choses`,
            `Il doit faire preuve d’ouverture afin de ne pas se braquer ou se décourager face aux avis contraires. Cette posture lui permettra de ne pas paraître arrogant, obstiné, suffisant, condescendant ou se sentir supérieur. (Il doit comprendre et accepter que le fer aiguise le fer)`,
            `Il doit développer l’écoute active pour mieux interagir avec son prochain. Car s’il met trop d’acharnement, d’insistance, à convaincre, il peut donner l'impression de manquer de respect et de ne pas écouter le cœur des personnes autour de lui (missionnaires, âmes…)`,
        ]
    },
    gagneurAmes: {
        points: 0,
        nbQuestions: 25,
        name: "Gagneur d'âmes",
        description: `C’est un conquérant. Il est engagé dans la prise de territoire. 
        Il évangélise et cherche à rassembler tous les croyants et les incroyants sous la bannière de Christ. 
        Ce profil n’aime pas la routine. 
        Son focus premier c’est la conquête du territoire, l’expansion et l’implantation des églises. 
        Son focus secondaire c’est la stabilité des âmes.`,
        strength: [
            `C’est un précurseur, un ouvreur de brèche, un véritable visionnaire. Il préfère aller là où personne n’est encore allé`,
            `Il peut être excessif par moment et forcer le trait pour faire percevoir l’enjeu des situations`,
            `Il a tendance à s’affirmer, à être au-devant de la scène du fait de son caractère de fonceur`,
            `C’est un homme d’action et de terrain. Il dit les choses telle qu’il les pense (langage franc)`,
            `Il n’aime pas les tergiversations, peut couper facilement les ponts avec ceux qui ne veulent pas aller de l’avant`,
            `Veut la conversion rapide des âmes`,
            `Accorde un attachement particulier aux rituels, aux symboles, aux pratiques du jeûne, faire preuve d’une rigueur sainte`,
            `Pour lui, annoncer la Parole est le cœur de sa vocation`,
            `Il possède le don de la foi`,
            `Il discerne le potentiel des gens`,
            `Il est fortement ancré dans la Parole et il voit qu’elle s'accomplit. Souvent, il est touché au plus profond de lui-même et vit dans sa chair ce qu'il annonce. Parfois fragile, sensible, il peut être déstabilisé jusqu’à avoir des scrupules`,
            `Il est alerte comme une sentinelle : il est donc très ouvert à ce qui se passe dans le monde. Il est à l’affût des nouveautés. Il sait discerner ce qui constitue les prémisses des modifications importantes, voire des dangers pour l’homme`
        ],
        weakness: [
            `Préoccupé par l’urgence de la mise en garde, il doit prendre garde à davantage annoncer réellement l’Evangile qu’à dénoncer les choses. Il doit rester centré sur le message recommandé`,
            `C’est un gain de temps pour lui d’amener les personnes à comprendre ce qu’il a compris (Apprendre à ne pas s’étonner de ce que beaucoup ne perçoivent pas ce qu’il voit comme une évidence. Il doit donc travailler à être pédagogue et aider son auditoire à comprendre pourquoi il dit ceci ou cela)`,
            `Apprendre à écouter et comprendre les autres lui sera d’une grande aide car on ne réussit pas seule.  Il doit apprendre à rendre compte « avec humilité et respect »`,
            `Il doit faire preuve de patience et d’humilité dans ses rapports avec les autres et apprendre à développer un langage encourageant plus que motivationnel pour ne pas paraître arrogeant`,
            `Il doit apprendre à déléguer et à s'appuyer sur le discernement des personnes bienveillantes placées autour de lui`,
            `Il peut améliorer le volet-enseignement en illustrant ses propos avec des faits`,
            `Il peut améliorer sa communication, son relationnel, pour atténuer l'impression qu’il donne d’être plus focalisé sur « la mission » que sur les âmes`,
            `Il doit accepter d’être servi par moment`,
            `Il doit travailler la maîtrise de soi et la patience pour mieux gérer ses émotions`,
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
        html: `Veuillez répondre aux questions suivantes en vous basant sur votre expérience personnelle. 
        <br/> <br/> 
        <b>Attention:</b> Vous aurez 15 secondes pour répondre à chaque question.
        <br/> <br/>
        <b>RGPD:</b> Les données collectées ne seront pas utilisées à des fins commerciales.
        Vous pouvez demander la suppression de vos données à tout moment en envoyant un mail à l'adresse suivante: <a href="mailto:projets.numeriques.icclyon@gmail.com">projets.numeriques.icclyon@gmail.com</a>`,
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

const myCss = {
	"root": "sd-root-modern",
	"rootMobile": "sd-root-modern--mobile",
	"rootReadOnly": "sd-root--readonly",
	"container": "sd-container-modern",
	"header": "sd-title sd-container-modern__title",
	"body": "sd-body",
	"bodyWithTimer": "sd-body--with-timer",
	"clockTimerRoot": "sd-timer",
	"clockTimerRootTop": "sd-timer--top",
	"clockTimerRootBottom": "sd-timer--bottom",
	"clockTimerProgress": "sd-timer__progress",
	"clockTimerProgressAnimation": "sd-timer__progress--animation",
	"clockTimerTextContainer": "sd-timer__text-container",
	"clockTimerMinorText": "sd-timer__text--minor",
	"clockTimerMajorText": "sd-timer__text--major",
	"bodyEmpty": "sd-body sd-body--empty",
	"footer": "sd-footer sd-body__navigation sd-clearfix",
	"title": "sd-title",
	"description": "sd-description",
	"logo": "sd-logo",
	"logoImage": "sd-logo__image",
	"headerText": "sd-header__text",
	"headerClose": "sd-hidden",
	"navigationButton": "",
	"bodyNavigationButton": "sd-btn",
	"completedPage": "sd-completedpage",
	"timerRoot": "sd-body__timer",
	"navigation": {
		"complete": "sd-btn--action sd-navigation__complete-btn",
		"prev": "sd-navigation__prev-btn",
		"next": "sd-navigation__next-btn",
		"start": "sd-navigation__start-btn",
		"preview": "sd-navigation__preview-btn",
		"edit": ""
	},
	"panel": {
		"number": "sd-element__num",
		"title": "sd-title sd-element__title sd-panel__title",
		"titleExpandable": "sd-element__title--expandable",
		"titleExpanded": "sd-element__title--expanded",
		"titleCollapsed": "sd-element__title--collapsed",
		"titleDisabled": "sd-element__title--disabled",
		"titleOnExpand": "sd-panel__title--expanded",
		"titleOnError": "sd-panel__title--error",
		"titleBar": "sd-action-title-bar",
		"description": "sd-description sd-panel__description",
		"container": "sd-element sd-element--complex sd-panel sd-row__panel",
		"withFrame": "sd-element--with-frame",
		"content": "sd-panel__content",
		"icon": "sd-panel__icon",
		"iconExpanded": "sd-panel__icon--expanded",
		"footer": "sd-panel__footer",
		"requiredText": "sd-panel__required-text",
		"header": "sd-panel__header sd-element__header sd-element__header--location-top",
		"collapsed": "sd-element--collapsed",
		"expanded": "sd-element--expanded",
		"nested": "sd-element--nested",
		"invisible": "sd-element--invisible",
		"navigationButton": ""
	},
	"paneldynamic": {
		"mainRoot": "sd-element  sd-question sd-question--paneldynamic sd-element--complex sd-question--complex sd-row__question",
		"empty": "sd-question--empty",
		"root": "sd-paneldynamic",
		"navigation": "sd-paneldynamic__navigation",
		"title": "sd-title sd-element__title sd-question__title",
		"button": "sd-action sd-paneldynamic__btn",
		"buttonRemove": "sd-action--negative sd-paneldynamic__remove-btn",
		"buttonAdd": "sd-paneldynamic__add-btn",
		"buttonPrev": "sd-paneldynamic__prev-btn sd-action--icon sd-action",
		"buttonPrevDisabled": "sd-action--disabled",
		"buttonNextDisabled": "sd-action--disabled",
		"buttonNext": "sd-paneldynamic__next-btn sd-action--icon sd-action",
		"progressContainer": "sd-paneldynamic__progress-container",
		"progress": "sd-progress",
		"progressBar": "sd-progress__bar",
		"progressText": "sd-paneldynamic__progress-text",
		"separator": "sd-paneldynamic__separator",
		"panelWrapper": "sd-paneldynamic__panel-wrapper",
		"footer": "sd-paneldynamic__footer",
		"panelFooter": "sd-paneldynamic__panel-footer",
		"footerButtonsContainer": "sd-paneldynamic__buttons-container",
		"panelWrapperInRow": "sd-paneldynamic__panel-wrapper--in-row",
		"progressBtnIcon": "icon-progressbuttonv2",
		"noEntriesPlaceholder": "sd-paneldynamic__placeholder sd-question__placeholder"
	},
	"progress": "sd-progress sd-body__progress",
	"progressTop": "sd-body__progress--top",
	"progressBottom": "sd-body__progress--bottom",
	"progressBar": "sd-progress__bar",
	"progressText": "sd-progress__text",
	"progressButtonsContainerCenter": "sd-progress-buttons__container-center",
	"progressButtonsContainer": "sd-progress-buttons__container",
	"progressButtonsImageButtonLeft": "sd-progress-buttons__image-button-left",
	"progressButtonsImageButtonRight": "sd-progress-buttons__image-button-right",
	"progressButtonsImageButtonHidden": "sd-progress-buttons__image-button--hidden",
	"progressButtonsListContainer": "sd-progress-buttons__list-container",
	"progressButtonsList": "sd-progress-buttons__list",
	"progressButtonsListElementPassed": "sd-progress-buttons__list-element--passed",
	"progressButtonsListElementCurrent": "sd-progress-buttons__list-element--current",
	"progressButtonsListElementNonClickable": "sd-progress-buttons__list-element--nonclickable",
	"progressButtonsPageTitle": "sd-progress-buttons__page-title",
	"progressButtonsPageDescription": "sd-progress-buttons__page-description",
	"progressTextInBar": "sd-hidden",
	"page": {
		"root": "sd-page sd-body__page",
		"emptyHeaderRoot": "sd-page__empty-header",
		"title": "sd-title sd-page__title",
		"description": "sd-description sd-page__description"
	},
	"pageTitle": "sd-title sd-page__title",
	"pageDescription": "sd-description sd-page__description",
	"row": "sd-row sd-clearfix",
	"rowMultiple": "sd-row--multiple",
	"pageRow": "sd-page__row",
	"question": {
		"mainRoot": "sd-element sd-question sd-row__question",
		"flowRoot": "sd-element sd-question sd-row__question sd-row__question--flow",
		"withFrame": "sd-element--with-frame",
		"asCell": "sd-table__cell",
		"answered": "sd-question--answered",
		"header": "sd-question__header sd-element__header",
		"headerLeft": "sd-question__header--location--left",
		"headerTop": "sd-question__header--location-top sd-element__header--location-top",
		"headerBottom": "sd-question__header--location--bottom",
		"content": "sd-question__content",
		"contentLeft": "sd-question__content--left",
		"titleLeftRoot": "sd-question--left",
		"titleOnAnswer": "sd-question__title--answer",
		"titleOnError": "sd-question__title--error",
		"title": "sd-title sd-element__title sd-question__title",
		"titleExpandable": "sd-element__title--expandable",
		"titleExpanded": "sd-element__title--expanded",
		"titleCollapsed": "sd-element__title--collapsed",
		"titleDisabled": "sd-element__title--disabled",
		"titleBar": "sd-action-title-bar",
		"requiredText": "sd-question__required-text",
		"number": "sd-element__num",
		"description": "sd-description sd-question__description",
		"descriptionUnderInput": "sd-description sd-question__description sd-question__description--under-input",
		"comment": "sd-input sd-comment",
		"other": "sd-input sd-comment",
		"required": "sd-question--required",
		"titleRequired": "sd-question__title--required",
		"indent": 20,
		"footer": "sd-question__footer",
		"commentArea": "sd-question__comment-area",
		"formGroup": "sd-question__form-group",
		"hasError": "sd-question--error",
		"collapsed": "sd-element--collapsed",
		"expanded": "sd-element--expanded",
		"nested": "sd-element--nested",
		"invisible": "sd-element--invisible",
		"composite": "sd-element--complex",
		"disabled": "sd-question--disabled"
	},
	"image": {
		"mainRoot": "sd-question sd-question--image",
		"root": "sd-image",
		"image": "sd-image__image",
		"adaptive": "sd-image__image--adaptive",
		"withFrame": ""
	},
	"html": {
		"mainRoot": "sd-question sd-row__question sd-question--html",
		"root": "sd-html",
		"withFrame": ""
	},
	"error": {
		"root": "sd-question__erbox",
		"icon": "",
		"item": "",
		"tooltip": "sd-question__erbox--tooltip",
		"outsideQuestion": "sd-question__erbox--outside-question",
		"aboveQuestion": "sd-question__erbox--above-question",
		"belowQuestion": "sd-question__erbox--below-question",
		"locationTop": "sd-question__erbox--location--top",
		"locationBottom": "sd-question__erbox--location--bottom"
	},
	"checkbox": {
		"root": "sd-selectbase",
		"rootRow": "sd-selectbase--row",
		"rootMultiColumn": "sd-selectbase--multi-column",
		"item": "sd-item sd-checkbox sd-selectbase__item",
		"itemOnError": "sd-item--error",
		"itemSelectAll": "sd-checkbox--selectall",
		"itemNone": "sd-checkbox--none",
		"itemDisabled": "sd-item--disabled sd-checkbox--disabled",
		"itemChecked": "sd-item--checked sd-checkbox--checked",
		"itemHover": "sd-item--allowhover sd-checkbox--allowhover",
		"itemInline": "sd-selectbase__item--inline",
		"label": "sd-selectbase__label",
		"labelChecked": "",
		"itemControl": "sd-visuallyhidden sd-item__control sd-checkbox__control",
		"itemDecorator": "sd-item__svg sd-checkbox__svg",
		"itemSvgIconId": "#icon-v2check",
		"controlLabel": "sd-item__control-label",
		"materialDecorator": "sd-item__decorator sd-checkbox__decorator",
		"other": "sd-input sd-comment sd-selectbase__other",
		"column": "sd-selectbase__column"
	},
	"radiogroup": {
		"root": "sd-selectbase",
		"rootRow": "sd-selectbase--row",
		"rootMultiColumn": "sd-selectbase--multi-column",
		"item": "sd-item sd-radio sd-selectbase__item",
		"itemOnError": "sd-item--error",
		"itemInline": "sd-selectbase__item--inline",
		"label": "sd-selectbase__label",
		"labelChecked": "",
		"itemDisabled": "sd-item--disabled sd-radio--disabled",
		"itemChecked": "sd-item--checked sd-radio--checked",
		"itemHover": "sd-item--allowhover sd-radio--allowhover",
		"itemControl": "sd-visuallyhidden sd-item__control sd-radio__control",
		"itemDecorator": "sd-item__svg sd-radio__svg",
		"controlLabel": "sd-item__control-label",
		"materialDecorator": "sd-item__decorator sd-radio__decorator",
		"other": "sd-input sd-comment sd-selectbase__other",
		"clearButton": "",
		"column": "sd-selectbase__column"
	},
	"boolean": {
		"mainRoot": "sd-element sd-question sd-row__question sd-question--boolean",
		"root": "sv_qcbc sv_qbln sd-scrollable-container",
		"rootRadio": "sv_qcbc sv_qbln sd-scrollable-container sd-scrollable-container--compact",
		"item": "sd-boolean",
		"itemOnError": "sd-boolean--error",
		"control": "sd-boolean__control sd-visuallyhidden",
		"itemChecked": "sd-boolean--checked",
		"itemIndeterminate": "sd-boolean--indeterminate",
		"itemDisabled": "sd-boolean--disabled",
		"label": "sd-boolean__label",
		"switch": "sd-boolean__switch",
		"disabledLabel": "sd-checkbox__label--disabled",
		"sliderText": "sd-boolean__thumb-text",
		"slider": "sd-boolean__thumb",
		"radioItem": "sd-item",
		"radioItemChecked": "sd-item--checked sd-radio--checked",
		"radioLabel": "sd-selectbase__label",
		"radioControlLabel": "sd-item__control-label",
		"radioFieldset": "sd-selectbase",
		"itemRadioDecorator": "sd-item__svg sd-radio__svg",
		"materialRadioDecorator": "sd-item__decorator sd-radio__decorator",
		"itemRadioControl": "sd-visuallyhidden sd-item__control sd-radio__control",
		"rootCheckbox": "sd-selectbase",
		"checkboxItem": "sd-item sd-selectbase__item sd-checkbox",
		"checkboxLabel": "sd-selectbase__label",
		"checkboxItemOnError": "sd-item--error",
		"checkboxItemIndeterminate": "sd-checkbox--intermediate",
		"checkboxItemChecked": "sd-item--checked sd-checkbox--checked",
		"checkboxItemDecorator": "sd-item__svg sd-checkbox__svg",
		"checkboxItemDisabled": "sd-checkbox--disabled",
		"controlCheckbox": "sd-visuallyhidden sd-item__control sd-checkbox__control",
		"checkboxMaterialDecorator": "sd-item__decorator sd-checkbox__decorator",
		"checkboxControlLabel": "sd-item__control-label",
		"svgIconCheckedId": "#icon-v2check"
	},
	"text": {
		"root": "sd-input sd-text",
		"small": "sd-row__question--small",
		"controlDisabled": "sd-input--disabled",
		"content": "sd-text__content sd-question__content",
		"remainingCharacterCounter": "sd-remaining-character-counter",
		"onError": "sd-input--error"
	},
	"multipletext": {
		"root": "sd-multipletext",
		"itemLabel": "sd-multipletext__item-container sd-input",
		"itemLabelOnError": "sd-multipletext__item-container--error",
		"item": "sd-multipletext__item",
		"itemTitle": "sd-multipletext__item-title",
		"row": "sd-multipletext__row",
		"cell": "sd-multipletext__cell"
	},
	"dropdown": {
		"root": "sd-selectbase",
		"popup": "sv-dropdown-popup",
		"small": "sd-row__question--small",
		"selectWrapper": "",
		"other": "sd-input sd-comment sd-selectbase__other",
		"onError": "sd-input--error",
		"label": "sd-selectbase__label",
		"item": "sd-item sd-radio sd-selectbase__item",
		"itemDisabled": "sd-item--disabled sd-radio--disabled",
		"itemChecked": "sd-item--checked sd-radio--checked",
		"itemHover": "sd-item--allowhover sd-radio--allowhover",
		"itemControl": "sd-visuallyhidden sd-item__control sd-radio__control",
		"itemDecorator": "sd-item__svg sd-radio__svg",
		"cleanButton": "sd-dropdown_clean-button",
		"cleanButtonSvg": "sd-dropdown_clean-button-svg",
		"cleanButtonIconId": "icon-clear",
		"control": "sd-input sd-dropdown",
		"controlInputFieldComponent": "sd-dropdown__input-field-component",
		"controlValue": "sd-dropdown__value",
		"controlDisabled": "sd-input--disabled",
		"controlEmpty": "sd-dropdown--empty",
		"controlLabel": "sd-item__control-label",
		"filterStringInput": "sd-dropdown__filter-string-input",
		"materialDecorator": "sd-item__decorator sd-radio__decorator"
	},
	"imagepicker": {
		"mainRoot": "sd-element sd-question sd-row__question",
		"root": "sd-selectbase sd-imagepicker",
		"rootColumn": "sd-imagepicker--column",
		"item": "sd-imagepicker__item",
		"itemOnError": "sd-imagepicker__item--error",
		"itemInline": "sd-imagepicker__item--inline",
		"itemChecked": "sd-imagepicker__item--checked",
		"itemDisabled": "sd-imagepicker__item--disabled",
		"itemHover": "sd-imagepicker__item--allowhover",
		"label": "sd-imagepicker__label",
		"itemDecorator": "sd-imagepicker__item-decorator",
		"imageContainer": "sd-imagepicker__image-container",
		"itemControl": "sd-imagepicker__control sd-visuallyhidden",
		"image": "sd-imagepicker__image",
		"itemText": "sd-imagepicker__text",
		"other": "sd-input sd-comment",
		"itemNoImage": "sd-imagepicker__no-image",
		"itemNoImageSvgIcon": "sd-imagepicker__no-image-svg",
		"itemNoImageSvgIconId": "#icon-no-image",
		"column": "sd-selectbase__column sd-imagepicker__column",
		"checkedItemDecorator": "sd-imagepicker__check-decorator",
		"checkedItemSvgIcon": "sd-imagepicker__check-icon",
		"checkedItemSvgIconId": "icon-v2check_24x24"
	},
	"matrix": {
		"mainRoot": "sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table",
		"tableWrapper": "sd-matrix sd-table-wrapper",
		"root": "sd-table sd-matrix__table",
		"rootVerticalAlignTop": "sd-table--align-top",
		"rootVerticalAlignMiddle": "sd-table--align-middle",
		"rootAlternateRows": "sd-table--alternate-rows",
		"rowError": "sd-matrix__row--error",
		"cell": "sd-table__cell sd-matrix__cell",
		"row": "sd-table__row",
		"headerCell": "sd-table__cell sd-table__cell--header",
		"rowTextCell": "sd-table__cell sd-matrix__cell sd-table__cell--row-text",
		"label": "sd-item sd-radio sd-matrix__label",
		"itemOnError": "sd-item--error",
		"itemValue": "sd-visuallyhidden sd-item__control sd-radio__control",
		"itemChecked": "sd-item--checked sd-radio--checked",
		"itemDisabled": "sd-item--disabled sd-radio--disabled",
		"itemHover": "sd-radio--allowhover",
		"materialDecorator": "sd-item__decorator sd-radio__decorator",
		"itemDecorator": "sd-item__svg sd-radio__svg",
		"cellText": "sd-matrix__text",
		"cellTextSelected": "sd-matrix__text--checked",
		"cellTextDisabled": "sd-matrix__text--disabled",
		"cellResponsiveTitle": "sd-matrix__responsive-title"
	},
	"matrixdropdown": {
		"mainRoot": "sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table",
		"rootScroll": "sd-question--scroll",
		"root": "sd-table sd-matrixdropdown",
		"rootVerticalAlignTop": "sd-table--align-top",
		"rootVerticalAlignMiddle": "sd-table--align-middle",
		"tableWrapper": "sd-table-wrapper",
		"rootAlternateRows": "sd-table--alternate-rows",
		"cell": "sd-table__cell",
		"itemCell": "sd-table__cell--item",
		"row": "sd-table__row",
		"headerCell": "sd-table__cell sd-table__cell--header",
		"rowTextCell": "sd-table__cell sd-table__cell--row-text",
		"cellRequiredText": "sd-question__required-text",
		"detailButton": "sd-table__cell--detail-button",
		"detailButtonExpanded": "sd-table__cell--detail-button--expanded",
		"detailIcon": "sd-detail-panel__icon",
		"detailIconExpanded": "sd-detail-panel__icon--expanded",
		"detailIconId": "icon-expanddetail",
		"detailIconExpandedId": "icon-collapsedetail",
		"actionsCell": "sd-table__cell sd-table__cell--actions",
		"emptyCell": "sd-table__cell--empty",
		"verticalCell": "sd-table__cell--vertical",
		"cellQuestionWrapper": "sd-table__question-wrapper"
	},
	"matrixdynamic": {
		"mainRoot": "sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table",
		"rootScroll": "sd-question--scroll",
		"empty": "sd-question--empty",
		"root": "sd-table sd-matrixdynamic",
		"tableWrapper": "sd-table-wrapper",
		"cell": "sd-table__cell",
		"row": "sd-table__row",
		"itemCell": "sd-table__cell--item",
		"headerCell": "sd-table__cell sd-table__cell--header",
		"rowTextCell": "sd-table__cell sd-table__cell--row-text",
		"cellRequiredText": "sd-question__required-text",
		"button": "sd-action sd-matrixdynamic__btn",
		"detailRow": "sd-table__row sd-table__row--detail",
		"detailButton": "sd-table__cell--detail-button",
		"detailButtonExpanded": "sd-table__cell--detail-button--expanded",
		"detailIcon": "sd-detail-panel__icon",
		"detailIconExpanded": "sd-detail-panel__icon--expanded",
		"detailIconId": "icon-expanddetail",
		"detailIconExpandedId": "icon-collapsedetail",
		"detailPanelCell": "sd-table__cell--detail-panel",
		"actionsCell": "sd-table__cell sd-table__cell--actions",
		"buttonAdd": "sd-matrixdynamic__add-btn",
		"buttonRemove": "sd-action--negative sd-matrixdynamic__remove-btn",
		"iconAdd": "",
		"iconRemove": "",
		"dragElementDecorator": "sd-drag-element__svg",
		"iconDragElement": "#icon-v2dragelement_16x16",
		"footer": "sd-matrixdynamic__footer",
		"emptyRowsSection": "sd-matrixdynamic__placeholder sd-question__placeholder",
		"iconDrag": "sv-matrixdynamic__drag-icon",
		"ghostRow": "sv-matrix-row--drag-drop-ghost-mod",
		"emptyCell": "sd-table__cell--empty",
		"verticalCell": "sd-table__cell--vertical",
		"cellQuestionWrapper": "sd-table__question-wrapper"
	},
	"rating": {
		"rootDropdown": "sd-scrollable-container sd-scrollable-container--compact sd-selectbase",
		"root": "sd-scrollable-container sd-rating",
		"rootWrappable": "sd-scrollable-container sd-rating sd-rating--wrappable",
		"item": "sd-rating__item",
		"itemOnError": "sd-rating__item--error",
		"itemHover": "sd-rating__item--allowhover",
		"selected": "sd-rating__item--selected",
		"minText": "sd-rating__item-text sd-rating__min-text",
		"itemText": "sd-rating__item-text",
		"maxText": "sd-rating__item-text sd-rating__max-text",
		"itemDisabled": "sd-rating__item--disabled",
		"control": "sd-input sd-dropdown",
		"controlValue": "sd-dropdown__value",
		"controlDisabled": "sd-input--disabled",
		"controlEmpty": "sd-dropdown--empty",
		"filterStringInput": "sd-dropdown__filter-string-input",
		"popup": "sv-dropdown-popup",
		"onError": "sd-input--error"
	},
	"comment": {
		"root": "sd-input sd-comment",
		"small": "sd-row__question--small",
		"controlDisabled": "sd-input--disabled",
		"content": "sd-comment__content sd-question__content",
		"remainingCharacterCounter": "sd-remaining-character-counter",
		"onError": "sd-input--error"
	},
	"expression": "sd-expression",
	"file": {
		"root": "sd-file",
		"other": "sd-input sd-comment",
		"placeholderInput": "sd-visuallyhidden",
		"preview": "sd-file__preview",
		"fileSign": "",
		"fileList": "sd-file__list",
		"fileSignBottom": "sd-file__sign",
		"dragArea": "sd-file__drag-area",
		"dragAreaActive": "sd-file__drag-area--active",
		"fileDecorator": "sd-file__decorator",
		"onError": "sd-file__decorator--error",
		"fileDecoratorDrag": "sd-file__decorator--drag",
		"fileInput": "sd-visuallyhidden",
		"noFileChosen": "sd-description sd-file__no-file-chosen",
		"chooseFile": "sd-file__choose-btn",
		"chooseFileAsText": "sd-action sd-file__choose-btn--text",
		"chooseFileAsTextDisabled": "sd-action--disabled",
		"chooseFileAsIcon": "sd-context-btn sd-file__choose-btn--icon",
		"chooseFileIconId": "icon-choosefile",
		"disabled": "sd-file__choose-btn--disabled",
		"removeButton": "sd-context-btn sd-context-btn--negative sd-file__btn sd-file__clean-btn",
		"removeButtonBottom": "",
		"removeButtonIconId": "icon-clear",
		"removeFile": "sd-hidden",
		"removeFileSvg": "",
		"removeFileSvgIconId": "icon-delete",
		"wrapper": "sd-file__wrapper",
		"defaultImage": "sd-file__default-image",
		"defaultImageIconId": "icon-defaultfile",
		"leftIconId": "icon-arrowleft",
		"rightIconId": "icon-arrowright",
		"removeFileButton": "sd-context-btn sd-context-btn--negative sd-file__remove-file-button",
		"dragAreaPlaceholder": "sd-file__drag-area-placeholder",
		"imageWrapper": "sd-file__image-wrapper",
		"single": "sd-file--single",
		"singleImage": "sd-file--single-image",
		"mobile": "sd-file--mobile"
	},
	"signaturepad": {
		"mainRoot": "sd-element sd-question sd-question--signature sd-row__question",
		"root": "sd-signaturepad sjs_sp_container",
		"small": "sd-row__question--small",
		"controls": "sjs_sp_controls sd-signaturepad__controls",
		"placeholder": "sjs_sp_placeholder",
		"clearButton": "sjs_sp_clear sd-context-btn sd-context-btn--negative sd-signaturepad__clear",
		"clearButtonIconId": "icon-clear"
	},
	"saveData": {
		"root": "sv-save-data_root",
		"info": "sv-save-data_info",
		"error": "sv-save-data_error",
		"success": "sv-save-data_success",
		"button": "sv-save-data_button"
	},
	"window": {
		"root": "sv_window",
		"body": "sv_window_content",
		"header": {
			"root": "sv_window_title",
			"title": "",
			"button": "",
			"buttonExpanded": "",
			"buttonCollapsed": ""
		}
	},
	"ranking": {
		"root": "sv-ranking",
		"rootMobileMod": "sv-ranking--mobile",
		"rootDragMod": "sv-ranking--drag",
		"rootDisabled": "sd-ranking--disabled",
		"rootDesignMode": "sv-ranking--design-mode",
		"rootDragHandleAreaIcon": "sv-ranking--drag-handle-area-icon",
		"item": "sv-ranking-item",
		"itemContent": "sv-ranking-item__content sd-ranking-item__content",
		"itemIndex": "sv-ranking-item__index sd-ranking-item__index",
		"itemIndexEmptyMode": "sv-ranking-item__index--empty sd-ranking-item__index--empty",
		"controlLabel": "sv-ranking-item__text",
		"itemGhostNode": "sv-ranking-item__ghost",
		"itemIconContainer": "sv-ranking-item__icon-container",
		"itemIcon": "sv-ranking-item__icon",
		"itemIconHoverMod": "sv-ranking-item__icon--hover",
		"itemIconFocusMod": "sv-ranking-item__icon--focus",
		"itemGhostMod": "sv-ranking-item--ghost",
		"itemDragMod": "sv-ranking--drag",
		"itemOnError": "sv-ranking-item--error"
	},
	"buttongroup": {
		"root": "sv-button-group",
		"item": "sv-button-group__item",
		"itemIcon": "sv-button-group__item-icon",
		"itemDecorator": "sv-button-group__item-decorator",
		"itemCaption": "sv-button-group__item-caption",
		"itemHover": "sv-button-group__item--hover",
		"itemSelected": "sv-button-group__item--selected",
		"itemDisabled": "sv-button-group__item--disabled",
		"itemControl": "sv-visuallyhidden"
	},
	"list": {
		"root": "sv-list__container sd-list",
		"item": "sv-list__item sd-list__item",
		"itemBody": "sv-list__item-body sd-list__item-body",
		"itemSelected": "sv-list__item--selected sd-list__item--selected"
	},
	"actionBar": {
		"root": "sd-action-bar",
		"item": "sd-action",
		"defaultSizeMode": "",
		"smallSizeMode": "",
		"itemPressed": "sd-action--pressed",
		"itemAsIcon": "sd-action--icon",
		"itemIcon": "sd-action__icon",
		"itemTitle": "sd-action__title"
	},
	"variables": {
		"mobileWidth": "--sd-mobile-width",
		"imagepickerGapBetweenItems": "--sd-imagepicker-gap",
		"themeMark": "--sv-defaultV2-mark"
	},
	"tagbox": {
		"root": "sd-selectbase",
		"popup": "sv-dropdown-popup",
		"small": "sd-row__question--small",
		"selectWrapper": "",
		"other": "sd-input sd-comment sd-selectbase__other",
		"onError": "sd-input--error",
		"label": "sd-selectbase__label",
		"item": "sd-item sd-radio sd-selectbase__item",
		"itemDisabled": "sd-item--disabled sd-radio--disabled",
		"itemChecked": "sd-item--checked sd-radio--checked",
		"itemHover": "sd-item--allowhover sd-radio--allowhover",
		"itemControl": "sd-visuallyhidden sd-item__control sd-radio__control",
		"itemDecorator": "sd-item__svg sd-radio__svg",
		"cleanButton": "sd-tagbox_clean-button sd-dropdown_clean-button",
		"cleanButtonSvg": "sd-tagbox_clean-button-svg sd-dropdown_clean-button-svg",
		"cleanButtonIconId": "icon-clear",
		"cleanItemButton": "sd-tagbox-item_clean-button",
		"cleanItemButtonSvg": "sd-tagbox-item_clean-button-svg",
		"cleanItemButtonIconId": "icon-clear_16x16",
		"control": "sd-input sd-tagbox sd-dropdown",
		"controlValue": "sd-tagbox__value sd-dropdown__value",
		"controlValueItems": "sd-tagbox__value-items",
		"placeholderInput": "sd-tagbox__placeholder",
		"controlDisabled": "sd-input--disabled",
		"controlEmpty": "sd-dropdown--empty sd-tagbox--empty",
		"controlLabel": "sd-item__control-label",
		"filterStringInput": "sd-tagbox__filter-string-input sd-dropdown__filter-string-input",
		"materialDecorator": "sd-item__decorator sd-checkbox__decorator"
	}
}