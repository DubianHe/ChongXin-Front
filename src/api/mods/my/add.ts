/**
 * @desc add
 */

import * as defs from '../../baseClass';
import { PontCore } from '@/utils/pontCore';
import { BACKEND_URL } from '../../../constants';
import user from '@/utils/user';
import { message } from 'antd';
export class Params {
  /** userName */
  userName?: string;
  /** persId */
  persId?: string;
}

export const init = '';

export const request = async (params: Params, options?: any) => {
  options = options || {};
  const accessToken = user.getToken();
  options.headers = {
    accessToken,
  };

  try {
    const result = await PontCore.fetch(
      PontCore.getUrl(`${BACKEND_URL}/user/add`, params, 'POST'),
      {
        method: 'POST',

        ...options,
      },
    );
    if (!result || !result.success) {
      if (!options?.hideError) {
        message.error(result?.message || '获取数据失败');
        return undefined;
      }

      throw new Error(result?.message || '获取数据失败');
    }
    return result.data;
  } catch (ex) {
    if (!options?.hideError) {
      message.error(ex?.message || '获取数据失败');
      return undefined;
    }
    throw new Error(ex?.message || '获取数据失败');
  }
};
