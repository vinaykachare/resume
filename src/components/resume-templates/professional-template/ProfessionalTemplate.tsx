import React, { useState } from "react";
import shallow from "zustand/shallow";
import styled from "styled-components";
import { FlexCol } from "../../common/styles";
import { getIcon } from "../../common/icons";

import { Section, SectionIntro } from "./core/Section";
import { Intro } from "./features/Intro";
import { Description } from "./features/Description";
import { RatedSection } from "./features/RatedSection";
import { UnratedSection } from "./features/UnratedSection";
import { Exp } from "./features/Exp";
import { EduSection } from "./features/EduSection";
import { ListSection } from "./features/ListSection";
import {
  useIntro,
  useExp,
  useSkills,
  useAchievements,
  useEducation,
} from "../../stores/data.store";

const LeftSection = styled(FlexCol)`
  flex-basis: 66%;
  row-gap: 20px;
  height: 100%;
`;

const RightSection = styled(FlexCol)`
  flex-basis: 34%;
  row-gap: 20px;
  height: 100%;
  justify-content: space-between;
`;

export function ProfessionalTemplate() {
  const intro = useIntro((state: any) => state.intro);
  const education = useEducation((state: any) => state.education);
  const experience = useExp((state: any) => state.experience);
  const achievements = useAchievements(
    (state: any) => [state.keyProjects, state.certificates],
    shallow
  );

  const [keyProjects, certificates] = achievements ?? [null, null];
  const [technical, frameworks, exposure, methodology, tools] = useSkills(
    (state: any) => [
      state.technical,
      state.frameworks,
      state.exposure,
      state.methodology,
      state.tools,
    ],
    shallow
  );

  const leftSections = [
    {
      title: experience?.title,
      component: <Exp companies={experience?.companies} />,
      styles: { flexGrow: 1 },
    },
    {
      title: keyProjects?.title,
      component: <ListSection items={keyProjects?.items} />,
    },
    {
      title: certificates?.title,
      component: <ListSection items={certificates?.items} />,
    },
  ];

  const rightSections = [
    {
      title: intro.about?.title,
      component: (
        <Description
          photo={intro.photo}
          description={intro.about?.description}
        />
      ),
    },
    {
      title: intro.objective?.title,
      component: <Description description={intro.objective?.description} />,
    },
    {
      title: technical?.title,
      component: <RatedSection items={technical?.items} />,
    },
    { title: frameworks?.title, component: <UnratedSection items={frameworks?.items} /> },
    { title: exposure?.title, component: <UnratedSection items={exposure?.items} /> },
    {
      title: methodology?.title,
      component: <UnratedSection items={methodology?.items} />,
    },
    { title: tools?.title, component: <UnratedSection items={tools?.items} /> },
    {
      title: education?.title,
      component: <EduSection items={education?.items} />,
    },
  ];

  return (
    <>
      <LeftSection>
        <SectionIntro title={intro.name} icons={intro.social}>
          <Intro data={intro} />
        </SectionIntro>

        {leftSections.map(({ title, component, styles }) => {
          if (!title)
            return null;

          return (
            <Section icon={getIcon(title)} title={title} styles={styles} key={title}>
              {component}
            </Section>
          );
        })}
      </LeftSection>

      <RightSection>
        {rightSections.map(({ title, component }) => {
          if (!title)
            return null;

          return (
            <Section icon={getIcon(title)} title={title} key={title}>
              {component}
            </Section>
          );
        })}
      </RightSection>
    </>
  );
}
