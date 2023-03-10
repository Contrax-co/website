import Button from '../button/Button';
import { H3, H2, H1 } from '../text/Text';
import * as colors from '../../theme/colors';
import { Col, Container, Row } from '../blocks/Blocks';
import { Link } from 'react-router-dom';
import './Banner.css';

import { Image } from '../image/Image';
import banner1 from '../../images/banner-1.png';
import arbitrum from '../../images/arbitrum_grayscaled.png';
import arbiscan from '../../images/arbiscan_grayscaled.png';
import sushiswap from '../../images/sushiswap_grayscaled.png';

export default function Banner() {
  return (
    <div style={{ background: colors.pageBgLight, paddingBottom: '1rem' }}>
      <header className="masthead home-background">
        <Container className="h-100 hero-container">
          <Row>
            <Col size="7" className="my-auto">
              <p className="hero-h2-container">
                <H2 className="hero-h2" color={colors.secondaryMedium}>
                  Open-Source. Non-custodial.
                </H2>
              </p>
              <H1 className="hero-h1" color={colors.primary}>
                Crypto Yields
                <br />
                Made Simple
              </H1>
              <Row>
                <H3
                  color={colors.secondaryDark}
                  size="1.55rem"
                  className="hero-h3"
                >
                  Stake and start earning in just a few clicks
                </H3>
              </Row>
              <Image
                src={arbitrum}
                className="mt-3 arbitrum-logo"
                alt="Arbitrum"
              />
              <Image
                src={sushiswap}
                className="mt-3 sushi-logo"
                alt="Sushiswap"
              />
              <Image
                src={arbiscan}
                className="mt-3 arbiscan-logo"
                alt="Arbiscan"
              />
              <br />
              <Button
                size="sm"
                className="ml-0 mr-2 mb-3 mt-4 p-3 px-4 radius-change"
                primary
                label={'Explore Docs'}
                onClick={() =>
                  window.open('https://docs.contrax.finance/', '_blank')
                }
              />
              <Link to="/about" className="hero-btn2">
                <Button
                  size="sm"
                  className="mx-2 mb-3 mt-4 p-3 px-4 radius-change"
                  primary
                  label={'About Us'}
                />
              </Link>
            </Col>
            <Col size="5" className="pt-5">
              <Image
                src={banner1}
                alt="banner"
                className="mt-3 pt-4 hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
