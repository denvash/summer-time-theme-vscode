<?hh
// Copyright 2004-present Facebook. All Rights Reserved.
// @format

<<
  GraphQLObject(
    'MintAppLineChartDataPoint',
    'Data for a single data point in app line chart',
  ),
  Oncalls('onavo_data_dev'),
>>
type MintAppLineChartDataPoint = shape(
  'val' => string,
  'ci_top' => ?string,
  'ci_bottom' => ?string,
  'ds' => string,
);

<<
  GraphQLObject(
    'MintAppLineChartMetadata',
    'Metadata for a line in a app line chart',
  ),
  Oncalls('onavo_data_dev'),
>>
type MintAppLineChartMetadata = shape(
  'label' => string,
);

<<
  GraphQLObject(
    'MintAppLineChartData',
    'Data for a single app line in a line chart',
  ),
  Oncalls('onavo_data_dev'),
>>
type MintAppLineChartData = shape(
  'metadata' => MintAppLineChartMetadata,
  'datapoints' => Vector<MintAppLineChartDataPoint>,
);

<<
  GraphQLObject('MintLineChartData', 'Data for a single line chart'),
  Oncalls('onavo_data_dev'),
>>
type MintLineChartData = shape(
  'lines' => Vector<MintAppLineChartData>,
);

<<
  GraphQLObject('MintLineCharts', 'Data for all line charts on the app page'),
  Oncalls('onavo_data_dev'),
>>
type MintLineCharts = shape(
  'dap' => MintLineChartData,
  'wap' => MintLineChartData,
  'map' => MintLineChartData,
  'reach_1_days' => MintLineChartData,
  'reach_7_days' => MintLineChartData,
  'reach_30_days' => MintLineChartData,
  'total_time_1_day' => MintLineChartData,
);

<<
  GraphQLObject(
    'MintAppsLineChartsQuery',
    'Contains data about mint apps line charts',
  ),
  Oncalls('onavo_data_dev'),
>>
final class MintAppsLineChartsQuery {

  public function __construct(
    private IViewerContext $vc,
    private Vector<string> $entityIds,
    private Vector<string> $platforms,
    private Vector<string> $geoIds,
    private Vector<string> $ageBrackets,
    private Vector<string> $genders,
    private int $daysRange,
    private MintDataViewMode $mintDataViewMode,
  ) {
  }

  <<GraphQLQueryRootField(
    'mint_apps_line_charts',
    'Instantiate a line charts query',
  )>>
  public static async function genBuildQuery(
    IViewerContext $vc,
    Vector<string> $entity_ids,
    Vector<string> $platforms,
    Vector<string> $geo_ids,
    Vector<string> $age_brackets,
    Vector<string> $genders,
    int $days_range,
    MintDataViewMode $mint_data_view_mode,
  ): Awaitable<this> {
    return new self(
      $vc,
      $entity_ids,
      $platforms,
      $geo_ids,
      $age_brackets,
      $genders,
      $days_range,
      $mint_data_view_mode,
    );
  }

  <<GraphQLField('lines_data', 'Line chart data for apps')>>
  public async function genChartsData(): Awaitable<MintLineCharts> {
    concurrent {
      $dap_data = await $this->genDataForMetric('dap');
      $wap_data = await $this->genDataForMetric('wap');
      $map_data = await $this->genDataForMetric('map');
      $reach_1d_data = await $this->genDataForMetric('reach_1_days');
      $reach_7d_data = await $this->genDataForMetric('reach_7_days');
      $reach_30d_data = await $this->genDataForMetric('reach_30_days');
      $time_spent_per_dap_data = await $this->genDataForMetric(
        'total_time_1_day',
      );
    }
    return shape(
      'dap' => $dap_data,
      'wap' => $wap_data,
      'map' => $map_data,
      'reach_1_days' => $reach_1d_data,
      'reach_7_days' => $reach_7d_data,
      'reach_30_days' => $reach_30d_data,
      'total_time_1_day' => $time_spent_per_dap_data,
    );
  }

  private async function genDataForMetric(
    string $metric,
  ): Awaitable<MintLineChartData> {
    $data = await MintAppsUsageLineChartDataFetcher::genDataForParams(
      $this->vc,
      $this->entityIds,
      $this->platforms,
      $this->geoIds,
      $this->ageBrackets,
      $this->genders,
      $this->daysRange,
      $this->mintDataViewMode,
      $metric,
    );
    return shape('lines' => $data);
  }
}
