import { CampanhaMarketing as TCampanhaMarketing } from "../api/campanhaMarketing/CampanhaMarketing";

export const CAMPANHAMARKETING_TITLE_FIELD = "id";

export const CampanhaMarketingTitle = (record: TCampanhaMarketing): string => {
  return record.id?.toString() || String(record.id);
};
