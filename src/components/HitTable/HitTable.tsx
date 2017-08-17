import * as React from 'react';
import { Hit, HitMap, RequesterMap, SearchOptions } from '../../types';
import { Card, ResourceList } from '@shopify/polaris';
import HitItem from './HitItem';
import EmptyHitTable from './EmptyHitTable';

import { sortByTime } from '../../utils/sorting';

export interface Props {
  readonly hits: HitMap;
  readonly requesters: RequesterMap;
  readonly options: SearchOptions;
}

export interface Handlers {
  readonly onFetch: (options: SearchOptions) => void;
}

const HitTable = ({ hits, requesters, options, onFetch }: Props & Handlers) => {
  const sortedHits = (unsortedHits: HitMap) =>
    unsortedHits.sort(sortByTime).toArray().slice(0, 50);

  return hits.isEmpty() ? (
    <EmptyHitTable onFetch={onFetch} options={options} />
  ) : (
    <Card>
      <ResourceList
        items={sortedHits(hits)}
        renderItem={(hit: Hit) => (
          <HitItem hit={hit} requester={requesters.get(hit.requesterId)} />
        )}
      />
    </Card>
  );
};

export default HitTable;
