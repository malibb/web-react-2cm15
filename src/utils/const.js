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

//eslint-disable-next-line import/no-anonymous-default-export
export default {
    levelsNumbers,
    levelsFigures,
};
