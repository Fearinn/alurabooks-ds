import React from 'react';
import { AbModal } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IAbModal from '../src/interfaces/Modal';

export default {
  title: 'Components/AbModal',
  component: AbModal,
} as ComponentMeta<typeof AbModal>;

const Template: ComponentStory<typeof AbModal> = (args: IAbModal) => (
  <AbModal {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "I'm a modal",
  open: true,
  htmlId: "abmodal-id"
} as IAbModal;
