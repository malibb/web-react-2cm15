export const levelsFigures = [{
        id: 1,
        title: 'Level 1',
        figure: 'circle',
        answers: [
            { num: '3', den: '3'},
            { num: '1', den: '3'},
            { num: '2', den: '3'}
        ],
        options: [
            { num: '1', den: '1'},
            { num: '1', den: '2'},
            { num: '1', den: '3'}
        ],
        stars: 3
    },
    {
        id:2,
        title: 'Level 2',
        figure: 'square',
        answers: [
            { num: '3', den: '3'},
            { num: '1', den: '2'},
            { num: '2', den: '2'}
        ],
        options: [
            { num: '1', den: '1'},
            { num: '1', den: '2'},
            { num: '1', den: '3'}
        ],
        stars: 3
    },
    {
        id:3,
        title: 'Level 3',
        figure: 'triangle',
        stars: 3,
        answers: [
            { num: '1', den: '2'},
            { num: '1', den: '4'},
            { num: '2', den: '3'}
        ],
        options: [
            { num: '1', den: '4'},
            { num: '1', den: '2'},
            { num: '1', den: '3'}
        ],
    },
    {
        id:4,
        title: 'Level 4',
        figure: 'square',
        stars: 3
    },
    {
        id: 5,
        title: 'Level 5',
        figure: 'pentagon',
        stars: 3
    }    
];

export const levelsNumbers = [{
    title: 'Level 1',
    number: '1',
    stars: 3
},
{
    title: 'Level 2',
    number: '2',
    stars: 3
},
{
    title: 'Level 3',
    number: '3',
    stars: 3
},
{
    title: 'Level 4',
    number: '4',
    stars: 3
},
{
    title: 'Level 5',
    number: '5',
    stars: 3
}

];

export const forms = {
    edit: [
        {
            label:'Title: ',
            type:'text',
            placeholder:'',
            required: true,
            name: 'title',
        },
        {
            label:'Nivel: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'figure',
        },
        {
            label:'Stars',
            type:'number',
            placeholder:'',
            required: true,
            name: 'stars',
        },
        {
            label:'Nominador 1: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'num1',
        },
        {
            label:'Nominador 2: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'num2',
        },
        {
            label:'Nominador 3: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'num3',
        },{
            label:'Denominador 1: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'den1',
        },
        {
            label:'Denominador 2: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'den2',
        },
        {
            label:'Denominador 3: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'den3',
        },
        {
            label:'Opciones nominador 1: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'OPnum1',
        },
        {
            label:'Opciones nominador 2: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'OPnum2',
        },
        {
            label:'Opciones nominador 3: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'OPnum3',
        },{
            label:'Opciones denominador 1: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'OPden1',
        },
        {
            label:'Opciones denominador 2: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'OPden2',
        },
        {
            label:'Opciones denominador 3: ',
            type:'number',
            placeholder:'',
            required: true,
            name: 'OPden3',
        },
    ]
};

//eslint-disable-next-line import/no-anonymous-default-export
export default {
    levelsNumbers,
    levelsFigures,
    forms
};
