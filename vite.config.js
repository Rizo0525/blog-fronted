import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {fileURLToPath,URL} from 'node:url'
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        IconsResolver({
          prefix: "Icon",
        }),
        ElementPlusResolver()
      ],
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver()
      ],
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),

  ],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url))
    }
  },
  server:{
    proxy:{
      '/api':'http://localhost:3000',
      '/static':'http://localhost:3000'
    }
  }
})
