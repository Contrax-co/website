import * as colors from '../../theme/colors';
import { StyledCard } from './Home.styles';
import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import { H1, H3, B1 } from '../../components/text/Text';
import Button from '../../components/button/Button';
import { Block, Container, Row } from '../../components/blocks/Blocks';
import './Home.css';

export default function home() {
  return (
    <div style={{ backgroundColor: colors.white, overflowY: 'auto' }}>
      <Navigationbar />
      <Banner />
      {/* benefits section */}
      <Container className="benefits-container">
        <Row className="d-row justify-content-between">
          <StyledCard className="p-1">
            <H3 color={colors.secondaryMedium}>Safe &amp; Secure</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Control Your Keys</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Contrax is non-custodial. You maintain sole control of your
                private keys which in turn control your cryptocurrency.
              </B1>
            </Block>
            <Button
              size={'sm'}
              primary
              className="mt-4 p-3 px-4 radius-change"
              label="Learn More"
              onClick={() =>
                window.open(
                  'https://docs.contrax.finance/start/wallet-setup',
                  '_blank'
                )
              }
            />
          </StyledCard>

          <StyledCard className="p-1">
            <H3 color={colors.secondaryMedium}>User-Friendly</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Navigate with Ease</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Create a new wallet by signing in with social media, or connect
                an external wallet, then enjoy a gas-less experience.
              </B1>
            </Block>
            <Button
              size={'sm'}
              primary
              className="mt-4 p-3 px-4 radius-change"
              label="Get Started"
              onClick={() =>
                window.open(
                  'https://docs.contrax.finance/start/quickstart',
                  '_blank'
                )
              }
            />
          </StyledCard>

          <StyledCard className="p-1">
            <H3 color={colors.secondaryMedium}>Auto-Compounding</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Maximize Yields</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Enter a vault in just a few clicks, then sit back &amp; watch
                the magic happen as your rewards continously compound.
              </B1>
            </Block>
            <Button
              size={'sm'}
              primary
              className="mt-4 p-3 px-4 radius-change"
              label="Let's Grow!"
              onClick={() =>
                window.open('https://beta.contrax.finance/', '_blank')
              }
            />
          </StyledCard>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
