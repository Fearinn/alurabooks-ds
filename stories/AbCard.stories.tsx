import React from 'react';
import { AbCard, AbTag } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IAbCard from '../src/interfaces/Card';

export default {
  title: 'Components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = (args: IAbCard) => <AbCard {...args}/>;

export const Default = Template.bind({});

Default.args = {
  children: "I'm a card",
} as IAbCard;
