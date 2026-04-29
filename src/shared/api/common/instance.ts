import axios from 'axios'
import { BASE_HOST } from '@/shared/config/common'
import { BASE_API_TIMEOUT } from '@/shared/config/common/common'

export const commonClient = axios.create({
    baseURL: `${BASE_HOST}/`,
    timeout: BASE_API_TIMEOUT,
})
