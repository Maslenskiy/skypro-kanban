import {
  SHeader,
  SHeaderBlock,
  SHeaderContainer,
  SheaderLogoImg,
} from './Header.styled';
import HeaderNav from './HeaderNav/HeaderNav';

export default function Header() {
  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          <SheaderLogoImg>
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </SheaderLogoImg>

          <SheaderLogoImg>
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </SheaderLogoImg>
          <HeaderNav />
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader>
  );
}
