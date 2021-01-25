import { ReactNode } from 'react';

export interface OTPRequestInit extends RequestInit {
  headers?: HeadersInit | OTPHeaders;

}

export interface OTPHeaders {
  [key: string]: string;
}

export interface ProfileResponse {
  att: string;
  def: string;
  discordAvatar: string;
  discordId: string;
  discordUsername: string;
  displayName: string;
  facebook: string;
  instagram: string;
  lastActive: string;
  pictures: {
    index: 'picOne' | 'picTwo' | 'picThree';
    url: string;
  }[];
  rank: string;
  reddit: string;
  snapchat: string;
  spotify: string;
  tiktok: string;
  twitch: string;
  twitter: string;
}


export interface OTPProps {
  children?:ReactNode
}