import type { AtpSessionData } from "@atproto/api";

export type SettingDataMastodon = {
  type: 'mastodon',
  title: 'Mastodon',
  enabled: boolean,
  server: string,
  access_token_response: {
    access_token: string,
    token_type: string,
    scope: string,
    created_at: number,
  }
};

export type SettingDataBluesky = {
  type: 'bluesky',
  title: 'BlueSky',
  enabled: boolean,
  data: {
    sessionData: AtpSessionData,
  }
};

export type SettingDataTwitter = {
  type: 'twitter',
  title: 'Twitter',
  enabled: boolean,
  access_token_response: {
    refresh_token: string,
  }
};

export type SettingData = SettingDataMastodon | SettingDataBluesky | SettingDataTwitter;

export type SettingType = SettingData['type'];

export type SettingDataType<T extends SettingType> = 
  T extends 'mastodon' ? SettingDataMastodon :
  T extends 'bluesky' ? SettingDataBluesky :
  SettingDataTwitter;

export function savePostSetting(data: SettingData) {
  localStorage.setItem(`sci_setting_${data.type}`, JSON.stringify(data));
}

export function loadPostSetting<T extends SettingType>(type: T): SettingDataType<T> | null{
  const text = localStorage.getItem(`sci_setting_${type}`);
  if ((text?.length ?? 0) <= 0 ) return null;
  return JSON.parse(text!);
}

export function deletePostSetting(type: SettingType) {
  localStorage.removeItem(`sci_setting_${type}`);
}
