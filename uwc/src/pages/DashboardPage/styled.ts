import styles from 'styled-components'


interface Props{
    backgroundColor : string;
}

export const SingleBoxContainer = styles.div<Props>`

    display:flex;
    align-items:center;
    width:180px;
    height:180px;
    background-color: ${(element)=>(`${element.backgroundColor}`)};
    border-radius:10px;
    flex-direction:column;
    justify-content:center;

    transition: 0.3s;

    &:hover{
        opacity: 1;
        transform: translateY(-30px)
    }

`