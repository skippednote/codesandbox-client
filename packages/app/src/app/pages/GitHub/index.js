import * as React from 'react';

import { inject } from 'mobx-react';

import Navigation from 'app/pages/common/Navigation';
import MaxWidth from '@codesandbox/common/lib/components/flex/MaxWidth';
import Margin from '@codesandbox/common/lib/components/spacing/Margin';

import { Container, Wrapper } from './elements';
import Main from './main';

class GitHub extends React.PureComponent {
  componentDidMount() {
    this.props.signals.githubPageMounted();
  }

  render() {
    return (
      <MaxWidth>
        <Margin vertical={1.5} horizontal={1.5}>
          <Container>
            <Navigation title="GitHub Import" />
            <Wrapper>
              <Main />
            </Wrapper>
          </Container>
        </Margin>
      </MaxWidth>
    );
  }
}

export default inject(['signals'])(GitHub);
