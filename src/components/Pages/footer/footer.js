import React from 'react'
import { FooterContainer, FooterItems, Copyright } from './footerStyle'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>
        <FaTwitter />
        <FaLinkedin />
        <FaGithub />
        <Copyright> ©SCHEDULEGO 2021 | Cédric Ngouné </Copyright>{' '}
      </FooterItems>{' '}
    </FooterContainer>
  )
}

export default Footer
