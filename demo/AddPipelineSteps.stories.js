import React, { useState, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';

import AddPipelineSteps from 'components/dumb/AddPipelineSteps.react';

function AddPipelineContainer({ style }) {
  return (
    <AddPipelineSteps
      algorithms={['a1', 'a2']}
      pipelines={['p1', 'p2']}
      onSubmit={action('click')}
      style={style}
    />
  );
}

storiesOf('Basics|AddPipelineSteps', module)
  .add('Default', () => <AddPipelineContainer />)
  .add('Sidebar', () => (
    <Sidebar
      sidebar={<AddPipelineContainer style={{ width: '120vh' }} />}
      pullRight={true}
      docked={true}
    >
      <div />
    </Sidebar>
  ));

AddPipelineContainer.propTypes = {
  style: PropTypes.object
};
