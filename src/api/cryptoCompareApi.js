import { cryptoCompareApi } from '@/api/apis'

export default {
  getNews() {
    return cryptoCompareApi.get('/v2/news/?lang=EN')
  },
  getTopCryptos() {
    return cryptoCompareApi.get('/top/totalvolfull?limit=100&tsym=USD')
  },
  getCryptoPriceInfo(name) {
    return cryptoCompareApi.get(`pricemultifull?fsyms=${name}&tsyms=USD`)
  },
  getGeneralCryptoInfo(name) {
    return cryptoCompareApi.get(`coin/generalinfo?fsyms=${name}&tsym=USD`)
  },
  getCrypto24HrPrice(name) {
    return cryptoCompareApi.get(`histohour?fsym=${name}&tsym=USD&limit=24`)
  }
}
