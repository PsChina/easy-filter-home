const path = require('path')
const resolve = dir => path.resolve(__dirname,dir)
module.exports = {
    base:'/easy-filter/',
    markdown: {
        lineNumbers: true
    },
    locales:{
        '/':{
            title: 'Easy Filter',
        },
        '/zh/':{
            title: 'Easy Filter',
        },
    },
    themeConfig: {
        repo:'PsChina/easy-filter',
        locales:{
            '/':{
                selectText: 'Languages',
                label: 'English',
                lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
                description: 'A simple Vue filter plug-in',
                nav: [
                    { text: 'API Reference', link: '/currency/'}
                ],
                sidebar: [
                    {
                        title: '',
                        collapsable: false,
                        children: [
                          ['/install','Installation'],
                          ['/','Introduction'],
                        ]
                    },
                    {
                        title: 'API Reference',
                        collapsable: false,
                        children:[
                              ['/currency/','Add a symbol to the currency number'],
                              ['/date/','Processing timestamp'],
                              ['/filter/','Filter data'],
                              ['/orderby/','Sort array'],
                              ['/number/','Formatted number'],
                              ['/upper_lower_case/','Letter case conversion'],
                              ['/limit_to/','Limit string length']
                          ]
                    }
                ]
            },
            '/zh/':{
                selectText: '选择语言',
                label: '简体中文',
                lang: 'zh-CN',
                description: '一个简单的Vue过滤器插件',
                nav: [
                    { text: 'API参考', link: '/zh/currency/'},
                ],
                sidebar: [
                    {
                        title: '',
                        collapsable: false,
                        children: [
                          ['/zh/install','安装'],
                          ['/zh/','介绍'],
                        ]
                    },
                    {
                        title: 'API参考',
                        collapsable: false,
                        children:[
                              ['/zh/currency/','为货币添加符号'],
                              ['/zh/date/','处理时间戳'],
                              ['/zh/filter/','过滤数据'],
                              ['/zh/orderby/','排序数组'],
                              ['/zh/number/','格式化数字'],
                              ['/zh/upper_lower_case/','字母大小写转换'],
                              ['/zh/limit_to/','限制字符串长度']
                          ]
                    }
                ]
            }
        },
    },
    configureWebpack:{
        resolve: {
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@src': resolve('../src/'),
              '@components': resolve('../src/components/'),
              '@static': resolve('../src/static/'),
              '@style': resolve('../src/style/'),
              '@views': resolve('../src/views-component/')
            }
          }
    }
}