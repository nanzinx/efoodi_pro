import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import faceSrc from '../../assets/images/face.png'
import instaSrc from '../../assets/images/insta.png'
import LogoImgHome from '../../assets/images/logo.png'
import twSrc from '../../assets/images/twitter.png'

import * as S from './styles'

const Footer = () => (
  <S.Footers className="container">
    <S.SectionFooter>
      <Link title="Clique aqui para retornar a pagina home" to="/">
        <img className="imagemLogo" src={LogoImgHome} alt="efood" />
      </Link>
      <S.RedeSociais>
        <HashLink to="https://www.instagram.com">
          <img src={instaSrc} alt="Instagram" />
        </HashLink>
        <HashLink to="https://www.facebook.com">
          <img src={faceSrc} alt="Facebook" />
        </HashLink>
        <HashLink to="https://www.twitter.com">
          <img src={twSrc} alt="Twitter" />
        </HashLink>
      </S.RedeSociais>
    </S.SectionFooter>
    <S.Titulo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Titulo>
  </S.Footers>
)

export default Footer
