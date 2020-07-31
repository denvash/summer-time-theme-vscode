<?hh
// Copyright 2004-present Facebook. All Rights Reserved.
// @format

<<Oncalls('onavo_data_dev')>>
final class MintAppsUsageCardFetcher {

  public function __construct(
    private IViewerContext $vc,
    private Vector<string> $entityIds,
  ) {
  }

  public static async function genDataForParams(
    IViewerContext $vc,
    Vector<string> $entity_ids,
  ): Awaitable<MintCards> {

    invariant(!C\is_empty($entity_ids), 'There must be at least one app');
    $query = new self($vc, $entity_ids);
    return await $query->genData();
  }

  private async function genData(): Awaitable<MintCards> {

    /*
    $cards_data = Vector {
      shape('id' => '4343', 'name' => 'YouTube', 'logo_url' => 'logo'),
    };
     */

    $id = $this->entityIds->firstValue();
    invariant($id is nonnull, '$id cant be null');

    $ent = await EntOnavoApp::genFromIndexAppId($this->vc, $id);

    invariant($ent is nonnull, '$ent cant be null, %d', $id);

    $app_info = await $ent->genAppInfo();
    $cards_data = Vector {
      shape(
        'id' => $app_info->appID,
        'name' => $app_info->name,
        'logo_url' => $app_info->iconURI,
      ),
    };

    return shape('cards' => $cards_data);
  }
}
