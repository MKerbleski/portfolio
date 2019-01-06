export function sectionHeader(){
    return `
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3px;
    font-size: 14px;
    .left {
        float: left;
    }
    .center {
        text-align: center;
        color: black;
    }
    .right {
        display: flex;
        justify-content: flex-end;
    }
    `}
    
    export function sectionTitle(){
        return `
        font-size: 12px;
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
    // border: 1px solid red;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        width: 100%;
        font-size: 12px;
        * {
            margin: 0;
            width: 100%;
            box-sizing: border-box;
        }
        li {
            font-size: 14px;
        }
`}