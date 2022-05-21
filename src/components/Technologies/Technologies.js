import React from 'react';
import { DiFirebase, DiReact, DiPhp, DiAngularSimple, DiGithubBadge, DiBootstrap, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've been learning a range of technologies in the web development world,
      leaning towards Front-End projects for the most part.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
          <DiReact size="3rem" />
        </picture>        
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Angular <br />
            and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPhp size="3rem" />
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Basic knowledge of <br />
            PHP and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithubBadge size="3rem" />
          <DiBootstrap size="3rem" />
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Extras</ListTitle>
          <ListParagraph>
            Firebase, Git, <br />
            Bootstrap, C#, <br />
            Typescript and Python.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
