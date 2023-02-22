import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbQuantity } from '../src';
import { IAbQuantity } from '../src/interfaces/Quantity';

export default {
  title: 'Components/AbQuantity',
  component: AbQuantity,
} as ComponentMeta<typeof AbQuantity>;

const Template: ComponentStory<typeof AbQuantity> = (args: IAbQuantity) => <AbQuantity {...args}/>;

export const Default = Template.bind({})

Default.args = {
  initialQuantity: 0,
  onChangeQuantity: (quantity: number) => {console.log(quantity)}
} as IAbQuantity