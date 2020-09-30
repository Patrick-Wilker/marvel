import styled from 'styled-components';

export const Search = styled.div`
    background: #333333;
    padding: 10px 0;
    display: flex;
    justify-content: center;

    form{
        width: 70%;

        .input-group{
            label{
                display: block;
                margin: 0 0 10px;
                font-size: 1.5rem;
                color: #FFF;
            }

            input{
                font-size: 1.2rem;
                display: block;
                width: 100%;
                padding: 5px 8px;
                margin: 0 0 10px;

                &:focus{
                    outline: 0;
                }
            }
        }

        .button{
            width: 100%;
            text-align: right;
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
    }
    
    @media only screen and (max-width: 800px){
        form{
            width: 90%;
            .input-group{
                label{
                    font-size: 1rem;
                }
                input{
                    font-size: 1rem;
                }
            }
        }
    }
    
`;

export const Results = styled.div`

    h1{
        width: 70%;
        margin: 50px auto 20px;
    }

    .character{
        width: 70%;
        margin: 0 auto 50px;
        display: flex;

        .character-img{
            width: 35%;
            height: 350px;
            background: #ccc;
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

        .character-content{
            background: #eee;
            width: 65%;
            padding: 20px;
            position: relative;

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

            footer{
                width: 100%;
                position: absolute;
                margin-left: -20px;
                margin-bottom: 0;
                bottom: 0;
                text-align: center;
                padding: 8px 0;
                background: #d6d6d6;
                border-top: 1px solid #bbb;
            }

        }
    }

    .comics{
        width: 70%;
        margin: 0 auto 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        li{
            .comic-img{
                background: #ccc;
                height: 500px;
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
        h1{
            width: 90%;
        }
        .character{
            width: 90%;
        }
        .comics{
            width: 90%;
        }
    }

    @media only screen and (max-width: 600px){
        .character{
            display: block;

            .character-img{
                width: 100%;
                height: 350px;
            }

            .character-content{
                width: 100%;
            }
        }
        .comics{
            grid-template-columns: 1fr;
        }
    }
`;