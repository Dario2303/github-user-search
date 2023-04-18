import styled from '@emotion/styled';
import React from 'react';
import Links from './Links';
import iconLocation from '../img/icon-location.svg';
import iconTwitter from '../img/icon-twitter.svg';
import iconWeb from '../img/icon-website.svg';
import iconCompany from '../img/icon-company.svg';
import {formatearFecha} from '../helpers/index';

const Box = styled.div`
    display: grid;
    padding: 3rem;
    grid-template-columns: 11.7rem 1fr;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: 41.9rem;
    background-color: var(--form-background);
    margin-top: 2rem;
    border-radius: 1rem;
    @media (min-width: 768px) { 
        grid-template-rows: auto auto 8.5rem auto;
    }
`

const Image = styled.div`
    border-radius: 100%;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    display: block;
    @media (min-width: 768px) { 
        grid-row: 1 / 4;
    }
    & img {
        width: 10rem;
    }
`

const PrincipalDates = styled.div`
    p {
        color: var(--date);
    }
    
    @media (min-width: 768px) { 

        p {
            text-align: right;
        }
    }
`

const Name = styled.div`
    h2 {
        color: var(--font-username);
    }
    @media (min-width: 768px) { 
        float: left;
    }
`

const Bio = styled.p `
    grid-column: 1 / 3;
    @media (min-width: 768px) { 
        grid-column: 2 / 3;
    }
`

const Follow = styled.div`
    display: flex;
    align-items: center;
    padding: 0 5rem;
    width: 100%;
    height: 8.5rem;
    border-radius: 1rem;
    background-color: var(--background);
    justify-content: space-between;
    grid-column: 1 / 3;
    @media (min-width: 768px) { 
        grid-column: 2 / 3;
    }
`

const Contact = styled.div`
    display: grid;
    align-content: space-evenly;
    width: 100%;
    grid-column: 1 / 3;
    @media (min-width: 376px) { 
        grid-template-columns: repeat(2, 1fr);
        grid-column: 1 / 3;
    }
    @media (min-width: 768px) { 
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
            <Name>
                <h2>{user.name}</h2>
            </Name>
            <p>Joined {formatearFecha(user.created_at)}</p>
            <a href={user.html_url}></a>
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
        <Contact>
            <Links link={user.location ? user.location : 'Not Available'}
                    icon={iconLocation}
                    />

            <Links link={user.twitter_username ? user.twitter_username : 'Not Available'}
                    icon={iconTwitter}
                    route={user.twitter_username ? user.twitter_username : null}
                    />

            <Links link={user.blog ? user.blog : 'Not Available'}
                    icon={iconWeb}
                    route={user.blog ? user.blog : null}
            />

            <Links link={user.company ? '@github' : 'Not Available'}
                    icon={iconCompany}
                    route={user.company ? user.html_url : null}/>
        </Contact>
    </Box>
  )
}

export default UserInfo
