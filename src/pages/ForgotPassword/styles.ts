import styled, {keyframes} from 'styled-components';
import signInBackground from '../../assets/sign-in-background.png'
import { shade } from 'polished';
export const Container = styled.div`

height:100vh;
display:flex;

align-items:stretch;


`;



export const Background = styled.div`
    flex:1;
    background:url(${signInBackground}) no-repeat center;
    background-size:cover;


`;

export const Content = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    place-content:center;
    width:100%;
    max-width:700px;


`;


const appearFromLeft = keyframes`

from {
    opacity:0;
    transform: translateX(-50px);

} to{
    opacity:1;
    transform: translateX(0);
}

`;

export const AnimationContainer = styled.div`

    align-items:center;
    display:flex;
    flex-direction:column;
    place-content:center;
    width:100%;
    max-width:700px;
    animation: ${appearFromLeft} 1s;



form{
        margin:80px 0;
        width:340px;
        text-align:center;

        h1{
            margin-bottom:24px;
        }
        a.a1 {
            color:#f4ede8;
            display:block;
            margin-top:24px;
            text-decoration:none;
            transition:0.2s;
            &:hover{
                color:${shade(0.2, '#f4ede8')};
            }
        }
        & + a {
            color:#ff9000;
        }
    }

    a.a2 {
            color:#ff9000;
            display:block;

            text-decoration:none;
            transition:0.2s;
            &:hover{
                color:${shade(0.2, '#ff9000')};
            }


            align-items:center;
            svg{
                position:relative;
                top:2px;
                margin-right:16px;
            }

    }


`;
