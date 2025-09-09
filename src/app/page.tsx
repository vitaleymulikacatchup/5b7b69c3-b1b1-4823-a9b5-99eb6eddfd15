use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const navbarProps = {
  logoSrc: "/images/logo.svg",
  logoAlt: "DogPaw Memecoin",
  leftButtonText: "",
  rightButtonText: "Buy DOGPAW",
  onLeftButtonClick: () => {},
  onRightButtonClick: () => {},
  className: "",
  containerClassName: "",
  logoClassName: "",
  buttonClassName: "",
  buttonBgColor: "",
  buttonHoverBgColor: "",
  buttonTextColor: "",
  buttonHoverTextColor: "",
};

const heroProps = {
  title: "Welcome to DogPaw Memecoin",
  subtitle: "Join the playful revolution in crypto!",
};

const aboutProps = {
  title: "What is DogPaw?",
  descriptions: ["A community-driven meme token for dog lovers!", "Harnessing playful energy and community values to create something special."],
};

const howToBuyProps = {
  title: "How to Buy DOGPAW",
  steps: [
    { title: "Step 1", description: "Connect your wallet.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
    { title: "Step 2", description: "Buy DOGPAW tokens.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
    { title: "Step 3", description: "Join the community.", image: "/images/placeholder3.avif", position: "right", isCenter: false },
  ],
};

const tokenomicsProps = {
  title: "Tokenomics",
  description: "Transparent tokenomics to ensure sustainability and growth.",
  tokenData: [
    { value: "1,000,000,000", description: "Total Supply" },
    { value: "25%", description: "Marketing" },
    { value: "50%", description: "Liquidity" },
  ],
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase {...navbarProps} />
      <div id="hero" data-section="hero">
        <BillboardHero {...heroProps} />
      </div>
      <div id="about" data-section="about">
        <CtaAbout {...aboutProps} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D {...howToBuyProps} />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics {...tokenomicsProps} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="DogPaw Memecoin Logo" logoText="DogPaw Memecoin" items={[{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }]} />
      </div>
    </SiteThemeProvider>
  );
}