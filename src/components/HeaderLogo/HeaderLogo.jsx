import * as S from '../Header/header.styled.js'
function HeaderLogo(){
    return (
        <>
         <div>
              <a href="" target="_self">
                <S.HeaderLogoImg src="public/logo.png" alt="logo" />
              </a>
            </div>
            <div>
              <a href="" target="_self">
                <S.HeaderLogoImg src="public/logo_dark.png" alt="logo" />
              </a>
            </div>
        </>
    )
}
export default HeaderLogo