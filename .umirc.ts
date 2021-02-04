import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  dva: {},
  chainWebpack(config) {
      config.optimization.splitChunks({
        chunks: "all",
        minChunks: 1,
        maxInitialRequests: 10,
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            chunks: "initial" // 第三方依赖
          },
          umi: {
            name: "chunk-umi",
            test: /[\\/]node_modules[\\/]_?umi(.*)/ //
          },
          antd: {
            name: "chunk-antd",
            test: /[\\/]node_modules[\\/]_?antd(.*)/
          },
          echarts: {
            name: "chunk-echarts",
            test: /[\\/]node_modules[\\/]_?echarts(.*)/
          },
          lodash: {
            name: "chunk-lodash",
            test: /[\\/]node_modules[\\/]_?lodash(.*)/
          },
          moment: {
            name: "chunk-moment",
            test: /[\\/]node_modules[\\/]_?moment(.*)/
          },
          swiper: {
            name: "chunk-swiper",
            test: /[\\/]node_modules[\\/]_?swiper(.*)/
          },
          "@ant-design": {
            name: "chunk-@ant-design",
            test: /[\\/]node_modules[\\/]_?@ant-design(.*)/
          },
          // default: {
          //   // minChunks: 2,
          //   priority: 30,
          //   reuseExistingChunk: true
          // }
        }
      });
  },
});
