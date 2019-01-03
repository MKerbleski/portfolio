export function dateAndTitle(){
    return `
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3px;
    .one {
        float: left;
    }
    .two {
        text-align: center;
        color: black;
    }
    .three {
        display: flex;
        justify-content: flex-end;
    }
`}

export function sectionTitle(){
    return `
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        border-bottom: 1px solid black;
        h3 {
            margin: 0;
        }
`}

export function sectionContainer(){
    return `
    border: 1px solid red;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        width: 100%;
        * {
            margin: 0;
            width: 100%;
            box-sizing: border-box;
        }
        li {
            font-size: 14px;
        }
`}