import mine from "../img/mine.png";

export default [
    [{ 
        id: "mine_1",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_2",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_3",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_4",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_5",
        src: mine,
        cicked: false
    }],
    [{ 
        id: "mine_1",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_2",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_3",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_4",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_5",
        src: mine,
        cicked: false
    }],
    [{ 
        id: "mine_1",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_2",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_3",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_4",
        src: mine,
        cicked: false
    },
    { 
        id: "mine_5",
        src: mine,
        cicked: false
    }]
]

export const randomMines = (difficulty, length) => {
    let result = [];

    for(let i=0;i<difficulty;i++){
        result.push(`mine_${Math.floor(Math.random() * length) + 1}`);
    }

    return result;
}
