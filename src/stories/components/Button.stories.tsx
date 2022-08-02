import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import {  PrimaryButton as Button } from '../../components/Button';
import ImportCopy from '../../helpers/ImportCopy';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    docs: {
      page: ()=> (
        <>
          <Title />
          <Subtitle />
          <Description />
          <ImportCopy nameComponent='PrimaryButton'/>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    label: 'Success',
    disabled: false
  };