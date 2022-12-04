import styles from 'styled-components'


export const Container = styles.div`

    display:flex;
    border-bottom:solid;
    border-left:solid; 
    border-right:solid;
    border-radius:10px;
    width:100%;
    cursor:pointer;
    &:hover{
        background-color:gainsboro;
    }
`

export const SingleNumber = styles.div`
    width:20px;
    height:20px;
    border:solid;
    border-right: none;
    border-width:thin;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    &:hover{
        background-color: dodgerblue;
    }
`