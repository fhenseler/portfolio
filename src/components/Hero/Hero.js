import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hello there!
        </SectionTitle>
        <SectionText>  
        I'm Federico Henseler, <br />
        a Front-end Web Developer <br />
        with six months of work experience <br />
        in this field.
         <br />
        </SectionText>
        <Link href="/portfolio/#about">
          <Button onClick={props.handleClick}>Read More</Button>
        </Link>
        <br /><br /><br /><br />
      </LeftSection>
    </Section>
  </>
);

export default Hero;