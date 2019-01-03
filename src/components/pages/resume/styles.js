export function dateAndTitle(){
    return `
    display: flex;
    flex-direction: row;
    justify-content: center;
    .one {
        float: left;
    }
    .two {
        text-align: center;
        color: black;
        a{
            :hover{
                cursor: pointer;
                text-decoration: underline;
            }
            &:visited{
                color: black;
                text-decoration: none;
            }
        }
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
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        * {
            margin: 0;
            width: 100%;
            box-sizing: border-box;
            
        }
`}