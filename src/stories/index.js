import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';

import App from '../App';
const styles = {
  textAlign: 'center',
};


const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);
addDecorator(CenterDecorator);


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('App', module).add('to Storybook', withInfo(`
  description or documentation about my component, supports markdown

  ~~~js
  <Button>Click Here</Button>
  ~~~

`)(() => <App showApp={linkTo('Button')} />));

  storiesOf('Component', module)
  .add('simple info',
    withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() =>
      '<Component>Click the "?" mark at top-right to view the info.</Component>'
    )
  )