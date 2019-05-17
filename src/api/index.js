import { get  } from './http'

const getGoods = get('api/goods')
const getSeller = get('api/seller')
const getRatings = get('api/ratings')

export {
    getSeller,
    getGoods,
    getRatings,
    get
}