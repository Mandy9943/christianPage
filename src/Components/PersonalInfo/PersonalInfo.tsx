import React from 'react'
import styled from 'styled-components'
interface Ilink {
    link:string;
    name:string;

}
const links:Ilink[] = [
    {
        link : "https://instagram.com/chris.officia.lpx?igshid=13mbmrw9ok8j",
        name : "Instagram"
    },
    {
        link: "https://www.facebook.com/christian.faravel.52",
        name: "Facebook"
    }
]
const PersonalInfo = () => {
    return (
        <PersonalInfoS>
            <ul>
                {
                    links.map((link) =>{
                        return (
                            <LiS>
                                <a href={link.link}>{link.name}</a>
                            </LiS>
                        )
                    })
                }
            </ul>
        </PersonalInfoS>
    )
}

export default PersonalInfo

const PersonalInfoS = styled.div`

`
const LiS = styled.li`
    font-size: 28px;
    list-style: none;
    a{
        color:white;
        :hover{
            color: #2CCAF9;
        }
    }
`