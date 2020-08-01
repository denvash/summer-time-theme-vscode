/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 *
 * @emails oncall+onavo_data_dev
 * @flow strict-local
 * @format
 */

'use strict';

import type { MintAppsCards_cards$key } from 'MintAppsCards_cards.graphql';

const MintEntityCard = require('MintEntityCard.react');
const React = require('React');
const {graphql, useFragment} = require('RelayHooks');

const fragment = graphql`
  fragment MintAppsCards_cards on MintCards {
    cards {
      id
      logo_url
      name
    }
  }
`;

export type AppsCardsProp = $ReadOnly<{
  cardsData: MintAppsCards_cards$key,
}>;

function MintAppsCards({cardsData}: AppsCardsProp): React.MixedElement {
  const {cards} = useFragment(fragment, cardsData);

  return (
    <>
      {cards.map(card => {
        const mintEntityId = card?.id ?? '';
        const name = card?.name ?? '';
        const icon = card?.logo_url ?? '';
        return (
          <MintEntityCard
            {...{name, icon, mintEntityId}}
            key={mintEntityId}
            details={['details']}
            metrics={[]}
          />
        );
      })}
    </>
  );
}

module.exports = MintAppsCards;
