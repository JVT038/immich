import { AssetEntity } from '@app/database';

export interface IMp4ConversionProcessor {
  /**
   * The Asset entity that was saved in the database
   */
  asset: AssetEntity;
}

export type IVideoTranscodeJob = IMp4ConversionProcessor;
