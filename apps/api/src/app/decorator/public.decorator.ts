import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'IS_PUBLIC_KEY-SOCIAL-NETWORK-2022';
export const PublicRoute = () => SetMetadata(IS_PUBLIC_KEY, true);
