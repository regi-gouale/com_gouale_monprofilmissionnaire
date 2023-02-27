export const choices = [
    { value: 'Tout à fait', text: 'Tout à fait', score: 4, id: 1 },
    { value: 'Assez bien', text: 'Assez bien', score: 3, id: 2 },
    { value: 'Je ne sais pas', text: 'Je ne sais pas', score: 2, id: 3 },
    { value: 'Un peu', text: 'Un peu', score: 1, id: 4 },
    { value: 'Pas du tout', text: 'Pas du tout', score: 0, id: 5 },
];
export const quizzType = 'radiogroup';

export const questionsJson = {
    title: 'Profil Missionnaire',
    showProgressBar: 'bottom',
    showTimerPanel: 'top',
    maxTimeToFinishPage: 15,
    maxTimeToFinish: 1800,
    showTimerPanelMode: 'all',
    firstPageIsStarted: true,
    startSurveyText: 'Découvrez votre profil missionnaire',
    pages: [
        {
            elements: [{
                type: 'html',
                html: 'Veuillez répondre aux questions suivantes en vous basant sur votre expérience personnelle. <br/> <br/> <b>Attention:</b> Vous aurez 15 secondes pour répondre à chaque question.'
            }, {
                type: 'text',
                name: 'username',
                title: 'Vos noms et prénoms',
                isRequired: true,
            }, {
                type: 'text',
                name: 'email',
                title: 'Votre adresse email',
                isRequired: true,
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q1',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q2',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q3',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q4',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q5',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q6',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q7',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
        {
            elements: [{
                type: quizzType,
                name: 'q8',
                title: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.',
                isRequired: true,
                choices: choices,
                profil: 'gagneur-ames'
            }],
        },
    ]
}

