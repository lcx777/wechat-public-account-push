/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx70f14ce8ebc19d72',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '10e6f346bdee3d101f985abe1e9f7329',

  PROVINCE: '贵州省黔西南布依族苗族自治州',
  CITY: '望谟',

  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'd2ae8479c91c1c7ae511148a01ec0f75',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },

  USERS: [
    {
      // 想要发送的人的名字
      name: '瓜兮兮',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oboOi6YVE7fL2bERhOaqSw-zBEwM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DyzYDg1Gz5mIBJwksVZ5TjlsmAjBU7yxQgbpb2uNCpk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-23',
      openUrl: 'https://baidu.com/',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-08-05' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Ecnp_YtNboKh1MXXbT1O2qQm8fXtuk8j8dkWOHjFIpU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oboOi6YVE7fL2bERhOaqSw-zBEwM',
    }
  ],

}

module.exports = USER_CONFIG

