import styled from 'styled-components';

export const Container = styled.div`
    background: #202020;
    
    header{
        display: flex;
        justify-content: center;
        img{
            width: 130px;
            margin: 5px 0; 
        }
    }

    nav{
        display: flex;
        justify-content: center;

        ul{
            display: flex;

            li{
                padding: 10px 5px;
                font-size: 14px;
                color: #ccc;
                font-weight: bold;

                &:hover{
                    padding-bottom: 7px;
                    border-bottom: 3px solid #EE171F;
                    color: #fff;
                }
            }


        }
    }
    
`;