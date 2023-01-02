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
            <H3 color={colors.secondaryMedium}>Built on Arbitrum</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Secure &amp; Scalable</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Arbitrum is secured by Ethereum, and saves gas fees by moving
                computations and data storage off of the main chain.
              </B1>
            </Block>
            <Button
              size={'sm'}
              primary
              className="mt-4 p-3 px-4 radius-change"
              label="Learn More"
              onClick={() =>
                window.open(
                  'https://docs.contrax.finance/contrax-dapp/farms',
                  '_blank'
                )
              }
            />
          </StyledCard>

          <StyledCard className="p-1">
            <H3 color={colors.secondaryMedium}>No-code Design</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Highly Accessible</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Designed for anyone to use. Create, manage and farm crypto
                assets on Arbitrum with no coding necessary.
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
            <H3 color={colors.secondaryMedium}>Automated Tools</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Optimized Yields</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Deposit assets into our auto-compounding vaults with just a few
                clicks, then sit back and watch the magic happen!
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
