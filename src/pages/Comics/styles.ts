import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;

    h1{
        margin-top: 50px;
        text-align: center;
    }

    ul{
        margin: 50px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        li{
            .comic-img{
                background: #ccc;
                height: 400px;
                overflow: hidden;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    transition: 1s;

                    &:hover{
                        transform: scale(1.1);
                    }
                }
            }

            .comic-content{
                background: #eee;
                position: relative;

                .text{
                    padding: 20px;

                    h2{
                        text-align: center;
                        margin: 0 0 5px;
                    }

                    p{
                        font-weight: bold;
                    }

                    span{
                        display: block;
                        margin: 10px 0 40px;
                    }
                }

                footer{
                    margin-top: 20px;
                    background: #d6d6d6;
                    border-top: 1px solid #bbb;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    padding: 10px 0;
                    text-align: center;
                }
            }   
        }
    }

    .button{
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
        button{
            padding: 8px 25px;
            border: 0;
            border-radius: 0;
            color: #FFF;
            font-weight: bold;
            background: #EE171F;

            &:hover{
                background: #fc383f;
            }
        }
    }


    @media only screen and (max-width: 1000px){
        width: 90%;
    }

    @media only screen and (max-width: 750px){
        ul{
            grid-template-columns: 1fr;
        }
    }
`;