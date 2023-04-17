import styled from '@emotion/styled'
import React from 'react'
import webImage from '../img/icon-website.svg'

const Box = styled.div`
    box-sizing: border-box;
    display: grid;
    padding: 3rem;
    grid-template-columns: 11.7rem 1fr;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: 41.9rem;
    background-color: var(--form-background);
    margin-top: 2rem;
    border-radius: 1rem;
`

const Image = styled.div`
    border-radius: 100%;
    width: 10rem;
    height: 10rem;
    
    overflow: hidden;
    display: block;
    @media (min-width: 376px) { 
        grid-row: 1 / 5;
    }
    & img {
        width: 10rem;
    }
`

const PrincipalDates = styled.div`
    
`

const Bio = styled.p `
    grid-column: 1 / 3;
    @media (min-width: 376px) { 
        grid-column: 2 / 3;
    }
`

const Follow = styled.div`
    display: flex;
    width: 100%;
    border-radius: 1rem;
    background-color: var(--background);
    justify-content: space-between;
    grid-column: 1 / 3;
    @media (min-width: 376px) { 
        grid-column: 2 / 3;
    }
`



const UserInfo = ({user}) => {
  return (
    <Box>
        <Image>
            <img src={user.avatar_url}/>
        </Image>
        <PrincipalDates>
            <h2>{user.name}</h2>
            <p>{user.created_at}</p>
        </PrincipalDates>
        <Bio>{user.bio}</Bio>
        <Follow>
            <div>
                <p>Repos</p>
                <h2>{user.public_repos}</h2>
            </div>
            <div>
                <p>Followers</p>
                <h2>{user.followers}</h2>
            </div>
            <div>
                <p>Following</p>
                <h2>{user.following}</h2>
            </div>
        </Follow>

    </Box>
  )
}

export default UserInfo
