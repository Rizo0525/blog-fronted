<template>
    <div class="contact-container">
        <ul>
        <!-- <li>
            <a href="">
                <div class="icon">
                    <ICon type="github"></ICon>
                </div>
                <span>{{ github }}</span>
            </a>
        </li> -->
        <li>
            <a href="mailto:h2434530141@icloud.com">
                <div class="icon">
                    <ICon type="email"></ICon>
                </div>
            </a>
        </li>
        <li>
            <a href="tencent://message/?Menu=yes&uin=2434530141&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon">
                    <ICon type="qq"></ICon>
                </div>
            </a>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <ICon type="bilibili" ></ICon>
                </div>
             </a>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <ICon type="wyy" ></ICon>
                </div>
             </a>
        </li>
    </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import ICon from '@/components/Icon/index.vue'

</script>

<style lang="scss" scoped>
ul{
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    li{
        a{
            font-size: 30px;
        }
    }
}
</style>