import { html } from 'lit';
import '../src/meme-card-ashnaa.js';

export default {
  title: 'MemeCardAshnaa',
  component: 'meme-card-ashnaa',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <meme-card-ashnaa
      style="--meme-card-ashnaa-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </meme-card-ashnaa>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
