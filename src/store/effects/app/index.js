import Api from 'store/effects/core/api';
import { getTestData } from 'api/app';
import { getTest } from 'store/actions/app';

export const load = Api.execBase(getTest, getTestData);
