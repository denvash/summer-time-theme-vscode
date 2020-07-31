/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @emails oncall+onavo_data_dev
 * @flow strict-local
 * @format
 */

"use strict";

import type { MintAppsLineChartsQueryResponse } from "MintAppsLineChartsQuery.graphql";

type ReadyState = {
  error: ?Error,
  props: ?MintAppsLineChartsQueryResponse,
  ...
};

const MintStore = require("MintStore");
const React = require("React");
const { useContext } = require("React");
const { graphql, useRelayEnvironment } = require("RelayHooks");
const { QueryRenderer } = require("RelayModern");
const MintAppsLineChart = require("MintAppsLineChart.react");
const MintChartsUtils = require("MintChartsUtils");
const useMintAppsTypeaheadBuilderConfig = require("useMintAppsTypeaheadBuilderConfig");

const XDSCard = require("XDSCard.react");
const XDSCardHeader = require("XDSCardHeader.react");
const XDSSpinner = require("XDSSpinner.react");
const XDSText = require("XDSText.react");

const query = graphql`
  query MintAppsLineChartsQuery(
    $entity_ids: [String!]!
    $geo_ids: [String!]!
    $platforms: [String!]!
    $age_brackets: [String!]!
    $genders: [String!]!
    $days_range: Int!
    $mint_data_view_mode: MintDataViewMode!
  ) @fb_owner(oncall: "onavo_data_dev") {
    mint_apps_line_charts(
      entity_ids: $entity_ids
      geo_ids: $geo_ids
      platforms: $platforms
      age_brackets: $age_brackets
      genders: $genders
      days_range: $days_range
      mint_data_view_mode: $mint_data_view_mode
    ) {
      lines_data {
        dap {
          ...MintAppsLineChart_linechart
        }
        wap {
          ...MintAppsLineChart_linechart
        }
        map {
          ...MintAppsLineChart_linechart
        }
        reach_1_days {
          ...MintAppsLineChart_linechart
        }
        reach_7_days {
          ...MintAppsLineChart_linechart
        }
        reach_30_days {
          ...MintAppsLineChart_linechart
        }
        total_time_1_day {
          ...MintAppsLineChart_linechart
        }
      }
    }
  }
`;

function MintAppsLineCharts(): React.Node {
  const environment = useRelayEnvironment();
  const mintAppsTypeaheadBuilderConfig = useMintAppsTypeaheadBuilderConfig();
  const { state } = useContext(MintStore.Context);
  const { searchQueryAndFilters } = state;

  if (searchQueryAndFilters.type !== MintStore.APPS_TYPEAHEAD_CONFIG_TYPE) {
    return null;
  }
  const entityIds = searchQueryAndFilters.config.appsEntries.map((entry) =>
    entry.getUniqueID()
  );
  const geoIds = searchQueryAndFilters.config.geoEntries.map((entry) =>
    entry.getUniqueID()
  );
  const platforms = searchQueryAndFilters.config.platformEntries.map((entry) =>
    entry.getUniqueID()
  );
  const ageBrackets = searchQueryAndFilters.config.ageBracketEntries.map(
    (entry) => entry.getUniqueID()
  );
  const genders = searchQueryAndFilters.config.genderEntries.map((entry) =>
    entry.getUniqueID()
  );
  const daysRange =
    mintAppsTypeaheadBuilderConfig.labelToDaysRange[
      searchQueryAndFilters.config.daysRange
    ];

  const dataViewMode = state.dataViewMode;

  if (entityIds.length === 0 || geoIds.length === 0 || platforms.length === 0) {
    return (
      <XDSCard>
        <XDSText>
          {
            "Please select an app, a country/region and a platform in order to view charts."
          }
        </XDSText>
      </XDSCard>
    );
  }

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{
        // this is temp, we will later use the tokenizer to obtain values
        entity_ids: entityIds,
        geo_ids: geoIds,
        platforms,
        age_brackets: ageBrackets,
        genders,
        days_range: daysRange,
        mint_data_view_mode: dataViewMode,
      }}
      render={({ props: props }: ReadyState) => {
        const linesData = props?.mint_apps_line_charts?.lines_data;
        const charts = [];
        const metrics = MintChartsUtils.getMetricsNamesAccordingToDataViewMode(
          dataViewMode
        );
        metrics.forEach((metric, index) => {
          const metricData = linesData?.[metric];
          const metricChart = metricData ? (
            <MintAppsLineChart lineChartData={metricData} metric={metric} />
          ) : (
            <XDSSpinner />
          );
          const chart = (
            // we are rendering two columns of charts per row
            <XDSCard columns={index % 2 == 0 ? "1 / 7" : "7 / 13"} key={metric}>
              <XDSCardHeader
                title={MintChartsUtils.getMetricPrettyNameFromMetricName(
                  metric
                )}
              />
              {metricChart}
            </XDSCard>
          );
          charts.push(chart);
        });

        return <>{charts}</>;
      }}
    />
  );
}

module.exports = MintAppsLineCharts;
